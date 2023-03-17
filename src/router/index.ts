import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Navigation/Home.vue'
import Pinia from '../views/Navigation/Pinia.vue'
import About from '../views/Navigation/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Pinia',
      path: '/pinia',
      component: Pinia
    },
    {
      name: 'About',
      path: '/about',
      component: About
    }
  ]
})

export default router
