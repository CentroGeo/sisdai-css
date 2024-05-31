
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Ir al contenido principal</h1>
      
      <p>
        Enlace de accesibilidad para dirigir a la persona usuaria al bloque del contenido principal, saltando todos los menús de la página web.
      </p>

      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para mantener el enlace de accesibilidad <em>Ir al contenido principal</em>.
      </p>

      <p>
        Debe existir un hipervínculo con la clase <code>.ir-contenido-principal</code> como primer elemento de la vista de la página web, 
        que direccione al <code>id</code> del contenedor principal, que en Vue vendría siendo el contenedor que encapsule la etiqueta <code>RouterView</code>.
      </p>
    </div>
    <pre class="nota nota-contenedor">
      <span aria-hidden="true">&lt;</span>body<span aria-hidden="true">&gt;</span>
        <span aria-hidden="true">&lt;</span>a href="#principal" class="ir-contenido-principal"<span aria-hidden="true">&gt;</span>
          Ir a contenido principal
        <span aria-hidden="true">&lt;</span>/a<span aria-hidden="true">&gt;</span>
      
        ... 

        <span aria-hidden="true">&lt;</span>main role="main" id="principal"<span aria-hidden="true">&gt;</span>
          <span aria-hidden="true">&lt;</span>RouterView /<span aria-hidden="true">&gt;</span>
        <span aria-hidden="true">&lt;</span>/main<span aria-hidden="true">&gt;</span>

        ...
        
      <span aria-hidden="true">&lt;</span>/body<span aria-hidden="true">&gt;</span>
    </pre>

  </div>
</template>
