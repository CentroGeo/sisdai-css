import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: InicioView,
      meta: {
        title: 'Inicio | sisdai-css'
      },
    },
    {
      path: '/accesibilidad',
      children: [
        {
          path: 'cambio-fuente',
          name: 'Accesibilidad / Cambio de fuente',
          component: () => import('../views/AccesibilidadCambioFuente.vue'),
          meta: {
            title: 'Cambio de fuente | Accesibilidad | sisdai-css'
          },
        },
        {
          path: 'mostrar-solo-texto',
          name: 'Accesibilidad / Mostrar solo texto',
          component: () => import('../views/AccesibilidadMostrarSoloTexto.vue'),
          meta: {
            title: 'Mostrar solo texto | Accesibilidad | sisdai-css'
          },
        },
        {
          path: 'enlaces-subrayados',
          name: 'Accesibilidad / Enlaces subrayados',
          component: () => import('../views/AccesibilidadEnlaceSubrayado.vue'),
          meta: {
            title: 'Enlaces subrayados | Accesibilidad | sisdai-css'
          },
        },
        {
          path: 'vista-oscura',
          name: 'Accesibilidad / Vista oscura',
          component: () => import('../views/AccesibilidadVistaOscura.vue'),
          meta: {
            title: 'Vista oscura | Accesibilidad | sisdai-css'
          },
        },
        {
          path: 'ir-contenido-principal',
          name: 'Accesibilidad / Ir al contenido principal',
          component: () => import('../views/AccesibilidadIrContenidoPrincipal.vue'),
          meta: {
            title: 'Ir al contenido principal | Accesibilidad | sisdai-css'
          },
        },
        {
          path: 'reducir-incrementar-tipografia',
          name: 'reducir-incrementar-tipografia',
          component: () => import('../views/AccesibilidadReducirAumentarTipografia.vue'),
          meta: {
            title: 'Reducir e incrementar tipografía | Accesibilidad | sisdai-css'
          },
        },
      ]
    },
    {
      path: '/fundamentos',
      children: [
        {
          path: 'contenedores',
          name: 'Fundamentos / Contenedores',
          component: () => import('../views/FundamentosContenedores.vue'),
          meta: {
            title: 'Contenedores | Fundamentos | sisdai-css'
          },
        },
        {
          path: 'reticula',
          name: 'Fundamentos / Retícula',
          component: () => import('../views/FundamentosReticula.vue'),
          meta: {
            title: 'Retícula | Fundamentos | sisdai-css'
          },
        },
        {
          path: 'espaciado',
          name: 'Fundamentos / Espaciado',
          component: () => import('../views/FundamentosEspaciado.vue'),
          meta: {
            title: 'Espaciado | Fundamentos | sisdai-css'
          },
        },
        {
          path: 'tipografia',
          name: 'Fundamentos / Tipografía',
          component: () => import('../views/FundamentosTipografia.vue'),
          meta: {
            title: 'Tipografía | Fundamentos | sisdai-css'
          },
        },
        {
          path: 'pictogramas',
          name: 'Fundamentos / Pictogramas',
          component: () => import('../views/FundamentosPictogramas.vue'),
          meta: {
            title: 'Pictogramas | Fundamentos | sisdai-css'
          },
        },
        {
          path: 'color',
          name: 'Fundamentos / Color',
          component: () => import('../views/FundamentosColor.vue'),
          meta: {
            title: 'Color | Fundamentos | sisdai-css'
          },
        }
      ]
    },
    {
      path: '/elementos',
      children: [
        {
          path: 'botones',
          name: 'Elementos / Botones',
          component: () => import('../views/ElementosBotones.vue'),
          meta: {
            title: 'Botones | Elementos | sisdai-css'
          },
        },
        {
          path: 'imagenes',
          name: 'Elementos / Imágenes',
          component: () => import('../views/ElementosImagenes.vue'),
          meta: {
            title: 'Imágenes | Elementos | sisdai-css'
          },
        },
        {
          path: 'formularios',
          name: 'Elementos / Formularios',
          component: () => import('../views/ElementosFormularios.vue'),
          meta: {
            title: 'Formularios | Elementos | sisdai-css'
          },
        },
        {
          path: 'hipervinculos',
          name: 'Elementos / Hipervínculos',
          component: () => import('../views/ElementosHipervinculos.vue'),
          meta: {
            title: 'Hipervínculos | Elementos | sisdai-css'
          },
        },
        {
          path: 'listas',
          name: 'Elementos / Listas',
          component: () => import('../views/ElementosListas.vue'),
          meta: {
            title: 'Listas | Elementos | sisdai-css'
          },
        },
        {
          path: 'tablas',
          name: 'Elementos / Tablas',
          component: () => import('../views/ElementosTablas.vue'),
          meta: {
            title: 'Tablas | Elementos | sisdai-css'
          },
        },
        {
          path: 'detalles',
          name: 'Elementos / Detalles',
          component: () => import('../views/ElementosDetalles.vue'),
          meta: {
            title: 'Detalles | Elementos | sisdai-css'
          },
        },
        {
          path: 'separadores',
          name: 'Elementos / Separadores',
          component: () => import('../views/ElementosSeparadores.vue'),
          meta: {
            title: 'Separadores | Elementos | sisdai-css'
          },
        },
        {
          path: 'formularios',
          name: 'Elementos / Formularios',
          component: () => import('../views/ElementosFormularios.vue'),
          meta: {
            title: 'Formularios | Elementos | sisdai-css'
          },
        },
      ]
    },
    {
      path: '/elementos-compuestos',
      children: [
        {
          path: 'tarjetas',
          name: 'Compuestos / Tarjetas',
          component: () => import('../views/ElementosCompuestosTarjetas.vue'),
          meta: {
            title: 'Tarjetas | Compuestos | sisdai-css'
          },
        },
        {
          path: 'portadas',
          name: 'Compuestos / Portadas',
          component: () => import('../views/ElementosCompuestosPortadas.vue'),
          meta: {
            title: 'Portadas | Compuestos | sisdai-css'
          },
        },
        {
          path: 'cargando',
          name: 'Compuestos / Cargador',
          component: () => import('../views/ElementosCompuestosCargando.vue'),
          meta: {
            title: 'Cargador | Compuestos | sisdai-css'
          },
        },
        {
          path: 'listas-compuestas',
          name: 'Compuestos / Listas compuestas',
          component: () => import('../views/ElementosCompuestosListas.vue'),
          meta: {
            title: 'Listas compuestas | Compuestos | sisdai-css'
          },
        },
        {
          path: 'botones-compuestos',
          name: 'Compuestos / Botones compuestos',
          component: () => import('../views/ElementosCompuestosBotones.vue'),
          meta: {
            title: 'Botones compuestos | Compuestos | sisdai-css'
          },
        },
        {
          path: 'botones-pictogramas',
          name: 'Compuestos / Botones de pictograma',
          component: () => import('../views/ElementosCompuestosBotonesPictograma.vue'),
          meta: {
            title: 'Botones de pictograma | Compuestos | sisdai-css'
          },
        },
        {
          path: 'menu-flotante',
          name: 'Compuestos / Menú flotante',
          component: () => import('../views/ElementosCompuestosMenuFlotante.vue'),
          meta: {
            title: 'Menú flotante | Compuestos | sisdai-css'
          },
        },
      ]
    },
    {
      path: '/componentes',
      children: [
        {
          path: 'pestanias',
          name: 'Componentes / Pestañas',
          component: () => import('../views/ComponentePestanias.vue'),
          meta: {
            title: 'Pestañas | Componentes | sisdai-css'
          },
        },
        {
          path: 'navegacion',
          name: 'Componentes / Navegación',
          component: () => import('../views/ComponenteNavegacion.vue'),
          meta: {
            title: 'Navegación | Componentes | sisdai-css'
          },
        },
        {
          path: 'menu-lateral',
          name: 'Componentes / Menú lateral',
          component: () => import('../views/ComponenteMenuLateral.vue'),
          meta: {
            title: 'Menú lateral | Componentes | sisdai-css'
          },
        },
        {
          path: 'menu-accesibilidad',
          name: 'Componentes / Menú accesibilidad',
          component: () => import('../views/ComponenteMenuAccesibilidad.vue'),
          meta: {
            title: 'Menú de accesibilidad | Componentes | sisdai-css'
          },
        },
        {
          path: 'modal',
          name: 'Componentes / Modal',
          component: () => import('../views/ComponenteModal.vue'),
          meta: {
            title: 'Modal | Componentes | sisdai-css'
          },
        },
        {
          path: 'boton-flotante',
          name: 'Componentes / Botón flotante',
          component: () => import('../views/ComponenteBotonFlotante.vue'),
          meta: {
            title: 'Botón flotante | Componentes | sisdai-css'
          },
        },
        {
          path: 'colapsable',
          name: 'Componentes / Colapsable',
          component: () => import('../views/ComponenteColapsable.vue'),
          meta: {
            title: 'Colapsable | Componentes | sisdai-css'
          },
        },
        {
          path: 'indice-contenido',
          name: 'Componentes / Índice de contenido',
          component: () => import('../views/ComponenteIndiceContenido.vue'),
          meta: {
            title: 'Índice de contenido | Componentes | sisdai-css'
          },
        },
        {
          path: 'info-despliegue',
          name: 'Componentes / Información de despliegue',
          component: () => import('../views/ComponenteInfoDeDespliegu.vue'),
          meta: {
            title: 'Información de despliegue | Componentes | sisdai-css'
          },
        },
        {
          path: 'globo-informacion',
          name: 'Componentes / Globos de información',
          component: () => import('../views/ComponenteGloboDeInformacion.vue'),
          meta: {
            title: 'Globo de información | Componentes | sisdai-css'
          },
        },
        {
          path: 'institucionales',
          name: 'Componentes / Institucionales',
          component: () => import('../views/ComponentesInstitucionales.vue'),
          meta: {
            title: 'Institucionales | Componentes | sisdai-css'
          },
        },
        {
          path: 'audio',
          name: 'Componentes / Audio',
          component: () => import('../views/ComponenteAudio.vue'),
          meta: {
            title: 'Audio | Componentes | sisdai-css'
          },
        },
        {
          path: 'control-deslizante',
          name: 'Componentes / Control deslizante',
          component: () => import('../views/ComponenteControlDeslizante.vue'),
          meta: {
            title: 'Control deslizante | Componentes | sisdai-css'
          },
        },
        {
          path: 'control-acercar-alejar',
          name: 'Componentes / Control acercar alejar',
          component: () => import('../views/ComponenteControlAcercarAlejar.vue'),
          meta: {
            title: 'Control acercar alejar | Componentes | sisdai-css'
          },
        },
        {
          path: 'campo-busqueda',
          name: 'Componentes / Campo de búsqueda',
          component: () => import('../views/ComponenteCampoBusqueda.vue'),
          meta: {
            title: 'Campo de búsqueda | Componentes | sisdai-css'
          },
        },
        {
          path: 'formulario',
          name: 'Componentes / Campo',
          component: () => import('../views/ComponenteFormulario.vue'),
          meta: {
            title: 'Formulario | Componentes | sisdai-css'
          },
        },
      ]
    },
    {
      path: '/visualizaciones',
      children: [
        {
          path: 'vispestanias',
          name: 'Visualizaciones / Pestañas',
          component: () => import('../views/VisualizacionesPestanias.vue'),
          meta: {
            title: 'Pestañas | Visualizaciones | sisdai-css'
          },
        },
        {
          path: 'vistipografia',
          name: 'Visualizaciones / Tipografía',
          component: () => import('../views/VisualizacionesTipografia.vue'),
          meta: {
            title: 'Tipografía | Visualizaciones | sisdai-css'
          },
        },
        {
          path: 'viscontenedor',
          name: 'Visualizaciones / Contenedor',
          component: () => import('../views/VisualizacionesContenedor.vue'),
          meta: {
            title: 'Contenedor | Visualizaciones | sisdai-css'
          },
        },
        {
          path: 'viscontrolador',
          name: 'Visualizaciones / Controladores',
          component: () => import('../views/VisualizacionesControlador.vue'),
          meta: {
            title: 'Controlador | Visualizaciones | sisdai-css'
          },
        }
      ],
    },
    {
      path: '/auxiliares',
      children: [
        {
          path: 'texto',
          name: 'Auxiliares / Texto',
          component: () => import('../views/AuxiliaresTexto.vue'),
          meta: {
            title: 'Texto | Auxiliares | sisdai-css'
          },
        },
        {
          path: 'visibilidad',
          name: 'Auxiliares / Visibilidad',
          component: () => import('../views/AuxiliaresVisibilidad.vue'),
          meta: {
            title: 'Visibilidad | Auxiliares | sisdai-css'
          },
        },
        {
          path: 'bordes',
          name: 'Auxiliares / Bordes',
          component: () => import('../views/AuxiliaresBordes.vue'),
          meta: {
            title: 'Bordes | Auxiliares | sisdai-css'
          },
        },
        {
          path: 'fondos',
          name: 'Auxiliares / Fondos',
          component: () => import('../views/AuxiliaresFondos.vue'),
          meta: {
            title: 'Fondos | Auxiliares | sisdai-css'
          },
        },
      ]
    },
  ]
})

router.beforeEach((to) => {
  const title = to.meta.title
  if (title) {
    document.title = title
  }
})

export default router
