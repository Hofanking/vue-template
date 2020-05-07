/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router // 使用 vue-router
})
