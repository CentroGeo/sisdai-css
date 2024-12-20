<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(false)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Colapsable <span class="etiqueta">preliminar</span></h1>
      <p>
        La biblioteca <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Colapsable navegación" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiColapsableNavegacion</code> es un elemento dinámico cuyos estilos aún están en 
        desarrollo dentro del sistema de diseño. Consiste en un botón <code>colapsable-boton</code> y un contenedor 
        <code>colapsable-contenedor</code>. La funcionalidad se maneja a través de JavaScript, permitiendo que al 
        hacer clic en el botón, se añada o quite la clase abierta para expandir o colapsar el contenedor.
      </p>
      
      <div class="colapsable" :class="{abierto: estaAbierto}">
        <button 
          class="colapsable-boton" 
          aria-controls="colapsableejemplo" 
          :aria-expanded="estaAbierto"
          @click="estaAbierto = !estaAbierto"
          type="button"
        >
          Encabezado colapsable          
          <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
        </button>
        <div 
          class="colapsable-contenedor" 
          id="colapsableejemplo" 
          :aria-hidden="!estaAbierto"
        >
          <ul>
            <li>
              <a href="#">Enlace ejemplo uno</a>
            </li>
            <li>
              <a href="#">Enlace ejemplo dos</a>
            </li>
          </ul>
        </div>
      </div>

      <p>
        El elemento principal del colapsable es un botón, por lo tanto las clases de estilo de botón pueden afectarlo.
        Pero el uso principal de este componente es dentro del menú lateral, componente que también da formato a los botones e hipervínculos que contiene
        para mantener el estilo unificado. Por lo mismo, para éste componente no se definieron estilos de color, únicamente se le agregan estilos 
        de estructura que le permiten colapsar al contenedor y mantener siempre visible su botón de acción.
      </p>
      
    </div>

    <div class="flex flex-contenido-centrado m-t-10">
      <div class="columna-8">
        <p>
          Ejemplo colapsado
        </p>
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="colapsable">
            <!-- cambiar con js el aria-expanded="false" a "true" cuando se abra -->
            <button 
              class="colapsable-boton" 
              aria-controls="ID-UNICO" 
              aria-expanded="false"
              type="button"
            >

              <!-- <slot name="encabezado"> -->
                Encabezado colapsable
              <!-- </slot> -->
              
              <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
            </button>

            <!-- eliminar con js el aria-hidden="true" cuando se abra -->
            <div 
              class="colapsable-contenedor" 
              id="ID-UNICO" 
              aria-hidden="true"
            >

              <!-- <slot name="contenido"> -->
                <ul>
                  <li>
                    <a href="#">Enlace ejemplo colapsado</a>
                  </li>
                  <li>
                    <a href="#">Enlace ejemplo colapsado dos</a>
                  </li>
                </ul>
              <!-- </slot> -->

            </div>
          </div>
          '
        />
      </div>
      <div class="columna-8">
        <p>
          Ejemplo abierto
        </p>
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="colapsable abierto">
            <!-- cambiar con js el aria-expanded="true" a "false" cuando se colapse -->
            <button 
              class="colapsable-boton" 
              aria-controls="ID-UNICO-DOS" 
              aria-expanded="true" 
              type="button"
            >

              <!-- <slot name="encabezado"> -->
                Encabezado colapsable abierto
              <!-- </slot> -->

              <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
            </button>

            <!-- agregar con js el aria-hidden="true" cuando se colapse -->
            <div 
              class="colapsable-contenedor" 
              id="ID-UNICO-DOS"
            >
              
              <!-- <slot name="contenido"> -->
                <ul>
                  <li>
                    <a href="#">Enlace ejemplo abierto uno</a>
                  </li>
                  <li>
                    <a href="#">Enlace ejemplo abierto dos</a>
                  </li>
                </ul>
              <!-- </slot> -->

            </div>
          </div>
          '
        />
      </div>
    </div>
</div>
</template>
