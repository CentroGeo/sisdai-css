<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Campo de búsqueda</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente de "Campo de búsqueda" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiCampoBusqueda</code> está diseñado para mejorar la experiencia de búsqueda 
        de las personas usuarias. Permite a las personas encontrar rápidamente contenido específico mediante 
        la introducción de términos o frases relevantes, proporcionando resultados precisos que coincidan con 
        la consulta. Este componente es esencial para sitios con gran cantidad de información, lo cual facilita 
        el acceso y la navegación eficiente del contenido.  
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
