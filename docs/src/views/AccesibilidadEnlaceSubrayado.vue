
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Enlaces subrayados</h1>

      <p>
        La función de enlaces subrayados del menú de accesibilidad es una opción de presentación visual para destacar los elementos interactivos del sitio. 
      </p>
      <p>
        Esta funcionalidad se logra agregar ó remover la clase <code>.a11y-hipervinculos</code> a la etiqueta <code>body</code>.
      </p>

      <p>
        La clase <code>.a11y-hipervinculos</code> cambia el estilo de los hivervínculos para que en todos los estados tenga la decoración de línea subrayada.
        Este cambio aplica a todos los enlaces de la página.
      </p>
    </div>

    <div class="ancho-lectura">
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el estado <em>Enlaces subrayados</em>.
      </p>
      <p>
        Pues nada, es tan simple que pues naa. Tomen agüita.
      </p>
    </div>
    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opcion de <em>Enlaces subrayados</em>, de la siguiente manera:
       </p>
    </div>
    <pre class="nota nota-contenedor">
      export default [
        {
          accion: 'alternarEnlacesSubrayados',
          claseCss: 'a11y-hipervinculos',
          icono: 'pictograma-enlace-subrayado',
          titulo: 'Enlaces subrayados',
        },
        ...
      ]
    </pre>

  </div>
</template>
