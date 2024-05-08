<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Botones</h1>
      <p>
        Los estilos de botones se aplican a las etiquetas nativas para botones <code>button</code>, 
        <code>input[button]</code>, <code>input[submit]</code> y <code>input[reset]</code>. 
        Etiquetas que recomendamos utilizar observando los requerimientos del HTML semántico.
      </p>
      <p>
        Aún así, existe la clase <code>.boton</code> para agregarle el estilo a otro tipo de elemento,
        al que además deberá agregársele el rol de boton <code>role="button"</code> y en el que se 
        debe cuidar mantener la funcionalidad de un botón a través de funciones de javascript.
      </p>
      <p>
        Hay que recorder, que por accesibilidad los botones deben ser elementos que hacen una accion,
        como enviar un formulario o descargar un documento, no se deben utilizar las clases únicamente 
        por cómo se ven visualmente.
      </p>
      <p>
        De forma predenterminada al poner un botón sin clases extra, tiene el color primario,
        exceptuando el input reset que tiene el color secundaio, debido a que la acción de limpiar el formulario
        siempre es una acción alternativa a enviarlo.
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
        El <code>boton-primario</code>, también conocido como llamado a la acción (<span lang="en">call to action o CTA</span> en inglés) 
        se utiliza para atraer la atención de la persona usuaria hacia una acción. 
      </p>
      <p>
        El <code>boton-secundario</code> se utiliza cuando se tengan dos o más acciones juntas
        para restar importancia a acciones como cancelar. 
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
        El tamaño del botón no afecta el color, pueden mezclarse ambas clases.
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



    <div class="contenedor ancho-lectura p-t-10">
      <h2 class="m-t-10">Botones de pictogramas</h2>
      <h3>Tamaños<br>Botón chico, regular y grande</h3>
    </div>

    <div class="flex flex-contenido-centrado">

      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          class="
            boton-pictograma 
            boton-chico
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton
              pictograma chico
          </span>
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
          class="boton-pictograma"
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              pictograma
          </span>
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
          class="
            boton-pictograma 
            boton-grande
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              pictograma grande
          </span>
        </button>
      </p>
      '
      />
      </div>

    </div>

    <div class="contenedor ancho-lectura p-t-10">
      <h3 class="m-t-6">Colores</h3>
    </div>

    <div class="flex flex-contenido-centrado">

      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <p>
        <button 
          class="
            boton-pictograma 
            boton-primario-con-contenedor
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton
              primario
          </span>
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
          class="
            boton-pictograma
            boton-secundario-con-contenedor
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              secundario
          </span>
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
          class="
            boton-pictograma 
            boton-primario-sin-contenedor
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              primario sin contenedor
          </span>
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
          class="
            boton-pictograma 
            boton-secundario-sin-contenedor
          "
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              secundario sin contenedor
          </span>
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
          class="
            boton-pictograma 
            boton-primario-con-contenedor
          "
          disabled
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton
              primario deshabilitado
          </span>
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
          class="
            boton-pictograma
            boton-secundario-con-contenedor
          "
          disabled
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              secundario deshabilitado
          </span>
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
          class="
            boton-pictograma 
            boton-primario-sin-contenedor
          "
          disabled
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              primario sin contenedor
              deshabilitado
          </span>
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
          class="
            boton-pictograma 
            boton-secundario-sin-contenedor
          "
          disabled
        >
          <span 
            class="pictograma-flkt" 
            aria-hidden="true"
          />
          <span 
            class="a11y-solo-lectura"
          >
              Ejemplo boton 
              secundario sin contenedor
              deshabilitado
          </span>
        </button>
      </p>
      '
      />
      </div>

    </div>

  </div>
</template>
