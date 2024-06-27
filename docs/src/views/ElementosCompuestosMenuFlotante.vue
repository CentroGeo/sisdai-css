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
        El menú flotante es un elemento que a través de la interacción con un botón sencillo, puede mostrar y ocultar 
        la información completa que requiera un menú. 
      </p>
    </div>

    <div 
      class="menu-flotante menu-flotante-izquierdo"
      :class="{abierto: estaAbierto}"
    >
      <button 
        class="menu-flotante-boton"
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
          La clase <code>menu-flotante</code> puede ir acompañada de las clases 
          de posicion <code>menu-flotante-izquierdo</code> ó <code>menu-flotante-derecho</code>.
          Para ambas clases el menú se fija en la parte baja de la pantalla, 
          con 40 pixeles de margenes alrededor.
        </p>
        <p>
          El <code>menu-flotante</code> contiene el <code>menu-flotante-boton</code>
          que debe ser el elemento que ejecute la accion de Ocultar/Mostrar el contenido del 
          <code>menu-flotante-contenedor</code> que contendrá todas las opciones del menú.
        </p>

        <h2 class="m-t-0">menu-flotante-boton</h2>
        <p>
          El boton <code>menu-flotante-boton</code> 
          que siempre se encuentra visible, requiere que se utilice un pictograma
          para reducir al mínimo el espacio visual que toma en la pantalla.
        </p>
        <p>
          Sin embargo en algunas ocaciones es difícil encontrar un elemento que represente
          el contenido del menú. Para estos casos se recomienta utilizar dos pictogramas
          para representar la acción Abrir/Cerrar que ejecuta el botón.
        </p>
        <p>
          Para este caso se utilizan las clases <code>menu-flotante-pictograma-abierto</code>
          y <code>menu-flotante-pictograma-cerrado</code> que alternan la visibilidad del 
          pictograma con el estado del menú.
        </p>

        <h2 class="m-t-0">menu-flotante-contenedor</h2>
        <p>
          El <code>menu-flotante-contenedor</code> puede contener distintos tipos de elementos,
          más espeficifamente se espera que contenga hipervínculos, botones, casillas de verificacion y un título,
          éste último siendo el único que tiene su clase especial <code>menu-flotante-titulo</code> para
          darle formato.
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