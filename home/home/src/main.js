// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '../static/js/rem'
import reset from '../static/css/reset.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rem,
  reset,
  Swiper,
  components: { App },
  template: '<App/>'
})
