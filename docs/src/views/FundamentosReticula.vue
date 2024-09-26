<script setup>
import EjemploReticula from '../componetes/EjemploReticula.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Retícula</h1>
      <p>
        Los contenedores, la retícula y todos los elementos responsivos modifican su disposición o 
        tamaño de <code>mov</code> a <code>esc</code> al superar los 768px de ancho de pantalla. 
        Los colores utilizados en la documentación son únicamente referenciales; no se añade 
        color mediante estas clases.
      </p>

      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a> |
        <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" ref="noopener noreferrer">Grid</a>
        Columnas
      </h2>
      <p>
        Las <i>clases</i> de columnas se emplean dentro de contenedores que usan las clases <code>.flex</code> ó 
        <code>.grid</code>, adaptadas a las propiedades específicas de cada tipo de visualización. Aunque las columnas 
        funcionan de manera similar en ambos casos, las propiedades de los contenedores son específicas del estilo de 
        visualización elegido. La retícula incluye 16 clases de columnas, con separaciones de 24px en escritorio y 8 
        columnas con separaciones de 16px para dispositivos móviles.
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
        Las columnas se identifican mediante nombres numéricos que indican cuántas columnas abarca cada bloque dentro 
        de una retícula. La nomenclatura utilizada es  <code>columna-#</code>, donde <code>#</code> representa la 
        cantidad de columnas que el bloque ocupa en un contenedor más amplio. Por ejemplo, <code>columna-3</code> 
        significa que el bloque ocupa tres columnas en la retícula. 
      </p>
      <p>
        En dispositivos móviles, el diseño responsivo modifica el comportamiento de las columnas para adaptarse a 
        pantallas más pequeñas. Si se utiliza el número de columna <code>#</code> que excede las 8 columnas 
        disponibles en móviles, el sistema automáticamente ajusta el ancho del bloque a 100% del contenedor.
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
        Las <i>clases</i> responsivas para dispositivos (<code>-mov</code> <code>-esc</code>) tienen 
        prioridad sobre las <i>clases</i> generales para permitir reajustes de disposición según sea necesario.
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
        Utilizando las <i>propiedades</i> flexibles de los contenedores, se han creado clases que maximizan la 
        adaptabilidad en la disposición de las columnas. Estas <i>clases</i> de posición utilizan el formato 
        <code>flex-contenido-POSICION</code>, donde la posición puede tomar los valores de: inicio, 
        final, centrado, espaciado, alrededor o equidistante.
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
      <h2 class="m-t-10">Clases especiales de alineación</h2>
      <p>
        La clase <code>.flex-reversa</code>, que se agrega 
        para invertir el orden de las columnas en una fila flex.
      </p>
      <p>
        Esta clase es responsiva, se puede utilizar para invertir 
        el orden únicamente en celular con <code>.flex-reversa-mov</code>
        y para pantallas de escritorio con <code>.flex-reversa-esc</code>.
      </p>
    </div>

    <h3 class="m-b-0 m-t-5">flex-reversa</h3>
    <EjemploReticula
      codigo='
      <div class="flex flex-reversa">
        <div class="columna-1"> 1 </div>
        <div class="columna-2"> 2 </div>
        <div class="columna-3"> 3 </div>
      </div>
      '
    />

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Clases de alineación vertical</h2>
      <p>
        La clase <code>.flex-vertical-centrado</code>, que se agrega 
        para centrar el contenido en un bloque de altura mayor al mismo.
      </p>
      <p>
        La clase <code>.flex-vertical-final</code>, que se agrega 
        para posicionar el contenido al final de un bloque de altura mayor al mismo.
      </p>
      <p>
        La clase <code>.flex-vertical-inicio</code>, que se agrega 
        para posicionar el contenido al inicio de un bloque de altura mayor al mismo.
      </p>
    </div>
    <h3 class="m-b-0 m-t-5">flex-vertical-centrado</h3>
    <EjemploReticula
      codigo='
      <div class="flex">
        <div 
          class="columna-4"
          style="height: 500px;"
        > 
          <p>Sin centrado vertical</p>
        </div>
        
        <div 
          class="columna-4 flex-vertical-centrado"
          style="height: 500px;"
        > 
          <p>Centrado</p>
        </div>
        <div 
          class="columna-4 flex-vertical-final"
          style="height: 500px;"
        > 
          <p>Final</p>
        </div>
        <div 
          class="columna-4 flex-vertical-inicio"
          style="height: 500px;"
        > 
          <p>Inicio</p>
        </div>
      </div>
      '
    />
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" ref="noopener noreferrer">Flex</a>
        para vista mostrar solo texto
      </h2>
      <p>
        Se ha diseñado una <i>clase</i> especial, <code>.flex-columnas-100-al-simplificar</code>, que se puede añadir 
        a <code>.flex</code> para que todas las <code>.columna-#</code> se escalen a un ancho de 100% de la 
        pantalla cuando se active la opción <code>Mostrar solo texto</code> del menú de accesibilidad.
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
        La <i>propiedad</i> de <code>columnas</code> es una forma sencilla de gestionar la cantidad de columnas y 
        el espacio entre ellas. Las configuraciones permiten utilizar las mismas 16 columnas separadas por 24px en 
        escritorio y 8 columnas separadas por 16px para dispositivos móviles. 
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
        Las columnas también cuentan con tamaños adaptativos para cada tipo de dispositivo, utilizando los 
        prefijos <code>-mov</code> para dispositivos móviles y <code>-esc</code> para escritorio. 
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
