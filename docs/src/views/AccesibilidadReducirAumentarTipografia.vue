<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura" id="descripcion">
      <h1>Reducir / Aumentar Tipografía <span class="etiqueta">preliminar</span></h1>
      <p>
        Esta funcionalidad permite a la persona usuaria hacer que todo el texto del sitio 
        sea más grande o más pequeño que el tamaño predeterminado establecido por el Sisdai, 
        que es de  16px como base.
      </p>
    </div>

    <div class="ancho-lectura" id="integracion">
      <h2 class="h4 p-t-10">
        Consideraciones para agregar el estado <em>Reducir / Aumentar Tipografía</em>
      </h2>
      <p>
        Todos los tamaños tipográficos de todos los elementos deben estar declarados en unidades <code>rem</code>
        para mantener las jerarquías tipográficas cuando se edite el tamaño base.
      </p>
      <p>
        Debe existir la variable global para el tamaño base de la tipografía.
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='CSS'
      codigo='
          // Variables de CSS

          :root {
            --tipografia-tamanio: 16px;
            ...
          }
      '
    />

    <div class="ancho-lectura">
      <p>
        Para incrementar, disminuir  y restablecer el valor de tamaño tipográfico general, 
        se puede aplicar la siguiente lógica utilizada en ésta página de documentación:
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='Vue.js'
      codigo="
          // docs/src/App.vue

          <script setup>
            
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

          </script>
      "
    />

  </div>
</template>
