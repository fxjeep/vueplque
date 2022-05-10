<template>
<section>
      <div class="plaque-page page" v-for="(page, pageidx) in allLive" :key="'p'+pageidx" >
        <table class="plaque-page-table">
            <tr>
                <td colspan="5" align="right" class="noborder-top">
                    {{pageidx+1}} of {{allLive.length}}
                </td>
            </tr>
            <tr v-for="(row,idx) in page" :key="'row'+idx"> 
                <td v-for="(rec,cidx) in row" :key="'col'+cidx" class="plaquebox border-td">
                    <img src="../assets/yuanqing.jpg" class="plaque-img"/>
                    <div class="side-name">
                        <span v-for="c in getSidNameCharList(rec.LiveName)" :key="c" :class="[getSideNameClass(rec.LiveName)]">
                            {{c}}
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="5" align="right" class="noborder-bottom">
                    {{getTodayDateTime()}}
                </td>
            </tr>
        </table>
    </div>
    </section>
</template>
<script>
import { ref } from 'vue'
import {getSideNameCharListFunc, tabs} from '../services/appConfig';
import {getPrintData} from '../store/index';
import {getTodayDateTime} from '../store/back4app'

export default {
    setup() {
        const allLive = ref([]);

        allLive.value = getPrintData(tabs.live);

        const getSidNameCharList =(name)=>{
            let list = getSideNameCharListFunc(name);
            return list;
        }

        const getSideNameClass = (name)=>{
            let list = getSideNameCharListFunc(name);
            return (list.length == 1)?"plaque-side-vertical":"plaque-side-chinese";
        }

        return {allLive, 
                getSidNameCharList, getTodayDateTime, getSideNameClass}
    },
}
</script>
