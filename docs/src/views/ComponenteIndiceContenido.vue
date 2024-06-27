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
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Índice de contenido" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

          <p>
            El componente <code>SisdaiIndiceDeContenido</code> está diseñado para funcionar como un menú de navegación 
            entre distintas secciones de una vista. Incluye un título <code>indice-contenido-titulo</code> y un 
            contenedor <code>indice-contenido-contenedor</code>, el cual debe albergar hipervínculos locales que 
            faciliten la navegación directa a las secciones correspondientes. Este componente es esencial para mejorar 
            la orientación de la persona usuaria dentro de sitios o aplicaciones complejas. 
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
