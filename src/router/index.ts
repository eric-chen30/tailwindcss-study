import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Navigation/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    }
  ]
})

export default router
