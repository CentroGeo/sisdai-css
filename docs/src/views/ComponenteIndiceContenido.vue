<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>

  <div class="flex">
    <div class="columna-4 menu-lateral-fondo oculto-mov">
    </div>
    <div class="columna-4 columna-8-mov columna-orden-3-esc">
      <div class="indice-contenido">
        <p 
          class="indice-contenido-titulo" 
          id="indicecontenido"
        >
          Título índice
        </p>
        <nav 
          aria-labelledby="indicecontenido"
          class="indice-contenido-contenedor"
        >
          <a href="#seccion1"> Sección Uno </a>
          <a href="#seccion2"> Sección Dos </a>
          <a href="#seccion3"> Sección Tres </a>
        </nav>
      </div>
    </div>
    <div class="columna-8">
      <div class="m-y-maximo contenedor">
        <div class="ancho-lectura">
          <h1>Índice de contenido <span class="etiqueta">preliminar</span></h1>
          <p>
            Estilos para el componente <code>SisdaiIndiceDeContenido</code> declarado en la biblioteca 
            <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
            Este componente se utiliza como un menú de navegación entre distinas secciones de una vista.
          </p>
          <p>
            El <code>indice-contenido</code> se compone de un título <code>indice-contenido-titulo</code>
            y un contenedor <code>indice-contenido-contenedor</code> en el cual se espera que contenga hipervínculos locales.
          </p>
          <EjemploCodigo 
            tipo='HTML'
            codigo='
            <div class="indice-contenido">
              <p 
                class="indice-contenido-titulo" 
                id="indicecontenido"
              >
                Título índice
              </p>
              <nav 
                aria-labelledby="indicecontenido"
                class="indice-contenido-contenedor"
              >
                <a href="#seccion1"> Sección Uno </a>
                <a href="#seccion2"> Sección Dos </a>
                <a href="#seccion3"> Sección Tres </a>
              </nav>
            </div>
          ' />
        </div>
      </div>
    </div>
    
  </div>

</template>
