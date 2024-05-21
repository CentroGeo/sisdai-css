<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Contenedor Vis</h1>
      <p>
        El contenedor especial <code>contenedor-vis</code> es utilizado por las bibliotecas de gráficas 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas" target="_blank" rel="noopener noreferrer">sisdai-graficas</a>
        y de mapas <a href="https://codigo.conahcyt.mx/sisdai/sisdai-mapas" target="_blank" rel="noopener noreferrer">sisdai-mapas</a>
      </p>

      <p>
        El <code>contenedor-vis</code> tiene dos grandes secciones: el <code>contenedor-vis-paneles</code> agrupa todos los paneles de la visualización 
        y el <code>contenedor-vis-atribuciones</code> que se pone al final del contenedor con las ligas a Conahcyt y Sisdai.
      </p>

      <p>
        A la par de la clase <code>contenedor-vis-paneles</code> se debe especificar que paneles se utilizarán en la visualización,
        esto para calcular el alto máximo de la gráfica/mapa, el ancho de paneles y posiciones de los mismos. <br>
        Es importante notar que aunque exista algún panel, si no se agrega a la lista del contenedor no se mostrarán en pantalla.
      </p>
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
              <dd>Aparece después del panel izquierda (si exite) y del encabezado, al 100% del ancho.</dd>
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
      <div class="contenedor-vis-atribuciones borde-t borde-color-3">
        <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img
            class="color-invertir"
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg"
            alt="Conahcyt"
          />
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>


      <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
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
          <div class="contenedor-vis-atribuciones borde-t borde-color-3">
            <a 
              class="logo-conacyt" 
              href="https://conahcyt.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img class="color-invertir" src="..." alt="Conahcyt"/>
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
