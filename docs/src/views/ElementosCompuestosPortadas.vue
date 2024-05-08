<script setup>
// import EjemploEstiloClase from '../componetes/EjemploEstiloClase.vue'
// import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
</script>
<template>
  <div class="m-y-maximo">
    
    <div class="contenedor ancho-lectura">
      <h1>Portadas</h1>
      <p>
        Las portadas constan de ilustraciones, fotografías o animaciones 
        que se muestran en un primer momento a pantalla completa junto con el título del sitio.
      </p>
      <p>
        Las portadas se construyen a partir de un contenedor principal <code>.contenedor-portada</code>
        que contiene una imagen <code>.portada</code> cubierta por un contenedor <code>.fondo-degradado</code>
        en donde se aloja el <code>.contenido</code> que puede llevar 
        un <code>.titulo</code> o un <code>.titulo-alto</code> y un <code>.subtitulo</code>,
        que se ajustan en tamaño automáticamete dependiendo el ancho de la pantalla.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Titulo alto</h2>
      <p>
        Para nombres cortos es mejor utilizar <code>.titulo-alto</code> en combinación con el <code>.subtitulo</code>
        para resaltar el título y mejorar la composición.
      </p>
      <EjemploPropiedades
        class="m-y-3"
        :propiedades="[[
          {titulo:'Celular'},
          {titulo: '.titulo-alto'},
          {nombre:'Tamaño', valor:'2.25rem'},
          {titulo: '.subtitulo'},
          {nombre:'Tamaño', valor:'1.125rem'},
        ],[
          {titulo:'Escritorio'},
          {titulo: '.titulo-alto'},
          {nombre:'Tamaño', valor:'5rem'},
          {titulo: '.subtitulo'},
          {nombre:'Tamaño', valor:'1.5rem'},
        ]]"
      />
    </div>

    <div class="contenedor-portada">
      <img class="portada" src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/duquesa-1.jpg" alt="">
      <div class="fondo-degradado">
        <div class="contenido">
          <p class="titulo-alto">Título Alto</p>
          <p class="subtitulo">Subtítulo</p>
        </div>
      </div>
    </div>
    <div class="contenedor m-b-10">
      <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="contenedor-portada">
          <img class="portada" src="..." alt="">
          <div class="fondo-degradado">
            <div class="contenido">
              <p class="titulo-alto">Título Alto</p>
              <p class="subtitulo">Subtítulo</p>
            </div>
          </div>
        </div>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Titulo</h2>
      <p>
        En caso que el título sea muy extenso es mejor utilizar <code>.titulo</code> en combinación con el <code>.subtitulo</code>
        para mejorar la legibilidad.
      </p>
      <EjemploPropiedades
        class="m-y-3"
        :propiedades="[[
          {titulo:'Celular'},
          {titulo: '.titulo'},
          {nombre:'Tamaño', valor:'2.25rem'},
          {titulo: '.subtitulo'},
          {nombre:'Tamaño', valor:'1.125rem'},
        ],[
          {titulo:'Escritorio'},
          {titulo: '.titulo'},
          {nombre:'Tamaño', valor:'3.5rem'},
          {titulo: '.subtitulo'},
          {nombre:'Tamaño', valor:'1.5rem'},
        ]]"
      />
    </div>
    <div class="contenedor-portada">
      <img class="portada" src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/godo.jpg" alt="">
      <div class="fondo-degradado">
        <div class="contenido">
          <p class="titulo">Un título mas extenso puede leerse mejor en una tipografía más pequeña</p>
          <p class="subtitulo">Subtítulo</p>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="contenedor-portada">
          <img class="portada" src="..." alt="">
          <div class="fondo-degradado">
            <div class="contenido">
              <p class="titulo">Título</p>
              <p class="subtitulo">Subtítulo</p>
            </div>
          </div>
        </div>
        '
      />
    </div>
    
  </div>
</template>