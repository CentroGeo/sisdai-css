
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Reducir / Aumentar Tipografía <span class="etiqueta">preliminar</span></h1>
      <p>
        Será una funcionalidad que le permita a la persona usuaria hacer todo el texto del sitio en general, 
        mas grande o mas chico que el establecido predeterminadamente por el sisitema de diseño a 16px de base.
      </p>
      
      <p class="h4 m-t-10">
        Consideraciones de desarrollo para poder agregar el estado <em>Reducir / Aumentar Tipografía</em>.
      </p>
      <p>
        Todos los tamaños tipográficos de todos los elementos deben estar declarados en unidades <code>rem</code>
        para mantener las jerarquías tipográficas cuando se edite el tamaño base.
      </p>
      <p>
        Bebe existir la variable global del tamaño base
      </p>
     
    </div>
    <pre class="nota nota-contenedor">
      // Variables de CSS

      :root {
        --tipografia-tamanio: 16px;
        ...
      }
    </pre>

    <div class="ancho-lectura">
      <p>
        Ejemplo de cómo esta aplicada la lógica para incrementar, decrementar y reestablecer el valor
        de tamaño tipografico general en ésta página de documentación.
      </p>
    </div>

    <pre class="nota nota-contenedor">
    // docs/src/App.vue

    <span aria-hidden="true">&lt;</span>script setup<span aria-hidden="true">&gt;</span>
      import { ref } from 'vue'
      
      const fontSize = ref(16)

      function upFontSize() {
        fontSize.value ++
        let up_size = `${fontSize.value}px`
        document.documentElement.style.setProperty('--tipografia-tamanio',up_size)
      }

      function downFontSize() {
        fontSize.value --
        let down_size = `${fontSize.value}px`
        document.documentElement.style.setProperty('--tipografia-tamanio',down_size)
      }

      function resetA11y() {
        fontSize.value = 16
        document.documentElement.style.setProperty('--tipografia-tamanio','16')
      }

    <span aria-hidden="true">&lt;</span>/script<span aria-hidden="true">&gt;</span>
    </pre>

  </div>
</template>
