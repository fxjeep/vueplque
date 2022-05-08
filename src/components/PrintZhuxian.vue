<template>
<section>
      <div class="plaque-page" v-for="(page, pageidx) in allLive" :key="'p'+pageidx" >
        <table class="plaque-page-table">
            <tr>
                <td colspan="5" align="right" class="noborder-top">
                    {{pageidx+1}} of {{allLive.length}}
                </td>
            </tr>
            <tr v-for="(row,idx) in page" :key="'row'+idx"> 
                <td v-for="(rec,cidx) in row" :key="'col'+cidx" class="plaquebox border-td">
                    <img src="../assets/zhuxian.jpg" class="plaque-img"/>
                    <div class="main-name-zx">
                        <div v-for="c in getMainNameCharList(rec.Surname)" :key="c" :class="[getMainFontSize(rec.Surname)]">
                            {{c}}
                        </div>
                    </div>
                    <div class="side-name-zx">
                        <span v-for="c in getSideNameCharList(rec.LiveName)" :key="c" :class="[getSideNameClass(rec.LiveName)]">
                            {{c}}
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="5" align="right" class="noborder-bottom">
                    {{generatedTime}}
                </td>
            </tr>
        </table>
    </div>
</section>
</template>
<script>
import { ref } from 'vue'
import {getMainNameCharListFunc, getMainFontSizeFunc, tabs, getSideNameCharListFunc} from '../services/appConfig';
import {getPrintData} from '../store/index';
import {getTodayDateTime} from '../store/back4app'

export default {
    setup() {
        const allLive = ref([]);
        const generatedTime = ref("");

        allLive.value = getPrintData(tabs.ancestor);
        generatedTime.value = getTodayDateTime();

        const getMainNameCharList =(name)=>{
            return getMainNameCharListFunc(name);
        }

        const getMainFontSize = (name)=>{
            let list = getMainNameCharListFunc(name);
            return getMainFontSizeFunc(list);
        }

        const getSideNameCharList =(name)=>{            
            let list = getSideNameCharListFunc(name);
            return list;            
        }

        const getSideNameClass = (name)=>{
            let list = getSideNameCharListFunc(name);
            return (list.length == 1)?"plaque-side-vertical-zx":"plaque-side-chinese";
        }

        return {allLive, 
                getMainNameCharList, getMainFontSize, generatedTime, getSideNameCharList, getSideNameClass}
    },
}
</script>
