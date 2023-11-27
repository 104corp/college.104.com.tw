import {
  createRouter, 
  createWebHistory 
} from 'vue-router'
import Index from '@/views/Index/index.vue'
import Maintenance from '@/views/Maintenance/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/maintenance/',
      name: 'maintenance',
      component: Maintenance,
      props: route => ({ time: route.query.time })
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'index' }
    }
  ]
})

export default router