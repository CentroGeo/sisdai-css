<script setup>
import EjemploCodigoTipografico from '@/componetes/EjemploCodigoTipografico.vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Tipografía</h1>
      <p>
        Para las visualizaciones creadas con <a href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas" target="_blank" rel="noopener noreferrer">sisdai-graficas</a>
        y <a href="https://codigo.conahcyt.mx/sisdai/sisdai-mapas" target="_blank" rel="noopener noreferrer">sisdai-mapas</a>, se aplican 
        estilos tipográficos específicos que aseguran la legibilidad y la coherencia estética a lo largo de diferentes tipos de gráficas y 
        mapas. Estos estilos están diseñados para complementar la presentación de datos y mejorar la experiencia de la persona usuaria.
      </p>
    </div>

    <div class="contenedor-vis">
      <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-pie-vis">
        <div class="panel-encabezado-vis">
          <p class="vis-titulo-visualizacion">
            Título visualización
          </p>
          <p class="vis-fecha-actualizacion">
            Fecha de actualización
          </p>
          <p class="vis-instruccional">
            Instruccional ó texto descriptivo de la visualización.
          </p>
        </div>

        <div class="contenido-vis">
          <div style="border: 1px dashed #00f; padding: 8px; height: 100%; ">
            <p class="vis-titulo-ejes">
              Título de ejes
            </p>
            <p class="vis-valores-ejes">
              Valores de ejes
            </p>
          </div>
        </div>

        <div class="panel-pie-vis">
          <p class="vis-titulo-leyenda">
            Título de leyenda
          </p>

          <p class="vis-nomenclatura">
            <span class="figura-variable disabled"></span>
            Nomenclatura deshabilitada
          </p>
          <p class="vis-nomenclatura">
            <span class="figura-variable"></span>
            Nomenclatura
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

    <EjemploCodigoTipografico 
      class="m-t-10"
      html='
      <p class="vis-titulo-visualizacion">
        Título de visualización
      </p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.125rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-fecha-actualizacion">
        Fecha de actualización
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.2em'},
        {nombre:'Peso', valor:'Medium (500)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-instruccional">
        Instruccional
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Regular (400)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-valores-ejes">
        Valores de ejes
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.2em'},
        {nombre:'Peso', valor:'Regular (400)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-titulo-ejes">
        Título de ejes
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-titulo-leyenda">
        Título de leyenda
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="vis-nomenclatura">
        <span class="figura-variable disabled"></span>
        Nomenclatura deshabilitada
      </p>
      <p class="vis-nomenclatura">
        <span class="figura-variable"></span>
        Nomenclatura
      </p>
      '
      :propiedades="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Regular (400)'},
        {nombre:'Margen derecho', valor:'24px'},
        {nombre:'Color', valor:'var(--texto-secundario)'},
      ]]"
    /> 
  </div>
</template>
