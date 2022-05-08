<template>
    <section>
        <slot name="add" :rec="newInput" :addNew="addNew"
              :printDetail="printDetail" :deleteDetail="deleteDetail"
              :moveToContact="moveToContact" ></slot>
        <span class="has-text-left has-text-danger">{{error}}</span>
        <table class="table is-bordered">
            <tbody>
                <tr>
                    <td :colspan="numberOfCols">
                        <div class="field has-addons">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="Search Names" v-model="filtText">
                                <span class="icon is-small is-left">
                                    <i class="fab fa-searchengin"></i>
                                </span>
                            </p>
                        </div>
                    </td>
                </tr>
                <slot name="cols"></slot>
                <slot name="display" :rec="filtedData" :curEditRecId="curEditRecId" :selectRec="selectRec" :isSelected="isSelected" :curEditRec="curEditRec"
                        :saveDetail="saveDetail" :editDetail="editDetail" :editError="editError" :convertToDead="convertToDead"
                        :isView="isView"
                        ></slot>
            </tbody>
        </table>
        <div class="modal" :class="{'is-active':showDelete}" v-if="showDelete">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Delete Contact</p>
                <button class="delete" aria-label="close"  @click="showDelete=false"></button>
                </header>
                <section class="modal-card-body">
                    Do you want to delete these records?
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="realDeleteDetail">Delete</button>
                <button class="button"  @click="showDelete=false">Cancel</button>
                </footer>
            </div>
        </div>
        <div class="modal" :class="{'is-active':showConvertToDead}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Convert to the dead</p>
                <button class="delete" aria-label="close"  @click="showConvertToDead=false"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        {{newDead.DeadName}}
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="LiveName" v-model="newDead.LiveName">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user-alt"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Relation" v-model="newDead.Relation">
                        <span class="icon is-small is-left">
                        <i class="fas fa-user-alt"></i>
                        </span>
                    </p>
                    <p>
                        <span class="has-text-danger">{{convertToDeadError}}</span>
                    </p>
                    </div>
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="readConvertToDead">Convert</button>
                <button class="button"  @click="showConvertToDead=false">Cancel</button>
                </footer>
            </div>
        </div>
        <div class="modal has-dropdown" :class="{'is-active':showMoveToContact}">
            <div class="modal-background"></div>
            <div class="modal-card has-dropdown">
                <header class="modal-card-head">
                <p class="modal-card-title">Move records to another Contact</p>
                <button class="delete" aria-label="close"  @click="showMoveToContact=false"></button>
                </header>
                <section class="modal-card-body has-dropdown">
                    <BulmaAutoComplete :onSearch="searchContacts" :list="searchResults" :onSelected="onSelected"></BulmaAutoComplete>
                    <div class="field">
                    <p>
                        <span class="has-text-danger">{{convertToDeadError}}</span>
                    </p>
                    </div>
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="realMoveToContact">Move</button>
                <button class="button"  @click="showMoveToContact=false">Cancel</button>
                </footer>
            </div>
        </div>
    </section>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import {tabs, validateDetailInput} from '../services/appConfig';
import BulmaAutoComplete from './BulmaAutoComplete.vue';


