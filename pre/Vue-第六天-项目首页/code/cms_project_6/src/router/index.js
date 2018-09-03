import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'

Vue.use(Router)
// 注册全局组件 router-view router-link
// 挂载Vue.prototype.$router || $route
// 未来所有的组件中this对象，就具备概属性，所有的this就是new出来的Vue的子类对象

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/searc',
      name: 'search',
      component: Search
    }, {
      path: '/member',
      name: 'member',
      component: Member
    }, {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    }
  ]
})
