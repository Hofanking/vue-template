/*
 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Real from '../pages/Real/Real.vue'
import Replay from '../pages/Replay/Replay.vue'
import Warn from '../pages/Warn/Warn.vue'
import Setting from '../pages/Setting/Setting.vue'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
// 所有路由

  routes: [
    {
      path: '/real',
      component: Real,
      meta: {
        showFooter: true
      }
    }, {
      path: '/replay',
      component: Replay,
      meta: {
        showFooter: true
      }
    }, {
      path: '/warn',
      component: Warn,
      meta: {
        showFooter: true
      }
    }, {
      path: '/setting',
      component: Setting,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/',
      redirect: '/real'
    }
  ]
})
