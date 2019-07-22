import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index/index' //先导入组件
import index from '@/components/index/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index/index',
      name: 'index',
      component: index  //声明
    },
    {
      path: '/index/index1',
      name: 'index1',
      component: index1  //声明
    }
  ]
})
