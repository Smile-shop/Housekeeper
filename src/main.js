import './libs/common.css'
import './libs/rem.js'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios';
import router from './router/index';
import App from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './global'

Vue.use(Mint);
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})