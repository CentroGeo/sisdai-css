<script setup>
import { ref } from 'vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Botón flotante</h1>
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
        <div role="toolbar" class="boton-flotante">

          <button class="boton-flotante-alternador">
            <span 
              class="boton-flotante-pictograma-abierto pictograma-restar"
              aria-hidden="true"
            ></span>
            <span 
              class="boton-flotante-pictograma-cerrado pictograma-agregar"
              aria-hidden="true"
            ></span>

            <span class="boton-flotante-a11y-abierto a11y-solo-lectura">
              Cerrar botón flotante
            </span>
            <span class="boton-flotante-a11y-cerrado a11y-solo-lectura">
              Abrir botón flotante
            </span>
          </button>

          <div class="boton-flotante-cuerpo">
            <a href="#" class="boton-flotante-hipervinculo">
              <span 
                class="pictograma-documento pictograma-resaltado"
                aria-hidden="true"
              ></span>
              Enlace
            </a>
            <a href="#" class="boton-flotante-hipervinculo">
              <span class="pictograma-documento" aria-hidden="true"></span>
              Otro Enlace
            </a>
          </div>

        </div>
        '
      />
    </div>


    <div class="boton-flotante" :class="{abierto: estaAbierto}">
      <button class="boton-flotante-alternador" @click="estaAbierto = !estaAbierto">
        <span class="boton-flotante-pictograma-abierto pictograma-restar" aria-hidden="true"></span>
        <span class="boton-flotante-a11y-abierto a11y-solo-lectura">Cerrar botón flotante</span>
        <span class="boton-flotante-pictograma-cerrado pictograma-agregar" aria-hidden="true"></span>
        <span class="boton-flotante-a11y-cerrado a11y-solo-lectura">Abrir botón flotante</span>
      </button>

      <div class="boton-flotante-cuerpo">
        <a href="#" class="boton-flotante-hipervinculo">
          <span class="pictograma-documento pictograma-resaltado" aria-hidden="true"></span>
          Enlace
        </a>
        <a href="#" class="boton-flotante-hipervinculo">
          <span class="pictograma-documento" aria-hidden="true"></span>
          Otro Enlace
        </a>
      </div>
    </div>
    
  </div>
</template>
