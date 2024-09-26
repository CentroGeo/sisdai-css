<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura" id="descripcion">
      <h1>Cambio de fuente</h1>
      <p>
        Esta opción ofrece a las personas usuarias la posibilidad de cambiar la tipografía predeterminada (Montserrat) 
        por la tipografía Atkinson Hyperlegible, diseñada por el Braille Institute para lectores con baja visión. 
      </p>
      <p>
        La funcionalidad se logra al agregar o remover la clase <code>.a11y-simplificada</code> a la etiqueta <code>body</code>.
      </p>
      <p>
        La clase <code>.a11y-tipografia</code> cambia el valor de la variable de CSS global <code>--tipografia-familia</code> por 
        <code>'Atkinson Hyperlegible', sans-serif;</code>. El cambio de fuente se aplica a todos los elementos de la página.
      </p>
    </div>

    <div class="ancho-lectura" id="mantenimiento">
      <h2 class="h4 p-t-10">
        Consideraciones para mantener el estado <em>Cambio de Fuente</em>
      </h2>
      <p>
        Ambas tipografías deben estar cargadas en el proyecto. <br>
        Se recomienda utilizar los links de <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferer" lang="en" hreflang="en">Google fonts</a>
        directamente en la cabecera del archivo <code>index.html</code> del proyecto.
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='HTML'
      codigo='
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <link 
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap" 
          rel="stylesheet"
        >
      '
    />

    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opción de <em>Cambio de Fuente</em>, de la siguiente manera:
       </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='JavaScript'
      codigo='
        export default [
          {
            accion: "alternarTipografiaAccesible",
            claseCss: "a11y-tipografia",
            icono: "pictograma-cambio-tipografia",
            titulo: "Cambio de fuente",
          },
          ...
        ]
      '
    />

  </div>
</template>
