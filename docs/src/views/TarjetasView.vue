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
      src="http://placekitten.com/970/984"
    />
    &lt;div class="contenido-html">
      &lt;p class="parrafo-texto-alto">Aquí va el contenido&lt;/p>
      &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat facilisis libero at tempus. Vestibulum tristique vel lectus vel placerat.&lt;/p>
    &lt;/div>
  &lt;/div>
    </pre>
    <p>El resultado es el siguiente</p>
    <div class="tarjeta">
      <img class="fondo-imagen" src="http://placekitten.com/970/984" />
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
      <img class="fondo-imagen" src="http://placekitten.com/970/984" />
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
    <div
      class="
        flex flex-contenido-separado
        contenedor
        ancho-fijo
      "
    >
      <div class="columna-4 columna-6-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="http://placekitten.com/970/980" />
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
      <div class="columna-4 columna-5-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="http://placekitten.com/970/982" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Puede tener elementos como botones
            </p>
            <button class="boton-primario boton-chico m-y-3">Soy un botón</button>
          </div>
        </div>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="http://placekitten.com/970/982" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Puede tener elementos como botones
            </p>
            <a class="boton boton-primario m-y-3">Soy un enlace con forma de botón</a>
          </div>
        </div>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="http://placekitten.com/960/934" />
          <div class="contenido-html">
            <p class="parrafo-texto-alto">Aquí va el contenido</p>
            <p>
              Y también puede tener elementos como enlaces :)
            </p>
            <a class="m-y-3">Soy un link</a>
  
          </div>
        </div>
      </div>
      <div class="columna-4 columna-5-esc m-b-3">
        <div class="tarjeta">
          <img class="fondo-imagen" src="http://placekitten.com/960/934" />
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
  </div>
</template>