<script setup>
import EjemploEspaciado from '../componetes/EjemploEspaciado.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Espaciado</h1>
      <p>
        La escala de espaciado de Sisdai complementa las escalas de la tipografía
        y la cuadrícula mediante el uso de múltiplos de cuatro y ocho pixeles.
        Cada nivel de la escala se puede utilizar según las necesidades del diseño.
      </p>
      <p>
        El espaciado se utiliza en margenes exteriores <small lang="en">(margin)</small> e interiores <small lang="en">(padding)</small>.
        Para el margen exterior se utiliza <code>m</code> y para el margen interior se utiliza <code>p</code> 
        en base a los nombres de las propiedades de CSS.
        El nombre de las clases es una combinacion entre <code>propiedad-posicion-tamaño</code>.
      </p>
      <p class="notas">
        Los colores utilizados en la documentacion son únicamente de referencia,
        nada en estas clases agrega color.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Tamaños</h2>
      <p>
        Las variables de tamaño estan declaradas en una lista numerica en incrementos de 8 en 8 de 0 a 10.
        A los que se les agregan los margenes especiales mínimo (4px), extra (96px) y máximo (120px).
      </p>
      <p class="notas">
        Los puntos dibujados en el fondo del ejemplo del margen exterior, están separados por 8px.
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
        Además se puede especificar para el dispositivo para el que se require determinado tamaño, agregando el sufijo -mov ó -esc
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
        Posición vacía se agrega en general a todos lados,
        <code>t</code> <i>top</i> arriba, 
        <code>b</code> <i>bottom</i> abajo, 
        <code>l</code> <i>left</i> izquierda,
        <code>r</code> <i>right</i> derecha,
        <code>x</code> eje horizontal combinación de izquierda y derecha,
        <code>y</code> eje vertical combinacion de arriba y abajo.
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
