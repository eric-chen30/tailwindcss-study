import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Navigation/Home.vue'
import Tech from '../views/Navigation/Tech.vue'
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
      name: 'Tech',
      path: '/tech',
      component: Tech
    },
    {
      name: 'About',
      path: '/about',
      component: About
    }
  ]
})

export default router
