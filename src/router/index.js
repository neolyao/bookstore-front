import Vue from 'vue'
import Router from 'vue-router'
import Login  from  '@/components/user/login'
import  Regist from '@/components/user/regist'
import Main  from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/regist',
      name:'Regist',
      component:Regist
    },
    {
      path:'/main',
      name:'Main',
      component:Main
    }
  ]
})

