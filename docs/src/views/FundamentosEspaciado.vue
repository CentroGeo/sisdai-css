<script setup>
import EjemploEspaciado from '../componetes/EjemploEspaciado.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Espaciado</h1>
      <p>
        La escala de espaciado se ha diseñado para complementar las escalas de 
        tipografía y la cuadrícula, utilizando  múltiplos de cuatro y ocho 
        píxeles. Esta escala permite seleccionar el nivel adecuado según las 
        necesidades del diseño.
      </p>
      <p>
        El espaciado se utiliza tanto en márgenes exteriores <small lang="en">(margin)</small> 
        como en  interiores <small lang="en">(padding)</small>, utilizando <code>m</code> 
        para margen y <code>p</code> para padding, con base en los nombres de las propiedades 
        de CSS. Las clases se nombran siguiendo el formato <code>propiedad-posicion-tamaño</code>.
      </p>
      <p>
        Los colores utilizados en la documentación son solo referenciales y 
        no se aplican a través de estas clases. 
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Tamaños</h2>
      <p>
        Las variables de tamaño están estructuradas en una lista numérica, 
        incrementando de 8 en 8 desde 0 hasta 80px, complementadas con 
        márgenes especiales para casos específicos. Los márgenes especiales 
        incluyen: mínimo (4px), extra (96px) y máximo (120px). 
      </p>
      <p>
        Cada clase define un margen superior específico, demostrando la 
        aplicación práctica de la lista numérica de tamaños y márgenes 
        especiales. Los puntos dibujados en el fondo del ejemplo están 
        separados por 8px, ilustrando la progresión del espaciado, a 
        continuación se puede observar: 
      </p>
    </div>
    <EjemploEspaciado codigo='<div class="m-t-0"> margen superior 0 </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-1"> margen superior 8px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-2"> margen superior 16px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-3"> margen superior 24px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-4"> margen superior 32px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-5"> margen superior 40px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-6"> margen superior 48px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-7"> margen superior 56px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-8"> margen superior 64px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-9"> margen superior 72px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-10"> margen superior 80px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-minimo"> margen superior 4px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-extra">margen superior 96px </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-maximo">margen superior 120px </div>'/>

    <div class="contenedor ancho-lectura">
      <h3 class="m-t-10">Tamaño responsivo</h3>
      <p>
        Adicionalmente, se puede especificar el tamaño adecuado para cada tipo 
        de  dispositivo agregando el sufijo <code>-mov</code> para dispositivos 
        móviles ó <code>-esc</code> para escritorio.
      </p>
      <EjemploPropiedades
        :propiedades="[[
          {titulo:'Celular'},
          {nombre:'Margen interior', valor:'0'},
          ],[
            {titulo:'Escritorio'},
            {nombre:'Margen interior', valor:'80px'},
          ]]"
        />
    </div>
    <EjemploEspaciado codigo='<div class="p-0-mov p-10-esc"> p-0-mov p-10-esc </div>'/>
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Posiciones</h2>
      <p> 
        Las clases de posición se añaden según la necesidad: 
        <code>t</code> para arriba (top), 
        <code>b</code> para abajo (bottom), 
        <code>l</code> para izquierda (left), 
        <code>r</code> para derecha (right), 
        <code>x</code> para el eje horizontal (combinación de izquierda y derecha), 
        <code>y</code> para el eje vertical (combinación de arriba y abajo).
      </p>
    </div>
    <EjemploEspaciado codigo='
    <div class="m-5"> 
      margen general 40px
      (arriba, abajo, izquierda y derecha ) 
    </div>'/>
    <EjemploEspaciado codigo='<div class="m-t-5"> margen superior </div>'/>
    <EjemploEspaciado codigo='<div class="m-b-5"> margen inferior </div>'/>
    <EjemploEspaciado codigo='<div class="m-l-5"> margen izquierdo </div>'/>
    <EjemploEspaciado codigo='<div class="m-r-5"> margen derecho </div>'/>
    <EjemploEspaciado codigo='<div class="m-x-5"> margen horizontal (izquierdo y derecho) </div>'/>
    <EjemploEspaciado codigo='<div class="m-y-5"> margen vertical (arriba y abajo) </div>'/>
  </div>
</template>
