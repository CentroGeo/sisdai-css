<template>
  <div>
    <h1>Portadas</h1>

    <p>
      Algunos elementos usan elementos multimedia como fondo, como videos, gifs
      o imágenes y encima texto. Los elementos .portada permiten mostrar
      contenido que cubre completamente el fondo de su contenedor reescalándose
      de forma centrada sin dejar espacios en blanco hacia arriba o hacia abajo
    </p>
    <p>La altura de .contenedor-portada será por default 	height: calc(100vh - 92px);</p>
    <pre>
&lt;div class="contenedor-portada" style="height: 300px">
    &lt;img class="portada" src="https://picsum.photos/970/980" alt="" />
&lt;/div>
</pre
    >

    <div class="contenedor-portada" >
      <img class="portada" src="https://picsum.photos/970/980" alt="" />
    </div>
    <p>
      El siguiente ejemplo incluye un elemento .portada y otro elemento
      .degradado-negro-abajo, que puede ser un div que contenga texto
    </p>
    <pre>
&lt;div class="contenedor-portada">
    &lt;img class="portada" src="https://picsum.photos/970/980" alt="" >
    &lt;div class="degradado-negro-abajo">
        &lt;div class="contenido-abajo">
            &lt;div class="contenedor ancho-lectura">
                &lt;p class="titulo-eni texto-centrado">Título de ENI&lt;/p>
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>
</pre
    >
    <div class="contenedor-portada" >
      <img class="portada" src="https://picsum.photos/970/979" alt="" />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <div class="contenedor ancho-lectura">
            <h1 class="texto-centrado">Título de ENI</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>