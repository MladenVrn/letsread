import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/romans',
      name: 'romane',
      component: () => import('../components/categories/RomansComponent.vue')
    }
  ]
})

export default router
