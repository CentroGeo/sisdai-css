<template>
  <div>

    <h1>Tarjetas</h1>
    <p>
      Este tipo de elementos se usan para acompañar un fragmeto de html con una
      imágen.
    </p>
    <pre>
  
  &lt;div class="tarjeta">
    &lt;img
      class="fondo-imagen"
      src="https://picsum.photos/970/984"
      alt=""
    />
    &lt;div class="contenido-html">
      &lt;p class="parrafo-texto-alto">Aquí va el contenido&lt;/p>
      &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel placerat.&lt;/p>
    &lt;/div>
  &lt;/div>
    </pre>
    <p>El resultado es el siguiente</p>
    <div class="tarjeta">
      <img class="fondo-imagen" src="https://picsum.photos/970/984" alt="" />
      <div class="contenido-html">
        <p class="parrafo-texto-alto">Aquí va el contenido</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel
          placerat.
        </p>
      </div>
    </div>
    <p>También existe una variante horizontal, que sólo se muestra así en escritorio</p>
    <div class="tarjeta-horizontal">
      <img class="fondo-imagen" src="https://picsum.photos/970/985" alt="" />
      <div class="contenido-html">
        <p class="parrafo-texto-alto">Aquí va el contenido</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel
          placerat.
        </p>
      </div>
    </div>
  
    <p>
      Este tipo de elementos, al igual que los hipervínculos externos, también
      pueden usarse en retículas
    </p>
    <div class="flex">
      <div class="columna-8 m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="https://picsum.photos/970/986" alt="" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              volutpat facilisis libero at tempus. Vestibulum tristique vel lectus
              vel placerat.
            </p>
          </div>
        </div>
      </div>
      <div class="columna-4 columna-4-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="https://picsum.photos/970/987" alt="" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Puede tener elementos como botones
            </p>
            <button class="boton-primario boton-chico m-y-3">Soy un botón</button>
          </div>
        </div>
      </div>
      <div class="columna-4 columna-4-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="https://picsum.photos/970/988" alt="" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Puede tener elementos como botones
            </p>
            <a class="boton boton-primario m-y-3">Soy un enlace con forma de botón</a>
          </div>
        </div>
      </div>
      <div class="columna-4 columna-10-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="https://picsum.photos/960/989" alt="" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Y también puede tener elementos como enlaces :)
            </p>
            <a class="m-y-3">Soy un link</a>
  
          </div>
        </div>
      </div>
      <div class="columna-4 columna-6-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="https://picsum.photos/960/990" alt="" />
          <div class="contenido-html">
            <div class="contenedor-alto-fijo" style="height: 220px">
              <h4>Y también puedes meter un contenido escroleable</h4>
              <p lang="en">Pardon me, but would ya mind if I fired me cannon through your porthole? You’re drinking a Salty Dog? How’d you like to try the real thing? Why are pirates pirates? cuz they arrrrrr Why is the rum gone? The Code is more like guidelines, really. But I am touched by y’loyalty mate.</p>
              <p lang="en">...come again. Pardon me, but would ya mind if I fired me cannon through your porthole? You’re drinking a Salty Dog? How’d you like to try the real thing? Why are pirates pirates? cuz they arrrrrr Why is the rum gone? The Code is more like guidelines, really. But I am touched by y’loyalty mate.</p>
          </div>
          </div>
        </div>
      </div>
    </div>








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
    &lt;img class="fondo-imagen" src="https://picsum.photos/970/980" alt="" />
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
      <img class="fondo-imagen" src="https://picsum.photos/970/980" alt="" />
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
        flex
        flex-columnas-100-al-simplificar
      "
    >
      <div class="columna-4 columna-4-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/981" alt="" />
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
          <img class="fondo-imagen" src="https://picsum.photos/970/982" alt="" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-8 columna-4-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/983" alt="" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-10-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/984" alt="" />
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo ">
              <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-6-esc m-b-3">
        <a class="tarjeta-hipervinculo-externo" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/985" alt="" />
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
      src="https://picsum.photos/970/984"
      alt=""
    />
    &lt;div class="contenido-abajo">
      &lt;p class="parrafo-texto-alto">Nombre del hipervínculo interno&lt;/p>
      &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel placerat.&lt;/p>
    &lt;/div>
  &lt;/a>
    </pre>
    <p>El resultado es el siguiente</p>
    <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
      <img class="fondo-imagen" src="https://picsum.photos/970/986" alt="" />
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
        flex
        flex-columnas-100-al-simplificar
      "
    >
      <div class="columna-4 columna-6-esc m-b-3">
        <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/987" alt="" />
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
          <img class="fondo-imagen" src="https://picsum.photos/970/988" alt="" />
          <div class="contenido-abajo">
            <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
          </div>
        </a>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <a class="tarjeta-hipervinculo-interno" href="" target="_blank">
          <img class="fondo-imagen" src="https://picsum.photos/970/989" alt="" />
          <div class="contenido-abajo">
            <p class="parrafo-texto-alto">Nombre del hipervínculo externo</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>