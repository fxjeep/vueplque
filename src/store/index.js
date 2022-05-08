import { createStore } from 'vuex'
import {backsignin, backsignout, backsignup, collectionNames, addNewContactFunc, getAllContactList,
  deleteContactFunc, loadContactDetail, updateContactInfo, addDetailRec, setContactPrintState, deleteDetailFunc,updateDetailFunc, readContactDetailData} from './back4app';
import {printStatus} from '../services/appConfig'

// Create a new store instance.
const store = createStore({
  state: {
    showLoading:false,
    user: null,
    authIsReady: false,
    selectedIdx:-1,
    contacts:[],
    currentLive:[],
    currentDead:[],
    currentAncestor:[]
  },
  mutations: {
    setUser(state, payload) {state.user = payload},
    setAuthIsReady(state, payload) { state.authIsReady = payload },
    setContacts(state, payload){ state.contacts = payload },
    setSelectedIdx(state, payload){ state.selectedIdx = payload},
    setLive(state, payload){
      state.currentLive = payload;
    },
    setDead(state, payload){
      state.currentDead = payload
    },
    setAncestor(state, payload){
      state.currentAncestor = payload
    },
    setContactPrintIndividual(state, payload){
      if (Array.isArray(state.contacts) && state.contacts.length>state.selectedIdx && state.selectedIdx>=0){
        let contact = state.contacts[state.selectedIdx];
        contact.IsPrint = printStatus.Individual;
      }
    },
    setShowLoading(state, payload){
      state.showLoading = true;
    },
    setCloseLoading(state, payload){
      state.showLoading = false;
    },
    addNewConact(state, payload){
      state.contacts.push(payload);
    }
  },
  getters: {
    filteredContacts: (state) => (txt) => {
      return state.contacts.filter(c => (c.Name.indexOf(txt)>=0) || (c.Code.indexOf(txt.toUpperCase())>=0) );
    },
    currentContact: (state)=>{
        if (Array.isArray(state.contacts) && state.contacts.length>state.selectedIdx && state.selectedIdx>=0){
          return state.contacts[state.selectedIdx];
        }
        return {};
    },
    findContact: (state) => (name, code) =>{
       let matched = state.contacts.filter(c => (c.Name  == name) && (c.Code  == code) );
       if (matched.length>0){
         return matched[0];
       }
       return null;
    },
    findContactById: (state) => (cid) =>{
      let matched = state.contacts.filter(c => c.objectId  == cid);
      if (matched.length>0){
        return matched[0];
      }
      return null;
   }
  },
  actions: {
    login,
    logout,
    signup,
    getAllContacts,
    addNewContact,
    addNewContactToStore,
    deleteContact,
    loadContact,
    updateContact,
    addDetail,
    setPrintState,
    selectContact,
    deleteDetail,
    updateDetail,
    readContactDetail,
    showLoading,
    closeLoading,
    loadOneDetail
  }
})

function showLoading(context){
  context.commit('setShowLoading');
}

function closeLoading(context){
  context.commit('setCloseLoading');
}

async function login(context, { email, password }) {
  showLoading(context);
  return backsignin(email, password)
      .then(function(res){
        closeLoading(context);
        if (res) {
          return context.commit("setUser", res.user);          
        }else{
          throw new Error('could not complete login')
        }
      }, function(err){
        closeLoading(context);
         throw err;
      });  
}

async function logout(context) {
  await backsignout(auth);
  context.commit('setUser', null)
}

function signup(context, {email, password}){
   return backsignup(email, password);
}

async function getAllContacts(context){
  showLoading(context);
  getAllContactList(function(contactsArray){
    context.commit('setContacts', contactsArray);
    closeLoading(context);
  })
}

async function addNewContact(context, {contact}){
    return addNewContactFunc(contact.Name, contact.Code)
            .then(function(result){
              getAllContacts(context);
            });
}

function addNewContactToStore(context, {contact}){
  context.commit("addNewConact", contact);
}

async function deleteContact(context, {id}){
  return deleteContactFunc(id)
        .then(result=>getAllContacts(context));
}

async function loadContact(context, {contactid}){
   let list = await loadContactDetail(collectionNames.live, contactid);
   context.commit('setLive', list);
   checkContactPrintStatus(context, list, context.getters.currentContact); 

   list = await loadContactDetail(collectionNames.dead, contactid);
   context.commit('setDead', list);
   checkContactPrintStatus(context, list, context.getters.currentContact); 

   list = await loadContactDetail(collectionNames.ancestor, contactid);
   context.commit('setAncestor', list);
   checkContactPrintStatus(context, list, context.getters.currentContact); 
}

async function readContactDetail(context, {contactId}){
    let detailData = readContactDetailData(contactId);
    
    return detailData;
}

async function updateContact(context, {name, code, id}){
  return updateContactInfo(name, code, id)
        .then(result=>getAllContacts(context));
}

async function addDetail(context, {type, contactId, rec, isPrint}){
  let colName = getColNameFromType(type);
  await addDetailRec(colName, contactId, rec, isPrint);
}

async function setPrintState(context, {id, printState}){
  return setContactPrintState(id, printState)
          .then(result=>getAllContacts(context));
}

async function selectContact(context, {idx}){
  return context.commit('setSelectedIdx', idx);
}

async function deleteDetail(context, {type, rec}){
  let colName = getColNameFromType(type);
  await deleteDetailFunc(colName, rec.objectId);
  let list = await loadContactDetail(colName, rec.ContactId);
  context.commit('set'+type, list);
}

async function updateDetail(context, {type, rec, notRefresh}){
  let colName = getColNameFromType(type);
  await updateDetailFunc(colName, rec.ContactId, rec);
  if (!notRefresh){
    let list = await loadContactDetail(colName, rec.ContactId);
    context.commit('set'+type, list);
  }
}

async function loadOneDetail(context, {type, contactId}){
  let colName = getColNameFromType(type); 
  let list = await loadContactDetail(colName, contactId);
    context.commit('set'+type, list);
}

function getColNameFromType(type){
  return type+"s";
}


function checkContactPrintStatus(context, detailList, contact){
  if (detailList && detailList.length>0 && contact.PrintState == printStatus.No){
    let hasPrint = detailList.some((item)=>item.IsPrint);
    if (hasPrint){
      context.commit("setContactPrintIndividual", contact.objectId);
    } 
  }
}



export function savePrintData(name, data){
  if (window.localStorage) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}

export function getPrintData(name, data){
  if (window.localStorage) {
    let json = localStorage.getItem(name);
    return JSON.parse(json);
  }
}

export default store;