
import { onDeactivated } from 'vue';
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Vista oscura</h1>
      
      <p>
        Dentro de las alternativas disponibles en el menú de accesibilidad, está la vista oscura, 
        la cual permite a las personas usuarias ajustar su experiencia de navegación en condiciones de iluminación baja, 
        facilitando así la exploración durante períodos prolongados. 
      </p>

      <p>
        La paleta de color

        src/_variables.scss
        :root {}
      </p>
      <p>
       el modo claro

        src/accesibilidad/oscura.scss
        body[data-vista-oscura='true'] {}


        el modo oscuro
        src/accesibilidad/clara.scss
        body[data-vista-clara='true'] {}

      </p>
      <p>
        ?
      </p>
      
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el estado <em>Vista oscura</em>.
      </p>
      <p>
        Deben existir declaradas las variables de color para todos los elementos y componentes que se utilicen en el sitio web
        tanto en el archivo <code>src/accesibilidad/clara.scss</code> como en <code>src/accesibilidad/oscura.scss</code>. 
        Para introducir nuevos elementos a las funciones de modos de color, se necesitan describir las variables de CSS 
        dentro de la etiqueta de vista clara y oscura. 
      </p>
      <p>
        Se recomienda utilizar la convención para los nombes de variables de 
        color <code>--componente-estado-atributo</code> utilizada por el Sisdai.
      </p>
      <p>
        Se recomienta vincular los colores de elementos y componentes con las
        variables de color de la paleta del sistema.
      </p>
    </div>
    <pre class="nota nota-contenedor">
      body[data-vista-clara='true'] {
        --minuevocomponente-borde: var(--color-primario-1);
        --minuevocomponente-enfoque-borde: var(--color-primario-2);
      }

      body[data-vista-oscura='true'] {
        --minuevocomponente-borde: var(--color-primario-3);
        --minuevocomponente-enfoque-borde: var(--color-primario-4);
      }
    </pre>

    <div class="ancho-lectura">
      <p>
        Paleta de color
      </p>
    </div>
    <pre class="nota nota-contenedor">
      // paleta
      :root {
        --color-primario-1: #000;
      }
    </pre>

    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opcion de <em>Vista oscura</em>, de la siguiente manera:
       </p>
    </div>
      <pre class="nota nota-contenedor">
        export default [
          {
            accion: 'alternarVistaOscura',
            claseCss: 'a11y-oscura',
            icono: 'pictograma-contraste',
            titulo: 'Vista Oscura',
          },
          ...
        ]
      </pre>

  </div>
</template>
