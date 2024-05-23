<script setup>
import { ref } from 'vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
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
        A la clase principal <code>.boton-flotante</code> se le agrega o remueve la clase <code>.abierto</code>
        para mostrar el icono correspondiente a abrir/cerrar y para mostrar/ocultar los enlaces dentro del cuerpo del componente.
      </p>

      <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <div 
          class="boton-flotante" 
          :class="{abierto: estaAbierto}"
        >
          <button 
            class="boton-primario boton-flotante-alternador"
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
            class="boton-flotante-cuerpo"
            id="IDUNICO"
            :aria-hidden="!estaAbierto"
          >
            <a href="#" class="boton-flotante-hipervinculo">
              <span 
                class="pictograma-documento" 
                aria-hidden="true"
              ></span>
              Enlace
            </a>
            <a href="#" class="boton-flotante-hipervinculo">
              <span 
                class="pictograma-documento" 
                aria-hidden="true"
              ></span>
              Otro Enlace
            </a>
          </menu>
        </div>
        '
      />
    </div>


    <div 
      class="boton-flotante" 
      :class="{abierto: estaAbierto}"
    >
      <button 
        class="boton-primario boton-flotante-alternador"
        aria-controls="botonflotanteejemplo" 
        aria-label="Abrir/Cerrar colapsable"
        :aria-expanded="estaAbierto"
        @click="estaAbierto = !estaAbierto"
      >
        <span class="boton-flotante-pictograma-abierto pictograma-restar" aria-hidden="true"></span>
        <span class="boton-flotante-pictograma-cerrado pictograma-agregar" aria-hidden="true"></span>
      </button>

      <menu 
        class="boton-flotante-cuerpo"
        id="botonflotanteejemplo"
        :aria-hidden="!estaAbierto"
      >
        <a href="#" class="boton-flotante-hipervinculo">
          <span class="pictograma-documento" aria-hidden="true"></span>
          Enlace
        </a>
        <a href="#" class="boton-flotante-hipervinculo">
          <span class="pictograma-documento" aria-hidden="true"></span>
          Otro Enlace
        </a>
      </menu>
    </div>
    
  </div>
</template>
