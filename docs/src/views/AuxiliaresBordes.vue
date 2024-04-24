<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Bordes</h1>
      <h2 class="m-t-10">Posiciones</h2>
      <p> 
        Posición vacía se agrega en general a todos lados,
        <code>t</code> <i>top</i> arriba, 
        <code>b</code> <i>bottom</i> abajo, 
        <code>l</code> <i>left</i> izquierda,
        <code>r</code> <i>right</i> derecha,
        <code>x</code> eje horizontal combinación de izquierda y derecha,
        <code>y</code> eje vertical combinacion de arriba y abajo.
      </p>
    </div>

    <div class="grid">
      <p class="columna-2 borde">.borde</p>
      <p class="columna-2 borde-t">.borde-t</p>
      <p class="columna-2 borde-l">.borde-l</p>
      <p class="columna-2 borde-b">.borde-b</p>
      <p class="columna-2 borde-r">.borde-r</p>
      <p class="columna-2 borde-x">.borde-x</p>
      <p class="columna-2 borde-y">.borde-y</p>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Colores</h2>
      <p>Variaciones de color de borde independientes para cada posicion</p>
    </div>
    <div class="grid">
      <div class="columna-2 borde-b borde-color-1">
        <p>.borde-b</p><p> .borde-color-1<br> #141414</p>
      </div>
      <div class="columna-2 borde-b borde-color-2">
        <p>.borde-b</p><p> .borde-color-2<br> #6f7271</p>
      </div>
      <div class="columna-2 borde-b borde-color-3">
        <p>.borde-b</p><p> .borde-color-3<br> #a9a8a9</p>
      </div>
      <div class="columna-2 borde-b borde-color-4">
        <p>.borde-b</p><p> .borde-color-4<br> #ffffff</p>
      </div>
      <div class="columna-2 borde borde-color-1 borde-r-color-3">
        <p>.borde</p><p>.borde-color-1</p><p>.borde-r-color-3</p>
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Grosores</h2>
      <p>
        Variaciones de grosor de borde independientes para cada posicion.
        El nombre del sufijo de la clase hace referencia al grosor en pixeles.
      </p>
    </div>
    <div class="grid">
      <div class="columna-2 borde-b borde-grosor-0">
        <p>.borde-b</p><p> .borde-grosor-0<br> 0px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-1">
        <p>.borde-b</p><p> .borde-grosor-1<br> 1px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-2">
        <p>.borde-b</p><p> .borde-grosor-2<br> 2px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-4">
        <p>.borde-b</p><p> .borde-grosor-4<br> 4px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-8">
        <p>.borde-b</p><p> .borde-grosor-8<br> 8px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-16">
        <p>.borde-b</p><p> .borde-grosor-16<br> 16px</p>
      </div>
      <div class="columna-2 borde-b borde-grosor-24">
        <p>.borde-b</p><p> .borde-grosor-24<br> 24px</p>
      </div>
  
      <div class="columna-2 borde borde-l-grosor-24">
        <p>.borde</p><p> .borde-l-grosor-16</p>
      </div>
      
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Redondeado</h2>
      <p>
        Variaciones de redondeado independientes para cada posicion.
        El nombre del sufijo de la clase hace referencia al borde redondeado en pixeles.
      </p>
    </div>
    <div class="grid">
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-0">
        <p class="p-x-1">.borde-redondeado-0 <br> 0px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-1">
        <p class="p-x-1">.borde-redondeado-1 <br> 1px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-2">
        <p class="p-x-1">.borde-redondeado-2 <br> 2px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-4">
        <p class="p-x-1">.borde-redondeado-4 <br> 4px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-8">
        <p class="p-x-1">.borde-redondeado-8 <br> 8px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-16">
        <p class="p-x-1">.borde-redondeado-16 <br> 16px</p>
      </div>
      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-redondeado-24">
        <p class="p-x-1">.borde-redondeado-24 <br> 24px</p>
      </div>

      <div class="columna-2 conahcyt-fondo-oscuro-2 conahcyt-texto-claro-1 borde-t-redondeado-24 borde-b-redondeado-8">
        <p class="p-x-1"> .borde-t-redondeado-24 </p> 
        <p class="p-x-1"> .borde-b-redondeado-8 </p>
      </div>
    </div>
    
  </div>
</template>
