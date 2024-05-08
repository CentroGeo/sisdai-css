<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Botones compuestos</h1>
      <p>
        Son botones especiales que además de utilizarce en lugares muy específicos,
        algunos elementos no son botones, pero parecen,
        y además requieren de una estructura específica para armarlos.
      </p>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Botón de descarga</h2>
      <p>
        Es un tipo de boton en bloque que toma el ancho completo
        del contenedor en donde se encuentre.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <a 
          class="boton-descarga" 
          href="../img/grafica-variantes.png"
          download="nombre-que-tomara-la-descarga"
        >
          <span class="titulo">
            Descarga de archivos
          </span>
          <span class="descripcion">
            <p class="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit totam omnis libero nihil amet tenetur rerum modi iusto, 
              ullam ea eveniet ex nostrum illo. 
              Atque consectetur beatae voluptates tenetur error.
            </p>
            <span 
            class="pictograma-archivo-descargar" 
              aria-hidden="true"
            ></span>
          </span>
        </a>
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a 
          class="boton-descarga" 
          href="ubicacion/local/del/archivo.extencion"
          download="nombre-que-tomara-la-descarga"
        >
          <span class="titulo">
            Descarga de archivos
          </span>
          <span class="descripcion">
            <p class="texto">
              Lorem ipsum ...
            </p>
            <span 
              class="pictograma-archivo-descargar" 
              aria-hidden="true" 
            ></span>
          </span>
        </a>
        '
        />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Botón alternar</h2>
      <p>
        El botón alternar consta de un contenedor <code>.boton-alternar</code>
        en el que se agregan botones de radio, que se agrupan utilizando el mismo <code>name</code> 
        para todos los campos.
      </p>
      <p>
        Para utilizar el <code>.boton-alternar</code> como deshabilitado es necesario
        agregar a los botones de radio el atributo <code>disabled</code> para cambiarle el estado,
        el estilo y hacer que no puedan ser accedidos por medio del teclado.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <div class="boton-alternar">
          <input type="radio" id="a1" name="ejemplo" value="seleccionado" checked />
          <label for="a1">Opcion 1</label>
          <input type="radio" id="a2" name="ejemplo" value="opcion" />
          <label for="a2">Opcion 2</label>
          <input type="radio" id="a3" name="ejemplo" value="deshabilitado" />
          <label for="a3">Opcion 3</label>
        </div>
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <div class="boton-alternar">
          <input id="a1" name="ejemplo" value="a1" type="radio" checked />
          <label for="a1"> Opcion 1 </label>
          
          <input id="a2" name="ejemplo" value="a2" type="radio" />
          <label for="a2"> Opcion 2 </label>
          
          <input id="a3" name="ejemplo" value="a3" type="radio" />
          <label for="a3"> Opcion 3 </label>
        </div>
        '
        />
      </div>
      <div class="columna-6">
        <div class="boton-alternar">
          <input type="radio" id="b1" name="ej-b" value="seleccionado" checked disabled />
          <label for="b1">Opcion 1</label>
          <input type="radio" id="b2" name="ej-b" value="opcion" disabled />
          <label for="b2">Opcion 2</label>
        </div>
        Ej. Boton alternar deshabilitado
      </div>
      <div class="columna-6">
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <div class="boton-alternar">
          <input id="b1" name="ej-b" value="b1" type="radio" checked disabled />
          <label for="b1"> Opcion 1 </label>
          
          <input id="b2" name="ej-b" value="b2" type="radio" disabled />
          <label for="b2"> Opcion 2 </label>
        </div>
        '
        />
      </div>
    </div>
    
  </div>
</template>