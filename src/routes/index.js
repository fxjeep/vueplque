import { createWebHashHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Editor from '../components/Editor.vue'
import Edit from '../components/Edit.vue'
import Print from '../components/Print.vue'
import Data from '../components/Data.vue'

import store from '../store/index.js'
import PrintChangsheng from "../components/PrintChangsheng.vue";
import PrintYuanqing from "../components/PrintYuanqing.vue";
import PrintWangshen from "../components/PrintWangshen.vue";
import PrintZhuxian from "../components/PrintZhuxian.vue";
import DetailList from "../components/DetailList.vue"

const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/Main",
    name: "main",
    component: Main,
    children: [
      {
        path: '',
        component: Edit
      },
      {
        path: 'Print',
        component: Print
      },
      {
        path: 'Editor',
        component: Editor
      },
      {
        path: 'Data',
        component: Data
      }
    ]
  },
  {
    path: "/printCS",
    name: "printCS",
    component: PrintChangsheng
  },
  {
    path: "/printYQ",
    name: "printYQ",
    component: PrintYuanqing
  },
  {
    path: "/printWS",
    name: "printWS",
    component: PrintWangshen
  },
  {
    path: "/printZX",
    name: "printZX",
    component: PrintZhuxian
  },
  {
    path: "/detailList",
    name: "detailList",
    component: DetailList
  }
];

const router = createRouter({
  base: "/vueplque/",
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (!store.state.user && donotRedirect(to) ) 
    return '/login';
  else 
    return true;
})

function donotRedirect(to){
  return to.path !='/' && 
         to.path != '/login' &&
         to.path != '/printCS' &&
         to.path != '/printYQ' &&
         to.path != '/printWS' &&
         to.path != '/printZX' &&
         to.path != '/detailList'
}
export default router;