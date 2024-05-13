<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { onBeforeMount, onMounted, ref, watch, computed } from 'vue'
  
  const isA11yOscura = ref(null)
  const isA11yTypography = ref(null)
  const isA11yView = ref(null)
  const isA11yUnderline = ref(null)
  const fontSize = ref(16)
  const showGob = ref(null)
  const showMenu = ref(null)
  const showSubmenu = ref('')

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
    showSubmenu.value = submenu
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
  const perfil = ref('eni') // 'eni' | 'sisdai' | 'gema'
  const body = document.querySelector("body")

  function alternarTema() {
    // rotar entre estos 3 temas
    const themes = ['clara','oscura','auto']
    tema.value = themes[
      (themes.indexOf(tema.value) + 1) % 3
    ]
  }

  function alternarPerfil() {
    // remueve el atributo para dejar a los otros perfiles
    body.removeAttribute(`data-dark-theme-${perfil.value}`)
    body.removeAttribute(`data-light-theme-${perfil.value}`)
    
    // rotar entre estos perfiles
    const perfiles = ['eni', 'sisdai', 'gema']
    perfil.value = perfiles[
      (perfiles.indexOf(perfil.value) + 1) % 3
    ]
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
    body.removeAttribute(`data-dark-theme-${perfil.value}`)
    body.removeAttribute(`data-light-theme-${perfil.value}`)
    body.setAttribute(`data-light-theme-${perfil.value}`, true)
  }

  function setTemaOscuro() {
    body.removeAttribute(`data-light-theme-${perfil.value}`)
    body.removeAttribute(`data-dark-theme-${perfil.value}`)
    body.setAttribute(`data-dark-theme-${perfil.value}`, true)
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
      'clara':'Claro',
      'oscura':'Oscuro',
      'auto':'Automático'
    }
    return nombres[tema.value]
  })
   
  onBeforeMount(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change',setTemaEnDocumentoYLocalStorage)
  })

  onMounted(() => {
    setTemaEnDocumentoYLocalStorage()
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change',setTemaEnDocumentoYLocalStorage)
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
    <a href="#principal" class="ir-contenido-principal">Ir a contenido principal</a>
    <nav class="navegacion navegacion-gobmx">
      <div class="nav-contenedor-identidad">
        <a href="https://www.gob.mx/" class="nav-hiperviculo-logo" target="_blank" rel="noopener">
          <img width="128" height="38" class="nav-logo" src="https://cdn.conahcyt.mx/sisdai/recursos/gobmx.svg" alt="Gobierno de México.">
        </a>
        <button @click="toggleGob" class="nav-boton-menu" :class="{ 'abierto': showGob }">
          <span class="nav-icono-menu"></span>
        </button>
      </div>
      <div class="nav-menu-contedor" :class="{ 'abierto': showGob }">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><a href="https://mivacuna.salud.gob.mx/index.php" class="nav-hipervinculo" target="_blank" rel="noopener">Registro para vacunación</a></li>
            <li><a href="https://coronavirus.gob.mx/" class="nav-hipervinculo" target="_blank" rel="noopener">Información sobre COVID-19</a></li>
            <li><a href="https://www.gob.mx/tramites" class="nav-hipervinculo" target="_blank" rel="noopener">Trámites</a></li>
            <li><a href="https://www.gob.mx/gobierno" class="nav-hipervinculo" target="_blank" rel="noopener">Gobierno</a></li>
            <li><a href="https://www.gob.mx/busqueda" class="nav-hipervinculo" target="_blank" rel="noopener"><span class="icono-buscar"></span> </a></li>
          </ul>
        </div>
      </div>
    </nav>

    <nav class="navegacion navegacion-conahcyt navegacion-pegada ">
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img class="nav-logo invertir" width="130" height="38" src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" alt="Conahcyt.">
        </a>
        <button @click="toggleMenu" class="nav-boton-menu" :class="{ 'abierto': showMenu }">
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">
          Sección: <b>{{ $route.name }}</b>
        </div>
      </div>
      <div class="nav-menu-contedor" :class="{ 'abierto': showMenu, 'submenu-abierto': showSubmenu != '' }">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><RouterLink class="nav-hipervinculo" to="/" exact>Inicio</RouterLink></li>

            <!-- ACCESIBILIDAD
            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('accesibilidad')">Accesibilidad</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'accesibilidad' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Accesibilidad</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/">Cambio de fuente</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/">Vista simplificada</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/">Reducir/Incrementar tipografía</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/">Enlaces subrayados</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/">Modo claro/oscuro</RouterLink></li>
              </ul>
            </li> 
            -->
            
            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('fundamentos')">Fundamentos</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'fundamentos' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Fundamentos</button></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/fundamentos/color">Color</RouterLink></li> -->
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/tipografia">Tipografia</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/pictogramas">Pictogramas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/contenedores">Contenedores</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/reticula">Retícula</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/fundamentos/espaciado">Espaciado</RouterLink></li>
              </ul>
            </li>

            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('elementos')">Elementos</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'elementos' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Elementos</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/hipervinculos">Hipervínculos</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/botones">Botones</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/imagenes">Imágenes</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/formularios">Formularios</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/listas">Listas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos/tablas">Tablas</RouterLink></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/elementos/detalles">Detalles</RouterLink></li> --> 
                <!-- <li><RouterLink class="nav-hipervinculo" to="/elementos/separadores">Separadores</RouterLink></li> --> 
              </ul>
            </li>

            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('elementoscompuestos')">Elementos Compuestos</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'elementoscompuestos' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Elementos Compuestos</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/portadas">Portadas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/tarjetas">Tarjetas</RouterLink></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/alertas">Alertas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/cargando">Cargando</RouterLink></li> -->
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/listas-compuestas">Listas Compuestas</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/elementos-compuestos/botones-compuestos">Botones Compuestos</RouterLink></li>
              </ul>
            </li>

            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('componentes')">Componentes</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'componentes' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Componentes</button></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/navegacion">Navegacion</RouterLink></li> -->
                <li><RouterLink class="nav-hipervinculo" to="/componentes/modal">Modal</RouterLink></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/menu-lateral">Menú Lateral</RouterLink></li> -->
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/menu-accesibilidad">Menú Accesibilidad</RouterLink></li> -->
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/indice-contenido">Índice de Contenido</RouterLink></li> -->
                <li><RouterLink class="nav-hipervinculo" to="/componentes/globo-informacion">Globos de Información</RouterLink></li>
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/colapsable">Colapsable</RouterLink></li> -->
                <!-- <li><RouterLink class="nav-hipervinculo" to="/componentes/boton-flotante">Botón flotante</RouterLink></li> -->
              </ul>
            </li>

            <!-- <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('visualizaciones')">Visualizaciones</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'visualizaciones' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Visualizaciones</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/viscontenedor">Contenedor</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/vistipografia">Tipografía</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/visualizaciones/viscontrolador">Controlador</RouterLink></li>
              </ul>
            </li> -->

            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu" @click="toggleSubmenu('auxiliares')">Auxiliares</button>
              <ul class="nav-submenu" :class="{ 'abierto': showSubmenu == 'auxiliares' }">
                <li><button class="nav-boton-regresar" @click="toggleSubmenu('')">Auxiliares</button></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/texto">Texto</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/bordes">Bordes</RouterLink></li>
                <li><RouterLink class="nav-hipervinculo" to="/auxiliares/visibilidad">Visibilidad</RouterLink></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

    <menu role="complementary" class="tmp-menu">
      <span>A11y</span>
      <button class="boton-primario" @click="toggleA11yTypography">Cambiar tipografia</button>
      <button class="boton-primario" @click="toggleA11yView">{{ isA11yView ? 'Vista normal' : 'Vista simplificada'}}</button>
      <button class="boton-primario" @click="downFontSize">Reducir fuente</button>
      <button class="boton-primario" @click="upFontSize">Incrementear fuente</button>
      <button class="boton-primario" @click="toggleA11yLink">Hipervínculos subrayados</button>

      <button 
        class="boton-primario" 
        @click="alternarTema">
        Tema: {{ nombreTemaActual }}
      </button>
      <button       
        class="boton-primario" 
        @click="alternarPerfil">
        Perfil: {{ perfil }}
      </button>

      <button class="boton-secundario" @click="resetA11y">Apagar</button>
    </menu>
    <main role="main" id="principal">
      <RouterView />
    </main>

  </div>
</template>

<style lang="scss" scoped>
  .tmp-menu {
    background: #000;
    color: #aaa;
    display: flex;
    margin: 0;
    padding: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: baseline;
    z-index: 1111;
    gap: 8px;
  }
  .tmp-menu * {
    font-size: 14px;
    line-height: 14px;
    padding: 8px 16px;
  }
</style>
