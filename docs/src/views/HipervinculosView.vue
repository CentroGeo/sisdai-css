<template>
  <div>

    <h1>Hipervinculos</h1>
    <p>
      <a href="#">etiqueta de hipervinculo a</a> o
      <button class="hipervinculo">button.hipervinculo</button> o
      <a href="#">a <span class="icon sisdai-descargar"></span></a> o
      <button class="hipervinculo">
        button.hipervinculo <span class="icon sisdai-descargar"></span>
      </button>
    </p>
    <h2>Compuestos</h2>
    <p>
      Elementos que funcionan como hipervínculos, pero tienen un estilo más
      elaborado. Normalmente se les conoce como "tarjetas" en el sistema de
      diseño.
    </p>
    <h3>Hipervínculos externos con forma de tarjeta</h3>
    <p>
      Este tipo de hipervínculos consisten en una imágen y enlazan a dominios
      externos al proyecto que los contiene.
    </p>
    <p>
      También podemos usar la clase .tarjeta-hipervinculo-externo para el tag
      <code>&lt;a></code> que contendrá una <code>&lt;img></code> con la clase
      .fondo-imagen, y otro elemento, generalmente <code>&lt;div></code> con la
      clase .degradado-negro-abajo que contendrá un div.contenido-abajo en donde
      se incluirá el contenido html que deba ir como texto del enlace. A
      continuación se muestra un ejemplo
    </p>
    <pre>
  &lt;a class="tarjeta-hipervinculo-externo" href="" target="_blank">
    &lt;img class="fondo-imagen" src="http://placekitten.com/970/980" />
    &lt;div class="degradado-negro-abajo">
      &lt;div class="contenido-abajo ">
        &lt;p class="parrafo-texto-alto m-y-0">
          Nombre del hipervínculo externo
        &lt;/p>
        &lt;p>
          Subtitulo del hipervínculo externo
        &lt;/p>
      &lt;/div>
    &lt;/div>
  &lt;/a>
      </pre
    >
    <p>El resultado es el siguiente</p>
    <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
      <img class="fondo-imagen" src="http://placekitten.com/970/980" />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo ">
          <p class="parrafo-texto-alto m-y-0">Nombre del hipervínculo externo</p>
          <p>Subtitulo del hipervínculo externo</p>
        </div>
      </div>
    </a>
    <p>
      Cabe mencionar que este tipo de hipervínculos con forma de tarjeta se pueden
      incluir en cuadrículas flex, como se muestra a continuación
    </p>
    <div
      class="
        flex flex-contenido-separado
        contenedor
        ancho-fijo
        flex-columnas-100-al-simplificar
      "
    >
      <div class="columna-4 columna-4-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/984" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">
                Nombre del hipervínculo externo
                <span class="icono-teclado"></span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-8-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/985" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-8 columna-4-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/990" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-10-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/991" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-6-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/980" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <h3>Hipervínculos internos con forma de tarjeta</h3>
    <p>
      Este tipo de hipervínculos se usan para llevarte a otras rutas dentro de el
      mismo dominio. Para usar este estilo se debe agregar la clase
      .tarjeta-hipervinculo-interno al elemento <code>&lt;a></code>, que contendrá
      una <code>&lt;img></code> con la clase .fondo-imagen, y otro elemento
      div.contenido-abajo en donde se incluirá el contenido html que deba ir como
      texto del enlace. A continuación se muestra un ejemplo
    </p>
    <pre>
  
  &lt;a class="tarjeta-hipervinculo-interno" href="" target="_blank">
    &lt;img
      class="fondo-imagen"
      src="http://placekitten.com/970/984"
    />
    &lt;div class="contenido-abajo">
      &lt;p class="parrafo-texto-alto">Nombre del hipervínculo interno&lt;/p>
      &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel placerat.&lt;/p>
    &lt;/div>
  &lt;/a>
    </pre>
    <p>El resultado es el siguiente</p>
    <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
      <img class="fondo-imagen" src="http://placekitten.com/970/984" />
      <div class="contenido-abajo">
        <p class="parrafo-texto-alto">Nombre del hipervínculo interno</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel
          placerat.
        </p>
      </div>
    </a>
  
    <p>
      Este tipo de elementos, al igual que los hipervínculos externos, también
      pueden usarse en retículas
    </p>
    <div
      class="
        flex flex-contenido-separado
        contenedor
        ancho-fijo
        flex-columnas-100-al-simplificar
      "
    >
      <div class="columna-4 columna-6-esc m-b-3">
        <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/984" />
          <div class="contenido-abajo">
            <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              volutpat facilisis libero at tempus. Vestibulum tristique vel lectus
              vel placerat.
            </p>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/984" />
          <div class="contenido-abajo">
            <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
          <img class="fondo-imagen" src="http://placekitten.com/970/984" />
          <div class="contenido-abajo">
            <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
          </div>
        </a>
      </div>
    </div>
    <h2 class="m-t-10">Identidad</h2>
    <p class="gobmx-fondo-oscuro-1 p-3">
      <a href="#" class="hipervinculo-gobmx m-r-3">a.hipervinculo-gobmx</a>
      <button class="hipervinculo-gobmx">button.hipervinculo-gobmx</button>
    </p>
    <p class="conahcyt-fondo-oscuro-1 p-3">
      <a href="#" class="hipervinculo-conahcyt m-r-3">a.hipervinculo-conahcyt</a>
      <button class="hipervinculo-conahcyt">button.hipervinculo-conahcyt</button>
    </p>
  </div>
</template>
