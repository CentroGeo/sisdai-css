<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { onBeforeMount, onMounted, onUnmounted, ref, watch, computed } from 'vue'
  import pkg from '../../package.json'
  
  const isA11yOscura = ref(null)
  const isA11yTypography = ref(null)
  const isA11yView = ref(null)
  const isA11yUnderline = ref(null)
  const fontSize = ref(16)
  const showGob = ref(null)
  const showMenu = ref(null)
  const showSubmenu = ref('')
  // navegacion
  const esColapsable = ref(false)
  const anchoNavegacion = ref(1450)

  isA11yOscura.value, isA11yTypography.value, isA11yView.value, isA11yUnderline.value, showGob.value, showMenu.value, 
  showSubmenu.value = false
  
  function toggleA11yTypography() {
    isA11yTypography.value = !isA11yTypography.value
  }

  function toggleA11yView() {
    isA11yView.value = !isA11yView.value
  }
  function toggleA11yLink() {
    isA11yUnderline.value = !isA11yUnderline.value
  }

  function toggleGob() {
    showMenu.value = false
    showGob.value = !showGob.value
  }
  function toggleMenu() {
    showGob.value = false
    showSubmenu.value = ''
    showMenu.value = !showMenu.value
  }
  function toggleSubmenu(submenu) {
    if(showSubmenu.value == submenu) {
      showSubmenu.value = ''
    } else {
      showSubmenu.value = submenu
    }
  }
  function mostrarSubmenu(submenu) {
    if(esColapsable.value == false) {
      showSubmenu.value = submenu
    }
  }
  function ocultarSumbenu() {
    if(esColapsable.value == false) {
      showSubmenu.value = ''
    }
  }

  function upFontSize() {
    fontSize.value ++
    let up_size = `${fontSize.value}px`
    document.documentElement.style.setProperty('--tipografia-tamanio',up_size)
  }
  function downFontSize() {
    fontSize.value --
    let down_size = `${fontSize.value}px`
    document.documentElement.style.setProperty('--tipografia-tamanio',down_size)
  }
  function resetA11y() {
    isA11yTypography.value = false
    isA11yView.value = false
    isA11yUnderline.value = false
    fontSize.value = 16
    document.documentElement.style.setProperty('--tipografia-tamanio','16')
    // Resetea variable
    isA11yOscura.value = false
    tema.value = 'clara'
  }

  // Módulo de vista oscura
  const tema = ref('auto') // 'oscura' | 'clara' | 'auto'
  const perfil = ref('predeterminado') // 'predeterminado' | 'gema' | 'eni' 
  const body = document.querySelector("body")

  function alternarTema() {
    // rotar entre estos 3 temas
    const themes = ['clara','oscura','auto']
    tema.value = themes[
      (themes.indexOf(tema.value) + 1) % 3
    ]
  }

  function agregarPerfilTemaPredeterminados() {
    body.setAttribute('data-perfil', perfil.value)
    body.setAttribute('data-tema', 'claro')
  }

  function alternarPerfil() {
    // remueve el atributo para dejar a los otros perfiles
    // body.removeAttribute('data-tema-oscuro')
    // body.removeAttribute('data-tema-claro')
    
    // rotar entre estos perfiles
    const perfiles = ['predeterminado', 'gema', 'eni']
    perfil.value = perfiles[
      (perfiles.indexOf(perfil.value) + 1) % 3
    ]

    body.setAttribute('data-perfil', perfil.value)
  }

  function getTemaDispositivo() {
    if (
      (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        tema.value === 'auto') ||
      tema.value === 'oscura'
    ) {
      return 'oscura'
    }
    return 'clara'
  }

  function setClaseA11yOscura(temaClaroUOscuro) {
    temaClaroUOscuro === 'oscura' ? 
      isA11yOscura.value = true : isA11yOscura.value = false
  }

  function setTemaClaro() {
    body.setAttribute(`data-tema`, 'claro')
  }

  function setTemaOscuro() {
    body.setAttribute(`data-tema`, 'oscuro')
  }

  function setTemaEnDocumentoYLocalStorage() {
    localStorage.setItem("theme", tema.value)
    let temaClaroUOscuro = getTemaDispositivo()

    // Agrega claseSeleccionada `.a11y-oscura`
    setClaseA11yOscura(temaClaroUOscuro)

    // Agrega y/o remueve el atributo selecctor para :root
    switch(temaClaroUOscuro) {
      case 'clara':
        setTemaClaro()
        break
      case 'oscura':
        setTemaOscuro()
        break
    }
  }
  const nombreTemaActual = computed(() => {
    const nombres = {
      'clara':'Clara',
      'oscura':'Oscura',
      'auto':'Automática'
    }
    return nombres[tema.value]
  })

  function validarNavegacionColapsable() {
    esColapsable.value = (anchoNavegacion.value > window.innerWidth) ? true : false
  }
   
  onBeforeMount(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change',setTemaEnDocumentoYLocalStorage)
  })

  onMounted(() => {
    agregarPerfilTemaPredeterminados()

    setTemaEnDocumentoYLocalStorage()
    
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change',setTemaEnDocumentoYLocalStorage)

    validarNavegacionColapsable()
    
    window.addEventListener('resize', validarNavegacionColapsable)
  })

  onUnmounted(() => {
    window.removeEventListener('change', setTemaEnDocumentoYLocalStorage)
    window.removeEventListener('resize', validarNavegacionColapsable)
  })

  watch([perfil, tema], () => {
    setTemaEnDocumentoYLocalStorage()    
  })
  // if(localStorage.getItem("theme")) {
  //   theme.value = localStorage.getItem("theme")
  // }

  watch([isA11yOscura, isA11yTypography, isA11yView, isA11yUnderline], () => {
    // Coloca las clases accesibles en el body
    isA11yTypography.value 
      ? body.classList.add('a11y-tipografia') 
      : body.classList.remove('a11y-tipografia')
    isA11yView.value 
      ? body.classList.add('a11y-simplificada') 
      : body.classList.remove('a11y-simplificada')
    isA11yUnderline.value 
      ? body.classList.add('a11y-hipervinculos') 
      : body.classList.remove('a11y-hipervinculos')
    isA11yOscura.value 
      ? body.classList.add('a11y-oscura') 
      : body.classList.remove('a11y-oscura')
  })
  
