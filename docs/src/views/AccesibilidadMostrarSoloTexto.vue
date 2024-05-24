
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
      <p>
        Esta funcionalidad se logra agregar ó remover la clase <code>.a11y-simplificada</code> a la etiqueta <code>body</code>.
      </p>

      <dl>
        <dt>Portadas</dt>
        <dd>
          Mantiene solo los títulos
        </dd>

        <dt>Tarjetas de contenido</dt>
        <dd>
          Mantiene el formato del texto, oculta las imágenes y reformatea los botones como enlaces
        </dd>

        <dt>Tarjetas de hipervinculo</dt>
        <dd>
          Mantiene el formato del texto, oculta las imágenes y crea estilos en la tarjeta para los estados de cursor encima y enfoque.
        </dd>

        <dt>Imágenes</dt>
        <dd>
          Oculta todas las imágenes excepto los logotipos de la navegación
          <pre class="nota nota-contenedor m-0">
          img:not(.nav-logo)
          svg:not(.nav-logo)
          </pre>
        </dd>

        <dt>Botones</dt>
        <dd>
          Modifica los botones para mostrarlos como hipervínculos, excepto los de navegación y el componente *boton-flotante
          <pre class="nota nota-contenedor m-0">
          button
            :not(.nav-boton)
            :not(.nav-boton-menu)
            :not(.nav-boton-submenu)
            :not(.menu-accesibilidad-boton)
            :not(.menu-lateral-boton)
            :not(.colapsable-boton)
            :not(.boton-pictograma)
            :not(.boton-alternar)
          </pre>
        </dd>

        <dt>*boton-flotante</dt>
        <dd>
          Modifica la posicion para que no esten flotando los enlaces y oculta el botón que oculta/muestra los enlaces
        </dd>

        <dt>Reticula</dt>
        <dd>
          La clase .flex-columnas-100-al-simplificar que puede agregarse a contenedores .flex,
          hace que todas las columnas dentro se pongan al 100% del contenedor en el estado de Mostrar solo texto
        </dd>

      </dl>
    </div>

    <div class="ancho-lectura">
      <p class="h4 m-t-10">
        Consideraciones en el área de desarrollo para poder mantener el estado <em>Mostrar solo texto</em>.
      </p>
      <p>
        Las reglas de que clase necesita reformatearse y como, descritas arriba en español plano, 
        se encuentran en el archivo de <code>src/accesibilidad/simplificada.scss</code>. Si se agrega 
        un nuevo elemento en su proyecto puede utilizar la clase <code>.a11y-simplificada</code> 
        para dentro crear las nuevas reglas que requiera.
      </p>
      <ol>
        <li>Recomendamos poner las clases de accesibilidad al final de su archivo de estilos.</li>
        <li>No utilizar clases con nombres iguales a componentes ya existentes.</li>
        <li>No comience el nombre de sus clases con la palabra boton.</li>
      </ol>
    </div>
    <pre class="nota nota-contenedor">
      .a11y-simplificada {
        .mi-nuevo-componente {
          ...
          // propiedades que requiera mi componente en el estado de Mostrar solo texto
          background-color: transparent; 
          border: none;
          color: #00f;
          padding; 0;
          ...
        }
      }
    </pre>
    <div class="ancho-lectura">
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        debe existir la opcion de <em>Mostrar solo texto</em>, de la siguiente manera:
       </p>
    </div>
    <pre class="nota nota-contenedor">
      export default [
       {
          accion: 'alternarVistaSimplificada',
          claseCss: 'a11y-simplificada',
          icono: 'pictograma-vista-simplificada',
          titulo: 'Mostrar solo texto',
        },
        ...
      ]
    </pre>

  </div>
</template>
