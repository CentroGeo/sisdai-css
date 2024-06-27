<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Botones compuestos <span class="etiqueta">preliminar</span></h1>
      <p>
        Son botones especiales y se utilizan en contextos muy específicos. 
        Algunos elementos dentro de estos botones pueden no ser botones 
        propiamente dichos, pero tienen apariencia de tales y requieren de 
        una estructura específica para su correcta implementación.
      </p>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Botón de descarga</h2>
      <p>
        Este tipo de <i>botón</i> actúa como un bloque que se expande para ocupar 
        el ancho completo del contenedor en el que se encuentra.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <a 
          class="boton-descarga boton-primario" 
          href="../img/grafica-variantes.png"
          download="nombre-que-tomara-la-descarga"
        >
          <div class="boton-descarga-cuerpo">
            <p class="boton-descarga-titulo">
              Descarga de archivos
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit totam omnis libero nihil amet tenetur rerum modi iusto, 
              ullam ea eveniet ex nostrum illo. 
              Atque consectetur beatae voluptates tenetur error.
            </p>
            <span class="boton-descarga-pictograma pictograma-archivo-descargar" aria-hidden="true"></span>
          </div>
        </a>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo="HTML"
          codigo='
            <a 
              class="boton-descarga boton-primario" 
              href="../img/grafica-variantes.png"
              download="nombre-que-tomara-la-descarga"
            >
              <div class="boton-descarga-cuerpo">
                <p class="boton-descarga-titulo"> Título </p>
                <p> ... </p>
                <span 
                  class="boton-descarga-pictograma pictograma-archivo-descargar" 
                  aria-hidden="true"
                ></span>
              </div>
            </a>
          '
        />
      </div>
    </div>

    <div class="ancho-lectura">
      <p>
        Si el botón de descarga se implementa utilizando una etiqueta de hipervínculo, 
        es necesario añadir la clase <code>.deshabilitado</code> al elemento para simular 
        el estado deshabilitado <code>disabled</code> propio de un botón.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        
        <a 
          class="boton-descarga deshabilitado" 
          href="../img/grafica-variantes.png"
          download="nombre-que-tomara-la-descarga"
          disabled
        >
          <div class="boton-descarga-cuerpo">
            <p class="boton-descarga-titulo">
              Descarga de archivos
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit totam omnis libero nihil amet tenetur rerum modi iusto, 
              ullam ea eveniet ex nostrum illo. 
              Atque consectetur beatae voluptates tenetur error.
            </p>
            <span class="boton-descarga-pictograma pictograma-archivo-descargar" aria-hidden="true"></span>
          </div>
        </a>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo="HTML"
          codigo='
            <a 
              class="boton-descarga deshabilitado" 
              href="../img/grafica-variantes.png"
              download="nombre-que-tomara-la-descarga"
            >
              <div class="boton-descarga-cuerpo">
                <p class="boton-descarga-titulo"> Título </p>
                <p> ... </p>
                <span 
                  class="boton-descarga-pictograma pictograma-archivo-descargar" 
                  aria-hidden="true"
                ></span>
              </div>
            </a>
          '
        />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Botón alternar</h2>
      <p>

        El <i>botón</i> alternar se organiza mediante el contenedor <code>.boton-alternar</code>, 
        dentro del cual se colocan botones de radio. Estos botones se agrupan utilizando el 
        mismo atributo <code>name</code>, asegurando que funciones como un grupo único de selección. 
        Para marcar el <code>.boton-alternar</code> como deshabilitado, se debe agregar el atributo 
        <code>disabled</code> a cada botón de radio. Esto cambia su estado y estilo, impidiendo que 
        sean accesibles mediante el teclado, lo cual es crucial para mantener la coherencia en la interfaz.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <div class="boton-alternar" role="group" aria-label="Ejemplo grupo de elementos seleccionables">
          <input type="radio" id="a1" name="ejemplo" value="seleccionado" checked />
          <label for="a1">Opción 1</label>
          <input type="radio" id="a2" name="ejemplo" value="opcion" />
          <label for="a2">Opción 2</label>
          <input type="radio" id="a3" name="ejemplo" value="deshabilitado" />
          <label for="a3">Opción 3</label>
        </div>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo="HTML"
          codigo='
            <div 
              class="boton-alternar" 
              role="group" 
              aria-label="Ejemplo grupo de elementos seleccionables"
            >
              <input id="a1" name="ejemplo" value="a1" type="radio" checked />
              <label for="a1"> Opción 1 </label>
              
              <input id="a2" name="ejemplo" value="a2" type="radio" />
              <label for="a2"> Opción 2 </label>
              
              <input id="a3" name="ejemplo" value="a3" type="radio" />
              <label for="a3"> Opción 3 </label>
            </div>
          '
        />
      </div>
      <div class="columna-6">
        <div class="boton-alternar" role="group" aria-label="Ejemplo grupo de elementos deshabilitados">
          <input type="radio" id="b1" name="ej-b" value="seleccionado" checked disabled />
          <label for="b1">Opción 1</label>
          <input type="radio" id="b2" name="ej-b" value="opcion" disabled />
          <label for="b2">Opción 2</label>
        </div>
        Ej. Botón alternar deshabilitado
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo="HTML"
          codigo='
            <div 
              class="boton-alternar" 
              role="group" 
              aria-label="Ejemplo grupo de elementos deshabilitados"
            >
              <input id="b1" name="ej-b" value="b1" type="radio" checked disabled />
              <label for="b1"> Opción 1 </label>
              
              <input id="b2" name="ej-b" value="b2" type="radio" disabled />
              <label for="b2"> Opción 2 </label>
            </div>
          '
        />
      </div>
    </div>
    
  </div>
</template>