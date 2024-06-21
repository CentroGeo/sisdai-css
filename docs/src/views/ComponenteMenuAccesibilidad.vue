<script setup>
import { ref } from 'vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Menú Accesibilidad</h1>
      <p>
        Estilos para el componente <code>SisdaiMenuAccesibilidad</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        El Menú de accesibilidad permite ejecutar a las funciones que agregan reglas de accesibilidad al sitio web.
      </p>

      <p>
        El menú de accesibilidad utiliza las clases del <code>menu-flotante</code> que se compone de un boton <code>menu-flotante-boton</code> a través del cuál
        se agrega o quita la clase <code>abierto</code> sobre <code>menu-flotante</code> para mostrar u ocultar las
        opciones de accesibilidad que se albergan en el contenedor <code>menu-flotante-contenedor</code>.
        Además para posicionarlo a la derecha se debe utilizar la clase <code>menu-flotante-derecho</code>.
      </p>

      
      <EjemploCodigoVertical 
        :tiene_ejemplo="false"
        html='

        <div class="menu-flotante menu-flotante-derecho" :class="{abierto: estaAbierto}">

          <button
            class="menu-flotante-boton"
            aria-label="Abrir y cerrar menú de accesibilidad"
            aria-controls="menua11y"
            :aria-expanded="estaAbierto"
            @click="estaAbierto = !estaAbierto"
          >
            <span class="pictograma-accesibilidad" aria-hidden="true"/>
          </button>

          <menu 
            class="menu-flotante-contenedor" 
            id="menua11y"
            :aria-hidden="!estaAbierto"
          >
            <p class="menu-flotante-titulo">Herramientas de accesibilidad</p>

            <input id="a11y-tipografia" type="checkbox"/>
            <label for="a11y-tipografia">
              <span class="pictograma-cambio-tipografia"></span>
              Cambio de fuente
            </label>

            <input id="a11y-hipervinculos" type="checkbox"/>
            <label for="a11y-hipervinculos">
              <span class="pictograma-enlace-subrayado"></span>
              Enlaces subrayados
            </label>

            <input id="a11y-simplificada" type="checkbox"/>
            <label for="a11y-simplificada">
              <span class="pictograma-vista-simplificada"></span>
              Mostrar solo texto
            </label>

            <input id="a11y-oscura" type="checkbox"/>
            <label for="a11y-oscura">
              <span class="pictograma-contraste"></span>
              Vista Oscura
            </label>
            
            <button class="boton-secundario boton-chico m-t-2">
              Restablecer
            </button>
          </menu>
          </div>

      ' />
    
      <h2 class="m-t-10">Archivo de configuración</h2>
      <p>
        Las opciones de accesibilidad que se muestran dentro del menú de accesibilidad, 
        en el componente se cargan desde el archivo <code>opcionesDefault.js</code>.
        Las opciones mostradas en este ejemplo se tendrían que agregar de la siguiente manera:
      </p>
      <pre class="nota">
export default [
  {
    accion: 'alternarTipografiaAccesible',
    claseCss: 'a11y-tipografia',
    icono: 'pictograma-cambio-tipografia',
    titulo: 'Cambio de fuente',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    claseCss: 'a11y-hipervinculos',
    icono: 'pictograma-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'alternarVistaSimplificada',
    claseCss: 'a11y-simplificada',
    icono: 'pictograma-vista-simplificada',
    titulo: 'Mostrar solo texto',
  },
  {
    accion: 'alternarVistaOscura',
    claseCss: 'a11y-oscura',
    icono: 'pictograma-contraste',
    titulo: 'Vista Oscura',
  },
]
      </pre>
    </div>
    
    <div class="menu-flotante menu-flotante-derecho" :class="{abierto: estaAbierto}">
      <button
        class="menu-flotante-boton"
        aria-label="Abrir y cerrar menú de accesibilidad"
        aria-controls="menua11y"
        :aria-expanded="estaAbierto"
        @click="estaAbierto = !estaAbierto"
      >
        <span class="pictograma-accesibilidad" aria-hidden="true"/>
      </button>
      <menu 
        class="menu-flotante-contenedor" 
        id="menua11y"
        :aria-hidden="!estaAbierto"
      >
        <p class="menu-flotante-titulo">Herramientas de accesibilidad</p>
        <input id="a11y-tipografia" type="checkbox"/>
        <label for="a11y-tipografia">
          <span class="pictograma-cambio-tipografia"></span>
          Cambio de fuente
        </label>
        <input id="a11y-hipervinculos" type="checkbox"/>
        <label for="a11y-hipervinculos">
          <span class="pictograma-enlace-subrayado"></span>
          Enlaces subrayados
        </label>
        <input id="a11y-simplificada" type="checkbox"/>
        <label for="a11y-simplificada">
          <span class="pictograma-vista-simplificada"></span>
          Mostrar solo texto
        </label>
        <input id="a11y-oscura" type="checkbox"/>
        <label for="a11y-oscura">
          <span class="pictograma-contraste"></span>
          Vista Oscura
        </label>
        <button class="boton-secundario boton-chico m-t-2">
          Restablecer
        </button>
      </menu>
    </div>

  </div>
</template>
