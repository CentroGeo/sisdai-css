
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Cambio de fuente</h1>
      
      <p>
        Esta opción ofrece a las personas usuarias la posibilidad de cambiar la tipografía predeterminada (Montserrat) 
        por la tipografía Atkinson Hyperlegible, diseñada por el Braille Institute para lectores con baja visión. 
      </p>

      <p>
        La funcionalidad básica de esta función es agregar ó remover la clase <code>.a11y-tipografia</code> 
        de la etiqueta <code>body</code> para cambiar la fuente.
      </p>

      <p>
        La clase <code>.a11y-tipografia</code> cambia el valor de la variable de CSS global <code>--tipografia-familia</code> por 
        <code>'Atkinson Hyperlegible', sans-serif;</code>. Este cambio aplica a todos los elementos de la página.
      </p>

      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el cambio de fuente tipográfica.
      </p>

      <p>
        Ambas tipografías deben estar cargadas en el proyecto. <br>
        Se recomienda utilizar los links de <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferer">GoogleFonts</a>
        directamente en la cabecera del archivo <code>index.html</code> del proyecto.
      </p>
    </div>
    <pre class="nota nota-contenedor">
      
      <span aria-hidden="true">&lt;</span>link rel="preconnect" href="https://fonts.googleapis.com"<span aria-hidden="true">&gt;</span>
      <span aria-hidden="true">&lt;</span>link rel="preconnect" href="https://fonts.gstatic.com" crossorigin<span aria-hidden="true">&gt;</span>

      <span aria-hidden="true">&lt;</span>link 
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap" 
        rel="stylesheet"
      <span aria-hidden="true">&gt;</span>
    </pre>

    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opcion de Cambio de Fuente de la siguiente manera:
       </p>
    </div>
      <pre class="nota nota-contenedor">
        export default [
          {
            accion: 'alternarTipografiaAccesible',
            claseCss: 'a11y-tipografia',
            icono: 'pictograma-cambio-tipografia',
            titulo: 'Cambio de fuente',
          },
          ...
        ]
      </pre>

     
    

        
  </div>
</template>