</script>

<template>
  <div>
    <menu class="tmp-menu" aria-label="funciones de accesibilidad">
      <button class="boton-primario" @click="toggleA11yTypography">
        Cambiar fuente tipográfica
      </button>
      <button class="boton-primario" @click="toggleA11yLink">
        Subrayar enlaces
      </button>
      <button class="boton-primario" @click="toggleA11yView">
        {{ isA11yView ? 'Mostrar multimedia y texto' : 'Mostrar solo texto'}}
      </button>
      <button class="boton-primario" @click="alternarPerfil">
        Perfil de color {{ perfil }}
      </button>
      <button class="boton-primario" @click="alternarTema">
        Vista {{ nombreTemaActual }}
      </button>
      <button class="boton-primario" @click="downFontSize">
        Reducir tipografía
      </button>
      <button class="boton-primario" @click="upFontSize">
        Incrementar tipografía
      </button>
      <button class="boton-secundario" @click="resetA11y">
        Restablecer
      </button>
    </menu>
    
    <nav aria-label="Menú del Gobierno de México" class="navegacion navegacion-gobmx" :class="{'navegacion-extendida': !esColapsable}">
      <div class="nav-contenedor-identidad">
        <a href="https://www.gob.mx/" class="nav-hiperviculo-logo" target="_blank" rel="noopener">
          <img 
            class="nav-logo" 
            src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
            alt="Gobierno de México."
            width="104.8"
            height="38" 
          />
        </a>
        <button 
          v-if="esColapsable" 
          @click="toggleGob" 
          class="nav-boton-menu" 
          :class="{ 'abierto': showGob }" 
          aria-label="Menú del Gobierno de México" 
          :aria-hidden="!esColapsable"
          :aria-expanded="esColapsable && !showGob"
          aria-controls="menugobiernodemexico" 
          id="botongobmx"
          >
          <span class="nav-icono-menu" aria-hidden="true"></span>
        </button>
      </div>
      <div id="menugobiernodemexico" class="nav-menu-contenedor" :class="{ 'abierto': showGob }">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><a href="https://www.gob.mx/tramites" class="nav-hipervinculo" target="_blank" rel="noopener noreferrer">Trámites</a></li>
            <li><a href="https://www.gob.mx/gobierno" class="nav-hipervinculo" target="_blank" rel="noopener noreferrer">Gobierno</a></li>
            <li>
              <a href="https://www.gob.mx/busqueda" class="nav-hipervinculo" target="_blank" rel="noopener noreferrer" aria-label="Búsqueda">
                <span class="pictograma-buscar" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav aria-label="Menú principal" class="navegacion navegacion-pegada" :class="{'navegacion-extendida': !esColapsable}" @mouseleave="ocultarSumbenu()">
      <div class="nav-contenedor-identidad">
        <a href="https://conahcyt.mx/" class="nav-hiperviculo-logo" target="_blank" rel="noopener noreferrer">
          <img class="nav-logo a11y-oscura-filtro-blanco" width="130" height="38" src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" alt="Conahcyt">
        </a>
        <button 
          v-if="esColapsable"
          @click="toggleMenu" 
          class="nav-boton-menu" 
          :class="{ 'abierto': showMenu }" 
          aria-label="Menú Principal"
          :aria-hidden="!esColapsable"
          :aria-expanded="esColapsable && !showGob"
          aria-controls="menusisdaicss" 
          id="botonsisdaicss"
        >
          <span class="nav-icono-menu" aria-hidden="true"></span>
        </button>
        <div v-if="esColapsable" class="nav-informacion">
          Usted está en: <b>{{ $route.name }}</b>
        </div>
      </div>
      <div id="menusisdaicss" class="nav-menu-contenedor" :class="{ 'abierto': showMenu, 'submenu-abierto': showSubmenu != '' }" >
        <div class="nav-menu-complementario">
          <a href="https://sisdai.conahcyt.mx" target="_blank" rel="noopener noreferrer" class="nav-hipervinculo">IR A SISDAI</a>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><RouterLink class="nav-hipervinculo" to="/" exact @mouseover="mostrarSubmenu('')">Inicio</RouterLink></li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('accesibilidad')" 
                @mouseover="mostrarSubmenu('accesibilidad')"
                :aria-expanded="showSubmenu == 'accesibilidad'"
                aria-controls="submenuaccesibilidad"
                id="botonaccesibilidad"
                >
                  Accesibilidad
                </button>
              <ul id="submenuaccesibilidad" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'accesibilidad' }" :aria-hidden="showSubmenu != 'accesibilidad'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/cambio-fuente">Cambio de fuente</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/enlaces-subrayados">Enlaces subrayados</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/ir-contenido-principal">Ir a contenido principal</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/mostrar-solo-texto">Mostrar solo texto</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/vista-oscura">Vista oscura</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/accesibilidad/reducir-incrementar-tipografia">Reducir/Incrementar tipografía <span class="etiqueta">pre</span></RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('fundamentos')" 
                @mouseover="mostrarSubmenu('fundamentos')"
                :aria-expanded="showSubmenu == 'fundamentos'"
                aria-controls="submenufundamentos"
                id="botonfundamentos"
              >
                Fundamentos
              </button>
              <ul id="submenufundamentos" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'fundamentos' }" :aria-hidden="showSubmenu != 'fundamentos'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/color">Color</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/contenedores">Contenedores</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/espaciado">Espaciado</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/pictogramas">Pictogramas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/reticula">Retícula</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/tipografia">Tipografia</RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('elementos')" 
                @mouseover="mostrarSubmenu('elementos')"
                :aria-expanded="showSubmenu == 'elementos'"
                aria-controls="submenuelementos"
                id="botonelementos"
              >
                Elementos
              </button>
              <ul id="submenuelementos" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'elementos' }" :aria-hidden="showSubmenu != 'elementos'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/botones">Botones</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/formularios">Formularios</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/hipervinculos">Hipervínculos</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/imagenes">Imágenes</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/listas">Listas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/tablas">Tablas</RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('elementoscompuestos')" 
                @mouseover="mostrarSubmenu('elementoscompuestos')"
                :aria-expanded="showSubmenu == 'elementoscompuestos'"
                aria-controls="submenucompuestos"
                id="botoncompuestos"
              >
                Compuestos
              </button>
              <ul id="submenucompuestos" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'elementoscompuestos' }" :aria-hidden="showSubmenu != 'elementoscompuestos'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/botones-pictogramas">Botones Pictogramas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/listas-compuestas">Listas Compuestas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/menu-flotante">Menu Flotante</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/portadas">Portadas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/tarjetas">Tarjetas</RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('componentes')" 
                @mouseover="mostrarSubmenu('componentes')"
                :aria-expanded="showSubmenu == 'componentes'"
                aria-controls="submenucomponentes"
                id="botoncomponentes"
              >
                Componentes
              </button>
              <ul id="submenucomponentes" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'componentes' }" :aria-hidden="showSubmenu != 'componentes'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/audio">Audio</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/campo-busqueda">Campo de Búsqueda</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/control-acercar-alejar">Control Acercar Alejar</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/control-deslizante">Control Deslizante</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/formulario">Formulario</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/globo-informacion">Globos de Información</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/info-despliegue">Información de despliegue</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/menu-accesibilidad">Menú Accesibilidad</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/modal">Modal</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/navegacion">Navegacion</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/institucionales">* Institucionales</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/boton-flotante">Botón flotante <span class="etiqueta">pre</span></RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/colapsable">Colapsable <span class="etiqueta">pre</span></RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/indice-contenido">Índice de Contenido <span class="etiqueta">pre</span></RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/componentes/menu-lateral">Menú Lateral <span class="etiqueta">pre</span></RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('visualizaciones')" 
                @mouseover="mostrarSubmenu('visualizaciones')"
                :aria-expanded="showSubmenu == 'visualizaciones'"
                aria-controls="submenuvisualizaciones"
                id="botonvisualizaciones"
              >
                Visualizaciones
              </button>
              <ul id="submenuvisualizaciones" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'visualizaciones' }" :aria-hidden="showSubmenu != 'visualizaciones'">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/viscontenedor">Contenedor</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/viscontrolador">Controlador</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/vistipografia">Tipografía</RouterLink></li>
              </ul>
            </li>
            <li>
              <button 
                class="nav-boton-submenu" 
                @click="toggleSubmenu('auxiliares')" 
                @mouseover="mostrarSubmenu('auxiliares')"
                :aria-expanded="showSubmenu == 'auxiliares'"
                aria-controls="submenuauxiliares"
                id="botonauxiliares"
              >
                Auxiliares
              </button>
              <ul id="submenuauxiliares" class="nav-submenu" :class="{ 'abierto': showSubmenu == 'auxiliares' }">
                <li v-if="esColapsable"><button class="nav-boton-regresar" @click="toggleSubmenu('')">Regresar al menú principal</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/bordes">Bordes</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/fondos">Fondos</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/texto">Texto</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/visibilidad">Visibilidad</RouterLink></li>
              </ul>
            </li>
            <li>
              <a
                href="https://codigo.conahcyt.mx/sisdai/sisdai-css"
                target="_blank"
                rel="noopener noreferrer"
                class="nav-boton boton boton-sin-contenedor-secundario"
              >
                <img
                  class="nav-logo"
                  src="/gitlab-logo-500.png"
                  :alt="`Repositorio de código sisdai-css versión ${pkg.version}`"
                />
                <span aria-hidden="true">v{{ pkg.version }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main id="principal">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
  .tmp-menu {
    background: #0002;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 8px;
    position: fixed;
    top: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: baseline;
    z-index: 999;
    gap: 8px;
    // display: none;
  }
  .tmp-menu * {
    font-size: 12px;
    line-height: 12px;
    padding: 8px;
  }
  .tmp-menu .info {
    flex: 1;
    text-align: right;
  }
  .etiqueta {
    font-size: 0.75rem; // 14px
    font-weight: 600;
    padding: .25rem .5rem;
    line-height: calc(1em * 1.3);
    margin: 0;
    display: inline-flex;
    border-radius: 20px;
    background-color: #f005;
  }
</style>
