<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Contenedor Vis</h1>
      <p>
        El contenedor-vis es un elemento importante utilizado por las bibliotecas 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas" target="_blank" rel="noopener noreferrer">sisdai-graficas</a>
        y <a href="https://codigo.conahcyt.mx/sisdai/sisdai-mapas" target="_blank" rel="noopener noreferrer">sisdai-mapas</a>
        para agrupar y organizar visualizaciones gráficas y de mapas. Este contenedor se divide en dos secciones principales:
      </p>
      <ol>
        <li>
          Panel de visualización (<code>contenedor-vis-paneles</code>): esta sección agrupa todos los paneles de la visualización. 
          Es esencial especificar qué paneles se utilizarán, ya que esto determina el cálculo del alto máximo y el ancho de los 
          paneles, así como la disposición de éstos en la visualización. Cabe destacar que los paneles no se mostrarán si no se 
          agregan explícitamente a la lista del contenedor. 
        </li>
        <li>
          Atribuciones (<code>contenedor-vis-atribuciones</code>): situada al final del contenedor, esta sección incluye enlaces 
          hace Conahcyt y Sisdai, proporcionando créditos y referencias necesarias.
        </li>
      </ol>
    </div>


    <div class="contenedor-vis m-y-3">
      <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-izquierda-vis con-panel-derecha-vis con-panel-pie-vis">
        <div class="panel-encabezado-vis">
          <p>
            <code>panel-encabezado-vis</code> siempre al inicio de la visualización, al 100% del ancho.
          </p>
        </div>

        <div class="panel-izquierda-vis">
          <p>
            <code>panel-izquierda-vis</code>
          </p>
          <dl>
            <dt>Móviles</dt>
            <dd>Aparece después del encabezado al 100% del ancho.</dd>
            <dt>Escritorio</dt>
            <dd>Posición izquierda, ancho de la mitad de lo que mida el contenido-vis.</dd>
          </dl>
        </div>
        
        <div class="panel-derecha-vis">
          <p>
            <code>panel-derecha-vis</code>
          </p>
          <dl>
            <dt>Móviles</dt>
            <dd>Aparece después del contenido vis, al 100% del ancho.</dd>
            <dt>Escritorio</dt>
            <dd>Posición derecha, ancho de la mitad de lo que mida el contenido-vis.</dd>
          </dl>
        </div>

        <div class="contenido-vis">
          <div style="border: 1px dashed #00f; padding: 8px; height: 100%; ">
            <code>contenido-vis</code>
            <dl>
              <dt>Móviles</dt>
              <dd>Aparece después del panel izquierda (si existe) y del encabezado, al 100% del ancho.</dd>
              <dt>Escritorio</dt>
              <dd>Posición central, el ancho varía entre un medio, dos tercios o 100%, dependiendo de si se utilizaron dos, uno o ningún panel lateral.</dd>
            </dl>
          </div>
        </div>

        <div class="panel-pie-vis">
          <p>
            <code>panel-pie-vis</code> siempre al final de la visualización, al 100% del ancho.
          </p>
        </div>
      </div>
      <div class="contenedor-vis-atribuciones borde-t borde-color-secundario">
        <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img
            class="a11y-oscura-filtro-blanco"
            :src="`${cdn}institucional/conahcyt-azul.svg`"
            alt="Conahcyt"
          />
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>


      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div class="contenedor-vis">
  
          <!-- paneles del contenedor -->
          <div class="
            contenedor-vis-paneles 
            con-panel-encabezado-vis 
            con-panel-izquierda-vis 
            con-panel-derecha-vis 
            con-panel-pie-vis"
          >
            <div class="panel-encabezado-vis"> ... </div>
            <div class="panel-izquierda-vis"> ... </div>
            <div class="panel-derecha-vis"> ... </div>
            <div class="contenido-vis"> ... </div>
            <div class="panel-pie-vis"> ... </div>
          </div>
  
          <!-- atribuciones -->
          <div class="contenedor-vis-atribuciones borde-t borde-color-secundario">
            <a 
              class="logo-conacyt" 
              href="https://conahcyt.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img class="a11y-oscura-filtro-blanco" src="..." alt="Conahcyt"/>
            </a>
            <a 
              href="https://sisdai.conahcyt.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Sisdai
            </a>
          </div>
        </div>
        '
      />

    


  </div>
</template>
