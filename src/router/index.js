import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import my404 from '../components/404'
import login from '../components/login'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/login',
      name: 'login route',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard route',
      component: dashboard
    },
    {
      path: '/*',
      name: '404 route',
      component: my404
    }
  ]
})
