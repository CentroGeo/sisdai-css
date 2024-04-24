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
      path: '/fundamentos',
      children: [
        {
          path: 'contenedores',
          name: 'contenedores',
          component: () => import('../views/FundamentosContenedores.vue')
        },
        {
          path: 'reticula',
          name: 'reticula',
          component: () => import('../views/FundamentosReticula.vue')
        },
        {
          path: 'espaciado',
          name: 'espaciado',
          component: () => import('../views/FundamentosEspaciado.vue')
        },
        {
          path: 'tipografia',
          name: 'tipografia',
          component: () => import('../views/FundamentosTipografia.vue')
        },
        {
          path: 'pictogramas',
          name: 'pictogramas',
          component: () => import('../views/FundamentosPictogramas.vue')
        },
        {
          path: 'color',
          name: 'color',
          component: () => import('../views/FundamentosColor.vue')
        }
      ]
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
      path: '/navegacion',
      name: 'navegacion',
      component: () => import('../views/NavegacionView.vue')
    },
    {
      path: '/globo-informacion',
      name: 'globo-informacion',
      component: () => import('../views/GloboInformacionView.vue')
    },
    {
      path: '/visualizaciones',
      children: [
        {
          path: 'vistipografia',
          name: 'vistipografia',
          component: () => import('../views/VisualizacionesTipografia.vue')
        }
      ],
    },
    {
      path: '/auxiliares',
      children: [
        {
          path: 'texto',
          name: 'texto',
          component: () => import('../views/AuxiliaresTexto.vue')
        },
        {
          path: 'visibilidad',
          name: 'visibilidad',
          component: () => import('../views/AuxiliaresVisibilidad.vue')
        },
        {
          path: 'bordes',
          name: 'bordes',
          component: () => import('../views/AuxiliaresBordes.vue')
        },
      ]
    },
  ]
})

export default router
