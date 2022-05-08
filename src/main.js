import { createApp } from 'vue'
import App from './App.vue'
import ParseCfg from './services/parse';

import router from './routes/index.js'
import store from './store/index.js'
import appConfigMixin from './services/appConfig'

import './assets/index.css'


var app = createApp(App);
app.mixin(appConfigMixin);
app.use(router)
app.use(store)
app.mount('#app');
