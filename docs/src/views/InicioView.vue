<script setup>
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
<template>
  <div class="contenedor ancho-fijo p-b-maximo">
    <div class="ancho-lectura p-b-1">
      <h1 class="texto-centrado">sisdai-css</h1>
      <p>
        Ésta es la documentación para personas desarrolladoras de la biblioteca
        de estilos del Sistema de Diseño y Accesibilidad para la Investigación
        (<a href="https://sisdai.conahcyt.mx/" target="_blank">Sisdai</a>).
      </p>
      <p>
        <i>sisdai-css</i> es una biblioteca de estilos de Sass que normaliza la forma
        en que se visualizan los elementos de HTML entre los distintos
        navegadores, estandariza estilos desde las etiquetas de HTML y
        agrega clases para ayudar a la accesibilidad digital.
      </p>
    </div>
    
    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/accesibilidad/cambio-fuente/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/accesibilidad.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Accesibilidad</h2>
            <p>
              Funciones y características para facilitar la navegación a la
              mayor cantidad de personas usuarias contemplando la diversidad
              funcional y de edades.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/fundamentos/color/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/fundamentos.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Fundamentos</h2>
            <p>
              Las guías básicas de elementos abstractos para iniciar
              interfaces de usuaria en las que se basa e inspira el Sisdai.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/elementos/botones/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/elementos.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Elementos</h2>
            <p>
              Unidades esenciales con estados de interacción que en conjunto
              permiten comunicar o relizar algo en especifico dentro de la interfaz.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/elementos-compuestos/botones-pictogramas/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/compuesto.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Compuestos</h2>
            <p>
              Elementos agrupados reutilizables que permiten componen la interfaz
              de usuaria de manera fácil, modular, navegable y accesible.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/componentes/audio/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/componentes.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Componentes</h2>
            <p>
              Conjunto de estructuras y estilos de elementos verificados en
              términos de accesibilidad y usabilidad para la creación de
              componentes modulares. Son utilizados por la biblioteca sisdai-componentes.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/visualizaciones/viscontenedor/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/visualizaciones.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Visualizaciones</h2>
            <p>
              Elementos para la creación de componentes creados específicamente
              para visualizar datos de forma fácil, práctica y accesible. Son
              utilizados por las bibliotecas sisdai-gráficas y sisdai-mapas.
            </p>
          </div>
        </a>
      </div>

      <div class="columna-8">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="/auxiliares/bordes/">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/auxiliares.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <h2 class="h4">Auxiliares</h2>
            <p>
              Clases reutilizables basadas en los fundamentos del Sidai que
              nos permiten personalizar los estilos de la interfaz de usuaria.
            </p>
          </div>
        </a>
      </div>
    </div>

    <div class="ancho-lectura p-t-10">
      <h2 class="texto-centrado">Otras bibliotecas Sisdai</h2>
    </div>

    <div class="flex">

      <div class="columna-8 columna-4-esc">
        <div class="tarjeta">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/tarjeta-sisdai-componentes.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <p class="h6">sisdai-componentes</p>
            <p>
              Biblioteca de componentes reutilizables alineada al Sistema de Diseño y Accesibilidad para la Investigación (Sisdai).
            </p>
          </div>
          <div class="tarjeta-pie flex">
            <a 
              class="boton boton-primario boton-chico"
              href="https://sisdai-componentes.conahcyt.mx/"
              aria-label="Ir a documentación de sisdai-componentes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a documentación
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
            <a 
              class="boton boton-secundario boton-chico"
              href="https://github.com/CentroGeo/sisdai-componentes"
              aria-label="Ir a repositorio de sisdai-componentes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a repositorio
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="columna-8 columna-4-esc">
        <div class="tarjeta">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/tarjeta-sisdai-graficas.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <p class="h6">sisdai-graficas</p>
            <p>
              Biblioteca de componentes de código abierto para la construcción de visualizaciones de datos.
            </p>
          </div>
          <div class="tarjeta-pie flex">
            <a 
              class="boton boton-primario boton-chico"
              href="https://sisdai-graficas.conahcyt.mx/"
              aria-label="Ir a documentación de sisdai-graficas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a documentación
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
            <a 
              class="boton boton-secundario boton-chico"
              href="https://github.com/CentroGeo/sisdai-graficas"
              aria-label="Ir a repositorio de sisdai-graficas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a repositorio
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="columna-8 columna-4-esc">
        <div class="tarjeta">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/tarjeta-sisdai-mapas.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <p class="h6">sisdai-mapas</p>
            <p>
              Biblioteca de componentes de código abierto para la construcción de mapas interactivos.
            </p>
          </div>
          <div class="tarjeta-pie flex">
            <a 
              class="boton boton-primario boton-chico"
              href="https://sisdai-mapas.conahcyt.mx/"
              aria-label="Ir a documentación de sisdai-mapas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a documentación
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
            <a 
              class="boton boton-secundario boton-chico"
              href="https://github.com/CentroGeo/sisdai-mapas"
              aria-label="Ir a repositorio de sisdai-mapas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a repositorio
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
      
      <div class="columna-8 columna-4-esc">
        <div class="tarjeta">
          <img 
            loading="lazy" 
            class="tarjeta-imagen"
            :src="`${cdn}inicio/tarjeta-sisdai-portal.png`"
            alt=""
          />
          <div class="tarjeta-cuerpo">
            <p class="h6">Portal Sisdai</p>
            <p>
              Fundamentos, elementos, componentes, visualizaciones de datos y plantillas de diseño.
            </p>
          </div>
          <div class="tarjeta-pie flex">
            <a 
              class="boton boton-primario boton-chico"
              href="https://sisdai.conahcyt.mx/"
              aria-label="Ir al portal de Sisdai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Sisdai
              <span
                class="pictograma-enlace-externo"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
