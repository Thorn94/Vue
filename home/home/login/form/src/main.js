// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '../static/js/rem'
import reset from'../static/css/reset.css'
import axios from 'axios'
import mock from './mock'
import {post,fetch,patch,put} from './http'
//定义全局变量
Vue.prototype.$post=post;  //vue.prototype(this) ,$vm
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false
require('./mock')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rem,
  reset,
  axios,
  mock,
  components: { App },
  template: '<App/>'
})
