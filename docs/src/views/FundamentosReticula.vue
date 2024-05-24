<script setup>
import EjemploReticula from '../componetes/EjemploReticula.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Retícula</h1>
      <p>
        Los contenedores, la retícula y todos los elementos responsivos cambian de disposición o tamaño 
        de <code>mov</code> a <code>esc</code> pasando de <var>768px</var> de ancho de pantalla.
      </p>
      <p class="nota">
        Los colores utilizados en la documentacion son únicamente de referencia,
        nada en estas clases agrega color.
      </p>

      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a> |
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" ref="noopener noreferrer">Grid</a>
        Columnas
      </h2>
      <p>
        Las clases de columnas se utilizan dentro de un contenedor con la clase <code>.flex</code> ó <code>.grid</code>. 
        Se escribieron ambas opciones por las diferentes propiedades que pueden utilizar para cada estilo de display.
        Las columnas funcionan de la misma manera, pero las propiedades del contenedor son especificas del tipo.
      </p>
      <p>
        La retícula compone de 16 clases de columnas separadas a 24px en escritorio, 
        que pasan a ser únicamente 8 columnas separadas por 16px para dispositivos móviles. 
      </p>
      <EjemploPropiedades
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Columnas hasta', valor:'8'},
          {nombre:'Espaciado', valor:'16px'},
        ],[
          {titulo:'Escritorio'},
          {nombre:'Columnas hasta', valor:'16'},
          {nombre:'Espaciado', valor:'24px'},
        ]]"
      />
    </div>
    <EjemploReticula
      codigo='
      <div class="grid">
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />
    <EjemploReticula
      codigo='
      <div class="flex">
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a> |
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" ref="noopener noreferrer">Grid</a>
        Tamaño de columnas
      </h2>
      <p>
        Los nombres de las columnas son numericas <code>columna-#</code> en donde # es la cantidad de columnas a las que equivale el bloque.
        Cuando en dispositivos móviles se utiliza un número de columna mayor que 8, la columna se ajusta al ancho del 100%.
      </p>
    </div>
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-1"> 1f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-1"> 1g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-2"> 2f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-2"> 2g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-3"> 3f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-3"> 3g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-4"> 4f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-4"> 4g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-5"> 5f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-5"> 5g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-6"> 6f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-6"> 6g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-7"> 7f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-7"> 7g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-8"> 8f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-8"> 8g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-9"> 9f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-9"> 9g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-10"> 10f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-10"> 10g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-11"> 11f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-11"> 11g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-12"> 12f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-12"> 12g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-13"> 13f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-13"> 13g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-14"> 14f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-14"> 14g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-15"> 15f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-15"> 15g </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="flex">
        <div class="columna-16"> 16f </div>
      </div>
      '
    />
    <EjemploReticula
      :mostrarCodigo="false"
      codigo='
      <div class="grid">
        <div class="columna-16"> 16g </div>
      </div>
      '
    />

    <EjemploReticula
      :mostrarEjemplo="false"
      codigo='

      <div class="flex"> <div class="columna-1"> 1 </div> </div>
      <div class="flex"> <div class="columna-2"> 2 </div> </div>
      <div class="flex"> <div class="columna-3"> 3 </div> </div>
      <div class="flex"> <div class="columna-4"> 4 </div> </div>
      <div class="flex"> <div class="columna-5"> 5 </div> </div>
      <div class="flex"> <div class="columna-6"> 6 </div> </div>
      <div class="flex"> <div class="columna-7"> 7 </div> </div>
      <div class="flex"> <div class="columna-8"> 8 </div> </div>
      <div class="flex"> <div class="columna-9"> 9 </div> </div>
      <div class="flex"> <div class="columna-10"> 10 </div> </div>
      <div class="flex"> <div class="columna-11"> 11 </div> </div>
      <div class="flex"> <div class="columna-12"> 12 </div> </div>
      <div class="flex"> <div class="columna-13"> 13 </div> </div>
      <div class="flex"> <div class="columna-14"> 14 </div> </div>
      <div class="flex"> <div class="columna-15"> 15 </div> </div>
      <div class="flex"> <div class="columna-16"> 16 </div> </div>

      '
    />

    <div class="contenedor ancho-lectura">
      <h3 class="m-t-5">Tamaño responsivo</h3>
      <p>
        Existen clases responsivas para los dispositivos <code>-mov</code> <code>-esc</code>. 
        Estas clases tienen mayor prioridad que las que no especifican el dispositivo para poder reformatear la disposicion en caso de ser necesario.
      </p>
    </div>
    <EjemploReticula
      codigo='
      <div class="grid m-y-1">
        <div class="columna-6-mov columna-15-esc"> 6 | 15 </div>
      </div>
      <div class="grid m-y-1">
        <div class="columna-4 columna-11-esc"> 4 | 11 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a>
        alineación de contenido
      </h2>
      <p>
        Aprovechando las propiedades de los contenedores flex, se crearon clases para aprovechar la flexibilidad del acomodo de sus columnas.
        Las clases de posicion siguen la lógica de <code>flex-contenido-POSICION</code>, en donde posición puede tomar los valores de 
        inicio, final, centrado, espaciado, alrededor y equidistante.
      </p>
    </div>
    <h3 class="m-b-0 m-t-5">flex-contenido-inicio</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-inicio">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <h3 class="m-b-0 m-t-5">flex-contenido-centrado</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-centrado">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <h3 class="m-b-0 m-t-5">flex-contenido-final</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-final">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <h3 class="m-b-0 m-t-5">flex-contenido-separado</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-separado">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <h3 class="m-b-0 m-t-5">flex-contenido-alrededor</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-alrededor">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />

    <h3 class="m-b-0 m-t-5">flex-contenido-equidistante</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-contenido-equidistante">
        <div class="columna-1"> 1 </div>
        <div class="columna-4"> 4 </div>
        <div class="columna-1"> 1 </div>
      </div>
      '
    />
    
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a>
        para vista simplificada
      </h2>
      <p>
        Existe una clase especial <code>.flex-columnas-100-al-simplificar</code> que se le puede agregar a <code>.flex</code>, 
        la cual indicará que todas sus <code>.columna-#</code> deberán escalarse a un ancho del 100% de la pantalla 
        cuando se seleccione la opción <code>Mostrar solo texto</code> del menú de accesibilidad.
      </p>
    </div>

    <h3 class="m-b-0 m-t-5">flex-columnas-100-al-simplificar</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-columnas-100-al-simplificar">
        <div class="columna-1"> 1 </div>
        <div class="columna-3"> 3 </div>
        <div class="columna-1"> 1 </div>
        <div class="columna-8"> 8 </div>
      </div>
      '
    />
  
    <div class="contenedor ancho-lectura p-t-maximo">
      <h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/columns" target="_blank" ref="noopener noreferrer">Columns</a>
      </h2>
      <p>
        Otra forma de utilizar columnas, es con la propiedad columnas. Es una propiedad muy sencilla a la que únicamente
        se le puede especificar la cantidad de columnas y el espacio entre ellas.
      </p>
      <p>
        Para unificar las columnas se pueden utilizar con las 16 de columnas separadas a 24px en escritorio, 
        y 8 columnas separadas por 16px para dispositivos móviles. 
      </p>
      <EjemploPropiedades
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Columnas hasta', valor:'8'},
          {nombre:'Espaciado', valor:'16px'},
        ],[
          {titulo:'Escritorio'},
          {nombre:'Columnas hasta', valor:'16'},
          {nombre:'Espaciado', valor:'24px'},
        ]]"
      />
    </div>
    <EjemploReticula
      codigo='
      <div class="columns columns-2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
      </div>
      '
    />

    <div class="contenedor ancho-lectura">
      <h3 class="m-t-10">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/columns" target="_blank" ref="noopener noreferrer">Columns</a>
        columnas responsivas
      </h3>
      <p>
        Las columnas en este caso tambien cuentan con tamaños para cada dispositivo,
        que al igual que en el resto de los elementos se utiliza con los prefijos 
        <code>-mov</code> para dispositivos móviles
        y <code>-esc</code> para dispositivos de escritorio.
      </p>
      <EjemploPropiedades
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Columnas', valor:'2'},
          {nombre:'Espaciado', valor:'16px'},
        ],[
          {titulo:'Escritorio'},
          {nombre:'Columnas', valor:'3'},
          {nombre:'Espaciado', valor:'24px'},
        ]]"
      />
    </div>
    <EjemploReticula
      codigo='
      <div class="columns columns-3 columns-2-mov">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur odit, est nulla, ratione id minima dolorem, 
          sed ipsum quidem error eos autem ad tempore. 
          Quaerat iure magni neque dolorem commodi.
        </p>
      </div>
      '
    />
  
  </div>
</template>
