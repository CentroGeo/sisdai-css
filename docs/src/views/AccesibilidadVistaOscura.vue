<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura" id="descripcion">
      <h1>Vista oscura</h1>
      <p>
        Dentro de las alternativas disponibles en el menú de accesibilidad, está la vista oscura, 
        la cual permite a las personas usuarias ajustar su experiencia de navegación en condiciones de iluminación baja, 
        facilitando así la exploración durante períodos prolongados. 
      </p>
      <p>
        Para cambiar entre los temas claro y oscuro, el menú de accesibilidad actualiza la etiqueta 
        <code>body</code> con el atributo <code>data-tema='claro'</code> o <code>data-tema='oscuro'</code>. 
        En el caso del tema oscuro, agrega la clase especial <code>.a11y-oscura</code> 
        para facilitar la correcta visualización de componentes no nativos del Sisdai.
      </p>
      <p>
        Con estas propiedades se filtran los estilos declarados en <code>src/color/tema-claro.scss</code> y 
        <code>src/color/tema-oscuro.scss</code> para sobreescribir las variables predeterminadas de los 
        componentes nativos del Sisdai, dependiendo del tema seleccionado por la persona usuaria.
      </p>
    </div>
    <div class="ancho-lectura" id="clases-especiales">
      <h2 class="h4 p-t-10">
        Clases especiales
      </h2>
      <p>
        La clase <code>.a11y-oscura-filtro-blanco</code> se agrega a imágenes con fondo libre (png o svg)
        para aplicar un filtro que vuelve completamente blanca una imagen al pasar al tema oscuro.<br />
        Por ejemplo el logotipo del Conahcyt en la navegación principal:
      </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='HTML'
      codigo='
        <img 
          class="nav-logo a11y-oscura-filtro-blanco" 
          src="..." 
          alt="Conahcyt"
        />
      '
    />
    <div class="ancho-lectura" id="personalizacion">
      <h2 class="h4 p-t-10">
        Consideraciones para agregar nuevos elementos que se modifiquen con el estado <em>Vista oscura</em>
      </h2>
      <p>
        Si se utilizan componentes no nativos del sistema de diseño o se editan en línea los estilos de alguno, 
        es importante declarar los estilos considerando como predeterminado el tema claro y agregar las 
        variaciones de color necesarias para la correcta visualización en el modo oscuro mediante 
        el uso de la clase especial <code>.a11y-oscura</code>.
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
    
    <div class="ancho-lectura" id="mantenimiento">
      <h2 class="h4 p-t-10">
        Consideraciones para el correcto mantenimiento del estado <em>Vista oscura</em>
      </h2>
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        la opción de <em>Vista oscura</em> debe integrarse de la siguiente manera:
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
