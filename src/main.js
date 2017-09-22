import './libs/common.css'
import './libs/rem.js'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import axios from './http';
import router from './router/index';
import App from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './global'


// import {
  
//   Input,
//   Radio,
//   Select,
//   Option,
//   Button,
//   Icon,
//   Table,
//   TableColumn,
//   Upload,
//   Form,
//   FormItem,
// } from 'element-ui'

// Vue.use(Input)
// Vue.use(Radio)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Button)
// Vue.use(Upload)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(TableColumn)

Vue.use(Mint);


Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})