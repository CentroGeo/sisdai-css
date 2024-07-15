<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Menú Flotante</h1>
      <p>
        El menú flotante es un elemento que, a través de la interacción con un botón sencillo, 
        puede mostrar y ocultar la información completa que requiere un menú.
      </p>
    </div>

    <div 
      class="menu-flotante menu-flotante-izquierdo"
      :class="{abierto: estaAbierto}"
    >
      <button 
        class="menu-flotante-boton"
        aria-label="Menú de ejemplo"
        @click="estaAbierto = !estaAbierto"
      >
        <span class="menu-flotante-pictograma-abierto pictograma-restar" aria-hidden="true"></span>
        <span class="menu-flotante-pictograma-cerrado pictograma-agregar" aria-hidden="true"></span>
      </button>
      <menu class="menu-flotante-contenedor">

        <p class="menu-flotante-titulo">Título</p>
        
        <a href="#">
          Hipervínculo
          <span class="pictograma-flecha-arriba-derecha m-l-1" aria-hidden="true"></span>
        </a>
        
        <a href="#">
          Descarga
          <span class="pictograma-documento m-l-1" aria-hidden="true"></span>
        </a>

        <input id="labelejemplo" type="checkbox"/>
        
        <label for="labelejemplo">
          <span class="pictograma-flkt"></span>
          Casilla de verificacion
        </label>
        
        <button class="boton-secundario boton-chico m-t-2">
          Boton secundario chico
        </button>

      </menu>
    </div>

    <div class="flex flex-contenido-centrado m-t-10">
      <div class="columna-6">
        <h2 class="m-t-0">menu-flotante</h2>
        <p>
          La clase <code>menu-flotante</code> puede ir acompañada de las clases de posición 
          <code>menu-flotante-izquierdo</code> ó <code>menu-flotante-derecho</code>. 
          Para ambas clases, el menú se fija en la parte baja de la pantalla, 
          con márgenes de 40 píxeles  alrededor.
        </p>
        <p>
          El <code>menu-flotante</code> contiene el <code>menu-flotante-boton</code>, 
          que debe ser el elemento que ejecute la acción de Ocultar/Mostrar 
          el contenido del <code>menu-flotante-contenedor</code>, 
          el cual contendrá todas las opciones del menú.
        </p>
        
        <h2 class="m-t-0">menu-flotante-boton</h2>
        <p>
          El botón menu-flotante-boton, que siempre está visible, 
          requiere el uso de un pictograma para minimizar el espacio visual que ocupa en la pantalla. 
          Sin embargo, en algunas ocasiones es difícil encontrar un elemento que represente el contenido del menú. 
          Para estos casos, se recomienda utilizar dos pictogramas para representar la acción Abrir/Cerrar que ejecuta el botón. 
          En este caso, se utilizan las clases 
          <code>menu-flotante-pictograma-abierto</code> y <code>menu-flotante-pictograma-cerrado</code>, 
          que alternan la visibilidad del pictograma según el estado del menú.
        </p>

        <h2 class="m-t-0">menu-flotante-contenedor</h2>
        <p>
          El <code>menu-flotante-contenedor</code> puede contener distintos tipos de elementos. 
          Específicamente, se espera que contenga hipervínculos, botones, casillas de 
          verificación y un título, éste último siendo el único que tiene su clase especial 
          <code>menu-flotante-titulo</code> para darle formato.
        </p>
      </div>

      <div class="columna-6">
        <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
          <div class="menu-flotante menu-flotante-izquierdo">
            <button class="menu-flotante-boton">
              <span 
                class="
                  menu-flotante-pictograma-abierto 
                  pictograma-restar
                "
                aria-hidden="true"
              ></span>
              <span 
                class="
                  menu-flotante-pictograma-cerrado 
                  pictograma-agregar
                "
                aria-hidden="true"
              ></span>
            </button>
            
            <menu class="menu-flotante-contenedor">
              
              <p class="menu-flotante-titulo">
                Título
              </p>

              <a href="#">
                Hipervínculo
                <span 
                  class="pictograma-flecha-arriba-derecha m-l-1" 
                  aria-hidden="true"
                ></span>
              </a>
              
              <a href="#" download>
                Descarga
                <span 
                  class="pictograma-documento m-l-1" 
                  aria-hidden="true"
                ></span>
              </a>

              <input id="labelejemplo" type="checkbox"/>
              <label for="labelejemplo">
                <span class="pictograma-flkt"></span>
                Casilla de verificacion
              </label>
              
              <button class="boton-secundario boton-chico m-t-2">
                Boton secundario chico
              </button>

            </menu>
          </div>
          '
        />
      </div>
    </div>

  </div>
</template>