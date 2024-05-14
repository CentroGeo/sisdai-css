<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Botones de Pictograma</h1>
      <p>
        Los botones de pictograma estan basados en el estilo de los botones generales, 
        pero visualmente únicamente contienen un pictograma,
        por lo que es necesario e importantísimo agregar un span de lectura para los navegadores.
      </p>
    </div>


    <div class="contenedor ancho-lectura p-t-10">
      <h2 class="m-t-5">Tamaños<br>Botón chico, regular y grande</h2>
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
      <h2 class="m-t-6">Colores</h2>
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
