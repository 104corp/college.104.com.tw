import {
  createRouter, 
  createWebHistory 
} from 'vue-router'
import Index from '@/views/Index/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'index' }
    }
  ]
})

export default router