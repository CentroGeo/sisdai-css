<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Ir al contenido principal</h1>
      <p>
        Enlace de accesibilidad permite a la persona usuaria dirigirse al bloque del contenido principal, saltando todos los menús de la página web.
      </p>
      <p>
        Esta funcionalidad es general del sitio y siempre está disponible, no está ligada al menú de accesibilidad.
      </p>
      
      <h2 class="h4 m-t-10">
        Consideraciones para el correcto mantenimiento del enlace de accesibilidad <em>Ir al contenido principal</em>.
      </h2>
      <p>
        Debe existir un hipervínculo con la clase <code>.ir-contenido-principal</code>
        como primer elemento de la vista de la página web. 
        Este hipervínculo debe direccionar al <code>id</code> del contenedor principal, 
        que en Vue sería el contenedor que encapsula la etiqueta RouterView.
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
