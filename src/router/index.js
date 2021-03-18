import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Webdata from '../views/WebData.vue'
import Aidata from '../views/Aidata.vue'
import Project from '../views/Project.vue'

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
    path: '/Aidata',
    name: 'Aidata',
    component: Aidata
  },
  {
    path: '/Webdata',
    name: 'WebData',
    component: Webdata
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  }
]

const router = new VueRouter({
  routes
})

export default router
