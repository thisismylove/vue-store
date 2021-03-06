// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar,Tabbar, TabbarItem,Swipe, SwipeItem } from 'vant'
Vue
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)


// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import axios from 'axios'
Vue.prototype.axios = axios

import 'animate.css/animate.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:c=>c(App)
})
