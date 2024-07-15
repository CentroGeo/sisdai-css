<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Menú Accesibilidad</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Menú accesibilidad" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiMenuAccesibilidad</code> permite a las personas usuarias ejecutar funciones 
        que incorporan reglas de accesibilidad en el sitio web.
      </p>
      <p>
        Este componente consta de un botón <code>menu-flotante-boton</code> que, al ser activado, 
        añade o elimina la clase abierto en el elemento <code>menu-flotante menu-flotante-derecho</code>. 
        Esta acción muestra u oculta las opciones de accesibilidad contenidas en el 
        <code>menu-flotante-contenedor</code>. 
        Las opciones se cargan desde el archivo de configuración <code>opcionesDefault.js</code>.
      </p>
      
      <EjemploCodigo 
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div 
          class="menu-flotante menu-flotante-derecho" 
          :class="{abierto: estaAbierto}"
        >

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
      <EjemploCodigo 
        :tiene_ejemplo='false'
        tipo='javaScript'
        codigo='
          export default [
            {
              accion: "alternarTipografiaAccesible",
              claseCss: "a11y-tipografia",
              icono: "pictograma-cambio-tipografia",
              titulo: "Cambio de fuente",
            },
            {
              accion: "alternarEnlacesSubrayados",
              claseCss: "a11y-hipervinculos",
              icono: "pictograma-enlace-subrayado",
              titulo: "Enlaces subrayados",
            },
            {
              accion: "alternarVistaSimplificada",
              claseCss: "a11y-simplificada",
              icono: "pictograma-vista-simplificada",
              titulo: "Mostrar solo texto",
            },
            {
              accion: "alternarVistaOscura",
              claseCss: "a11y-oscura",
              icono: "pictograma-contraste",
              titulo: "Vista Oscura",
            },
          ]
      '/>
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
