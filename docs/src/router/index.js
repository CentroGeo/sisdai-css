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
      path: '/elementos',
      children: [
        {
          path: 'botones',
          name: 'botones',
          component: () => import('../views/ElementosBotones.vue')
        },
        {
          path: 'imagenes',
          name: 'imagenes',
          component: () => import('../views/ElementosImagenes.vue')
        },
        {
          path: 'formularios',
          name: 'formularios',
          component: () => import('../views/ElementosFormularios.vue')
        },
        {
          path: 'hipervinculos',
          name: 'hipervinculos',
          component: () => import('../views/ElementosHipervinculos.vue')
        },
        {
          path: 'listas',
          name: 'listas',
          component: () => import('../views/ElementosListas.vue')
        },
        {
          path: 'tablas',
          name: 'tablas',
          component: () => import('../views/ElementosTablas.vue')
        },
        {
          path: 'detalles',
          name: 'detalles',
          component: () => import('../views/ElementosDetalles.vue')
        },
      ]
    },
    {
      path: '/elementos-compuestos',
      children: [
        {
          path: 'tarjetas',
          name: 'tarjetas',
          component: () => import('../views/ElementosCompuestosTarjetas.vue')
        },
        {
          path: 'portadas',
          name: 'portadas',
          component: () => import('../views/ElementosCompuestosPortadas.vue')
        },
        {
          path: 'listas-compuestas',
          name: 'listas-compuestas',
          component: () => import('../views/ElementosCompuestosListas.vue')
        },
        {
          path: 'botones-compuestos',
          name: 'botones-compuestos',
          component: () => import('../views/ElementosCompuestosBotones.vue')
        },
      ]
    },
    {
      path: '/componentes',
      children: [
        {
          path: 'navegacion',
          name: 'navegacion',
          component: () => import('../views/ComponenteNavegacion.vue')
        },
        {
          path: '/globo-informacion',
          name: 'globo-informacion',
          component: () => import('../views/ComponenteGloboinformacion.vue')
        },
      ]
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
