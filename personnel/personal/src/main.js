// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import rem from '../static/js/rem'
import reset from'../static/css/reset.css'
import detail from'../static/css/detail.css'
import mock from './mock'
import {post,fetch,patch,put} from './http'
//定义全局变量
Vue.prototype.$post=post;  //vue.prototype(this) ,$vm
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false
require('./mock')
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // rem,
  detail,
  reset,
  mock,
  components: { App },
  template: '<App/>',
  render: h => h(App)

})
