import Parse from 'parse';
import {printStatus} from '../services/appConfig'

export const collectionNames = {
    contact: "Contacts",
    live: "Lives",
    dead: "Deads",
    ancestor: "Ancestors"
}


export function backsignin(email, password){
    return Parse.User.logIn(email, password)
                    .then(function(user) {
                        return {user:user};
                    });
}

export async function backsignout(){
    await Parse.User.logOut();
}

export function backsignup(email, password){
        // Create a new instance of the user class
        var user = new Parse.User();
        user.set("username", email);
        user.set("password", password);
        user.set("email", email);
      
        return user.signUp();
}

export async function addNewContactFunc(name, code, printState){
    if (!printState) printState = printStatus.All;

    const contact = new Parse.Object(collectionNames.contact);
    contact.set("Name", name);
    contact.set("Code", code);
    contact.set("PrintState", printState);
    contact.set("LastPrint", getTodayDate())
    return contact.save();
}

export function getTodayDate(){
    let dd = new Date();
    let mon = (dd.getMonth()+1).toString().padStart(2, "0");
    let day = dd.getDate().toString().padStart(2, "0");
    return dd.getFullYear()+"-"+mon+"-"+day;
  }

export function getAllContactList(callback){
    const query = new Parse.Query(collectionNames.contact);
    query.limit(10000)
    query.find()
        .then(results=>{
            let list = JSON.parse(JSON.stringify(results));
            if (callback) callback(list);
        })
}

export function deleteContactFunc(id){
    const player = new Parse.Object(collectionNames.contact);
    player.set('objectId', id);
    return player.destroy();
}

export async function loadContactDetail(type, contactId){
        let query = new Parse.Query(type);
        query.limit(1000)
        query.equalTo('ContactId', contactId);
        let results = await query.find();
        let list = JSON.parse(JSON.stringify(results));
        return list;
}

export function updateContactInfo(name, code, id){
    const player = new Parse.Object(collectionNames.contact);
    player.set('objectId',id);
    player.set("Name", name);
    player.set("Code", code);
    return player.save();
}

export function addDetailRec(type, contactid, rec, isPrint){
    if (type == collectionNames.live){
        let live = new Parse.Object(collectionNames.live);
        live.set("LiveName", rec.LiveName);
        live.set("ContactId", contactid);
        if (isPrint) live.set("IsPrint", true);
        return live.save()
    } else if (type == collectionNames.dead){
        let d = new Parse.Object(collectionNames.dead);
        d.set("DeadName", rec.DeadName);
        d.set("LiveName", rec.LiveName);
        d.set("Relation", rec.Relation);
        d.set("ContactId", contactid);
        if (isPrint) d.set("IsPrint", true);
        return d.save()
    } else if (type == collectionNames.ancestor){
        let d = new Parse.Object(collectionNames.ancestor);
        d.set("Surname", rec.Surname);
        d.set("LiveName", rec.LiveName);
        d.set("ContactId", contactid);
        if (isPrint) d.set("IsPrint", true);
        return d.save()
    }
}

export function getDetailRec(type, contactid, rec, isPrint){
    if (type == collectionNames.live){
        let live = new Parse.Object(collectionNames.live);
        live.set("LiveName", rec.LiveName);
        live.set("ContactId", contactid);
        if (isPrint) live.set("IsPrint", true);
        return live
    } else if (type == collectionNames.dead){
        let d = new Parse.Object(collectionNames.dead);
        d.set("DeadName", rec.DeadName);
        d.set("LiveName", rec.LiveName);
        d.set("Relation", rec.Relation);
        d.set("ContactId", contactid);
        if (isPrint) d.set("IsPrint", true);
        return d
    } else if (type == collectionNames.ancestor){
        let d = new Parse.Object(collectionNames.ancestor);
        d.set("Surname", rec.Surname);
        d.set("LiveName", rec.LiveName);
        d.set("ContactId", contactid);
        if (isPrint) d.set("IsPrint", true);
        return d
    }
}

export async function bulkSave(type, list){
    //split list to 100 rows each
    let chunks = [];
    let chunkidx= 0;
    let sect=[];
    for(let i=0; i<list.length; i++){
        if (chunkidx==100){
            chunkidx=0;
            chunks.push(sect);
            sect = [];
        }
        sect.push(list[i]);
        chunkidx++;
    }

    if (sect.length>0){
        chunks.push(sect);
    }

    for(let j=0; j<chunks.length;j++){
        await Parse.Object.saveAll(chunks[j])
    }
}

export function setContactPrintState(contactId, printState){
    const player = new Parse.Object(collectionNames.contact);
    player.set('objectId',contactId);
    player.set("PrintState", printState);
    return player.save();
}

export function deleteDetailFunc(type, detailId){
    const player = new Parse.Object(type);
    player.set('objectId', detailId);
    return player.destroy();
}

export function updateDetailFunc(type, contactid, rec){
    if (type == collectionNames.live){
        let live = new Parse.Object(collectionNames.live);
        live.set("objectId", rec.objectId);
        live.set("LiveName", rec.LiveName);
        live.set("IsPrint", rec.IsPrint);
        live.set("ContactId", contactid);
        return live.save()
    } else if (type == collectionNames.dead){
        let d = new Parse.Object(collectionNames.dead);
        d.set("objectId", rec.objectId);
        d.set("DeadName", rec.DeadName);
        d.set("LiveName", rec.LiveName);
        d.set("Relation", rec.Relation);
        d.set("IsPrint", rec.IsPrint);
        d.set("ContactId", contactid);
        return d.save()
    } else if (type == collectionNames.ancestor){
        let d = new Parse.Object(collectionNames.ancestor);
        d.set("objectId", rec.objectId);
        d.set("Surname", rec.Surname);
        d.set("LiveName", rec.LiveName);
        d.set("IsPrint", rec.IsPrint);
        d.set("ContactId", contactid);
        return d.save()
    }

}

export function getTodayDateTime(){
    let dd = new Date();
    let mon = (dd.getMonth()+1).toString().padStart(2, "0");
    let day = dd.getDate().toString().padStart(2, "0");
    let hh = dd.getHours().toString().padStart(2, "0");
    let mm = dd.getMinutes().toString().padStart(2, "0");
    return dd.getFullYear()+mon+day+hh+mm;
  }

  export async function getContactByNameCode(name, code){
    let query = new Parse.Query(collectionNames.contact);
    query.equalTo('Name', name);
    query.equalTo('Code', code);
    let results = await query.find();
    let list = JSON.parse(JSON.stringify(results));
    if (list) return list[0];
    return null;
  }
  
  export async function getContact(contactId){
    let query = new Parse.Query(collectionNames.contact);
    query.equalTo('objectId', contactId);
    let results = await query.find();
    let list = JSON.parse(JSON.stringify(results));
    if (list && list.length>0) return list[0];
    return null;
}

export async function readContactDetailData(contactid){
    let detailData = {
        live:[],
        dead:[],
        ancestor:[]
      };
  
      detailData.live = await loadContactDetail(collectionNames.live, contactid);
      detailData.dead = await loadContactDetail(collectionNames.dead, contactid);
      detailData.ancestor = await loadContactDetail(collectionNames.ancestor, contactid);
    return detailData;  
}