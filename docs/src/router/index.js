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
      path: '/accesibilidad',
      children: [
        {
          path: 'cambio-fuente',
          name: 'cambio-fuente',
          component: () => import('../views/AccesibilidadCambioFuente.vue')
        },
        {
          path: 'mostrar-solo-texto',
          name: 'mostrar-solo-texto',
          component: () => import('../views/AccesibilidadMostrarSoloTexto.vue')
        },
        {
          path: 'enlaces-subrayados',
          name: 'enlaces-subrayados',
          component: () => import('../views/AccesibilidadEnlaceSubrayado.vue')
        },
        {
          path: 'vista-oscura',
          name: 'vista-oscura',
          component: () => import('../views/AccesibilidadVistaOscura.vue')
        },
        {
          path: 'ir-contenido-principal',
          name: 'ir-contenido-principal',
          component: () => import('../views/AccesibilidadIrContenidoPrincipal.vue')
        },
        {
          path: 'reducir-incrementar-tipografia',
          name: 'reducir-incrementar-tipografia',
          component: () => import('../views/AccesibilidadReducirAumentarTipografia.vue')
        },
      ]
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
        {
          path: 'separadores',
          name: 'separadores',
          component: () => import('../views/ElementosSeparadores.vue')
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
          path: 'cargando',
          name: 'cargando',
          component: () => import('../views/ElementosCompuestosCargando.vue')
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
        {
          path: 'botones-pictogramas',
          name: 'botones-pictogramas',
          component: () => import('../views/ElementosCompuestosBotonesPictograma.vue')
        },
        {
          path: 'menu-flotante',
          name: 'menu-flotante',
          component: () => import('../views/ElementosCompuestosMenuFlotante.vue')
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
          path: 'menu-lateral',
          name: 'menu-lateral',
          component: () => import('../views/ComponenteMenuLateral.vue')
        },
        {
          path: 'menu-accesibilidad',
          name: 'menu-accesibilidad',
          component: () => import('../views/ComponenteMenuAccesibilidad.vue')
        },
        {
          path: 'modal',
          name: 'modal',
          component: () => import('../views/ComponenteModal.vue')
        },
        {
          path: 'boton-flotante',
          name: 'boton-flotante',
          component: () => import('../views/ComponenteBotonFlotante.vue')
        },
        {
          path: 'colapsable',
          name: 'colapsable',
          component: () => import('../views/ComponenteColapsable.vue')
        },
        {
          path: 'indice-contenido',
          name: 'indice-contenido',
          component: () => import('../views/ComponenteIndiceContenido.vue')
        },
        {
          path: 'info-despliegue',
          name: 'info-despliegue',
          component: () => import('../views/ComponenteInfoDeDespliegu.vue')
        },
        {
          path: 'globo-informacion',
          name: 'globo-informacion',
          component: () => import('../views/ComponenteGloboDeInformacion.vue')
        },
        {
          path: 'institucionales',
          name: 'institucionales',
          component: () => import('../views/ComponentesInstitucionales.vue')
        },
        {
          path: 'audio',
          name: 'audio',
          component: () => import('../views/ComponenteAudio.vue')
        },
        {
          path: 'control-deslizante',
          name: 'control-deslizante',
          component: () => import('../views/ComponenteControlDeslizante.vue')
        },
        {
          path: 'control-deslizante-contenido',
          name: 'control-deslizante-contenido',
          component: () => import('../views/ComponenteControlDeslizanteContenido.vue')
        },
        {
          path: 'control-acercar-alejar',
          name: 'control-acercar-alejar',
          component: () => import('../views/ComponenteControlAcercarAlejar.vue')
        },
        {
          path: 'campo-busqueda',
          name: 'campo-busqueda',
          component: () => import('../views/ComponenteCampoBusqueda.vue')
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
        },
        {
          path: 'viscontenedor',
          name: 'viscontenedor',
          component: () => import('../views/VisualizacionesContenedor.vue')
        },
        {
          path: 'viscontrolador',
          name: 'viscontrolador',
          component: () => import('../views/VisualizacionesControlador.vue')
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
        {
          path: 'fondos',
          name: 'fondos',
          component: () => import('../views/AuxiliaresFondos.vue')
        },
      ]
    },
  ]
})

export default router
