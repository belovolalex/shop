import Vue from 'vue'
import Router from 'vue-router'

import MainPage from './pages/MainPage'
import AuthLogin from './components/auth/AuthLogin'
import AuthRegister from './components/auth/AuthRegister'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'mainpage',
        component: MainPage,
      },
      {
        path: '/login',
        name: 'authLogin',
        component: AuthLogin,
        meta: {layout: 'AuthLayout'}
      },
      {
        path: '/registration',
        name: 'authRegister',
        component: AuthRegister,
        meta: {layout: 'AuthLayout'}
      }
    ]
  })

export default router