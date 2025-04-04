<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS

const anchoNavegacion = ref(768)
const esColapsable = ref(false)
const menuAbierto = ref(false)
const submenuAbierto = ref(false)

function abrirCerrarMenu() {
  menuAbierto.value = !menuAbierto.value
  submenuAbierto.value = false
}

function abrirCerrarSubmenu() {
  submenuAbierto.value = !submenuAbierto.value
}

function regresarMenu() {
  menuAbierto.value = true
  submenuAbierto.value = false
}

function cerrarMenuSubmenu() {
  menuAbierto.value = false
  submenuAbierto.value = false
}

function ocultarSumbenu() {
  if(esColapsable.value == false) {
    submenuAbierto.value = false
  }
}

function mostrarSubmenu() {
  if(esColapsable.value == false) {
    submenuAbierto.value = true
  }
}

function validarNavegacionColapsable() {
esColapsable.value = (anchoNavegacion.value > window.innerWidth) ? true : false
}

onMounted(() => {
validarNavegacionColapsable()
window.addEventListener('resize', validarNavegacionColapsable)
})

onUnmounted(() => {
window.removeEventListener('resize', validarNavegacionColapsable)
})
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Navegación</h1>
      <p>
        La biblioteca <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Navegación" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiNavegacionPrincipal</code> es esencial para estructurar la navegación principal 
        de un sitio web, permitiendo una integración y personalización eficiente en diferentes tipos de proyectos.
      </p>
      <p>
        La navegación se compone de una etiqueta <code>nav.navegacion</code> separado en dos subsecciones:
      </p>
      <p>
        1. La sección <code>nav-contenedor-identidad</code> funciona de cabecera en el modo colapsado.
        se espera que contenga el logotipo <code>nav-logo</code>, el <code>nav-boton-menu</code> para abrir-cerrar el menu colapsado, y 
        <code>nav-informacion</code> en donde se agrega el nombre de la seccion en la que la persona usuaria se encuentra.
      </p>
      <p>
        2. La sección <code>nav-menu-contenedor</code> es el cuerpo del menú. Dentro de él se encuentran
        el <code>nav-menu-complementario</code>, que es un contenedor opcional utilizado para guardar enlaces externos a otros proyectos relacionados,
        y el <code>nav-menu-principal</code>, en donde se debe agregar la lista de enlaces que son parte de la página web.
      </p>
    </div>
    
    <nav class="navegacion navegacion-extendida nav-doc">
      <div class="nav-contenedor-identidad">
        <img 
          class="nav-logo m-r-1"
          :src="`${cdn}predeterminadas/logo.svg`" 
          alt="logo"
          width="57px"
          height="38px"
        />
      </div>
      <div class="nav-menu-contenedor"> 
        <div class="nav-menu-complementario">
          <a href="#" class="nav-hipervinculo" >
            COMPLEMENTARIO
          </a>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo active">
                Activo
              </a>
            </li>
            <li>
              <a href="#" class="nav-hipervinculo">
                Ejemplo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="contenedor ancho-lectura m-y-2">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav class="navegacion navegacion-extendida">
      
          <div class="nav-contenedor-identidad">
            <img class="nav-logo" src="..." alt="" />
            
            <!-- botón opcional para colapsar navegacion -->
            <!-- <button class="nav-boton-menu"> -->

            <!-- sección opcional para información de página activa en celular -->
            <!-- <div class="nav-informacion"> -->
          </div>

          <div class="nav-menu-contenedor"> 

            <!-- sección opcional para hipervínculos externos -->
            <div class="nav-menu-complementario">
              <a href="#" class="nav-hipervinculo" >
                COMPLEMENTARIO
              </a>
            </div>
            
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo active">
                    Activo
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo">
                    Ejemplo
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10">Elementos de la navegacion</h2>
      <p>
        Se pueden agregar hipervinculos <code>.nav-hipervinculo</code> y botones <code>.nav-boton</code> en elementos de lista para crear el menú.
      </p>
      <p>
        También se pueden incluir sub listas para agregar menús desplegables con el botón <code>.nav-boton-submenu</code> seguido de una lista <code>.nav-submenu</code>
        a la que podemos agregarle la clase <code>.nav-submenu-columnas</code> por si se tiene un contenido muy extenso que se pueda leer mejor a dos columnas.
        Es recomendable agregar un boton <code>.nav-boton-regresar</code> con la funcionalidad de regresar a las opciones del menú principal.
      </p>
    </div>

    <div class="contenedor ancho-lectura m-y-2">

      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav class="navegacion navegacion-extendida">
  
          <div class="nav-contenedor-identidad">
            ...
          </div>
  
          <div class="nav-menu-contenedor"> 
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">
                    Enlace navegación
                  </a>
                </li>
                <li>
                  <button class="nav-boton">
                    Botón de navegación
                  </button>
                </li>
                <li>
                  <button class="nav-boton-submenu">
                    Elemento con submenu
                  </button>
                  <ul class="nav-submenu nav-submenu-columnas">
                    <li>
                      <button class="nav-boton-regresar">
                        Regresar
                      </button>
                    </li>
                    <li>
                      <a href="#" class="nav-hipervinculo">
                        Enlace submenu uno
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-hipervinculo">
                        Enlace submenu dos
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      '/>
    </div>
    
    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10">Navegación extendida colapsable</h2>
      <p>
        Para utilizar la navegación es necesario declarar el ancho que tiene el contenido del menú principal
        y crear una función que la compare contra el ancho de la pantalla para quitarle/agregarle la clase
        <code>.navegacion-extendida</code> a la <code>.navegacion</code>.
      </p>
    </div>
    <nav 
      aria-label="Menú principal"
      class="navegacion nav-doc"
      :class="{'navegacion-extendida': !esColapsable}"
      @mouseleave="ocultarSumbenu()"
    >
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img 
            class="nav-logo" 
            :src="`${cdn}predeterminadas/logo.svg`" 
            alt="logo"
            width="57px"
            height="38px"
          />
        </a>
        <button 
          v-if="esColapsable"
          class="nav-boton-menu"
          :class="{abierto: menuAbierto || submenuAbierto}"
          :aria-expanded="menuAbierto || submenuAbierto"
          aria-label="Menú principal"
          aria-controls="navegacionprincipal"
          @click="abrirCerrarMenu()"
          type="button"
        >
          <span class="nav-icono-menu" aria-hidden="true"></span>
        </button>
        <div 
          v-if="esColapsable" 
          class="nav-informacion"
        >
          Nombre de la sección actual
        </div>
      </div>
      <div 
        class="nav-menu-contenedor"
        :class="{'abierto': menuAbierto, 'submenu-abierto': submenuAbierto }"
        id="navegacionprincipal"
      > 
        <div class="nav-menu-complementario">
          <a
            href="#" 
            class="nav-hipervinculo" 
            target="_blank" 
            rel="noopener noreferrer"
             @click="cerrarMenuSubmenu()"
          >
            ENLACE COMPLEMENTARIO
          </a>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo" @mouseover="ocultarSumbenu()"  @click="cerrarMenuSubmenu()">
                Enlace navegación
              </a>
            </li>
            <li>
              <button 
                class="nav-boton-submenu"
                aria-haspopup="true"
                aria-controls="submenuEjemplo"
                :aria-expanded="submenuAbierto"
                @click="abrirCerrarSubmenu()"
                @mouseover="mostrarSubmenu()"
                type="button"
              >
                Elemento con submenu
              </button>
              <ul 
                id="submenuEjemplo"
                class="nav-submenu"
                :aria-hidden="!submenuAbierto"
                :class="{abierto: submenuAbierto}"
              >
                <li v-if="esColapsable">
                  <button
                    class="nav-boton-regresar"
                    @click="regresarMenu()"
                    type="button"
                  >
                    Regresar
                  </button>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo" @click="cerrarMenuSubmenu()">
                    Enlace submenu uno
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo" @click="cerrarMenuSubmenu()">
                    Enlace submenu dos
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button class="nav-boton boton-sin-contenedor-secundario" @mouseover="ocultarSumbenu()" @click="cerrarMenuSubmenu()" type="button">
                Botón de navegación
              </button>
            </li>
            <li>
              <button aria-label="Buscar" class="nav-boton boton-sin-contenedor-secundario" @mouseover="ocultarSumbenu()" @click="cerrarMenuSubmenu()" type="button">
                <span class="pictograma-buscar" aria-hidden="true"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="contenedor ancho-lectura m-t-2">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='Vue.js'
        codigo='
          const anchoNavegacion = ref(768)
          const esColapsable = ref(false)

          function validarNavegacionColapsable() {
            esColapsable.value = (anchoNavegacion.value > window.innerWidth) ? true : false
          }

          onMounted(() => {
            validarNavegacionColapsable()
            window.addEventListener("resize", validarNavegacionColapsable)
          })

          onUnmounted(() => {
            window.removeEventListener("resize", validarNavegacionColapsable)
          })
      '/>
      <br />
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav 
          aria-label="Menú principal"
          class="navegacion"
          :class="{navegacion-extendida: !esColapsable}"
        >

        ...
        </nav>
      '/>
      <p class="m-t-10">
        La funcionalidad de mostrar/ocultar el menú y submenú dependerá de que tan complejo sea el menú que se 
        requiera en el sitio web que lo utilice. Para el ejemplo que se muestra se tiene un menú colapsable con un submenú.
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='Vue.js'
        codigo='
          const menuAbierto = ref(false)
          const submenuAbierto = ref(false)

          function abrirCerrarMenu() {
            menuAbierto.value = !menuAbierto.value
            submenuAbierto.value = false
          }

          function abrirCerrarSubmenu() {
            submenuAbierto.value = !submenuAbierto.value
          }

          function regresarMenu() {
            menuAbierto.value = true
            submenuAbierto.value = false
          }

          function cerrarMenuSubmenu() {
            menuAbierto.value = false
            submenuAbierto.value = false
          }

          function ocultarSumbenu() {
            if(esColapsable.value == false) {
              submenuAbierto.value = false
            }
          }

          function mostrarSubmenu() {
            if(esColapsable.value == false) {
              submenuAbierto.value = true
            }
          }
        '/>
        <br />
        <p class="nota">
          Nota: las clases con nombres compuestos en el atributo <code>:class</code> deben ir entre comillas simples.
        </p>
        <EjemploCodigo
          :tiene_ejemplo='false'
          tipo='HTML'
          codigo='
          <nav 
            aria-label="Menú principal"
            class="navegacion"
            :class="{navegacion-extendida: !esColapsable}"
            @mouseleave="ocultarSumbenu()"
          >

            <div class="nav-contenedor-identidad">
              <a href="#" class="nav-hiperviculo-logo" >
                <img 
                  class="nav-logo" 
                  src="..." 
                  alt="logo"
                  width="57px"
                  height="38px"
                />
              </a>
              
              <button 
                v-if="esColapsable"
                class="nav-boton-menu"
                :class="{abierto: menuAbierto || submenuAbierto}"
                :aria-expanded="menuAbierto || submenuAbierto"
                aria-label="Menú principal"
                aria-controls="navegacionprincipal"
                @click="abrirCerrarMenu()"
                type="button"
              >
                <span class="nav-icono-menu" aria-hidden="true"></span>
              </button>

              <div 
                v-if="esColapsable" 
                class="nav-informacion"
              >
                Nombre de la sección actual
              </div>
            </div>

            <div 
              class="nav-menu-contenedor"
              :class="{abierto: menuAbierto, submenu-abierto: submenuAbierto }"
              id="navegacionprincipal"
            > 
              <div class="nav-menu-complementario">
                <a
                  href="#" 
                  class="nav-hipervinculo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  @click="cerrarMenuSubmenu()"
                >
                  ENLACE COMPLEMENTARIO
                </a>
              </div>
              
              <div class="nav-menu-principal">
                <ul class="nav-menu">
                  <li>
                    <a href="#" 
                      class="nav-hipervinculo" 
                      @mouseover="ocultarSumbenu()" 
                      @click="cerrarMenuSubmenu()"
                    >
                      Enlace navegación
                    </a>
                  </li>
                  <li>
                    <button 
                      class="nav-boton-submenu"
                      aria-haspopup="true"
                      aria-controls="submenuEjemplo"
                      :aria-expanded="submenuAbierto"
                      @click="abrirCerrarSubmenu()"
                      @mouseover="mostrarSubmenu()"
                      type="button"
                    >
                      Elemento con submenu
                    </button>
                    <ul 
                      id="submenuEjemplo"
                      class="nav-submenu"
                      :aria-hidden="!submenuAbierto"
                      :class="{abierto: submenuAbierto}"
                    >
                      <li v-if="esColapsable">
                        <button
                          class="nav-boton-regresar"
                          @click="regresarMenu()"
                          type="button"
                        >
                          Regresar
                        </button>
                      </li>
                      <li>
                        <a href="#" 
                          class="nav-hipervinculo" 
                          @click="cerrarMenuSubmenu()"
                        >
                          Enlace submenu uno
                        </a>
                      </li>
                      <li>
                        <a href="#" 
                          class="nav-hipervinculo" 
                          @click="cerrarMenuSubmenu()"
                        >
                          Enlace submenu dos
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button class="nav-boton boton-sin-contenedor-secundario" 
                      @mouseover="ocultarSumbenu()" 
                      @click="cerrarMenuSubmenu()"
                      type="button"
                    >
                      Botón de navegación
                    </button>
                  </li>
                  <li>
                    <button class="nav-boton boton-sin-contenedor-secundario" 
                      aria-label="Buscar"
                      @mouseover="ocultarSumbenu()" 
                      @click="cerrarMenuSubmenu()"
                      type="button"
                    >
                      <span class="pictograma-buscar" aria-hidden="true"></span>
                    </button>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        '/>
    </div>
  </div>
</template>

<style scoped>
  .nav-doc {
    z-index:1;
  }
  </style>