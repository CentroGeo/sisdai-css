<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Institucionales</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        agrupa una serie de elementos importantes para la construcción de sitios web institucionales, especialmente diseñados para cumplir 
        con los requerimientos del Gobierno de México y el Conahcyt. Estos componentes han experimentado algunas variaciones anuales, 
        sin embargo, su estandarización facilita las actualizaciones sin la necesidad de crear nuevos componentes. A continuación se 
        detallan los componentes y su aplicación.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Navegación de Gobierno de México</h2>
      <p>
        Este componente incluye todas las clases necesarias para estructurar la navegación conforme a los estándares del Gobierno de México. 
        La estructura y los enlaces que se utilizan actualmente están definidos en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <nav class="navegacion navegacion-extendida navegacion-gobmx nav-doc" aria-label="Menú Gobierno de México">
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img 
            class="nav-logo" 
            src="https://cdn.conahcyt.mx/sisdai/recursos/gobmx.svg"
            alt="Gobierno de México."
            width="128" 
            height="38" 
          />
        </a>
        <button aria-label="Menu de Gobierno" class="nav-boton-menu" type="button">
          <span class="nav-icono-menu"></span>
        </button>
      </div>
      <div class="nav-menu-contenedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo">Enlace</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav class="navegacion navegacion-extendida navegacion-gobmx" aria-label="Menú Gobierno de México">
          <div class="nav-contenedor-identidad">
            <a href="#" class="nav-hiperviculo-logo">
              <img 
                class="nav-logo" 
                src="https://cdn.conahcyt.mx/sisdai/recursos/gobmx.svg"
                alt="Gobierno de México."
                width="128" 
                height="38" 
              />
            </a>
            <button aria-label="Menu de gobierno" class="nav-boton-menu" type="button"> <!-- alternar la clase abierto -->
              <span class="nav-icono-menu"></span>
            </button>
          </div>
          <div class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Enlace</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Navegación de Conahcyt</h2>
      <p>
        Similar al componente anterior, pero específicamente adaptado a las necesidades del Conahcyt. 
        Incluye clases y estructuras pertinentes que se han actualizado en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <nav class="navegacion navegacion-extendida nav-doc" aria-label="Menú principal">
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img 
            class="nav-logo a11y-oscura-filtro-blanco" 
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" 
            alt="Conahcyt."
            width="130" 
            height="38" 
          />
        </a>
        <button class="nav-boton-menu" aria-label="menu-principal" type="button">
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div class="nav-menu-contenedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo">Enlace</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav class="navegacion navegacion-extendida navegacion-conahcyt" aria-label="Menú principal">
          <div class="nav-contenedor-identidad">
            <a href="#" class="nav-hiperviculo-logo">
              <img 
                class="nav-logo a11y-oscura-filtro-blanco" 
                src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" 
                alt="Conahcyt."
                width="130" 
                height="38" 
              />
            </a>
            <button aria-laabel="Menu" class="nav-boton-menu" type="button"> <!-- alternar la clase abierto -->
              <span class="nav-icono-menu"></span>
            </button>
            <div class="nav-informacion">Nombre de la sección actual</div>
          </div>
          <div class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Enlace</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Pie de página del Gobierno de México</h2>
      <p>
        Este componente muestra cómo implementar un pie de página que cumple con los requisitos del 
        Gobierno de México. Las clases y la estructura necesarias están actualizadas y documentadas 
        en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <aside class="contenedor piepagina-gobmx" aria-label="Gobierno de México">
      <div class="flex flex-wrap">
        <div class="columna-8 columna-4-esc">
          <img src="https://cdn.conacyt.mx/sisdai/recursos/gobmx.svg" alt="Gobierno de México" width="200px" height="60px" />
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Parrafo
          </p>
          <p>
            Parrafo de texto simple con 
            <a href="#" class="hipervinculo-gobmx">
              Enlace
            </a>
          </p>
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Lista
          </p>
          <ul>
            <li>
              <a href="#" class="hipervinculo-gobmx">
                Hipervínculo de Gobierno
              </a>
            </li>
          </ul>
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Lista social
          </p>
          <ul class="piepagina-social">
            <li>
              <a aria-label="Facebook" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-facebook" />
              </a>
            </li>
            <li>
              <a aria-label="X" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <aside class="contenedor piepagina-gobmx" aria-label="Gobierno de México">
          <div class="flex flex-wrap">
            
            <div class="columna-8 columna-4-esc">
              <img 
                src="https://cdn.conacyt.mx/sisdai/recursos/gobmx.svg" 
                alt="Gobierno de México" 
                width="200px" 
                height="60px" 
              />
            </div>
            
            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / Parrafo
              </p>
              <p>
                Parrafo de texto simple con 
                <a ... class="hipervinculo-gobmx" >
                  Enlace
                </a>
              </p>
            </div>
            
            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / Lista
              </p>
              <ul>
                <li>
                  <a ... class="hipervinculo-gobmx" >
                    Hipervínculo de Gobierno
                  </a>
                </li>
              </ul>
            </div>

            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / lista social
              </p>
              <ul class="piepagina-social">
                <li>
                  <a aria-label="Facebook" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-facebook" />
                  </a>
                </li>
                <li>
                  <a aria-label="X" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-x" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </aside>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Pie de página del Conahcyt</h2>
      <p>
        Este componente muestra cómo implementar un pie de página que cumple con los requisitos del Gobierno de México. 
        Las clases y la estructura necesarias están actualizadas y documentadas en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <aside class="contenedor piepagina-conahcyt" aria-label="Conahcyt">
      <div class="flex flex-wrap">
        <div class="columna-8 columna-8-esc">
          <img
            src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg"
            alt="Conahcyt"
            width="200px"
            height="60px"
          />
          <p>
            Parrafo de texto simple con 
            <a href="#" class="hipervinculo-conahcyt">
              Enlace
            </a>
          </p>
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Lista
          </p>
          <ul>
            <li>
              <a href="#" class="hipervinculo-conahcyt">
                Hipervínculo
              </a>
            </li>
          </ul>
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Lista social
          </p>
          <ul class="piepagina-social">
            <li>
              <a aria-label="Facebook" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-facebook" />
              </a>
            </li>
            <li>
              <a aria-label="X" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-x" />
              </a>
            </li>
            <li>
              <a aria-label="Instagram" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-instagram" />
              </a>
            </li>
            <li>
              <a aria-label="Youtube" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <aside class="contenedor piepagina-conahcyt" aria-label="Conahcyt">
          <div class="flex flex-wrap">
            <div class="columna-8 columna-8-esc">
              <img
                src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg"
                alt="Conahcyt"
                width="200px"
                height="60px"
              />
              <p>
                Parrafo de texto simple con 
                <a ... class="hipervinculo-conahcyt">
                  Enlace
                </a>
              </p>
            </div>
            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / Lista
              </p>
              <ul>
                <li>
                  <a ... class="hipervinculo-conahcyt">
                    Hipervínculo
                  </a>
                </li>
              </ul>
            </div>
            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / Lista social
              </p>
              <ul class="piepagina-social">
                <li>
                  <a aria-label="Facebook" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-facebook" />
                  </a>
                </li>
                <li>
                  <a aria-label="X" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-x" />
                  </a>
                </li>
                <li>
                  <a aria-label="Instagram" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-instagram" />
                  </a>
                </li>
                <li>
                  <a aria-label="Youtube" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        '
      />
    </div>

  </div>
  
</template>

<style scoped>
  .nav-doc {
    z-index:1;
  }
  </style>