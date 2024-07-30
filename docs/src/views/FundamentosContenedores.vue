<script setup>
import EjemploEstiloClase from '../componetes/EjemploEstiloClase.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Contenedores</h1>
      <p>
        Los contenedores son clases para agrupar contenido y establecer márgenes generales.
        Las propiedades de los contenedores se organizan según el tipo de dispositivo:
        <code>mov</code> para dispositivos móviles como celulares y tabletas,
        y <code>esc</code> para dispositivos de escritorio, monitores y laptops.
      </p>
      <p>
        Tanto los contenedores como la retícula y todos los elementos responsivos 
        ajustan su disposición o tamaño al cambiar de <code>mov</code> a 
        <code>esc</code>, específicamente a partir de un ancho de pantalla 
        de 768 px. Los colores utilizados en la documentación son solo 
        referenciales; ninguna de estas clases añade color al contenido.
      </p>
    </div>
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor</h2>
      <p>
        El contenedor ocupa el ancho completo de la pantalla y sus márgenes exteriores
        izquierdo y derecho se han estandarizado en automático para centrarlo. 
        El margen interior horizontal del contenedor varía según  el dispositivo. 
        Sin embargo, si un contenedor está anidado dentro de otro, los márgenes 
        interiores horizontales del segundo, tercer, cuarto y subsiguientes 
        contenedores, se reducen a cero.
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
      <p>
        Este tipo de contenedor se centra y tiene un ancho máximo predeterminado
        para cada dispositivo, garantizando así uniformidad y coherencia visual.
      </p>
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
      <p>
      Este contenedor se centra y limita su ancho máximo para ajustarse al contenido, 
      mejorando tanto la legibilidad como la experiencia de usuaria en el sitio
      </p>
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
        Existen clases específicas para alinear los contenedores de ancho fijo 
        y de  lectura, asegurando una disposición estética y funcional adecuada.
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
      <h2 class="m-t-10">Contenedor para vista mostrar solo texto</h2>
      <p>
        Independientemente del formato o ancho, si el contenedor tiene la 
        clase <code>a11y-simplificada-contenedor</code>, cuando se selecciona 
        la opción de accesibilidad de mostrar solo texto, el contenido se 
        reorganiza en un solo bloque vertical óptimo para la lectura.
      </p>
    </div>
    
    <div class="contenedor a11y-simplificada-contenedor m-y-3">
      <div class="grid">
        <div class="columna-4 fondo-color-neutro">
          <p>1</p>
        </div>
        <div class="columna-1 fondo-color-confirmacion">
          <p>2</p>
        </div>
        <div class="columna-6 fondo-color-alerta">
          <p>3</p>
        </div>
        <div class="columna-2 fondo-color-error">
          <p>4</p>
        </div>
        <div class="columna-3 fondo-color-acento ">
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
