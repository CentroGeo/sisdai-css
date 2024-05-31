<script setup>
import EjemploEstiloClase from '../componetes/EjemploEstiloClase.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Contenedores</h1>
      <p>
        Los contenedores son clases para agrugar contenido y darles margenes generales. 
      
        Las propiedades dentro del arreglo de los contenedores estan agrupadas por dispositivo, 
        <code>mov</code> para dispositivos móviles como celulares y tabletas; 
        y <code>esc</code> para dispositivos de escritorio, monitores y laptobs.
      </p>
      <p>
        Los contenedores, la retícula y todos los elementos responsivos cambian de disposición o tamaño 
        de <code>mov</code> a <code>esc</code> pasando de <var>768px</var> de ancho de pantalla.
      </p>
      <p class="nota">
        Los colores utilizados en la documentacion son únicamente de referencia,
        nada en estas clases agrega color.
      </p>
    </div>
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor</h2>
      <p>
        El contenedor toma el ancho completo de la pantalla. Los margenes exteriores izquierdo y derecho se estandarizaron a automático, lo que centra al contenedor.
      </p>
      <p>
        El margen interior del eje horizontal del contenedor varía dependiendo del dispositivo, pero si existe un contenedor anidado en otro contenedor,
        el margen interior del eje horizontal del segundo, tercer, cuarto... contenedores, se vuelven cero.
      </p>
      <EjemploPropiedades
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Margen interior', valor:'24px'},
        ],[
          {titulo:'Escritorio'},
          {nombre:'Margen interior', valor:'48px'},
        ]]"
      />
    </div>

    <EjemploEstiloClase 
      clases="contenedor m-y-3"
      codigo='
        <div class="contenedor">
          contenedor
        </div>
      '
    />
   
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor de ancho fijo</h2>
      <p>Se centra y se limita el ancho máximo que puede tener el contenedor en cada dispositivo.</p>
      <EjemploPropiedades 
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Margen interior', valor:'24px'},
          {nombre:'Ancho máximo', valor:'100%'},
        ],[
          {titulo:'Escritorio'},
          {nombre:'Margen interior', valor:'48px'},
          {nombre:'Ancho máximo', valor:'1366px'},
        ]]"
      />
    </div>
    <EjemploEstiloClase 
      clases="contenedor ancho-fijo m-y-3"
      codigo='
        <div class="contenedor ancho-fijo">
          contenedor ancho-fijo
        </div>
      '
    />
   
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor de ancho de lectura</h2>
      <p>Se centra y se limita el ancho máximo que puede tener el contenedor para mejorar la lectura</p>
      <EjemploPropiedades 
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Margen interior', valor:'24px'},
        {nombre:'Ancho máximo', valor:'100%'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Margen interior', valor:'0'},
        {nombre:'Ancho máximo', valor:'700px'},
      ]]"
    />
    </div>
    <EjemploEstiloClase 
      clases="contenedor ancho-lectura m-y-3"
      codigo='
        <div class="contenedor ancho-lectura">
          contenedor ancho-lectura
        </div>
    '/>
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Alineación de contenedores</h2>
      <p>
        Clases para alinear los contendores de ancho fijo y de ancho lectura
      </p>
    </div>
    <div class="contenedor">
      <EjemploEstiloClase 
        clases="contenedor alineacion-izquierda ancho-lectura m-y-3"
        codigo='
          <div class="contenedor alineacion-izquierda ancho-lectura">
            alineacion-izquierda
          </div>
      '/>
      <EjemploEstiloClase 
        clases="contenedor alineacion-centrada ancho-lectura m-y-3"
        codigo='
          <div class="contenedor alineacion-centrada ancho-lectura">
            alineacion-centrada
          </div>
      '/>
      <EjemploEstiloClase 
        clases="contenedor alineacion-derecha ancho-lectura m-y-3"
        codigo='
          <div class="contenedor alineacion-derecha ancho-lectura">
            alineacion-derecha
          </div>
      '/>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor para vista simplificada</h2>
      <p>
        Este contenedor no importa que formato tenga, que tan ancho sea, 
        si el contenedor tiene la clase <code>a11y-simplificada-contenedor</code>,
        cuando se selecciona la opción de accesibilidad de vista simplificada, 
        se muestra el contenido en un solo bloque con ancho de lectura vertical.
      </p>
    </div>
    
    <div class="contenedor a11y-simplificada-contenedor m-y-3">
      <div class="grid">
        <div class="columna-4 conahcyt-fondo-claro-1">
          <p>1</p>
        </div>
        <div class="columna-1 gobmx-fondo-claro-2 ">
          <p>2</p>
        </div>
        <div class="columna-6 conahcyt-fondo-claro-2">
          <p>3</p>
        </div>
        <div class="columna-2 gobmx-fondo-claro-1">
          <p>4</p>
        </div>
        <div class="columna-3 gobmx-fondo-claro-2 ">
          <p>5</p>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <EjemploEstiloClase 
        clases="contenedor"
        codigo='
          <div class="contenedor a11y-simplificada-contenedor">
            <div class="grid">
              <div class="columna-4">
                cualquier contenido ...
                ...
  
            </div>
          </div>
      '/>
    </div>
   
  </div>
</template>
