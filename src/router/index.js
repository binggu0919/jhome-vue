import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Webdata from '../views/WebData.vue'
import Aidata from '../views/Aidata.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/aidata',
    name: 'Aidata',
    component: Aidata
  },
  {
    path: '/webdata',
    name: 'WebData',
    component: Webdata
  }
]

const router = new VueRouter({
  routes
})

export default router
