
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

      <p class="nota nota-contenedor">
        TODO: reescribir cuando se complete la nueva funcionalidad del color
      </p>

      <p>
        Los colores predeterminados para todos los elementos del sistema estan en <code>:root { ... }</code> del archivo<code>src/_variables.scss</code>.
      </p>
      <p>
        Para cambiar entre modo claro/oscuro el menu de accesibilidad agrega a la etiqueta de <code>body</code>
        la propiedad <code>data-light-theme-eni='true'</code> en modo claro en tema eni 
        y <code>data-dark-theme-eni='true'</code> en modo oscuro del tema eni.
      </p>
      <p>
        Estas propiedades leen los archivos de <code></code> de <code>src/accesibilidad/clara.scss</code> y <code>src/accesibilidad/oscura.scss</code>
        para sobreescribir las variables predeterminadas dependiendo del modo seleccionado por la persona usuaria.
      </p>
      
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el estado <em>Vista oscura</em>.
      </p>
      <p>
        Deben existir declaradas las variables de color para todos los elementos en loa archivos antes mencionados.
      </p>
      <p>
        Si se introducen más elementos al sistema o página web, se deben declarar las variables de color predeterminado, 
        para modo claro y para modo oscuro.
      </p>
    </div>
    <pre class="nota nota-contenedor">
      :root {
        --minuevocomponente-borde: #000;
        --minuevocomponente-enfoque-borde: #00f;
      }
      
      body[data-light-theme-eni='true'] {
        --minuevocomponente-borde: #000;
        --minuevocomponente-enfoque-borde: #00f;
      }

      body[data-dark-theme-eni='true'] {
        --minuevocomponente-borde: #fff;
        --minuevocomponente-enfoque-borde: 9cf;
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
