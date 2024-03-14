<template>
  <div>

    <h1>Reticula</h1>
    <p>
      Las clases de columnas, <code>.columna-#</code>, deben estar dentro de un contenedor con la clase <code>.flex</code> ó <code>.grid</code>. 
      Se escribieron ambas opciones por las diferentes propiedades que pueden utilizar para cada estilo de display en CSS.
      Las columnas funcionan de la misma manera, pero las propiedades del contenedor son especificas del tipo.
    </p>
    <p>
      Se compone de 16 columnas en escritorio que pasan a 8 para móvil. El espacio entre columnas es de 24px en escritorio y 16px en móvil.
      El breackpoint está en 768px. Dispositivos con ancho menor que 768px se calculan en base a 8 columnas y las que sean igual o mayor a 768px se calculan en 16.
    </p>
  <pre>
    &lt;div class="grid">
      &lt;div class="columna-1"> &lt;/div>
      &lt;div class="columna-1"> &lt;/div>
      &lt;div class="columna-1"> &lt;/div>
      ...
    &lt;/div>
  </pre>
    <div class="grid">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
    </div>
    <p class="m-t-5">
      Los nombres de las columnas son numericas y van creciendo en porcentaje al total de las columnas en el dispositivo, por lo que columna-1 es 1/16 en escritorio y 1/8 para celular.
      Cuando en móvil se utiliza un número de columna mayor que 8, se calculará al ancho del 100%.
    </p>
  <pre>
    &lt;div class="flex">
      &lt;div class="columna-1"> &lt;/div>
    &lt;/div>
    &lt;div class="flex">
      &lt;div class="columna-2"> &lt;/div>
    &lt;/div>
    &lt;div class="flex">
      &lt;div class="columna-3"> &lt;/div>
    &lt;/div>
    ...
    &lt;div class="flex">
      &lt;div class="columna-16"> &lt;/div>
    &lt;/div>
  </pre>
    <div class="flex">
      <div class="columna-1 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-2 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-3 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-4 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-5 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-6 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-7 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-8 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-9 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-10 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-11 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-12 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-13 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-14 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-15 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <div class="flex">
      <div class="columna-16 conahcyt-fondo-claro-1 m-y-1 p-1"> </div>
    </div>
    <p class="m-t-5">
      Existen clases responsivas para los dispositivos -mov -esc . Estas clases tienen mayor prioridad que las que no especifican el dispositivo para poder reformatear la disposicion en caso de ser necesario.
    </p>
  <pre>
    &lt;div class="grid">
      &lt;div class="columna-11-esc columna-5-mov"> &lt;/div>
      &lt;div class="columna-1 columna-3-esc"> &lt;/div>
      &lt;div class="columna-1"> &lt;/div>
      ...
    &lt;/div>
  </pre>
    <div class="grid m-y-1">
      <div class="columna-11-esc columna-5-mov conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 columna-3-esc conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1"> </div>
    </div>
    
    <h2 class="m-t-10">Columnas <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a></h2>
    <p>Alineacion contenedor flex, la POSICION puede ser inicio, final, centrado, espaciado, alrededor y equidistante</p>
    <p> Además existe una clase .flex-columnas-100-al-simplificar que se le puede agregar a .flex, la cual indicará que sus .columna-# deberán escalarse a un ancho del 100% de la pantalla cuando se seleccione la <strong>VISTA SIMPLIFICADA</strong></p>
  <pre>
    &lt;div class="flex flex-contenido-POSICION flex-columnas-100-al-simplificar">
      &lt;div class="columna-1"> &lt;/div>
      &lt;div class="columna-4"> &lt;/div>
      &lt;div class="columna-1"> &lt;/div>
    &lt;/div>
  </pre>
  
    <div class="flex flex-contenido-inicio m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-inicio</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
    <div class="flex flex-contenido-final m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-final</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
    <div class="flex flex-contenido-centrado m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-centrado</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
    <div class="flex flex-contenido-separado m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-separado</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
    <div class="flex flex-contenido-alrededor m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-alrededor</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
    <div class="flex flex-contenido-equidistante m-t-1 flex-columnas-100-al-simplificar">
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
      <div class="columna-4 conahcyt-fondo-claro-1 p-1 m-y-1">.flex-contenido-equidistante</div>
      <div class="columna-1 conahcyt-fondo-claro-1 p-1 m-y-1"></div>
    </div>
  
    <h2 class="m-t-10">Columnas <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" ref="noopener noreferrer">Grid</a></h2>
  <pre>
    &lt;div class="grid">
      &lt;div class="columna-11-esc columna-5-mov"> &lt;/div>
      &lt;div class="columna-1-mov columna-3-esc"> &lt;/div>
      &lt;div class="columna-1"> &lt;/div>
      ...
    &lt;/div>
  </pre>
    
  
    <h2 class="m-t-10">Columnas <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/columns" target="_blank" ref="noopener noreferrer">Columns</a></h2>
  <pre>
    &lt;div class="columns columns-3 columns-2-mov">
      &lt;p> Lorem ipsum....&lt;/p>
      ...
    &lt;/div>
  </pre>
    <div class="columns columns-3 columns-2-mov">
      <p class="m-t-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis corrupti cupiditate molestias culpa soluta dolore dolorum consequuntur veniam, odit dolores aliquam earum amet pariatur excepturi, magnam officiis rerum ratione!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit, est nulla, ratione id minima dolorem, sed ipsum quidem error eos autem ad tempore. Quaerat iure magni neque dolorem commodi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque suscipit, alias illum ea aliquam porro harum ullam, esse accusantium tempora distinctio libero fuga sequi saepe quisquam a voluptatum. Beatae?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam in fugit dolores alias voluptatem maiores. Atque iste dolor vitae commodi est accusamus error quia magnam sapiente, nesciunt impedit suscipit.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maiores eos quos perferendis! Optio totam odio provident ipsam aspernatur. Laborum ea pariatur quo autem nostrum dicta velit alias labore voluptate!</p>
    </div>
  </div>
</template>
