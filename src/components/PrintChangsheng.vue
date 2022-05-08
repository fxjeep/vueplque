<template>
    <section>
      <div class="plaque-page page" v-for="(page, pageidx) in allLive" :key="'p'+pageidx">
        <table  class="plaque-page-table">
            <tr>
                <td colspan="5" align="right" class="noborder-top">
                    {{pageidx+1}} of {{allLive.length}}
                </td>
            </tr>
            <tr v-for="(row,idx) in page" :key="'row'+idx"> 
                <td v-for="(rec,cidx) in row" :key="'col'+cidx" class="plaquebox border-td">
                    <img src="../assets/changsheng.jpg" class="plaque-img"/>
                    <div class="main-name">
                        <div v-for="c in getMainNameCharList(rec.LiveName)" :key="c" :class="[getMainFontSize(rec.LiveName)]">
                            {{c}}
                        </div>
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
import {getMainNameCharListFunc, getMainFontSizeFunc, tabs} from '../services/appConfig';
import {getPrintData} from '../store/index';
import {getTodayDateTime} from '../store/back4app'

export default {
    setup() {
        const allLive = ref([]);
        const generatedTime = ref("");

        allLive.value = getPrintData(tabs.live);
        generatedTime.value = getTodayDateTime();

        const getMainNameCharList =(name)=>{
            return getMainNameCharListFunc(name);
        }

        const getMainFontSize = (name)=>{
            let list = getMainNameCharListFunc(name);
            return getMainFontSizeFunc(list);
        }

        return {allLive, 
                getMainNameCharList, getMainFontSize, generatedTime}
    },
}
</script>
