import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/entry01',
    name: 'Entry01',
    component: () => import(/* webpackChunkName: "entry01" */ '../views/Entry01.vue')
    
  },
  {
    path: '/entry02',
    name: 'Entry02',
    component: () => import(/* webpackChunkName: "entry02" */ '../views/Entry02.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "confirm" */ '../views/Confirm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
