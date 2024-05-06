<template>
  <div>
    <h1>Navegación</h1>
    <nav class="navegacion">
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <svg
            class="nav-logo"
            id="logo-14"
            width="60"
            height="38"
            viewBox="0 0 73 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
              class="ccustom"
              fill="#68DBFF"
            ></path>
            <path
              d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
              class="ccompli1"
              fill="#FF7917"
            ></path>
            <path
              d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
              class="ccompli2"
              fill="#5D2C02"
            ></path>
          </svg>
        </a>
        <button class="nav-boton-menu">
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div class="nav-menu-contedor abierto">
        <div class="nav-menu-complementario">
          <a href="#" class="nav-hipervinculo">Menú externo</a>
          <button class="nav-boton">nav boton</button>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><a href="#" class="nav-hipervinculo">Menú</a></li>
            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu">
                <span class="icono-grupo m-r-1"></span> Menú con submenu
              </button>
              <ul class="nav-submenu">
                <li>
                  <button class="nav-boton-regresar">Menú con submenu</button>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo"
                    >Menú del submenu pues en teoria se estira</a
                  >
                </li>
                <li><a href="#" class="nav-hipervinculo">Menú del submenu</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-hipervinculo active">
                <span class="icono-persona m-r-1"></span>
                Menú activo
              </a>
            </li>
            <li><a href="#" class="nav-hipervinculo">Menú</a></li>
            <li><a href="#" class="nav-hipervinculo">Menú</a></li>
            <li>
              <button class="nav-boton">nav boton</button>
            </li>
            <li>
              <button class="nav-boton-icon">
                <span class="icono-buscar"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h2 class="m-t-10">Identidad</h2>
    <div class="contenedor-lectura ">
      <p>
        Hay estilos distintos para movil y escritorio, sin embargo, en ocasiones
        puede ser necesario forzar la vista de movil cuando hay muchas opciones en
        la navegación. Para ello existe la clase ".navegacion-movil-forzada".
        Presiona el siguiente botón para asignar dicha clase a las barras de
        navegación con identidad de ejemplo en esta sección:
      </p>
      <button class="boton" @click="navegacion_movil_forzada = !navegacion_movil_forzada">
        {{
          navegacion_movil_forzada
            ? "Desactivar vista movil forzada"
            : "Activar vista movil forzada en menús"
        }}
      </button>
    </div>
  
    <h3>Gobierno</h3>
    <nav
      class="navegacion navegacion-gobmx"
      :class="{ 'navegacion-movil-forzada': navegacion_movil_forzada }"
    >
      <div class="nav-contenedor-identidad">
        <a
          href="https://www.gob.mx/"
          class="nav-hiperviculo-logo"
          target="_blank"
          rel="noopener"
        >
          <img
            width="128"
            height="38"
            class="nav-logo"
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            alt="Gobierno de México."
          />
        </a>
        <button class="nav-boton-menu">
          <span class="nav-icono-menu"></span>
        </button>
      </div>
      <div class="nav-menu-contedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a
                href="https://mivacuna.salud.gob.mx/index.php"
                class="nav-hipervinculo"
                target="_blank"
                rel="noopener"
                >Registro para vacunación</a
              >
            </li>
            <li>
              <a
                href="https://coronavirus.gob.mx/"
                class="nav-hipervinculo"
                target="_blank"
                rel="noopener"
                >Información sobre COVID-19</a
              >
            </li>
            <li>
              <a
                href="https://www.gob.mx/tramites"
                class="nav-hipervinculo"
                target="_blank"
                rel="noopener"
                >Trámites</a
              >
            </li>
            <li>
              <a
                href="https://www.gob.mx/gobierno"
                class="nav-hipervinculo"
                target="_blank"
                rel="noopener"
                >Gobierno</a
              >
            </li>
            <li>
              <a
                href="https://www.gob.mx/busqueda"
                class="nav-hipervinculo"
                target="_blank"
                rel="noopener"
                ><span class="icono-buscar"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h3 class="m-t-10">Navegación de Conahcyt</h3>
    <nav
      class="navegacion navegacion-conahcyt"
      :class="{ 'navegacion-movil-forzada': navegacion_movil_forzada }"
    >
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img
            class="nav-logo invertir"
            width="130"
            height="38"
            src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
            alt="Conahcyt."
          />
        </a>
        <button class="nav-boton-menu">
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div class="nav-menu-contedor">
        <div class="nav-menu-complementario">
          <a href="#" class="nav-hipervinculo">Menú externo</a>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li><a href="#" class="nav-hipervinculo">Menú</a></li>
            <li class="nav-contenedor-submenu">
              <button class="nav-boton-submenu">Menú con submenu</button>
              <ul class="nav-submenu">
                <li>
                  <button class="nav-boton-regresar">Menú con submenu</button>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo"
                    >Menú del submenu pues en teoria se estira</a
                  >
                </li>
                <li><a href="#" class="nav-hipervinculo">Menú del submenu</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-hipervinculo">Menú</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <h2>Colapsable</h2>
    <div class="contenedor-lectura ">
      <p>
        Los estilos de estos elementos colapsables como elementos independientes aún
        no está definido dentro del sistema de diseño. Consiste en un elemento
        .contenedor-colapsable que contiene un botón visible y al agregarse la clase
        .activo, entonces muestra una lista de enlaces.
      </p>
      <p>En el siguiente ejemplo, la clase .activo se agrega al hacer click</p>
    </div>

    <div class="contenedor-colapsable" :class="{ activo: colapsable_activo1 }">
      <button
        :aria-expanded="colapsable_activo1"
        class="colapsable-boton"
        @click="colapsable_activo1 = !colapsable_activo1"
      >
        <div class="contenedor-encabezado-colapsable">
          <p class="m-0">Encabezado colapsable</p>
        </div>
        <div class="p-t-1">
          <span aria-hidden="true" class="nav-boton-submenu"></span>
        </div>
      </button>
      <div class="contenedor-colapsable-contenido">
        <ul>
          <li>
            <a
              href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
              target="_blank"
              :tabindex="colapsable_activo1 ? undefined : -1"
            >
              Elemento desplegado</a
            >
          </li>
        </ul>
      </div>
    </div>

    <h2 class="m-t-10">Menú lateral</h2>
    <div class="contenedor-lectura ">
      <p>
        El siguiente elemento .menu-lateral-contenedor consiste en un menú que
        contiene principalmente enlaces enlistados. También se pueden agregar
        colapsables como los que se enunciaron anteriormente
      </p>
    </div>
    
    <menu class="menu-lateral-contenedor">
      <div
        class="menu-mov"
        @click="abrirMenu = !abrirMenu"
        :class="{ abierto: abrirMenu }"
      >
        <button class="boton-icono boton-menu">
          <span v-if="abrirMenu" class="icono-angulo-doble-izquierda"></span>
          <span v-else class="icono-angulo-doble-derecha"></span>
        </button>
      </div>
      <div class="menu-colapsable" :class="{ abierto: abrirMenu }">
        <div class="menu-max-height">
          <ul>
            <li>
              <router-link to="#routerlink" class="p-x-5-esc p-x-3-mov p-y-1">
                router link prueba
              </router-link>
            </li>
            <li>
              <a href="#anchore" class="p-x-5-esc p-x-3-mov p-y-1">
                anchore link prueba
              </a>
            </li>
            <li
              class="contenedor-colapsable"
              :class="{ activo: colapsable_activo2 }"
            >
              <button
                class="colapsable-boton p-x-5-esc p-x-3-mov p-y-1"
                @click="colapsable_activo2 = !colapsable_activo2"
              >
                Titulo colapsable
                <span aria-hidden="true" class="nav-boton-submenu"></span>
              </button>
              <ul class="contenedor-colapsable-contenido">
                <li>
                  <a
                    href="#"
                    class="p-x-5-esc p-x-3-mov p-y-1 p-l-4-mov p-l-6-esc"
                  >
                    Menú del submenu</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    class="p-x-5-esc p-x-3-mov p-y-1 p-l-4-mov p-l-6-esc"
                  >
                    Menú del submenu 2</a
                  >
                </li>
                <li>
                  <div
                    class="contenedor-colapsable"
                    :class="{ activo: colapsable_activo3 }"
                  >
                    <button
                      class="colapsable-boton p-x-6-esc p-x-4-mov p-y-1"
                      @click="colapsable_activo3 = !colapsable_activo3"
                    >
                      Titulo colapsable
                      <span aria-hidden="true" class="nav-boton-submenu"></span>
                    </button>
                    <ul class="contenedor-colapsable-contenido">
                      <li>
                        <a
                          href="#"
                          class="p-x-5-esc p-x-3-mov p-y-1 p-l-5-mov p-l-7-esc"
                        >
                          Menú del submenu</a
                        >
                      </li>
                      <li>
                        <a
                          href=""
                          class="p-x-5-esc p-x-3-mov p-y-1 p-l-5-mov p-l-7-esc"
                        >
                          Menú del submenu 2</a
                        >
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </menu>

    <h2>Índice de contenido</h2>
    <div class="contenedor-lectura ">
      <p>
        El la clase .indice-de-contenido da a su contenido el estilo que se usa para
        el panel lateral derecho que te permite navegar entre distinas secciones del
        documento sin cambiar de vista
      </p>
    </div>
    <div class="indice-de-contenido">
      <p class="titulo-indice" id="indice">Título índice</p>
      <nav aria-labelledby="indice">
        <div class="contenedor-indice-de-contenido">
          <a href="#"> Elemento del índice </a>
          <a href="#"> Elemento del índice </a>
          <a href="#"> Elemento del índice </a>
      </div>
    </nav>
  </div>

  <h2>Menú Accesibilidad</h2>
  <p>
    La clase .contenedor-menu-accesibilidad se compone de estilos
    para darle forma al menú con un botón flotante que abre y cierra
    la navegación. Un título, seguido de un conjunto de opciones con
    checkbox que se comunican para avisar cuando alguna funcionalidad
    está prendida o apagada.
  </p>
  <div
    class="contenedor-menu-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
    style="position: relative;"
  >
    <button
      class="icono-boton-accesibilidad"
      :aria-expanded="menuAccesibilidadEstaAbierto ? 'true' : 'false'"
      @click="alternarAbiertoCerrado"
      style="padding: 16px 24px;"
    >
      <span
        class="icono-accesibilidad icono-5"
        aria-hidden="true"
      />
      <span class="a11y-solo-lectura">
        abrir y cerrar menú de accesibilidad
      </span>
    </button>

    <menu class="menu-accesibilidad" style="margin: 16px 48px;">
      <p class="titulo">Herramientas de accesibilidad</p>
      <hr />

      <div
        class="controlador-vis m-y-1"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
      >
        <input
          :id="`${opcion.claseCss}_menu_accesibilidad`"
          type="checkbox"
          :value="opcion.claseCss"
          v-model="clasesSelecciondas"
          :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        />
        <label :for="`${opcion.claseCss}_menu_accesibilidad`">
          <span
            class="figura-variable icono-4"
            :class="opcion.icono"
            aria-hidden="true"
          ></span>
          <span class="nombre-variable">
            <b> {{ opcion.titulo }} </b>
          </span>
        </label>
      </div>
      <button
        class="hipervinculo"
        :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        @click="restablecer"
        :disabled="!clasesSelecciondas.length"
      >
        <b>Restablecer</b>
      </button>
    </menu>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
const abrirMenu = ref(false);
const colapsable_activo1 = ref(false);
const colapsable_activo2= ref(false);

const colapsable_activo3 = ref(false);

const navegacion_movil_forzada = ref(false);

const menuAccesibilidadEstaAbierto = ref(true)
const clasesSelecciondas = ref([])

function alternarAbiertoCerrado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

function restablecer() {
  clasesSelecciondas.value = []
}

const opciones = ref([
  {
    accion: 'alternarTipografiaAccesible',
    claseCss: 'a11y-tipografia',
    icono: 'icono-cambio-tipografia',
    titulo: 'Cambio de fuente',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    claseCss: 'a11y-hipervinculos',
    icono: 'icono-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'alternarVistaSimplificada',
    claseCss: 'a11y-simplificada',
    icono: 'icono-vista-simplificada',
    titulo: 'Mostrar solo texto',
  },
  {
    accion: 'alternarVistaOscura',
    claseCss: 'a11y-oscura',
    icono: 'icono-contraste',
    titulo: 'Vista Oscura',
  },
])
</script>
