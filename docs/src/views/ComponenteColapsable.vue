<script setup>
import { ref } from 'vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
const estaAbierto = ref(false)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Colapsable <span class="etiqueta">preliminar</span></h1>
      <p>
        Estilos para el componente <code>SisdaiColapsableNavegacion</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
      </p>
      <p>
        Los estilos de estos elementos colapsables aún no está definido dentro del sistema de diseño. 
        Consiste en un elemento <code>colapsable</code> que contiene un botón <code>colapsable-boton</code> 
        y un contenedor <code>colapsable-contenedor</code>.
      </p>
      <p>
        La lógica funciona mediante javascript únicamente en la biblioteca de componentes,
        al agregar o quitar la clase <code>abierto</code> al <code>colapsable</code>.
        Cuando la usuaria haga click en el botón <code>colapsable-boton</code>, se expande el contenedor <code>colapsable-contenedor</code>.
      </p>

      <div class="colapsable" :class="{abierto: estaAbierto}">
        <button 
          class="colapsable-boton" 
          aria-controls="colapsableejemplo" 
          :aria-expanded="estaAbierto"
          @click="estaAbierto = !estaAbierto"
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
              <a href="#">Enlace</a>
            </li>
            <li>
              <a href="#">Enlace</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>

    <div class="flex flex-contenido-centrado m-t-10">
      <div class="columna-8">
        <p>
          Ejemplo colapsado
        </p>
        <EjemploCodigoVertical
          html='
          <div class="colapsable">
            <!-- cambiar con js el aria-expanded="false" a "true" cuando se abra -->
            <button 
              class="colapsable-boton" 
              aria-controls="ID-UNICO" 
              aria-expanded="false" 
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
                    <a href="#">Enlace</a>
                  </li>
                  <li>
                    <a href="#">Enlace</a>
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
        <EjemploCodigoVertical
          html='
          <div class="colapsable abierto">
            <!-- cambiar con js el aria-expanded="true" a "false" cuando se colapse -->
            <button 
              class="colapsable-boton" 
              aria-controls="ID-UNICO-DOS" 
              aria-expanded="true" 
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
                    <a href="#">Enlace</a>
                  </li>
                  <li>
                    <a href="#">Enlace</a>
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
