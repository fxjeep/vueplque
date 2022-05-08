<template>
<section>
<div class="card">
  <header class="card-header">
    <div class="box flexfullrow">
        <h2 class="title is-2 has-text-left">Print List</h2>
    </div>
  </header>
  <div class="card-content">
    <div class="content">
        <table>
            <thead>
                <th>Contact</th>
                <th>Count</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="c in printContacts" :key="c.objectId">
                    <td>
                        {{c.Name}}
                    </td>
                    <td>
                        {{c.IsPrint}}
                    </td>
                    <td>
                        <button class="button is-danger mx-2" @click="removeFromPrint(c.objectId)">
                            <span class="icon">
                            <i class="fas fa-minus-circle"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
  <footer class="card-footer">
      <div class="box flexfullrow">
      <button class="button is-primary mx-2" @click="generatePrint()">
            <span class="icon">
            <i class="fas fa-print"></i>
            </span>
            <span>Generate Print File</span>
        </button>  
        <button class="button is-danger mx-2" @click="clearAll()">
            <span class="icon">
            <i class="fas fa-print"></i>
            </span>
            <span>Clear All</span>
        </button>  
        </div>
  </footer>
</div>
<div class="box flexfullrow" v-show="isShowLink">
            <router-link to="/printCS" target="_blank">View ChangSheng</router-link><br/>
            <router-link to="/printYQ" target="_blank">View YuanQin</router-link><br/>
            <router-link to="/printWS" target="_blank">View WangSheng</router-link><br/>
            <router-link to="/printZX" target="_blank">View ZhuXian</router-link><br/>
        </div>
</section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import {savePrintData} from '../store/index';
import {getTodayDateTime} from '../store/back4app'
import {printStatus, printFormat} from '../services/appConfig'
import {printTabs, fontSizes, tabs, isChinese} from '../services/appConfig';

export default {
    setup(props){
        const store = useStore();
        const allLive = ref([]);
        const allDead = ref([]);
        const allAncestor = ref([]);
        const isShowLink = ref(false);
        const activeViewTab = ref(printTabs.changshen);

        const printContacts =  computed(()=>{ 
            let list = store.state.contacts.filter(item=> item.IsPrint != printStatus.No);
            return list;
        });       

        
        const removeFromPrint = (id)=>{
            store.dispatch('setPrintState', {id:id, printState:printStatus.No}); 
        }

        const clearAll = ()=>{
            printContacts.value.forEach(async (c)=>{
                await store.dispatch('setPrintState', {id:c.objectId, printState:printStatus.No}); 
            })
        }

        const insertIntoList = (alllist, newlist)=>{
            for(let i=0; i<newlist.length; i++){
                
                let lastPage = new Array(printFormat.rows).fill({}).map(() => new Array());

                if (alllist.length>0){
                    let lastone = alllist[alllist.length-1];
                    if (lastone.some(x=>x.length<printFormat.cols)) {
                        lastPage = lastone;
                    }else{
                        alllist.push(lastPage);
                    }
                } else {
                     alllist.push(lastPage);   
                }

                for(var row = 0; row<printFormat.rows; row++){
                    if (lastPage[row].length<printFormat.cols){
                        lastPage[row].push(newlist[i]);
                        break;
                    }
                }
            }
        }

        const fillBlanks = (alllist)=>{
            if (alllist.length>0){
                let lastone = alllist[alllist.length-1];
                for(var row = 0; row<printFormat.rows; row++){
                    for(let i=lastone[row].length; i<printFormat.cols; i++){
                        lastone[row].push({
                            LiveName:"",
                            DeadName:"",
                            SurName:"",
                            Relation:""
                        });
                    }
                }
            }
        }

        const generatePrint = async ()=>{

            await printContacts.value.reduce(async (prev, c) => {
                await prev;
                let oneDetail = await store.dispatch('readContactDetail', {contactId:c.objectId}); 
                insertIntoList(allLive.value, oneDetail.live);
                insertIntoList(allDead.value, oneDetail.dead);
                insertIntoList(allAncestor.value, oneDetail.ancestor);
            }, undefined);

            fillBlanks(allLive.value);
            fillBlanks(allDead.value);
            fillBlanks(allAncestor.value);

            savePrintData(tabs.live, allLive.value);
            savePrintData(tabs.dead, allDead.value);
            savePrintData(tabs.ancestor, allAncestor.value);
            isShowLink.value = true;
        }

        return {printContacts, allLive, allDead, allAncestor, activeViewTab, printTabs, isShowLink,
                removeFromPrint, clearAll, generatePrint};
    }
}

</script>