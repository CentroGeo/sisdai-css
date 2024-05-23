
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Mostrar solo texto</h1>

      <p>
        Al activar esta función, se eliminan botones y elementos gráficos como imágenes, videos, tarjetas, 
        gráficas, tableros, etc. El contenido se reduce a su mínima expresión en forma de texto y enlaces, 
        lo que facilita a las personas enfocarse y llevar a cabo las tareas más importantes. 
        Además, puede disminuir el consumo de datos al limitar las consultas de videos o gráficas. 
      </p>

      Modifica los botones para mostrarlos como hipervínculos, excepto:
      <pre>
        button
          :not(.hipervinculo-gobmx)
          :not(.hipervinculo-conahcyt)
          :not(.nav-boton)
          :not(.nav-boton-menu)
          :not(.nav-boton-submenu)
          :not(.menu-accesibilidad-boton)
          :not(.colapsable-boton)
          :not(.menu-lateral-boton)
      </pre>

      Oculta todas las imágenes, excepto:
      <pre>
        img:not(.nav-logo)
        svg:not(.nav-logo)
      </pre>
      
    </div>

  </div>
</template>
