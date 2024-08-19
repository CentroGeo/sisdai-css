<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Mostrar solo texto</h1>
      <p>
        Al activar este estado, se eliminan botones y elementos gráficos como imágenes, videos, tarjetas, gráficas, tableros, 
        etc. de la interfaz. El contenido se reduce a su mínima expresión en forma de texto y enlaces, 
        facilitando a las personas enfocarse y llevar a cabo las tareas más importantes. Además, puede disminuir 
        el consumo de datos al limitar las consultas de videos o gráficas.
      </p>
      <p>
        Esta funcionalidad se implementa agregando o removiendo la clase <code>.a11y-simplificada</code> a la etiqueta <code>body</code>. 
        Al aplicar <var>Mostrar solo texto</var>, se realizan cambios específicos en algunos elementos de las páginas.
        A continuación se describen las reglas de dichos cambios:
      </p>
      <dl>
        <dt>Portadas</dt>
        <dd>
          Se mantienen solo los títulos.
        </dd>
        <dt>Tarjetas de contenido</dt>
        <dd>
          Se mantiene el formato del texto, se ocultan las imágenes y los botones adquieren el formato de enlaces.
        </dd>
        <dt>Tarjetas de hipervínculo</dt>
        <dd>
          Se mantiene el formato del texto, se ocultan las imágenes y las tarjetas adquieren los estados de cursor encima y enfoque.
        </dd>
        <dt>Imágenes</dt>
        <dd>
          Se ocultan todas las imágenes excepto los logotipos de la navegación y de los créditos.
          <EjemploCodigo
            :tiene_ejemplo='false'
            tipo='CSS'
            codigo='
              picture
              img
              svg
                :not(.nav-logo)
            '
          />
        </dd>
        <dt>Video</dt>
        <dd>
          Oculta todoss loss videos de la etiqueta nativa y si existe un iframe dentro de la clase .video, 
          que se puede utilizar para los videos insertados de Youtube.
          <EjemploCodigo
            :tiene_ejemplo='false'
            tipo='CSS'
            codigo='
              video

              .video 
                iframe
            '
          />
        </dd>
        <dt>Botones</dt>
        <dd>
          Los botones adquieren el formato de hipervínculos, excepto los de navegación y menús flotantes.
          <EjemploCodigo
            :tiene_ejemplo='false'
            tipo='CSS'
            codigo='
              .button
              button
                :not(.nav-boton)
                :not(.nav-boton-menu)
                :not(.nav-boton-submenu)
                :not(.menu-lateral-boton)
                :not(.menu-flotante-boton)
                :not(.colapsable-boton)
                :not(.boton-pictograma)
                :not(.boton-alternar)
            '
          />
        </dd>
        <dt>Contenedores</dt>
        <dd>
          Al aplicar la clase <code>.a11y-simplificada-contenedor</code> a los contenedores flex, 
          el contenido se reorganiza en un solo bloque vertical, optimizando la lectura.
        </dd>
        <dt>Retícula</dt>
        <dd>
          Al aplicar la clase <code>.flex-columnas-100-al-simplificar</code> a los contenedores flex, 
          las columnas ocupan el 100% del espacio del contenedor donde se encuentran.
        </dd>
        <dt>Clase .texto-centrado</dt>
        <dd>
          El texto se alinea a la izquierda para optimizar la lectura.
        </dd>
      </dl>
    </div>

    <div class="ancho-lectura">
      <h2 class="h4 m-t-10">
        Clases especiales
      </h2>
      <p>
        La clase <code>.a11y-simplificada-mostrar-inline</code> se utiliza para mostrar texto únicamente en <var>Mostrar solo texto</var>
        que en la página normalmente NO es visible ni reproducible por el lector de pantalla.
      </p>
      <p>
        La clase <code>.a11y-simplificada-mostrar-bloque</code> se utiliza para mostrar un bloque de contendido únicamente en <var>Mostrar solo texto</var>
        que en la página normalmente NO es visible ni reproducible por el lector de pantalla.
      </p>
      <p>
        La clase <code>.a11y-simplificada-ocultar</code> se utiliza para ocultar cualquier cosa en <var>Mostrar solo texto</var>
        que en la página normalmente es visible.
      </p>
      <p>
        La clase <code>.a11y-simplificada-leer-mostrar-inline</code> se utiliza para mostrar texto únicamente en <var>Mostrar solo texto</var> 
        que en la página normalmente NO es visible, pero siempre es reproducible por el lector de pantalla.
      </p>
      <p>
        La clase <code>.a11y-simplificada-mantener-imagen</code> se utiliza para mantener siempre visible una imagen aunque se habilite 
        el estado <var>Mostrar solo texto</var>
      </p>
    </div>

    <div class="ancho-lectura">
      <h2 class="h4 m-t-10">
        Consideraciones para agregar nuevos elementos que se modifiquen con el estado <em>Mostrar solo texto</em>.
      </h2>
      <p>
        Si se agrega un nuevo elemento, es necesario  utilizar la clase .a11y-simplificada 
        en un archivo de estilos para  crear las nuevas reglas que requiera. 
        Se recomienda:
      </p>
      <ol>
        <li>Escribir las clases de accesibilidad al final del archivo de estilos.</li>
        <li>No utilizar la misma nomenclatura de los componentes ni clases ya existentes al definir el nombre de una nueva clase de accesibilidad.</li>
      </ol>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='CSS'
      codigo='
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
      '
    />

    <div class="ancho-lectura">
      <h2 class="h4 m-t-10">
        Consideraciones para el correcto mantenimiento del estado <em>Mostrar solo texto</em>.
      </h2>
      <p>
        En el archivo de configuración <code>opcionesDefault.js</code> del componente <code>SisdaiMenuAccesibilidad</code>,
        la opción de <em>Mostrar solo texto</em> debe integrarse de la siguiente manera:
       </p>
    </div>
    <EjemploCodigo
      :tiene_ejemplo='false'
      tipo='JavaScript'
      codigo='
          export default [
            {
              accion: "alternarVistaSimplificada",
              claseCss: "a11y-simplificada",
              icono: "pictograma-vista-simplificada",
              titulo: "Mostrar solo texto",
            },
            ...
          ]
      '
    />
  </div>
</template>
