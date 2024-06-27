<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Ir al contenido principal</h1>
      <p>
        Enlace de accesibilidad para dirigir a la persona usuaria al bloque del contenido principal, saltando todos los menús de la página web.<br />
        Esta funcionalidad es general del sitio, siempre existe, no se encuentra ligada al menú de accesibilidad.
      </p>
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para mantener el enlace de accesibilidad <em>Ir al contenido principal</em>.
      </p>
      <p>
        Debe existir un hipervínculo con la clase <code>.ir-contenido-principal</code> como primer elemento de la vista de la página web, 
        que direccione al <code>id</code> del contenedor principal, que en Vue vendría siendo el contenedor que encapsule la etiqueta <code>RouterView</code>.
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='HTML'
      codigo='
        <body>
          <a href="#principal" class="ir-contenido-principal">
            Ir a contenido principal
          </a>
        
          ... 

          <main role="main" id="principal">
            <RouterView />
          </main>

          ...

        </body>
      '
    />
  </div>
</template>
