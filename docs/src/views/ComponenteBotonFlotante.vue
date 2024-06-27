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
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Botón flotante" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>
      <p>
        El componente <code>SisdaiBotonFlotante</code> permite disponer de enlaces fijos 
        accesibles en todas las vistas del sitio. Se posiciona en la esquina inferior 
        izquierda. Para controlar su comportamiento, a la clase principal 
        <code>.boton-flotante</code> se le puede agregar o quitar la clase <code>.abierto</code>, 
        la cual ajusta la visualización del icono de abrir/cerrar y gestiona la visibilidad 
        de los enlaces dentro del cuerpo del componente. A continuación se muestra un ejemplo: 
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