export default {
    components:{BulmaAutoComplete},
    props:['type', 'data', 'numcols'],
    setup(props){
        const store = useStore()
        const newInput = ref({});
        const curEditRecId = ref(-1);
        const isView = ref(true);
        const numberOfCols = ref(props.numcols);
        const error = ref("");
        const editError = ref("");
        const filtText = ref("");
        const curEditRec = ref({});
        const currentContact = computed(()=> store.getters.currentContact);
        const selectedIds = ref([]);
        const showDelete = ref(false);
        const showConvertToDead = ref(false);
        const newDead = ref({});
        const convertToDeadError = ref("");
        const showMoveToContact = ref(false);
        const searchResults = ref([]);

        const filtedData = computed(()=>{
            if (props.data && Array.isArray(props.data)){
                return props.data.filter((item)=>{
                    if (!item) return false;
                    if (!filtText.value) return true;
                    let isMatch=false;
                    if (item.LiveName) {isMatch = isMatch || item.LiveName.indexOf(filtText.value)>=0;}
                    if (item.DeadName) {isMatch = isMatch || item.LiveName.indexOf(filtText.value)>=0;}
                    if (item.SurName) {isMatch = isMatch || item.LiveName.indexOf(filtText.value)>=0;}
                    return isMatch;
                });
            } else {
                return [];
            }
        });

        const addNew = ()=>{
            let inputValError = validateDetailInput(props.type, newInput.value);
            if (inputValError){
                error.value = inputValError;
                return;
            } else {
                error.value = "";
            }


            store.dispatch("addDetail", {type:props.type, contactId:currentContact.value.objectId, rec:newInput.value, isPrint:true} )
                .then(res=>{
                    newInput.value = {};
                }, err=>{

                });
        }


        const printDetail = () =>{
            selectedIds.value.reduce(async (prev,id)=>{
                var rec = props.data.filter(x=>x.objectId == id);
                if (rec && rec.length>0){
                    rec[0].IsPrint = !rec[0].IsPrint;
                    await store.dispatch("updateDetail", {type:props.type, rec:rec[0], notRefresh:true} );
                }
            }, null);
            selectedIds.value = [];
            store.dispatch("loadOneDetail", {type:props.type, contactId:currentContact.value.objectId})
        }

        const deleteDetail = ()=>{
            showDelete.value = true;
        }

        const realDeleteDetail = ()=>{
            selectedIds.value.reduce(async (prev,id)=>{
                var rec = props.data.filter(x=>x.objectId == id);
                if (rec && rec.length>0){
                    await store.dispatch("deleteDetail", {type:props.type, rec:rec[0]} );
                }
            }, null);
            selectedIds.value = [];
            showDelete.value = false;
        }

        

        const selectRec = (id, checked)=>{ 
            var recIdx = props.data.findIndex(x=>x.objectId == id);
            if (recIdx>=0){
                if (checked){
                    if (selectedIds.value.indexOf(id)<0) selectedIds.value.push(id);
                } else {          
                    let selidx = selectedIds.value.indexOf(id);
                    if (selidx>=0) selectedIds.value.splice(selidx,1);                
                }
            }
        }

        const isSelected = (id)=>{
            let selidx = selectedIds.value.findIndex(x=>x == id);
            return selidx>=0;
        }

        const editDetail = (id)=>{
            isView.value = false;
            curEditRecId.value = id;
            let recs = props.data.filter(x=>x.objectId == id);
            if (recs && recs.length>0)
            curEditRec.value = {...recs[0]};
        }

        const saveDetail = async (id)=>{
            var rec = props.data.filter(x=>x.objectId == id);

            if (props.type == tabs.live){
                if (!curEditRec.value.LiveName) {
                    editError.value = "Please enter name(s)"
                    return;
                }
            } else if (props.type == tabs.dead){
                if (!curEditRec.value.LiveName ||
                    !curEditRec.value.DeadName ||
                    !curEditRec.value.Relation) { 
                        editError.value = "Please enter name(s)"
                        return;
                    }
            } else if (props.type == tabs.dead){
                if (!curEditRec.value.Surname ||
                    !curEditRec.value.LiveName) {
                        editError.value = "Please enter name(s)"
                        return;
                    }
            }

            editError.value = "";

             if (rec && rec.length>0){
                 rec[0] = {...curEditRec.value};
                 rec[0].IsPrint = true;
                 await store.dispatch("updateDetail", {type:props.type, rec:rec[0]} )
                 resetFlag();
             }
        }

        const convertToDead = (id)=>{
            var recs = props.data.filter(x=>x.objectId == id);
            if (recs && recs.length>0){
                newDead.value = {DeadName:recs[0].LiveName, LiveName:"", Relation:"", LiveId:id, ContactId:recs[0].ContactId};
                showConvertToDead.value = true;
                return;
            }
            showConvertToDead.value = false;
        }

        const readConvertToDead = async ()=>{
            if (!newDead.value.DeadName || !newDead.value.LiveName || !newDead.value.Relation){
                convertToDeadError.value = 'Please enter names';
                return;
            }

            convertToDeadError.value = "";
            let newRec = {DeadName:newDead.value.DeadName, LiveName:newDead.value.LiveName, Relation:newDead.value.Relation, IsPrint:true};
            await store.dispatch("addDetail", {type:tabs.dead, contactId:newDead.value.ContactId, rec:newRec});
            await store.dispatch("deleteDetail", {type:tabs.live,  rec:{objectId:newDead.value.LiveId}} );
            newDead.value = {};
            showConvertToDead.value = false;
        }

        const resetFlag = ()=>{
            curEditRecId.value = -1;
            isView.value = true;
        }

        const moveToContact = ()=>{
            showMoveToContact.value = true;
        }

        const searchContacts = (searchText)=>{
            searchResults.value = [];
            let contacts = store.getters.filteredContacts(searchText);
            contacts.forEach((item)=>{
                searchResults.value.push({text: item.Name + "(" + item.Code + ")", id:item.objectId, contact:item})
            })
        }

        const addSelectedToNewContact= async (contactId)=>{
            selectedIds.value.reduce(async (prev,id)=>{
                var rec = props.data.filter(x=>x.objectId == id);
                if (rec && rec.length>0){
                    await store.dispatch("addDetail", {type:props.type, contactId, rec:rec[0]} );
                }
            }, null);
        }

        const onSelected = async (item)=>{
            let contact = item.contact;
            if (contact.objectId != currentContact.value.objectId){
                await addSelectedToNewContact(contact.objectId);
                realDeleteDetail();
                showMoveToContact.value = false;
            }
        }

        return {newInput, error, numberOfCols, filtText, filtedData,curEditRecId,isView,curEditRec,selectedIds,editError,
                showDelete,showConvertToDead,newDead,convertToDeadError,showMoveToContact,searchResults,
                addNew, selectRec, printDetail, deleteDetail, editDetail, saveDetail, isSelected, 
                realDeleteDetail, readConvertToDead, convertToDead, moveToContact, searchContacts, onSelected}
    }
}
</script>