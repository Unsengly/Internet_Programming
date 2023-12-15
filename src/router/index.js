import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Page1 from '../views/Page1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page1
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Page1.vue')
    }
  ]
})

export default router
