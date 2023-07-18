import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/baoyh'
  },
  {
    path: '/baoyh',
    // name: 'Urban Traffic (in Beijing)',
    component: function () {
      return import( '../views/baoYiHong.vue')
    }
  },
  {
    path: '/chenqh',
    // name: 'TrafficFlow',
    component: function () {
      return import('../views/chenQiHang.vue')
    }
  },
  {
    path: "/guiwz",
    // name: "Evo",
    component: function () {
      return import( '../views/guiWangZhe.vue')
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
