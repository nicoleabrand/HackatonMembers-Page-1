import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('../views/EquipeView.vue')
    },{
      path: '/cargos',
      name: 'cargos',
    component: () => import('../views/CargosView.vue')
    }  
  ]
})

export default router
