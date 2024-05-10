<script setup>
import { ref } from "vue";
const abrirMenu = ref(false);
const colapsable_activo2= ref(false);
const colapsable_activo3 = ref(false);
</script>
<template>
  <div>

    <h1>Menú lateral</h1>
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

  </div>
</template>
