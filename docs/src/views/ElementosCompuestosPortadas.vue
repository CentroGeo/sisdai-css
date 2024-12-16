<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import EjemploPropiedades from '../componetes/EjemploPropiedades.vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
<template>
  <div class="m-y-maximo">
    
    <div class="contenedor ancho-lectura">
      <h1>Portadas</h1>
      <p>
        Las portadas son introducciones visuales que generalmente ocupan la pantalla completa 
        al ingresar a un sitio, incluyendo ilustraciones, fotografías o animaciones. Éstas se 
        acompañan del título y, opcionalmente, de un subtítulo.
      </p>
      <p>
        Las portadas presentan la siguiente estructura: 
      </p>
      <ul>
        <li>Contenedor principal: <code>.portada</code> es el contenedor principal que aloja todos los elementos de la portada. </li>
        <li>Imagen de fondo: <code>.portada-imagen</code> cubre todo el contenedor y se ajusta automáticamente al tamaño de la pantalla.</li>
        <li>Degradado: <code>.portada-degradado</code> es un contenedor que mejora la visibilidad del texto sobre la imagen de fondo.</li>
        <li>
          Cuerpo de la portada: <code>.portada-cuerpo</code> alberga los elementos textuales, incluyendo:
          <ul>
            <li>Título: <code>.portada-titulo</code></li>
            <li>Subtítulo: <code>.portada-subtitulo</code></li>
          </ul>
        </li>
      </ul>
      <p>
        Los tamaños del título y subtítulo se ajustan automáticamente según el ancho de la pantalla para optimizar la legibilidad. 
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
      <img class="portada-imagen" :src="`${cdn}documentacion/duquesa-1.jpg`" alt="">
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
      <img class="portada-imagen" :src="`${cdn}documentacion/godo.jpg`" alt="">
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


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Portada con video de fondo</h2>
    </div>
    <div class="portada">
      <video class="portada-imagen oculto-mov" autoplay muted>
        <source :src="`${cdn}video/sisdaiescritorio.mp4`" type="video/mp4">
      </video>
      <video class="portada-imagen oculto-esc" autoplay muted>
        <source :src="`${cdn}video/sisdaimovil.mp4`" type="video/mp4">
      </video>
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <p class="portada-titulo">Portada con video de fondo</p>
          <p class="portada-subtitulo">Subtítulo</p>
        </div>
      </div>
    </div>
    <div class="contenedor">
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
        <div class="portada">
          <video class="portada-imagen oculto-mov" autoplay muted>
            <source src="..." type="video/mp4">
          </video>
          <video class="portada-imagen oculto-esc" autoplay muted>
            <source src="..." type="video/mp4">
          </video>
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