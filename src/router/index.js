import Vue from 'vue'
import VueRouter from 'vue-router'
import Buylist from '../views/Buylist.vue'
import Basket from '../views/Basket.vue'
import Address from '../views/Address.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/buylist',
    name: 'Buylist',
    component: Buylist
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '*',
    name: 'Basket',
    redirect: '/basket'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
