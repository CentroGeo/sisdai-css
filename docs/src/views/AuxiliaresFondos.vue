<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Fondos</h1>
      <p>
        Las variables de color de CSS estan declaradas para modo claro y oscuro en la carpeta de <code>src/accesibilidad</code>.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-primario">
            var(--fondo)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-neutro">
            var(--fondo-neutro)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-acento">
            var(--fondo-acento)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-informacion">
            var(--fondo-informacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-confirmacion">
            var(--fondo-confirmacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-alerta">
            var(--fondo-alerta)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="fondo-color-error">
            var(--fondo-error)
          </p>
          '
        />
      </div>
    </div>
  
  </div>
</template>
