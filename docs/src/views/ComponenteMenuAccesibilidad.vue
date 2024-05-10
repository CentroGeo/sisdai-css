<script setup>
import { ref } from "vue";

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
<template>
  <div>
    <h1>Menú Accesibilidad</h1>
    <p>
      La clase .contenedor-menu-accesibilidad se compone de estilos
      para darle forma al menú con un botón flotante que abre y cierra
      la navegación. Un título, seguido de un conjunto de opciones con
      checkbox que se comunican para avisar cuando alguna funcionalidad
      está prendida o apagada.
    </p>
    
    <div class="contenedor-menu-accesibilidad" :class="{ abierto: menuAccesibilidadEstaAbierto }" style="position: relative;">

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
        <hr /> <!-- que?! -->

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
