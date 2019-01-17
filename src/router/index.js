import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Cart from '../components/tabbar/Cart.vue'
import Search from '../components/tabbar/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
  ]
})
