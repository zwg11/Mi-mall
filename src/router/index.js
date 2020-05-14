import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home'
import Index from '@/pages/index'
import Product from '@/pages/product'
import Detail from '@/pages/detail'

import Cart from '@/pages/cart'

import Order from '@/pages/order'
import OrderList from '@/pages/orderList'
import OrderConfirm from '@/pages/orderConfirm'
import OrderPay from '@/pages/orderPay'


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
        component: Product,
      },{
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/cart',
    name: 'cart',
    component: Cart,
  },{
    path: '/order',
    name: 'order',
    component: Order,
    children:[
      {
        path: '/list',
        name: 'order-list',
        component: OrderList,
      },{
        path: '/confirm',
        name: 'order-confirm',
        component: OrderConfirm,
      },{
        path: '/pay',
        name: 'order-pay',
        component: OrderPay,
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
