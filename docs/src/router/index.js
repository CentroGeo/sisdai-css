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
        top: 50,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
      meta: {
        title: 'Sisdai CSS'
      },
    },
    {
      path: '/accesibilidad',
      children: [
        {
          path: 'cambio-fuente',
          name: 'cambio-fuente',
          component: () => import('../views/AccesibilidadCambioFuente.vue'),
          meta: {
            title: 'Cambio de fuente | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'mostrar-solo-texto',
          name: 'mostrar-solo-texto',
          component: () => import('../views/AccesibilidadMostrarSoloTexto.vue'),
          meta: {
            title: 'Mostrar solo texto | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'enlaces-subrayados',
          name: 'enlaces-subrayados',
          component: () => import('../views/AccesibilidadEnlaceSubrayado.vue'),
          meta: {
            title: 'Enlaces subrayados | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'vista-oscura',
          name: 'vista-oscura',
          component: () => import('../views/AccesibilidadVistaOscura.vue'),
          meta: {
            title: 'Vista oscura | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'ir-contenido-principal',
          name: 'ir-contenido-principal',
          component: () => import('../views/AccesibilidadIrContenidoPrincipal.vue'),
          meta: {
            title: 'Ir al contenido principal | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'reducir-incrementar-tipografia',
          name: 'reducir-incrementar-tipografia',
          component: () => import('../views/AccesibilidadReducirAumentarTipografia.vue'),
          meta: {
            title: 'Reducir e incrementar tipografía | Accesibilidad | Sisdai CSS'
          },
        },
      ]
    },
    {
      path: '/fundamentos',
      children: [
        {
          path: 'contenedores',
          name: 'contenedores',
          component: () => import('../views/FundamentosContenedores.vue'),
          meta: {
            title: 'Contenedores | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'reticula',
          name: 'reticula',
          component: () => import('../views/FundamentosReticula.vue'),
          meta: {
            title: 'Retícula | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'espaciado',
          name: 'espaciado',
          component: () => import('../views/FundamentosEspaciado.vue'),
          meta: {
            title: 'Espaciado | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'tipografia',
          name: 'tipografia',
          component: () => import('../views/FundamentosTipografia.vue'),
          meta: {
            title: 'Tipografía | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'pictogramas',
          name: 'pictogramas',
          component: () => import('../views/FundamentosPictogramas.vue'),
          meta: {
            title: 'Pictogramas | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'color',
          name: 'color',
          component: () => import('../views/FundamentosColor.vue'),
          meta: {
            title: 'Color | Fundamentos | Sisdai CSS'
          },
        }
      ]
    },
    {
      path: '/elementos',
      children: [
        {
          path: 'botones',
          name: 'botones',
          component: () => import('../views/ElementosBotones.vue'),
          meta: {
            title: 'Botones | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'imagenes',
          name: 'imagenes',
          component: () => import('../views/ElementosImagenes.vue'),
          meta: {
            title: 'Imágenes | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'formularios',
          name: 'formularios',
          component: () => import('../views/ElementosFormularios.vue'),
          meta: {
            title: 'Formularios | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'hipervinculos',
          name: 'hipervinculos',
          component: () => import('../views/ElementosHipervinculos.vue'),
          meta: {
            title: 'Hipervínculos | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'listas',
          name: 'listas',
          component: () => import('../views/ElementosListas.vue'),
          meta: {
            title: 'Listas | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'tablas',
          name: 'tablas',
          component: () => import('../views/ElementosTablas.vue'),
          meta: {
            title: 'Tablas | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'detalles',
          name: 'detalles',
          component: () => import('../views/ElementosDetalles.vue'),
          meta: {
            title: 'Detalles | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'separadores',
          name: 'separadores',
          component: () => import('../views/ElementosSeparadores.vue'),
          meta: {
            title: 'Separadores | Elementos | Sisdai CSS'
          },
        },
      ]
    },
    {
      path: '/elementos-compuestos',
      children: [
        {
          path: 'tarjetas',
          name: 'tarjetas',
          component: () => import('../views/ElementosCompuestosTarjetas.vue'),
          meta: {
            title: 'Tarjetas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'portadas',
          name: 'portadas',
          component: () => import('../views/ElementosCompuestosPortadas.vue'),
          meta: {
            title: 'Portadas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'cargando',
          name: 'cargando',
          component: () => import('../views/ElementosCompuestosCargando.vue'),
          meta: {
            title: 'Cargador | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'listas-compuestas',
          name: 'listas-compuestas',
          component: () => import('../views/ElementosCompuestosListas.vue'),
          meta: {
            title: 'Listas compuestas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'botones-compuestos',
          name: 'botones-compuestos',
          component: () => import('../views/ElementosCompuestosBotones.vue'),
          meta: {
            title: 'Botones compuestos | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'botones-pictogramas',
          name: 'botones-pictogramas',
          component: () => import('../views/ElementosCompuestosBotonesPictograma.vue'),
          meta: {
            title: 'Botones de pictogramas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'menu-flotante',
          name: 'menu-flotante',
          component: () => import('../views/ElementosCompuestosMenuFlotante.vue'),
          meta: {
            title: 'Menú flotante | Elementos Compuestos | Sisdai CSS'
          },
        },
      ]
    },
    {
      path: '/componentes',
      children: [
        {
          path: 'navegacion',
          name: 'navegacion',
          component: () => import('../views/ComponenteNavegacion.vue'),
          meta: {
            title: 'Navegación | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'menu-lateral',
          name: 'menu-lateral',
          component: () => import('../views/ComponenteMenuLateral.vue'),
          meta: {
            title: 'Manú lateral | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'menu-accesibilidad',
          name: 'menu-accesibilidad',
          component: () => import('../views/ComponenteMenuAccesibilidad.vue'),
          meta: {
            title: 'Menú de accesibilidad | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'modal',
          name: 'modal',
          component: () => import('../views/ComponenteModal.vue'),
          meta: {
            title: 'Modal | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'boton-flotante',
          name: 'boton-flotante',
          component: () => import('../views/ComponenteBotonFlotante.vue'),
          meta: {
            title: 'Boton flotante | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'colapsable',
          name: 'colapsable',
          component: () => import('../views/ComponenteColapsable.vue'),
          meta: {
            title: 'Colapsables | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'indice-contenido',
          name: 'indice-contenido',
          component: () => import('../views/ComponenteIndiceContenido.vue'),
          meta: {
            title: 'Índice de contenido | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'info-despliegue',
          name: 'info-despliegue',
          component: () => import('../views/ComponenteInfoDeDespliegu.vue'),
          meta: {
            title: 'Información de despliegue | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'globo-informacion',
          name: 'globo-informacion',
          component: () => import('../views/ComponenteGloboDeInformacion.vue'),
          meta: {
            title: 'Globo de información | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'institucionales',
          name: 'institucionales',
          component: () => import('../views/ComponentesInstitucionales.vue'),
          meta: {
            title: 'Institucionales | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'audio',
          name: 'audio',
          component: () => import('../views/ComponenteAudio.vue'),
          meta: {
            title: 'Audio | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'control-deslizante',
          name: 'control-deslizante',
          component: () => import('../views/ComponenteControlDeslizante.vue'),
          meta: {
            title: 'Control deslizante | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'control-acercar-alejar',
          name: 'control-acercar-alejar',
          component: () => import('../views/ComponenteControlAcercarAlejar.vue'),
          meta: {
            title: 'Control acercar alejar | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'campo-busqueda',
          name: 'campo-busqueda',
          component: () => import('../views/ComponenteCampoBusqueda.vue'),
          meta: {
            title: 'Campo de búsqueda | Componentes | Sisdai CSS'
          },
        },
      ]
    },
    {
      path: '/visualizaciones',
      children: [
        {
          path: 'vistipografia',
          name: 'vistipografia',
          component: () => import('../views/VisualizacionesTipografia.vue'),
          meta: {
            title: 'Tipografía | Visualizaciones | Sisdai CSS'
          },
        },
        {
          path: 'viscontenedor',
          name: 'viscontenedor',
          component: () => import('../views/VisualizacionesContenedor.vue'),
          meta: {
            title: 'Contenedor | Visualizaciones | Sisdai CSS'
          },
        },
        {
          path: 'viscontrolador',
          name: 'viscontrolador',
          component: () => import('../views/VisualizacionesControlador.vue'),
          meta: {
            title: 'Controladores | Visualizaciones | Sisdai CSS'
          },
        }
      ],
    },
    {
      path: '/auxiliares',
      children: [
        {
          path: 'texto',
          name: 'texto',
          component: () => import('../views/AuxiliaresTexto.vue'),
          meta: {
            title: 'Texto | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'visibilidad',
          name: 'visibilidad',
          component: () => import('../views/AuxiliaresVisibilidad.vue'),
          meta: {
            title: 'Visibilidad | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'bordes',
          name: 'bordes',
          component: () => import('../views/AuxiliaresBordes.vue'),
          meta: {
            title: 'Bordes | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'fondos',
          name: 'fondos',
          component: () => import('../views/AuxiliaresFondos.vue'),
          meta: {
            title: 'Fondos | Auxiliares | Sisdai CSS'
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
