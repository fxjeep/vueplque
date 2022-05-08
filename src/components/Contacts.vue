<template>
    <section>
        <div class="container">
           <div class="field has-addons">
            <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Contact Name or Code" v-model="searchTxt" v-on:keyup.enter="doSearch">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </div>
           </div>
        </div>
        <div class="container has-text-left">
            <div class="control">
                <button class="button is-primary mx-2" @click="showAddNew" title="add new contact">
                    <span class="icon">
                    <i class="fas fa-user-plus fa-lg"></i>
                    </span>
                </button>
                <button class="button is-warning" @click="refreshContacts" title="refresh contact list">
                    <span class="icon">
                    <i class="fas fa-sync"></i>
                    </span>
                </button>
            </div>
        </div>
        <div class="container">
            <table width="100%" border="1" class="table is-striped narrower">
                <thead>
                    <th class="iconcol"></th>
                    <th class="namecol">Name</th>
                    <th class="codecol">Code</th>
                    <th class="lastPrintcol">LastPrint</th> 
                </thead>
                <tbody>
                    <template v-for="(c,idx) in contacts" :key="c.objectId">
                        <tr  @click="selectContact(idx, 'rowclick')" :class="{'is-selected':idx==selectedIdx}" >
                            <td>
                                <span class="icon" v-if="c.PrintState=='A'" title="print all">
                                    <i class="fas fa-file-powerpoint"></i>
                                </span> 
                                <span class="icon" v-if="c.PrintState=='I'" title="print some">
                                   <i class="fas fa-user-friends"></i>
                                </span> 
                            </td>
                            <td>                           
                                {{c.Name}}
                            </td>
                            <td>
                                {{c.Code}}
                            </td>
                            <td>
                                {{c.LastPrint}}
                            </td>
                        </tr>
                        <tr v-if="idx == selectedIdx">
                            <td class="has-background-white has-text-right" colspan="4">
                                <div>
                                    <router-link class="button is-warning mx-2" :to="{path:'/detailList', query: {c: c.objectId, d: c.DetailId}}" target="_blank" title="print contact detail form">
                                        <span class="icon">
                                        <i class="far fa-list-alt"></i>
                                        </span>
                                    </router-link>       
                                    <button class="button is-primary mx-2" v-show="isMobile" @click="selectContact(idx, 'editbtnclick')" title="edit name/code">
                                        <span class="icon">
                                        <i class="fas fa-th-list"></i>
                                        </span>
                                    </button>
                                    <button class="button is-danger mx-2" @click="showEditContact(c)" title="edit plaque">
                                        <span class="icon">
                                        <i class="fas fa-edit"></i>
                                        </span>
                                    </button>
                                    <button class="button is-danger mx-2" @click="showDeleteContact=true" title="delete contact">
                                        <span class="icon">
                                        <i class="fas fa-trash-alt"></i>
                                        </span>
                                    </button>
                                    <button class="button is-warning mx-2" @click="setNextPrint(c)" title="print/unprint plaque">
                                        <span class="icon">
                                        <i class="fas fa-print"></i>
                                        </span>
                                    </button>                                     
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="modal" :class="{'is-active':showAddNewContact}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">{{addOrEditTitle}}</p>
                <button class="delete" aria-label="close"  @click="closeAddContact"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Name" v-model="newContact.Name">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user-alt"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Code" v-model="newContact.Code">
                        <span class="icon is-small is-left">
                        <i class="fas fa-laptop-code"></i>
                        </span>
                    </p>
                    <p>
                        <span class="has-text-danger">{{modalError}}</span>
                    </p>
                    </div>
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="addContact">Save</button>
                <button class="button"  @click="closeAddContact">Cancel</button>
                </footer>
            </div>
        </div>
        <div class="modal" :class="{'is-active':showDeleteContact}" v-if="showDeleteContact">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Delete Contact</p>
                <button class="delete" aria-label="close"  @click="showDeleteContact=false"></button>
                </header>
                <section class="modal-card-body">
                    Do you want to delete {{selectedContact.Name}}({{selectedContact.Code}})
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="deleteContact">Delete</button>
                <button class="button"  @click="showDeleteContact=false">Cancel</button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useWindowSize } from 'vue-window-size';
