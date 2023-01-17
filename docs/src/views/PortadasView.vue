<template>
  <div>
    <h1>Portadas</h1>

    <p>
      Algunos elementos usan elementos multimedia como fondo, como videos, gifs
      o imágenes y encima texto. Los elementos .portada permiten mostrar
      contenido que cubre completamente el fondo de su contenedor reescalándose
      de forma centrada sin dejar espacios en blanco hacia arriba o hacia abajo
    </p>
    <p>La altura de .contenedor-portada será por default min-height: 240px</p>
    <pre>
&lt;div class="contenedor-portada" style="height: 300px">
    &lt;img class="portada" src="http://placekitten.com/970/980">
&lt;/div>
</pre
    >

    <div class="contenedor-portada" style="height: 300px">
      <img class="portada" src="http://placekitten.com/970/980" />
    </div>
    <p>
      El siguiente ejemplo incluye un elemento .portada y otro elemento
      .degradado-negro-abajo, que puede ser un div que contenga texto
    </p>
    <pre>
&lt;div class="contenedor-portada" style="height: 90vh">
    &lt;img class="portada" src="http://placekitten.com/970/980">
    &lt;div class="degradado-negro-abajo">
        &lt;div class="contenido-abajo texto-color-1">
            &lt;p class="titulo-eni texto-color-1">Título de ENI&lt;/p>
        &lt;/div>
    &lt;/div>
&lt;/div>
</pre
    >
    <div class="contenedor-portada" style="height: 90vh">
      <img class="portada" src="http://placekitten.com/970/979" />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <p class="titulo-eni texto-centrado">Título de ENI</p>
        </div>
      </div>
    </div>
    
  </div>
</template>