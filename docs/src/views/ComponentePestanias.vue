<script setup>
import EjemploCodigo from "../componetes/EjemploCodigo.vue";
</script>

<template>
  <div class="m-y-maximo">
    <div class="contenedor ancho-lectura">
      <h1>Pestañas</h1>
      <p>
        Las pestañas controlan de forma interactiva la visibilidad de un
        conjunto de elementos por sección en diferentes paneles. Cada panel con
        el contenido asociado a la etiqueta de la pestaña se muestra conforme a
        esta está activada.
      </p>
      <p>
        Las pestañas son un patrón común de diseño o estructura que recomienda
        la
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/"
          target="_blank"
          rel="noopener noreferrer"
          >ARIA Authoring Practices Guide (APG) </a
        >.
      </p>
      <p>
        Cuando una pestaña se inicializa, un primer panel es mostrado y su
        pestaña asociada indica que está activada haciendo uso del diseño.
        Cuando la usuaria activa otra de las pestañas, el panel mostrado
        anteriormente se oculta mediante la propiedad <code>hidden</code> y el
        panel asociado con la pestaña activa se muestra.
      </p>
      <p>
        Para la construcción del componente <code>SisdaiPestanias</code> es
        necesario seguir los siguientes lineamientos:
      </p>
      <ul>
        <li>
          Asociar el nombre del <code>aria-labelledby</code> del elemento con el
          atributo <code>role="tablist"</code> al id del título de la
          visualización o indicar <code>arial-label</code> para que las
          tecnologías de asistencia lo reconozcan.
        </li>
        <li>
          Es importante que solo el primer botón o pestaña del
          <code>tablist</code> contenga el estado
          <code>aria-selected="true"</code> y lo demás en
          <code>false</code> para que al iniciar el componente sea la primera
          opción mostrada y enfocada/activa.
        </li>
        <li>
          Es necesario que los botones que no estén activos al iniciar deberán
          tener el atributo <code>tabindex="-1"</code> para enfocar el elemento,
          pero no ser accesible a través de la navegación secuencial del
          teclado.
        </li>
        <li>
          Es importante que cada botón del <code>tablist</code> tenga su id
          porque cada elemento con el atributo <code>role="tabpanel"</code> lo
          necesitará para su nombre de etiqueta <code>aria-labelledby</code>.
        </li>
        <li>
          Del mismo modo, cada elemento <code>tabpanel</code> deberá tener un id
          para que apunte desde el <code>aria-controls</code> de cada elemento
          <code>tab</code> o botón del <code>tablist</code>.
        </li>
        <li>
          Recomendamos agregar el atributo <code>tabindex="0"</code> a cada uno
          de los elementos <code>tabpanel</code> para que la usuaria logre
          enfocar el panel de la pestaña con la navegación secuencial del
          teclado en caso de que el contenido del panel no tenga elementos
          enfocables.
        </li>
      </ul>
      <p>
        El enfoque por teclado funciona manualmente, es decir, hay que presiona
        la tecla enter o barra espaciadora para activar la pestaña enfocada al
        presionar las flechas izquierda/derecha y mostrar el panel.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <div class="pestanias">
        <div role="tablist" aria-labelledby="id-unico-titulo">
          <button
            id="idpestania-uno"
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="idpestaniapanel-uno"
          >
            Pestaña 1
          </button>
          <button
            id="idpestania-dos"
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="idpestaniapanel-dos"
            tabindex="-1"
          >
            Pestaña 2
          </button>
          <button
            id="idpestania-tres"
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="idpestaniapanel-tres"
            tabindex="-1"
          >
            Pestaña 3
          </button>
          <button
            id="idpestania-cuatro"
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="idpestaniapanel-cuatro"
            tabindex="-1"
            disabled
          >
            Pestaña Deshabilitada
          </button>
        </div>

        <div id="id-lista-pestania-panel">
          <div
            id="idpestaniapanel-uno"
            role="tabpanel"
            aria-labelledby="idpestania-uno"
          >
            <p>Contenido de la pestaña 1</p>
          </div>
          <div
            id="idpestaniapanel-dos"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="idpestania-dos"
            hidden
          >
            <p>Contenido de la pestaña 2</p>
          </div>
          <div
            id="idpestaniapanel-tres"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="idpestania-tres"
            hidden
          >
            <p>Contenido de la pestaña 3</p>
          </div>
          <div
            id="idpestaniapanel-cuatro"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="idpestania-cuatro"
            hidden
          >
            <p>Contenido de la pestaña 4</p>
          </div>
        </div>
      </div>

      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
        <div class="pestanias">
          <div role="tablist" aria-labelledby="id-unico-titulo">
            <button id="idpestania-uno" type="button" role="tab" aria-selected="true" aria-controls="idpestaniapanel-uno">
              Pestaña 1
            </button>
            <button id="idpestania-dos" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-dos" tabindex="-1">
              Pestaña 2
            </button>
            <button id="idpestania-tres" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-tres" tabindex="-1">
              Pestaña 3
            </button>
            <button id="idpestania-cuatro" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-cuatro" tabindex="-1" disabled>
              Pestaña Deshabilitada
            </button>
          </div>

          <div id="id-lista-pestania-panel">
            <div id="idpestaniapanel-uno" role="tabpanel" aria-labelledby="idpestania-uno">
              <p>Contenido de la pestaña 1</p>
            </div>
            <div id="idpestaniapanel-dos" role="tabpanel" tabindex="0" aria-labelledby="idpestania-dos" hidden>
              <p>Contenido de la pestaña 2</p>
            </div>
            <div id="idpestaniapanel-tres" role="tabpanel" tabindex="0" aria-labelledby="idpestania-tres" hidden>
              <p>Contenido de la pestaña 3</p>
            </div>
            <div id="idpestaniapanel-cuatro" role="tabpanel" tabindex="0" aria-labelledby="idpestania-cuatro" hidden>
              <p>Contenido de la pestaña 4</p>
            </div>
          </div>
        </div>
        '
      />

      <p>
        Nota: existe la posibilidad de que el panel se muestre automáticamente
        al enfocar la pestaña con el teclado. Esto en la lógica js del
        componente. Para saber cómo decidir cuándo realizar una selección
        automática seguida del enfoque visita esta
        <a
          href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus"
          target="_blank"
          rel="noopener noreferrer"
          >guía</a
        >.
      </p>
    </div>
  </div>
</template>
