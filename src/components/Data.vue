<template>
<section>
    <div class="card">
  <header class="card-header">
    <div class="card-header-title">
        <div >
            <p class="title has-text-left">Data Import</p>
            <p class="has-text-left is-size-6">
            Format: (delimited by , or tab)<br/>
            1. ContactName, ContactCode, IsPrint, LiveName;<br/>
            2. ContactName, ContactCode, IsPrint, DeadName, LiveName, Relation<br/>
            3. ContactName, ContactCode, IsPrint, Surname, LiveName;<br/>
            </p>
        </div>
    </div>
  </header>
  <div class="card-content">
    <div class="content">
      <textarea v-model="importData" class="textarea">

      </textarea>
    </div>
  </div>
  <footer class="card-footer">
     <button class="button is-primary mx-2" @click="importit()">
            <span class="icon">
            <i class="fas fa-print"></i>
            </span>
            <span>Import Data</span>
        </button>  
  </footer>
</div>
</section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
import {  tabs } from '../services/appConfig';
import {collectionNames, addNewContactFunc, getDetailRec, bulkSave} from '../store/back4app'
import {printStatus} from '../services/appConfig'

export default {
    setup(props){
        const importData = ref("");
        const store = useStore();

        const importit = async ()=>{
            store.dispatch("showLoading");
            let list = importData.value.split("\n");
            let liveList = [];
            let deadList = [];
            let anceList = []
            await list.reduce(async (prev, item)=>{

                await prev;

                let fields = item.split(",").map(function(item) {
                                                    return item.trim();
                                                    });
                
                if (fields.length<3) {
                    fields = item.split("\t");
                    if (fields.length<3) return;
                };
                
                let name = fields[0];
                let code = fields[1];
                //let contact = await getContactByNameCode(name, code);
                let contact= store.getters.findContact(name, code);
                let contactId = null;
                if (!contact) {
                    let printstate = fields[2]=="0"?printStatus.No:printStatus.All;
                    let result = await addNewContactFunc(fields[0], fields[1], printstate)
                    contact = result;
                    contactId = contact.id;
                    await store.dispatch("addNewContactToStore", {contact:{
                        Name:fields[0],
                        Code:fields[1],
                        LastPrint:"",
                        PrintState: printstate,
                        objectId : contactId
                    }});
                }else{
                    contactId = contact.objectId;
                };



                if (fields.length == 4){
                    liveList.push(getDetailRec(collectionNames.live, contactId, {LiveName:fields[3]}, false));
                } else if (fields.length == 6){
                    deadList.push(getDetailRec(collectionNames.dead, contactId, 
                            {DeadName:fields[3], LiveName:fields[4], Relation:fields[5]}, false));
                } else if (fields.length == 5){
                    anceList.push(getDetailRec(collectionNames.ancestor, contactId, 
                            {Surname: fields[3], LiveName:fields[4]}, false));
                }  
            }, undefined);

            await bulkSave(collectionNames.live, liveList);
            await bulkSave(collectionNames.dead, deadList);
            await bulkSave(collectionNames.ancestor, anceList);

            alert("all imported");
            store.dispatch("closeLoading");            
        }

        return {importData, importit}
    }
}
</script>