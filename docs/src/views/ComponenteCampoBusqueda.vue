<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Campo de busqueda</h1>
      <p>
        Estilos para el componente <code>SisdaiCampoBusqueda</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Este componente permite a las personas usuarias encontrar rápidamente un contenido específico, 
        proporcionando términos o frases relevantes para obtener resultados que coincidan con la consulta.
      </p>
      
      <EjemploCodigoVertical
        html='
        <div class="campo-busqueda">

          <input type="search" class="campo-busqueda-entrada" placeholder="Campo de búsqueda" />

          <button class="boton-pictograma boton-sin-contenedor-secundario campo-busqueda-borrar">
            <span class="pictograma-cerrar" aria-hidden="true"></span>
            <span class="a11y-solo-lectura">Limpiar campo de búsqueda</span>
          </button>

          <button class="boton-primario boton-pictograma campo-busqueda-buscar">
            <span class="pictograma-buscar" aria-hidden="true"></span>
            <span class="a11y-solo-lectura">Buscar</span>
          </button>

        </div>
        '
      />

    </div>    
  </div>
</template>
