<template>
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
  <h3>Gobierno</h3>
  <nav class="navegacion navegacion-gobmx">
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

  <h3 class="m-t-10">Navegación de Conacyt</h3>
  <nav class="navegacion navegacion-conacyt">
    <div class="nav-contenedor-identidad">
      <a href="#" class="nav-hiperviculo-logo">
        <img
          class="nav-logo"
          width="130"
          height="38"
          src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
          alt="Conacyt."
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

  <p>
    Los estilos de estos elementos colapsables como elementos independientes aún
    no está definido dentro del sistema de diseño. Consiste en un elemento
    .colapsable-navegacion que contiene un botón visible y al agregarse la clase
    .activo, entonces muestra una lista de enlaces.
  </p>
  <p>En el siguiente ejemplo, la clase .activo se agrega al hacer click</p>
  <li class="colapsable-navegacion" :class="{ activo: colapsable_activo }">
    <button
      class="colapsable-boton-submenu nav-boton-submenu"
      @click="colapsable_activo = !colapsable_activo"
    >
      Titulo colapsable
    </button>
    <ul class="colapsable-submenu">
      <li>
        <a href="#"> Menú del submenu</a>
      </li>
    </ul>
  </li>
  <h2 class="m-t-10">Menú lateral</h2>
  <p>El siguiente elemento .menu-lateral-contenedor consiste en un menú que contiene principalmente enlaces enlistados. También se pueden agregar colapsables como los que se enunciaron anteriormente</p>
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
            <router-link to="#routerlink"> router link prueba </router-link>
          </li>
          <li>
            <a href="#anchore"> anchore link prueba </a>
          </li>
          <li
            class="colapsable-navegacion"
            :class="{ activo: colapsable_activo }"
          >
            <button
              class="colapsable-boton-submenu nav-boton-submenu"
              @click="colapsable_activo = !colapsable_activo"
            >
              Titulo colapsable
            </button>
            <ul class="colapsable-submenu">
              <li>
                <a href="#"> Menú del submenu</a>
              </li>
              <li>
                <a href=""> Menú del submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </menu>

  <p></p>
</template>

<script setup>
import { ref } from "vue";
const abrirMenu = ref(false);
const colapsable_activo = ref(false);
</script>
