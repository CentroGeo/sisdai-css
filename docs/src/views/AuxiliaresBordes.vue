<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Bordes</h1>
      <p>
        Al utilizar las clases de posicion de bordes se crea un borde
        de grosor de <code>1px</code> 
        y del color base de los bordes <code>var(--borde-1)</code>.
        Los estilos de grosor y color pueden cambiarse utilizando las 
        clases adicionales para cada propiedad.
      </p>
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

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde">
            borde general
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-t">
            borde arriba
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-b">
            borde abajo
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-l">
            borde izquierda
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-r">
            borde derecha
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-x">
            borde izquierda y derecha
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-y">
            borde arriba y abajo
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Colores</h2>
      <p>
        Las variables de color de CSS estan declaradas para modo claro y oscuro en la carpeta de <code>src/accesibilidad</code>.
        Las variaciones de color de borde pueden utilizarse independientes para cada posicion.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-primario">
            var(--borde)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-secundario">
            var(--borde-secundario)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-acento">
            var(--borde-acento)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-informacion">
            var(--borde-informacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-confirmacion">
            var(--borde-confirmacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-alerta">
            var(--borde-alerta)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-color-error">
            var(--borde-error)
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Grosores</h2>
      <p>
        El nombre del sufijo de la clase hace referencia al grosor en pixeles,
        van en incrementos de 1, del 0 al 4.
        Las variaciones de grosor de borde independientes para cada posicion.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde borde-l-grosor-0">
            borde 0px a la izquierda
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-t borde-grosor-1">
            borde arriba de 1px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-b borde-grosor-2">
            borde abajo de 2px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-y borde-grosor-3">
            borde arriba y abajo de 3px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-x borde-grosor-4">
            borde izquierda y derecha de 4px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigoVertical
          html='
          <p class="borde-x borde-l-grosor-4">
            borde izquierda 4px y derecha de 1px
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Redondeado</h2>
      <p>
        El nombre del sufijo de la clase hace referencia al borde redondeado en pixeles,
        van en incrementos de 4, del 0 al 24, agregando además un extra de 2px.
        Las variaciones de redondeado independientes para cada posicion.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-0">
            <p>borde sin redondear</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-2">
            <p>borde redondeado de 2px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-4">
            <p>borde redondeado de 4px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-8">
            <p>borde redondeado de 8px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-16">
            <p>borde redondeado de 16px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-20">
            <p>borde redondeado de 20px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-redondeado-24">
            <p>borde redondeado de 24px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-l-redondeado-0 borde-r-redondeado-24">
            <p>
              borde sin redondear a la derecha
              redondeado a 24px a la izquierda
            </p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-t-l-redondeado-16">
            <p>
              borde redondeado arriba a la izquierda
            </p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
          html='
          <div class="borde borde-b-r-redondeado-16">
            <p>
              borde redondeado abajo a la derecha
            </p>
          </div>
          '
        />
      </div>
    </div>
    
  </div>
</template>
