import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login,
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'../views/home/Home.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