import {printStatus} from '../services/appConfig'

const addOrEditTitleText = {
    add:"New Contact",
    edit:"Edit Contact"
}

export default {
    setup(){
        const store = useStore()
        const router = useRouter()
        const { width } = useWindowSize();

        const modalError = ref("");
        const searchTxt = ref("");
        const addOrEditTitle = ref("");
        
        const newContact = ref({name:"", code:""});
        const showAddNewContact = ref(false);
        const showDeleteContact = ref(false);
        const contacts = computed(()=> store.getters.filteredContacts(searchTxt.value));
        const isMobile = computed(()=>{return width.value<=768});
        const selectedContact = computed(()=> store.getters.currentContact);
        const selectedIdx = computed(()=> store.state.selectedIdx);

        const refreshContacts = ()=>{
            store.dispatch("getAllContacts")
        }

        const addContact = async ()=>{
             if (!newContact.value.Name || !newContact.value.Code) {
                modalError.value = "Please enter name and code";
                return;
             }

             if (addOrEditTitle.value == addOrEditTitleText.add) {
                store.dispatch("addNewContact", {contact:newContact.value})
                    .then(res=>{
                        showAddNewContact.value=false;
                        newContact.value = {Name:"", Code:""};
                    }, err=>{
                        modalError.value = err;
                    })
                    .catch(err=>{
                        modalError.value =err;
                    });  
             } else if (addOrEditTitle.value == addOrEditTitleText.edit) {
                 store.dispatch('updateContact', {name:newContact.value.Name, code:newContact.value.Code, id:newContact.value.objectId})
                    .then(res=>{
                        showAddNewContact.value=false;
                        newContact.value = {Name:"", Code:""};
                    }, err=>{
                        modalError.value = err;
                    })
                    .catch(err=>{
                        modalError.value =err;
                    }); 
             }
        }

        const closeAddContact = ()=>{
            showAddNewContact.value=false;
            newContact.value = {name:"", code:""};
        }

        const selectContact = (idx, source)=>{
           store.dispatch('selectContact', {idx})
           .then(res=>{
                //not mobile, load contact on click row
                //is mobile, load contact on click edit button
                let isEditbtnClick = isMobile.value && source == 'editbtnclick';
                let contact = contacts.value[idx];
                if (!isMobile.value || isEditbtnClick){
                    store.dispatch("loadContact", {contactid:contact.objectId})
                        .then(res=>{
                            if (isEditbtnClick){
                                router.push('/Main/Editor')
                            }
                        });
                }
           })
            
            
        }

        const deleteContact = ()=>{
            store.dispatch("deleteContact", {id:selectedContact.value.objectId})
                .then(res=>{
                    showDeleteContact.value = false;
                }, err=>{})
                .catch(err=>{});
        }

        const setNextPrint = (c)=>{ 
              let nextState = printStatus.All;
                switch(c.PrintState){
                    case printStatus.All:  nextState = printStatus.No; break;
                    case printStatus.No:   nextState = printStatus.Individual; break;
                    case printStatus.Individual: nextState = printStatus.All;
                }
            store.dispatch('setPrintState', {id:c.objectId, printState:nextState}); 
        }
        
        const showAddNew =()=>{
            showAddNewContact.value = true;
            newContact.value = {};
            addOrEditTitle.value = addOrEditTitleText.add;

        }

        const showEditContact = (c)=>{
            addOrEditTitle.value = addOrEditTitleText.edit;
            showAddNewContact.value = true;
            newContact.value = {...c};
        }

        const generateDetailList = (c)=>{

        }

        refreshContacts();

        return {searchTxt, showAddNewContact, showDeleteContact, newContact, modalError, contacts, isMobile, width, selectedContact, selectedIdx,addOrEditTitle, 
                refreshContacts, addContact, closeAddContact, selectContact, deleteContact, setNextPrint, showAddNew, showEditContact, generateDetailList }
    }
}
</script>
<style scoped>
.codecol {
    width:50px;
}
.lastPrintcol {
    width:50px;
}
</style>