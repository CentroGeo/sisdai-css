<script setup>
import pkg from '../../../package.json'
</script>
<template>
  <div class="contenedor ancho-lectura m-y-maximo">
    <h1>sisdai-css</h1>
    <p class="parrafo-texto-alto">
      Esta es la documentación de la biblioteca de estilos del Sistema de Diseño y Accesibilidad para la
      Investigación (<a href="https://sisdai.conacyt.mx/" target="_blank">Sisdai</a>).
    </p>
    <p class="parrafo-texto-alto">
      <a 
        :href="`https://codigo.conahcyt.mx/sisdai/sisdai-css/-/tree/v${pkg.version}`"
        target="_blank" 
        rel="noref noopener"
        >
        <span class="pictograma-social-github"></span>
        sisdai-css#{{ pkg.version }}
      </a>
    </p>
  </div>
</template>
