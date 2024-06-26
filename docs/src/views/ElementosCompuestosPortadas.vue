<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
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
        Las portadas se construyen a partir de un contenedor principal <code>.portada</code>
        que contiene una imagen <code>.portada-imagen</code> cubierta por un contenedor <code>.portada-degradado</code>
        en donde se aloja el <code>.portada-cuerpo</code> que puede llevar 
        un <code>.portada-titulo</code> y un <code>.portada-subtitulo</code>,
        que se ajustan en tamaño automáticamete dependiendo el ancho de la pantalla.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Portada primaria</h2>
      
      <EjemploPropiedades
        class="m-y-3"
        :propiedades="[[
          {titulo:'Celular'},
          {titulo: '.portada-titulo'},
          {nombre:'Tamaño', valor:'2.25rem'},
          {titulo: '.portada-subtitulo'},
          {nombre:'Tamaño', valor:'1.125rem'},
        ],[
          {titulo:'Escritorio'},
          {titulo: '.portada-titulo'},
          {nombre:'Tamaño', valor:'5rem'},
          {titulo: '.portada-subtitulo'},
          {nombre:'Tamaño', valor:'1.5rem'},
        ]]"
      />
    </div>

    <div class="portada">
      <img class="portada-imagen" src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/duquesa-1.jpg" alt="">
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <p class="portada-titulo">Título</p>
          <p class="portada-subtitulo">Subtítulo</p>
        </div>
      </div>
    </div>
    <div class="contenedor m-b-10">
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
        <div class="portada">
          <img class="portada-imagen" src="..." alt="">
          <div class="portada-degradado">
            <div class="portada-cuerpo">
              <p class="portada-titulo">Título</p>
              <p class="portada-subtitulo">Subtítulo</p>
            </div>
          </div>
        </div>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Portada secundaria</h2>
      <EjemploPropiedades
        class="m-y-3"
        :propiedades="[[
          {titulo:'Celular'},
          {titulo: '.portada-titulo'},
          {nombre:'Tamaño', valor:'2.25rem'},
          {titulo: '.portada-subtitulo'},
          {nombre:'Tamaño', valor:'1.125rem'},
        ],[
          {titulo:'Escritorio'},
          {titulo: '.portada-titulo'},
          {nombre:'Tamaño', valor:'3.5rem'},
          {titulo: '.portada-subtitulo'},
          {nombre:'Tamaño', valor:'1.5rem'},
        ]]"
      />
    </div>
    <div class="portada portada-secundaria">
      <img class="portada-imagen" src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/godo.jpg" alt="">
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <p class="portada-titulo">Título portada secundaria</p>
          <p class="portada-subtitulo">Subtítulo</p>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
        <div class="portada portada-secundaria">
          <img class="portada-imagen" src="..." alt="">
          <div class="portada-degradado">
            <div class="portada-cuerpo">
              <p class="portada-titulo">Título portada secundaria</p>
              <p class="portada-subtitulo">Subtítulo</p>
            </div>
          </div>
        </div>
        '
      />
    </div>
    
  </div>
</template>