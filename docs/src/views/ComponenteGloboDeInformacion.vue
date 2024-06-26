<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>

<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Globo de información</h1>
      <p>
        Directiva declarada en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
      </p>
      <p>
        Comunmente conocidos como Tooltips, estas directivas funcionan para cualquier elemento html o componente de vue, 
        agregando la directiva <code>v-globo-informacion</code> o <code>v-globo-informacion-extendido</code>.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <h2 class="m-t-10">Globo de información</h2>
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion" role="tooltip">
            <p>
              <span class="globo-informacion-punto-color"></span>
              Jalisco | 8,348,151 habitantes
            </p>
          </div>
          '
        />
      </div>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <h2 class="m-t-10">Globo de información complejo</h2>
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion globo-informacion-grande" role="tooltip">
            <p>
              <b>Lorem ipsum</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Ut, ab? Optio est natus autem facere fugiat et ducimus 
              beatae aspernatur, fugit, asperiores nostrum amet odio 
              laboriosam itaque voluptatibus facilis quam.
              Dolor officiis facilis quod recusandae, cupiditate possimus 
              at praesentium? Hic voluptate maiores magnam totam porro 
              facere corporis placeat distinctio explicabo recusandae! 
              Reprehenderit.
            </p>
          </div>
          '
        />
      </div>
    </div>
   
    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <h2 class="m-t-10">Globo de información complejo con botón de cierre</h2>
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion globo-informacion-extra" role="tooltip">
            <p>
              <b>Red Nacional de Jardines Etnobiológicos</b>
            </p>
            <p>
              Jardín Botánico Efraim Hernández Xolocotzi 
              (sede dos)<br>
              <a href="https://jardinbotanicofcfuanl.com"> 
                jardinbotanicofcfuanl.com
              </a>
            </p>
            <button class="boton-pictograma boton-sin-contenedor-secundario globo-informacion-cerrar">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
              <span class="a11y-solo-lectura">Cerrar.</span>
            </button>
          </div>
          '
        />
      </div>
    </div>

  </div>
</template>

