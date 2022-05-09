<template>
<div class="card">
    <header class="card-header" v-show="currentContact && Object.keys(currentContact).length === 0">
        <button class="button is-link" aria-label="save"  v-show="isMobile" @click="backToMain">
                <span class="icon">
                    <i class="fas fa-chevron-left"></i>
                </span>
            </button>
        <div class="flexfullrow">
            <h2 class="title is-2 has-text-left" >&nbsp; Please select a contact from left</h2>
        </div>
    </header>  
  <header class="card-header flexwrap" v-show="currentContact && Object.keys(currentContact).length !== 0">
    <div class="card-header">
        <button class="button is-link" aria-label="save"  v-show="isMobile" @click="backToMain">
            <span class="icon">
                <i class="fas fa-chevron-left"></i>
            </span>
        </button>
        <h2 class="title is-2 has-text-left" >&nbsp;{{currentContact.Name}} - {{currentContact.Code}}</h2>
    </div>   
  </header>
  <div class="card-content box" v-show="currentContact && Object.keys(currentContact).length !== 0">
    <div class="content">
            <div class="tabs is-boxed">
            
            <ul class="tab-no-left">
                <li :class="{'is-active':activeTab==tabs.live}" @click="selectTab(tabs.live)"><a>Live</a> {{currentLive.length}}</li>
                <li :class="{'is-active':activeTab==tabs.dead}" @click="selectTab(tabs.dead)"><a>Dead</a> {{currentDead.length}}</li>
                <li :class="{'is-active':activeTab==tabs.ancestor}" @click="selectTab(tabs.ancestor)"><a>Ancestor</a> {{currentAncestor.length}}</li>
            </ul>
        </div>            
       <div class="container" v-show="activeTab==tabs.live">
           <DetailEdit :type="tabs.live" :data="currentLive" :numcols="4">
               <template v-slot:cols>
                   <th>Live</th>
                   <th>Date</th>
                   <th></th>
               </template>
               <template v-slot:add="slotProps">
                   <div class="columns">
                        <div class="column is-5"> 
                            <div class="field has-addons">
                                <p class="control">
                                    <input class="input" type="text" placeholder="Live Name" v-model="slotProps.rec.LiveName" v-on:keyup.enter="slotProps.addNew">
                                </p>
                                <p class="control">
                                    <a class="button  is-success" @click="slotProps.addNew" title="add">
                                        <span class="icon is-large">
                                            <i class="fas fa-plus-circle fa-lg"></i>
                                        </span>
                                    </a>
                                </p>
                                <p class="control">
                                    <button class="button is-warning mx-2" @click="slotProps.printDetail()" title="print/unprint">
                                        <span class="icon">
                                        <i class="fas fa-print"></i>
                                        </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button is-danger mx-2" @click="slotProps.deleteDetail()" title="delete">
                                        <span class="icon">
                                        <i class="far fa-minus-square"></i>
                                        </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button is-info mx-2" @click="slotProps.moveToContact()" title="move to another contact">
                                        <span class="icon">
                                        <i class="fas fa-people-carry"></i>
                                        </span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:display="slotProps">
                    <template v-for="(d) in slotProps.rec" :key="d.objectId">
                    <tr slot="display" >
                        <td>
                            <span class="icon" v-show="d.IsPrint"><i class="fas fa-print"></i></span>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.LiveName}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.LiveName" 
                                    v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                                <span class="has-text-left has-text-danger">{{slotProps.editError}}</span>
                            </p>
                        </td>
                        <td>{{d.LastPrint}}</td>
                        <td>
                            <button class="button is-danger mx-2" @click="slotProps.convertToDead(d.objectId)" v-show="slotProps.isView" title="convert to dead">
                                <span class="icon">
                                <i class="fas fa-share"></i>
                                </span>
                            </button>
                            <button class="button is-primary mx-2" @click="slotProps.editDetail(d.objectId)" v-show="slotProps.isView" title="edit">
                                <span class="icon">
                                <i class="fas fa-pen-fancy"></i>
                                </span>
                            </button>
                            <button class="button is-primary mx-2" @click="slotProps.saveDetail(d.objectId)" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId" title="save">
                                <span class="icon">
                                <i class="far fa-save"></i>
                                </span>
                            </button>
                            <label class="b-checkbox checkbox is-large">
                                <input type="checkbox" @change="slotProps.selectRec(d.objectId, $event.target.checked)" :checked="slotProps.isSelected(d.objectId)">
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                    </template>
                </template>
           </DetailEdit>
       </div>
       <div class="container" v-show="activeTab==tabs.dead">
           <DetailEdit :type="tabs.dead" :data="currentDead" :numcols="6">
               <template v-slot:cols>
                   <th>Dead</th>
                   <th>Live</th>
                   <th>Rel.</th>
                   <th>Date</th>
                   <th></th>
               </template>
               <template v-slot:add="slotProps">
                    <div class="columns">
                        <div class="column is-8"> 
                            <div class="field has-addons">
                                <p class="control">
                                    <input  class="input" type="text" v-model="slotProps.rec.DeadName" v-on:keyup.enter="slotProps.addNew" placeholder="Dead Name">
                                    <span class="has-text-left has-text-danger">{{slotProps.editError}}</span>
                                </p><p class="control">
                                    <input  class="input" type="text" v-model="slotProps.rec.LiveName" v-on:keyup.enter="slotProps.addNew" placeholder="Live Name">
                                </p><p class="control">
                                    <input  class="input" type="text" v-model="slotProps.rec.Relation" v-on:keyup.enter="slotProps.addNew" placeholder="Relationship">

                                </p>
                                <p class="control">
                                    <a class="button  is-success" @click="slotProps.addNew">
                                        <span class="icon is-large">
                                            <i class="fas fa-plus-circle fa-lg"></i>
                                        </span>
                                    </a>
                                </p>
                                 <p class="control">
                                     <button class="button is-warning mx-2" @click="slotProps.printDetail()" title="print/unprint">
                                        <span class="icon">
                                        <i class="fas fa-print"></i>
                                        </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button is-danger mx-2" @click="slotProps.deleteDetail()" title="delete">
                                        <span class="icon">
                                        <i class="far fa-minus-square"></i>
                                        </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button is-info mx-2" @click="slotProps.moveToContact()" title="move">
                                        <span class="icon">
                                        <i class="fas fa-people-carry"></i>
                                        </span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:display="slotProps">
                    <template v-for="(d,idx) in slotProps.rec" :key="d.objectId">
                    <tr slot="display">
                        <td>
                            <span class="icon" v-show="d.IsPrint"><i class="fas fa-print"></i></span>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.DeadName}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.DeadName"
                                 v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                                <span class="has-text-left has-text-danger">{{slotProps.editError}}</span>
                            </p>
                        </td>
                        <td>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.LiveName}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.LiveName"
                                 v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                            </p>
                        </td>
                        <td>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.Relation}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.Relation"
                                 v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                            </p>
                        </td>
                        <td>{{d.LastPrint}}</td>
                        <td>
                            <button class="button is-primary mx-2" @click="slotProps.editDetail(d.objectId)" v-show="slotProps.isView">
                                <span class="icon">
                                <i class="fas fa-pen-fancy"></i>
                                </span>
                            </button>
                            <button class="button is-primary mx-2" @click="slotProps.saveDetail(d.objectId)" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <span class="icon">
                                <i class="far fa-save"></i>
                                </span>
                            </button>
                            <label class="b-checkbox checkbox is-large">
                                <input type="checkbox" @change="slotProps.selectRec(d.objectId, $event.target.checked)" :checked="slotProps.isSelected(d.objectId)">
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                    </template>
                </template>
           </DetailEdit>
       </div>
       <div class="container" v-show="activeTab==tabs.ancestor">
           <DetailEdit :type="tabs.ancestor" :data="currentAncestor" :numcols="5">
               <template v-slot:cols>
                   <th>Surname</th>
                   <th>LIVE</th>
                   <th>Date</th>
                   <th></th>
               </template>
               <template v-slot:add="slotProps">
                   <div class="columns">
                        <div class="column is-8"> 
                            <div class="field has-addons">
                                <p class="control">
                                    <input class="input" type="text" v-model="slotProps.rec.Surname" v-on:keyup.enter="slotProps.addNew" placeholder="Surname">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" v-model="slotProps.rec.LiveName" v-on:keyup.enter="slotProps.addNew" placeholder="Live Name">
                                </p>
                                <p class="control">
                                    <a class="button  is-success" @click="slotProps.addNew">
                                        <span class="icon is-large">
                                            <i class="fas fa-plus-circle fa-lg"></i>
                                        </span>
                                    </a>
                                </p>
                                <button class="button is-warning mx-2" @click="slotProps.printDetail()" title="print/unprint">
                                    <span class="icon">
                                    <i class="fas fa-print"></i>
                                    </span>
                                </button>
                                <button class="button is-danger mx-2" @click="slotProps.deleteDetail()" title="delete">
                                    <span class="icon">
                                    <i class="far fa-minus-square"></i>
                                    </span>
                                </button>
                                <p class="control">
                                    <button class="button is-info mx-2" @click="slotProps.moveToContact()" title="move">
                                        <span class="icon">
                                        <i class="fas fa-people-carry"></i>
                                        </span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:display="slotProps">
                    <template v-for="(d,idx) in slotProps.rec" :key="d.objectId">
                    <tr slot="display" >
                        <td>
                            <span class="icon" v-show="d.IsPrint"><i class="fas fa-print"></i></span>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.Surname}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.Surname"
                                 v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                            </p>
                        </td>
                        <td>
                            <span v-show="slotProps.isView || slotProps.curEditRecId!=d.objectId">{{d.LiveName}}</span>
                            <p class="control" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <input class="input" type="text" placeholder="Live Name" v-model="slotProps.curEditRec.LiveName"
                                 v-on:keyup.enter="slotProps.saveDetail(d.objectId)">
                            </p>
                        </td>
                        <td>{{d.LastPrint}}</td>
                        <td>
                            <button class="button is-primary mx-2" @click="slotProps.editDetail(d.objectId)" v-show="slotProps.isView">
                                <span class="icon">
                                <i class="fas fa-pen-fancy"></i>
                                </span>
                            </button>
                            <button class="button is-primary mx-2" @click="slotProps.saveDetail(d.objectId)" v-show="!slotProps.isView && slotProps.curEditRecId==d.objectId">
                                <span class="icon">
                                <i class="far fa-save"></i>
                                </span>
                            </button>

                            <label class="b-checkbox checkbox is-large">
                                <input type="checkbox" @change="slotProps.selectRec(d.objectId, $event.target.checked)" :checked="slotProps.isSelected(d.objectId)">
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                    </template>
                </template>
           </DetailEdit>
       </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useWindowSize } from 'vue-window-size';

