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
      name: 'Inicio',
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
          name: 'Accesibilidad / Cambio de fuente',
          component: () => import('../views/AccesibilidadCambioFuente.vue'),
          meta: {
            title: 'Cambio de fuente | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'mostrar-solo-texto',
          name: 'Accesibilidad / Mostrar solo texto',
          component: () => import('../views/AccesibilidadMostrarSoloTexto.vue'),
          meta: {
            title: 'Mostrar solo texto | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'enlaces-subrayados',
          name: 'Accesibilidad / Enlaces subrayados',
          component: () => import('../views/AccesibilidadEnlaceSubrayado.vue'),
          meta: {
            title: 'Enlaces subrayados | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'vista-oscura',
          name: 'Accesibilidad / Vista oscura',
          component: () => import('../views/AccesibilidadVistaOscura.vue'),
          meta: {
            title: 'Vista oscura | Accesibilidad | Sisdai CSS'
          },
        },
        {
          path: 'ir-contenido-principal',
          name: 'Accesibilidad / Ir al contenido principal',
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
          name: 'Fundamentos / Contenedores',
          component: () => import('../views/FundamentosContenedores.vue'),
          meta: {
            title: 'Contenedores | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'reticula',
          name: 'Fundamentos / Retícula',
          component: () => import('../views/FundamentosReticula.vue'),
          meta: {
            title: 'Retícula | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'espaciado',
          name: 'Fundamentos / Espaciado',
          component: () => import('../views/FundamentosEspaciado.vue'),
          meta: {
            title: 'Espaciado | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'tipografia',
          name: 'Fundamentos / Tipografía',
          component: () => import('../views/FundamentosTipografia.vue'),
          meta: {
            title: 'Tipografía | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'pictogramas',
          name: 'Fundamentos / Pictogramas',
          component: () => import('../views/FundamentosPictogramas.vue'),
          meta: {
            title: 'Pictogramas | Fundamentos | Sisdai CSS'
          },
        },
        {
          path: 'color',
          name: 'Fundamentos / Color',
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
          name: 'Elementos / Botones',
          component: () => import('../views/ElementosBotones.vue'),
          meta: {
            title: 'Botones | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'imagenes',
          name: 'Elementos / Imágenes',
          component: () => import('../views/ElementosImagenes.vue'),
          meta: {
            title: 'Imágenes | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'formularios',
          name: 'Elementos / Formularios',
          component: () => import('../views/ElementosFormularios.vue'),
          meta: {
            title: 'Formularios | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'hipervinculos',
          name: 'Elementos / Hipervínculos',
          component: () => import('../views/ElementosHipervinculos.vue'),
          meta: {
            title: 'Hipervínculos | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'listas',
          name: 'Elementos / Listas',
          component: () => import('../views/ElementosListas.vue'),
          meta: {
            title: 'Listas | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'tablas',
          name: 'Elementos / Tablas',
          component: () => import('../views/ElementosTablas.vue'),
          meta: {
            title: 'Tablas | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'detalles',
          name: 'Elementos / Detalles',
          component: () => import('../views/ElementosDetalles.vue'),
          meta: {
            title: 'Detalles | Elementos | Sisdai CSS'
          },
        },
        {
          path: 'separadores',
          name: 'Elementos / Separadores',
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
          name: 'Compuestos / Tarjetas',
          component: () => import('../views/ElementosCompuestosTarjetas.vue'),
          meta: {
            title: 'Tarjetas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'portadas',
          name: 'Compuestos / Portadas',
          component: () => import('../views/ElementosCompuestosPortadas.vue'),
          meta: {
            title: 'Portadas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'cargando',
          name: 'Compuestos / Cargador',
          component: () => import('../views/ElementosCompuestosCargando.vue'),
          meta: {
            title: 'Cargador | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'listas-compuestas',
          name: 'Compuestos / Listas compuestas',
          component: () => import('../views/ElementosCompuestosListas.vue'),
          meta: {
            title: 'Listas compuestas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'botones-compuestos',
          name: 'Compuestos / Botones compuestos',
          component: () => import('../views/ElementosCompuestosBotones.vue'),
          meta: {
            title: 'Botones compuestos | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'botones-pictogramas',
          name: 'Compuestos / Botones de pictogramas',
          component: () => import('../views/ElementosCompuestosBotonesPictograma.vue'),
          meta: {
            title: 'Botones de pictogramas | Elementos Compuestos | Sisdai CSS'
          },
        },
        {
          path: 'menu-flotante',
          name: 'Compuestos / Menú flotante',
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
          name: 'Componentes / Navegación',
          component: () => import('../views/ComponenteNavegacion.vue'),
          meta: {
            title: 'Navegación | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'menu-lateral',
          name: 'Componentes / Menú lateral',
          component: () => import('../views/ComponenteMenuLateral.vue'),
          meta: {
            title: 'Manú lateral | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'menu-accesibilidad',
          name: 'Componentes / Menú accesibilidad',
          component: () => import('../views/ComponenteMenuAccesibilidad.vue'),
          meta: {
            title: 'Menú de accesibilidad | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'modal',
          name: 'Componentes / Modal',
          component: () => import('../views/ComponenteModal.vue'),
          meta: {
            title: 'Modal | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'boton-flotante',
          name: 'Componentes / Botón flotante',
          component: () => import('../views/ComponenteBotonFlotante.vue'),
          meta: {
            title: 'Boton flotante | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'colapsable',
          name: 'Componentes / Colapsable',
          component: () => import('../views/ComponenteColapsable.vue'),
          meta: {
            title: 'Colapsables | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'indice-contenido',
          name: 'Componentes / Índice de contenido',
          component: () => import('../views/ComponenteIndiceContenido.vue'),
          meta: {
            title: 'Índice de contenido | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'info-despliegue',
          name: 'Componentes / Información de despliegue',
          component: () => import('../views/ComponenteInfoDeDespliegu.vue'),
          meta: {
            title: 'Información de despliegue | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'globo-informacion',
          name: 'Componentes / Globos de información',
          component: () => import('../views/ComponenteGloboDeInformacion.vue'),
          meta: {
            title: 'Globo de información | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'institucionales',
          name: 'Componentes / Institucionales',
          component: () => import('../views/ComponentesInstitucionales.vue'),
          meta: {
            title: 'Institucionales | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'audio',
          name: 'Componentes / Audio',
          component: () => import('../views/ComponenteAudio.vue'),
          meta: {
            title: 'Audio | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'control-deslizante',
          name: 'Componentes / Control deslizante',
          component: () => import('../views/ComponenteControlDeslizante.vue'),
          meta: {
            title: 'Control deslizante | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'control-acercar-alejar',
          name: 'Componentes / Control acercar alejar',
          component: () => import('../views/ComponenteControlAcercarAlejar.vue'),
          meta: {
            title: 'Control acercar alejar | Componentes | Sisdai CSS'
          },
        },
        {
          path: 'campo-busqueda',
          name: 'Componentes / Campo de búsqueda',
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
          name: 'Visualizaciones / Tipografía',
          component: () => import('../views/VisualizacionesTipografia.vue'),
          meta: {
            title: 'Tipografía | Visualizaciones | Sisdai CSS'
          },
        },
        {
          path: 'viscontenedor',
          name: 'Visualizaciones / Contenedor',
          component: () => import('../views/VisualizacionesContenedor.vue'),
          meta: {
            title: 'Contenedor | Visualizaciones | Sisdai CSS'
          },
        },
        {
          path: 'viscontrolador',
          name: 'Visualizaciones / Controladores',
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
          name: 'Auxiliares / Texto',
          component: () => import('../views/AuxiliaresTexto.vue'),
          meta: {
            title: 'Texto | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'visibilidad',
          name: 'Auxiliares / Visibilidad',
          component: () => import('../views/AuxiliaresVisibilidad.vue'),
          meta: {
            title: 'Visibilidad | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'bordes',
          name: 'Auxiliares / Bordes',
          component: () => import('../views/AuxiliaresBordes.vue'),
          meta: {
            title: 'Bordes | Auxiliares | Sisdai CSS'
          },
        },
        {
          path: 'fondos',
          name: 'Auxiliares / Fondos',
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
