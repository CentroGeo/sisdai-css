<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">

      <h1>
        Botón flotante
        <span class="etiqueta">preliminar</span>
      </h1>
      <p>
        Estilos para el componente <code><code>SisdaiBotonFlotante</code></code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
      </p>
      <p>  
        Este permite tener enlaces fijos en todas las vistas del sitio,
        posicionado el componente en el esquina inferior izquierda.
      </p>
      <p>
        El botón flotante utiliza las clases del <code>menu-flotante</code> que se compone de un boton <code>menu-flotante-boton</code> a través del cuál
        se agrega o quita la clase <code>abierto</code> sobre <code>menu-flotante</code> para mostrar u ocultar las
        opciones de accesibilidad que se albergan en el contenedor <code>menu-flotante-contenedor</code>.
        Además para posicionarlo a la izquierda se debe utilizar la clase <code>menu-flotante-izquierdo</code>.
      </p>

      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div 
          class="menu-flotante" 
          :class="{abierto: estaAbierto}"
        >
          <button 
            class="menu-flotante-boton"
            aria-controls="IDUNICO" 
            aria-label="Abrir/Cerrar menu de enlaces"
            :aria-expanded="estaAbierto"
            @click="estaAbierto = !estaAbierto"
          >
            <span 
              class="boton-flotante-pictograma-abierto pictograma-restar" 
              aria-hidden="true"
            ></span>
            <span 
              class="boton-flotante-pictograma-cerrado pictograma-agregar" 
              aria-hidden="true"
            ></span>
          </button>

          <menu 
            class="menu-flotante-contenedor"
            id="IDUNICO"
            :aria-hidden="!estaAbierto"
          >
            <a href="#">
              Ir a Gestor de Mapas (Gema)
              <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
            </a>
            <a href="#" class="m-t-2">
              Ir a Sistema de Diseño y Accesibilidad para la Investigación (Sisdai)
              <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
            </a>
            <a href="#" class="m-t-2">
              Ir a Ecosistemas Nacionales Informáticos (ENI)
              <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
            </a>
          </menu>
        </div>
        '
      />
    </div>


    <div 
      class="menu-flotante" 
      :class="{abierto: estaAbierto}"
    >
      <button 
        class="menu-flotante-boton"
        aria-controls="botonflotanteejemplo" 
        aria-label="Abrir/Cerrar colapsable"
        :aria-expanded="estaAbierto"
        @click="estaAbierto = !estaAbierto"
      >
        <span class="menu-flotante-pictograma-abierto pictograma-restar" aria-hidden="true"></span>
        <span class="menu-flotante-pictograma-cerrado pictograma-agregar" aria-hidden="true"></span>
      </button>

      <menu 
        class="menu-flotante-contenedor"
        id="botonflotanteejemplo"
        :aria-hidden="!estaAbierto"
      >
        <a href="#">
          Ir a Gestor de Mapas (Gema)
          <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
        </a>
        <a href="#" class="m-t-2">
          Ir a Sistema de Diseño y Accesibilidad para la Investigación (Sisdai)
          <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
        </a>
        <a href="#" class="m-t-2">
          Ir a Ecosistemas Nacionales Informáticos (ENI)
          <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
        </a>
      </menu>
    </div>
    
  </div>
</template>