import DetailEdit from './DetailEdit.vue';
import {tabs} from '../services/appConfig';

export default {
    components: {DetailEdit},
    setup() {
        const store = useStore();
        const router = useRouter();
        const newName = ref("");
        const newCode = ref("");
        const disableEditContact = ref(true);
        
        const activeTab = ref(tabs.live);
        const currentLive = computed(()=> store.state.currentLive);
        const currentDead = computed(()=> store.state.currentDead);
        const currentAncestor = computed(()=> store.state.currentAncestor);
        const currentContact = computed(()=> store.getters.currentContact);
        const { width, height } = useWindowSize();

        const isMobile = computed(()=>{return width.value<=768});

        const selectTab = (tabName) => {
            activeTab.value = tabName;
        };

        const editContact = ()=>{
            disableEditContact.value = false;
        }

        const cancelEditContact = ()=>{
             disableEditContact.value = true;
        }

        const saveContactChange = ()=>{
            let name = newName.value;
            if (!name) name = currentContact.value.Name;
            let code = newCode.value;
            if (!code) code = currentContact.value.Code;
            
        }

        const backToMain = ()=>{
            router.push("/Main");
        }

        return { tabs, activeTab, currentContact, disableEditContact, currentLive, currentDead, currentAncestor, newName, newCode,isMobile,
                 selectTab, editContact, cancelEditContact, saveContactChange, backToMain };
    }
}
</script>