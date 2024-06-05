<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Info De Despliegue</h1>
      <p>
        Estilos para el componente <code>SisdaiInfoDeDespliegue</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Es un componente de desarrollo para presentar la información acerca del versionamiento, el ambiente y la fecha de despliegue.
      </p>
      
      <EjemploCodigoVertical
        html='
        <dl class="informacion-despliegue">
          <dt>Versión</dt>
          <dd>v1.2.3</dd>
          <dt>Ambiente:</dt>
          <dd>development</dd>
          <dt>Actualización:</dt>
          <dd>4/16/2024, 18:11:12</dd>
        </dl>
        '
      />

    </div>
  </div>
</template>
