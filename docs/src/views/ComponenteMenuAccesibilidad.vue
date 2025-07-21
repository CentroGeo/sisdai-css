<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Menú de accesibilidad</h1>
      <p>
        La biblioteca <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Menú accesibilidad" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
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
          class="menu-flotante menu-flotante-derecho menu-accesibilidad" 
          :class="{abierto: estaAbierto}"
        >

          <button
            class="menu-flotante-boton"
            aria-labelledby="herramientasaccesibilidad"
            aria-controls="menua11y"
            :aria-expanded="estaAbierto"
            @click="estaAbierto = !estaAbierto"
            type="button"
          >
            <span class="pictograma-accesibilidad" aria-hidden="true"/>
          </button>

          <div 
            class="menu-flotante-contenedor" 
            id="menua11y"
            :aria-hidden="!estaAbierto"
          >
            <p id="herramientasaccesibilidad" class="menu-flotante-titulo">
              Herramientas de accesibilidad
            </p>

            <input id="a11y-tipografia" type="checkbox"/>
            <label for="a11y-tipografia">
              <span aria-hidden="true" class="pictograma-cambio-tipografia"></span>
              Cambio de fuente
            </label>

            <input id="a11y-hipervinculos" type="checkbox"/>
            <label for="a11y-hipervinculos">
              <span aria-hidden="true" class="pictograma-enlace-subrayado"></span>
              Enlaces subrayados
            </label>

            <input id="a11y-simplificada" type="checkbox"/>
            <label for="a11y-simplificada">
              <span aria-hidden="true" class="pictograma-vista-simplificada"></span>
              Mostrar solo texto
            </label>

            <input id="a11y-oscura" type="checkbox"/>
            <label for="a11y-oscura">
              <span aria-hidden="true" class="pictograma-contraste"></span>
              Vista Oscura
            </label>
            
            <button class="boton-secundario boton-chico m-t-2" type="button">
              Restablecer
            </button>
          </div>
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

    <div class="menu-flotante menu-flotante-derecho menu-accesibilidad" :class="{abierto: estaAbierto}">
      <button
        class="menu-flotante-boton"
        aria-labelledby="herramientasaccesibilidadej"
        aria-controls="menua11yej"
        :aria-expanded="estaAbierto"
        @click="estaAbierto = !estaAbierto"
      >
        <span class="pictograma-accesibilidad" aria-hidden="true"/>
      </button>
      <div 
        class="menu-flotante-contenedor" 
        id="menua11yej"
        :aria-hidden="!estaAbierto"
      >
        <p id="herramientasaccesibilidadej" class="menu-flotante-titulo">Herramientas de accesibilidad</p>
        <input id="a11y-tipografia" type="checkbox"/>
        <label for="a11y-tipografia">
          <span aria-hidden="true" class="pictograma-cambio-tipografia" />
          Cambio de fuente
        </label>
        <input id="a11y-hipervinculos" type="checkbox"/>
        <label for="a11y-hipervinculos">
          <span aria-hidden="true" class="pictograma-enlace-subrayado" />
          Enlaces subrayados
        </label>
        <input id="a11y-simplificada" type="checkbox"/>
        <label for="a11y-simplificada">
          <span aria-hidden="true" class="pictograma-vista-simplificada" />
          Mostrar solo texto
        </label>
        <input id="a11y-oscura" type="checkbox"/>
        <label for="a11y-oscura">
          <span aria-hidden="true" class="pictograma-contraste" />
          Vista Oscura
        </label>
        <button class="boton-secundario boton-chico m-t-2" type="button">
          Restablecer
        </button>
      </div>
    </div>

  </div>
</template>
