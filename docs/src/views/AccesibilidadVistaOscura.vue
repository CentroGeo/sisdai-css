<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
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
        Para cambiar entre temas claro y oscuro el menu de accesibilidad agrega a la etiqueta de <code>body</code>
        la propiedad <code>data-tema='claro'</code> o <code>data-tema='oscuro'</code>, además de agregar la clase
        especial <code>.a11y-oscura</code> al tema oscuro para facilitar la correcta visualizacion de componentes no nativos del sistema de diseño.
      </p>
      <p>
        Con estas propiedades filtran los estilos declarados en <code>src/color/tema-claro.scss</code> y <code>src/color/tema-oscuro.scss</code>
        para sobreescribir las variables predeterminadas de componente nativos del sistema de diseño, dependiendo del tema seleccionado por la persona usuaria.
      </p>
      
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el estado <em>Vista oscura</em>.
      </p>
      <p>
        Si se utilizan componentes no nativos al sistema de diseño, ó se editan en línea los estilos de alguno,
        es importante declarar los estilos considerando como predeterminado el tema claro y agregar las variaciones de color 
        necesarias para la correcta visualización en el modo oscuro mediante el uso de la clase especial <code>.a11y-oscura</code>.
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='CSS'
      codigo='
          // para una clase no nativa creada tomando como predeterminado el tema claro
          .nombre-de-mi-clase-nueva {
            background-color: black;
            color: white;
          }

          // debe existir su equivalente inverso para el tema oscuro
          .a11y-oscura .nombre-de-mi-clase-nueva {
            background-color: white;
            color: black;
          }
      '
    />
    
    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opcion de <em>Vista oscura</em>, de la siguiente manera:
       </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='JavaScript'
      codigo='
           export default [
            {
              accion: "alternarVistaOscura",
              claseCss: "a11y-oscura",
              icono: "pictograma-contraste",
              titulo: "Vista Oscura",
            },
            ...
          ]
      '
    />
  </div>
</template>
