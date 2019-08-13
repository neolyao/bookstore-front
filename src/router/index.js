import Vue from 'vue'
import Router from 'vue-router'
import Login  from  '@/components/user/login'
import Regist from '@/components/user/regist'
import Home  from '@/components/home'
import Index from '@/components/index'
import Detail from '@/components/goods/detail'
import Order from '@/components/goods/order'
import Cart from  '@/components/goods/cart'
import Pay from '@/components/goods/pay'
import BookList from '@/components/goods/list/booklist'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/regist',
      name:'Regist',
      component:Regist,
    },
    {
      path:'/',
      name:'Home',
      component:Home,
      children:[
        {
          path:'',
          name:'Index',
          component:Index
        },
        {
          path:'/detail/:bid',
          name:'Detail',
          component:Detail
        },
        {
          path:'/order',
          name:'Order',
          component:Order
        },
        {
          path:'/cart',
          name:'Cart',
          component:Cart
        },
        {
          path:'/pay',
          name:'Pay',
          component:Pay
        },
        {
          path:'/booklist/:cid',
          name:'BookList',
          component:BookList
        }
      ]
    },
  ]
})

