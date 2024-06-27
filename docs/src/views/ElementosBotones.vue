<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Botones</h1>
      <p>
        Los <i>estilos</i> de botones están diseñados para aplicarse a las etiquetas nativas de HTML: 
        <code>button</code>, <code>input[button]</code>, <code>input[submit]</code> e <code>input[reset]</code>. 
        Recomendamos utilizar estas etiquetas cumpliendo con los requerimientos del HTML semántico. 
      </p>
      <p>
        Para elementos no nativos que requieran estilos de botón, proporcionamos la clase 
        <code>.boton</code>. A estos elementos se les debe asignar el atributo <code>role="button"</code> 
        para asegurar accesibilidad y mantener la funcionalidad de un botón mediante funciones de JavaScript. 
      </p>
      <p>
        Es importante recordar que los botones deben ser utilizados para realizar acciones concretas, 
        como enviar un formulario o descargar un documento. No se deben usar las clases de botón solo 
        por su apariencia visual, ya que esto podría afectar la accesibilidad. 
      </p>
    </div>

    <div class="flex">
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button type="button">
          button
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <input 
          type="button" 
          value="input button"
        />
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <input 
          type="submit" 
          value="input submit"
        />
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <input 
          type="reset" 
          value="input reset"
        />
      </p>
      '
      />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        Color.<br>
        Botones primario y secundario
      </h2>
      <p>
        El <code>boton-primario</code>, también conocido como “llamado a la acción” 
        (<span lang="en">call to action o CTA</span> en inglés) se utiliza para 
        captar la atención de la persona usuaria hacia una acción.
      </p>
      <p>
        El <code>boton-secundario</code> se emplea para situaciones donde hay 
        múltiples acciones y es necesario diferenciar la importancia, por ejemplo, 
        en botones de cancelar o retroceder. 
      </p>
    </div>
    <div class="flex">
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          type="button"
          class="boton-primario"
        >
          botón primario
        </button>
      </p>
      '
      />
      </div>
      
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          type="button"
          class="boton-primario"
          disabled
        >
          botón primario deshabilitado
        </button>
      </p>
      '
      />
      </div>
    
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          type="button"
          class="boton-secundario"
        >
          botón secundario
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          type="button"
          class="boton-secundario"
          disabled
        >
          botón secundario deshabilitado
        </button>
      </p>
      '
      />
      </div>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        Tamaño.<br>
        Botón chico, regular y grande
      </h2>
      <p>
        El tamaño de un botón, sea chico, regular o grande, no influye en su color. 
        Las clases correspondientes al tamaño pueden combinarse libremente con las clases de color. 
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button class="boton-chico"> 
          boton-chico
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button> 
          boton
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button class="boton-grande">
          boton-grande
        </button>
      </p>
      '
      />
      </div>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">
        Botones de texto y pictogramas
      </h2>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button class="boton-chico"> 
          boton-chico
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          ></span>
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button> 
          boton
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          ></span>
        </button>
      </p>
      '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button class="boton-grande">
          boton-grande
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          ></span>
        </button>
      </p>
      '
      />
      </div>
    </div>

  </div>
</template>
