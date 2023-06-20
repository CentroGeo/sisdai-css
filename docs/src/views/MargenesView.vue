<template>

  <h1>Márgenes</h1>

  <h2 class="m-t-10">Posiciones</h2>
  <div class="grid">
    <div class="columna-8">
      <p>Exsiten clases para agregar margenes exteriores en distintas posiciones</p>
      <ul>
        <li><b>m</b> para poner margenes generales (arriba, derecha, abajo, izquierda)</li>
        <li><b>m-y</b> para poner margenes en el eje y (arriba y abajo)</li>
        <li><b>m-x</b> para poner margenes en el eje x (derecha e izquierda)</li>
        <li><b>m-t</b> para poner margenes arriba</li>
        <li><b>m-b</b> para poner margenes abajo</li>
        <li><b>m-r</b> para poner margenes derecha</li>
        <li><b>m-l</b> para poner margenes izquierda</li>
      </ul>
    </div>
    <div class="columna-8">
      <p>Las mismas clases existen para margenes interiores, pero empiezan con <b>p</b> por padding </p>
      <ul>
        <li><b>p</b> para poner margenes generales (arriba, derecha, abajo, izquierda)</li>
        <li><b>p-y</b> para poner margenes en el eje y (arriba y abajo)</li>
        <li><b>p-x</b> para poner margenes en el eje x (derecha e izquierda)</li>
        <li><b>p-t</b> para poner margenes arriba</li>
        <li><b>p-b</b> para poner margenes abajo</li>
        <li><b>p-r</b> para poner margenes derecha</li>
        <li><b>p-l</b> para poner margenes izquierda</li>
      </ul>
    </div>
  </div>

  <h2 class="m-t-10">Tamaños</h2>
  <div class="grid">
    <div class="columna-4">
      <p>Los tamaños tanto para margen como para padding van en incrementos de 8 en 8 de 0 a 10.</p>
      <p>Además de tres clases para margenes especiales. <i>minimo</i>, <i>extra</i>, <i>maximo</i></p>
    </div>
    <div class="columna-4">
<pre>
$espaciado: (
    '0': 0,
    '1': 8px,
    '2': 16px,
    '3': 24px,
    '4': 32px,
    '5': 40px,
    '6': 48px,
    '7': 56px,
    '8': 64px,
    '9': 72px,
    '10': 80px,
    'minimo': 4px,
    'extra': 96px,
    'maximo': 120px,
);
</pre>
    </div>
    <div class="columna-2">
      <p class="m-t-1">m-t-1</p>
      <p class="m-t-2">m-t-2</p>
      <p class="m-t-3">m-t-3</p>
      <p class="m-t-4">m-t-4</p>
      <p class="m-t-5">m-t-5</p>
      <p class="m-t-6">m-t-6</p>
      <p class="m-t-7">m-t-7</p>
      <p class="m-t-8">m-t-8</p>
      <p class="m-t-9">m-t-9</p>
      <p class="m-t-10">m-t-10</p>
    </div>
    <div class="columna-2">
      <p class="m-t-minimo">m-t-minimo</p>
      <p class="m-t-extra">m-t-extra</p>
      <p class="m-t-maximo">m-t-maximo</p>
    </div>
  </div>
  

  
</template>
