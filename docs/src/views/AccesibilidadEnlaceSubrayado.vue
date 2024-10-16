<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura" id="descripcion">
      <h1>Enlaces subrayados</h1>
      <p>
        La función de enlaces subrayados es una opción de presentación visual para destacar los elementos interactivos del sitio. 
      </p>
      <p>
        Esta funcionalidad se logra agregar ó remover la clase <code>.a11y-hipervinculos</code> a la etiqueta <code>body</code>.
      </p>
      <p>
        La clase <code>.a11y-hipervinculos</code> cambia el estilo de los hipervínculos para que en todos los estados los enlaces 
        se subrayen en cualquier estado. Este cambio aplica a todos los enlaces de la página.
      </p>
    </div>

    <div class="ancho-lectura" id="mantenimiento">
      <h2 class="h4 p-t-10">
        Consideraciones para el correcto mantenimiento del estado <em>Enlaces subrayados</em>
      </h2>
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        la opción de <em>Enlaces subrayados</em> debe integrarse de la siguiente manera:
       </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='JavaScript'
      codigo='
        export default [
          {
            accion: "alternarEnlacesSubrayados",
            claseCss: "a11y-hipervinculos",
            icono: "pictograma-enlace-subrayado",
            titulo: "Enlaces subrayados",
          },
          ...
        ]
      '
    />
  </div>
</template>
