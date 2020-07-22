import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home'
import Index from '@/pages/index'
// import Product from '@/pages/product'
// import Detail from '@/pages/detail'



// import Login from '@/pages/login'

// import Order from '@/pages/order'
// import OrderList from '@/pages/orderList'
// import OrderConfirm from '@/pages/orderConfirm'
// import OrderPay from '@/pages/orderPay'
// import { resolve } from 'core-js/fn/promise'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index,
      },{
        path: '/product/:id',
        name: 'product',
        component: ()=>import('@/pages/product'),
      },{
        path: '/detail/:id',
        name: 'detail',
        component: ()=>import('@/pages/detail'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./pages/cart'),
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/pages/login'),
  },
  {
    path: '/order',
    name: 'order',
    component: ()=>import('@/pages/order'),
    children:[
      {
        path: 'list',
        name: 'order-list',
        component: ()=>import('@/pages/orderList'),
      },{
        path: 'confirm',
        name: 'order-confirm',
        component: ()=>import('@/pages/orderConfirm'),
      },{
        path: 'pay',
        name: 'order-pay',
        component: ()=>import('@/pages/orderPay'),
      },{
        path: 'alipay',
        name: 'ali-pay',
        component: ()=>import('@/pages/alipay'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
