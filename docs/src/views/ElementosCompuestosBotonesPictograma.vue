<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Botones de Pictograma</h1>
      <p>
        Los botones de pictograma están basados en el estilo general de botones, 
        pero se caracterizan por contener únicamente un pictograma. Es crucial 
        agregar un elemento <code>&lt;span/></code> de lectura accesible para 
        asegurar la compresibilidad en lectores de pantalla, ya que estos botones 
        no incluyen texto visible.
      </p>
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
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón
                  pictograma chico
              </span>
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
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  pictograma
              </span>
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
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  pictograma grande
              </span>
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
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón
                  primario
              </span>
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
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <p>
            <button 
              class="
                boton-pictograma 
                boton-sin-contenedor-primario
              "
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  primario sin contenedor
              </span>
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
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  secundario sin contenedor
              </span>
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
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón
                  primario deshabilitado
              </span>
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
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  secundario deshabilitado
              </span>
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
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
                  primario sin contenedor
                  deshabilitado
              </span>
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
              disabled
            >
              <span 
                class="pictograma-flkt" 
                aria-hidden="true"
              />
              <span 
                class="a11y-solo-lectura"
              >
                  Ejemplo botón 
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
