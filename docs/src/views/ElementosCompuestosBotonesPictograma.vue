<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Botones de Pictograma</h1>
      <p>
        Los botones de pictograma están basados en el estilo general de botones, 
        pero se caracterizan por contener únicamente un pictograma. 
      </p>
    </div>

    <div class="contenedor ancho-lectura p-t-10">
      <h2>Accesibilidad</h2>
      <p>
        Es crucial agregar a la etiqueta de botón el atributo <code>aria-label</code> 
        con el nombre de la acción a realizar, para asegurar que las tecnologías de asistencia 
        comuniquen correctamente dicho nombre, ya que estos botones no incluyen texto visible.
      </p>
      <p>
        Así mismo es importante agregar a la etiqueta que contiene el pictograma el
        atributo <code>aria-hidden="true"</code> para ocultar la lectura del pictograma, 
        que al ser tipografía, se lee incorrecamente el uso de la letra que lo representa.
      </p>

      <EjemploCodigo
        tipo='HTML'
        codigo='
          <button 
            aria-label="Acción a realizar"
            class="boton-primario boton-pictograma" 
            type="button"
          >
            <span 
              aria-hidden="true"
              class="pictograma-flkt" 
            />
          </button>
        '
      />
    </div>


    <div class="contenedor ancho-lectura p-t-10">
      <h2 class="m-t-5">Tamaños<br>Botón chico, regular y grande</h2>
    </div>

    <div class="flex flex-contenido-centrado">

      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-primario
                boton-pictograma 
                boton-chico
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-primario
                boton-pictograma
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-primario
                boton-pictograma 
                boton-grande
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>

    </div>

    <div class="contenedor ancho-lectura p-t-10">
      <h2 class="m-t-6">Clases de color</h2>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-con-contenedor-primario
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma
                boton-con-contenedor-secundario
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-sin-contenedor-primario
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-sin-contenedor-secundario
              "
              aria-label="Acción a realizar"
              type="button"
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
    </div>

    <div class="contenedor ancho-lectura p-t-10">
      <h2 class="m-t-6">Clases de color en estado deshabilitado</h2>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-con-contenedor-primario
              "
              aria-label="Acción a realizar"
              type="button"
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>

      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma
                boton-con-contenedor-secundario
              "
              aria-label="Acción a realizar"
              type="button"
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-sin-contenedor-primario
              "
              aria-label="Acción a realizar"
              type="button"
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>

      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-sin-contenedor-secundario
              "
              aria-label="Acción a realizar"
              type="button"
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
            </button>
          </p>
        '
      />
      </div>

    </div>

  </div>
</template>
