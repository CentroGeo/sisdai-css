import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/contenedores',
      name: 'contenedores',
      component: () => import('../views/ContenedoresView.vue')
    },
    {
      path: '/reticula',
      name: 'reticula',
      component: () => import('../views/ReticulaView.vue')
    },
    {
      path: '/margenes',
      name: 'margenes',
      component: () => import('../views/MargenesView.vue')
    },
    {
      path: '/tipografia',
      name: 'tipografia',
      component: () => import('../views/TipografiaView.vue')
    },
    {
      path: '/iconografia',
      name: 'iconografia',
      component: () => import('../views/IconografiaView.vue')
    },
    {
      path: '/color',
      name: 'color',
      component: () => import('../views/ColorView.vue')
    },
    {
      path: '/botones',
      name: 'botones',
      component: () => import('../views/BotonesView.vue')
    },
    {
      path: '/hipervinculos',
      name: 'hipervinculos',
      component: () => import('../views/HipervinculosView.vue')
    },
    {
      path: '/listas',
      name: 'listas',
      component: () => import('../views/ListasView.vue')
    },
    {
      path: '/tablas',
      name: 'tablas',
      component: () => import('../views/TablasView.vue')
    },
    {
      path: '/detalles',
      name: 'detalles',
      component: () => import('../views/DetallesView.vue')
    },
    {
      path: '/imagenes',
      name: 'imagenes',
      component: () => import('../views/ImagenesView.vue')
    },
    {
      path: '/portadas',
      name: 'portadas',
      component: () => import('../views/PortadasView.vue')
    },
    {
      path: '/tarjetas',
      name: 'tarjetas',
      component: () => import('../views/TarjetasView.vue')
    },
    {
      path: '/formularios',
      name: 'formularios',
      component: () => import('../views/FormulariosView.vue')
    },
    {
      path: '/bordes',
      name: 'bordes',
      component: () => import('../views/BordesView.vue')
    },
    {
      path: '/sombras',
      name: 'sombras',
      component: () => import('../views/SombrasView.vue')
    },
    {
      path: '/separadores',
      name: 'separadores',
      component: () => import('../views/SeparadoresView.vue')
    },
    {
      path: '/navegacion',
      name: 'navegacion',
      component: () => import('../views/NavegacionView.vue')
    },
    {
      path: '/globo-informacion',
      name: 'globo-informacion',
      component: () => import('../views/GloboInformacionView.vue')
    }
  ]
})

export default router
