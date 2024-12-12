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
            src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
            alt="Gobierno de México."
            width="128" 
            height="48" 
          />
        </a>
        <button 
          aria-label="Menú de Gobierno"
          aria-expanded="true"
          aria-controls="menugobiernoejemplo"
          class="nav-boton-menu" 
          type="button"
        >
          <span class="nav-icono-menu" aria-hidden="true"></span>
        </button>
      </div>
      <div id="menugobiernoejemplo" class="nav-menu-contenedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo">Enlace Gobierno de México</a>
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
                src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
                alt="Gobierno de México."
                width="128" 
                height="48" 
              />
            </a>
            <button aria-label="Menú de gobierno" aria-controls="menugobiernomexico" class="nav-boton-menu" type="button"> <!-- alternar la clase abierto y aria-expanded -->
              <span class="nav-icono-menu" aria-hidden="true"></span>
            </button>
          </div>
          <div id="menugobiernomexico" class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Enlace Gobierno de México</a>
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
        <button 
          aria-label="Menú Principal"
          aria-expanded="true"
          aria-controls="menuprincipalejemplo"
          class="nav-boton-menu" 
          type="button"
        >
          <span class="nav-icono-menu" aria-hidden="true"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div id="menuprincipalejemplo" class="nav-menu-contenedor">
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo">Enlace navegación principal</a>
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
            <button aria-label="Menú principal" aria-controls="menuprincipal" class="nav-boton-menu" type="button"> <!-- alternar la clase abierto y aria-expanded -->
              <span class="nav-icono-menu" aria-hidden="true"></span>
            </button>
            <div class="nav-informacion">Nombre de la sección actual</div>
          </div>
          <div id="menuprincipal" class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Enlace navegación principal</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Pie de página de Gobierno de México</h2>
      <p>
        Este componente muestra cómo implementar un pie de página que cumple con los requisitos del 
        Gobierno de México. Las clases y la estructura necesarias están actualizadas y documentadas 
        en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <div class="contenedor piepagina-gobmx" aria-label="Pie de página de Gobierno de México">
      <div class="flex flex-wrap">
        <div class="columna-8 columna-4-esc">
          <img class="pie-logo" src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg" alt="Gobierno de México" width="207px" height="75px" />
        </div>
        <div class="columna-8 columna-4-esc">
          <p class="piepagina-titulo">
            Título / Parrafo
          </p>
          <p>
            Parrafo de texto simple con 
            <a href="#" class="hipervinculo-gobmx">
              enlace de ejemplo
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
                Enlace en lista de Gobierno uno
              </a>
            </li>
            <li>
              <a href="#" class="hipervinculo-gobmx">
                Enlace en lista de Gobierno dos
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
              <a lang="en" aria-label="Facebook" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-facebook" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="X" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-x" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="instagram" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-instagram" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="youtube" href="#" class="hipervinculo-gobmx">
                <span aria-hidden="true" class="pictograma-social-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div class="contenedor piepagina-gobmx" aria-label="Pie de página de Gobierno de México">
          <div class="flex flex-wrap">
            
            <div class="columna-8 columna-4-esc">
              <img 
                class="pie-logo"
                src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
                alt="Gobierno de México" 
                width="207px" 
                height="75px"
              />
            </div>
            
            <div class="columna-8 columna-4-esc">
              <p class="piepagina-titulo">
                Título / Parrafo
              </p>
              <p>
                Parrafo de texto simple con 
                <a href="#" class="hipervinculo-gobmx">
                  enlace de ejemplo
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
                    Enlace en lista de Gobierno uno
                  </a>
                </li>
                <li>
                  <a href="#" class="hipervinculo-gobmx">
                    Enlace en lista de Gobierno dos
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
                  <a lang="en" aria-label="Facebook" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-facebook" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="X" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-x" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="instagram" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-instagram" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="youtube" href="#" class="hipervinculo-gobmx">
                    <span aria-hidden="true" class="pictograma-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Pie de página de Conahcyt</h2>
      <p>
        Este componente muestra cómo implementar un pie de página que cumple con los requisitos del Gobierno de México. 
        Las clases y la estructura necesarias están actualizadas y documentadas en la biblioteca citada para el año 2024. 
      </p>
    </div>
    <div class="contenedor piepagina-conahcyt" aria-label="Pie de página de Conahcyt">
      <div class="flex flex-wrap">
        <div class="columna-8 columna-8-esc">
          <img
            class="pie-logo"
            src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg"
            alt="Conahcyt"
            width="200px"
            height="60px"
          />
          <p>
            Parrafo de texto simple con 
            <a href="#" class="hipervinculo-conahcyt">
              enlace de ejemplo
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
                Enlace de lista uno
              </a>
            </li>
            <li>
              <a href="#" class="hipervinculo-conahcyt">
                Enlace de lista dos
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
              <a lang="en" aria-label="Facebook" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-facebook" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="X" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-x" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="Instagram" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-instagram" />
              </a>
            </li>
            <li>
              <a lang="en" aria-label="Youtube" href="#" class="hipervinculo-conahcyt">
                <span aria-hidden="true" class="pictograma-social-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div class="contenedor piepagina-conahcyt" aria-label="Pie de página de Conahcyt">
          <div class="flex flex-wrap">
            <div class="columna-8 columna-8-esc">
              <img
                class="pie-logo"
                src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg"
                alt="Conahcyt"
                width="200px"
                height="60px"
              />
              <p>
                Parrafo de texto simple con 
                <a href="#" class="hipervinculo-conahcyt">
                  enlace de ejemplo
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
                    Enlace de lista uno
                  </a>
                </li>
                <li>
                  <a href="#" class="hipervinculo-conahcyt">
                    Enlace de lista dos
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
                  <a lang="en" aria-label="Facebook" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-facebook" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="X" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-x" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="Instagram" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-instagram" />
                  </a>
                </li>
                <li>
                  <a lang="en" aria-label="Youtube" href="#" class="hipervinculo-conahcyt">
                    <span aria-hidden="true" class="pictograma-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        '
      />
    </div>
  </div>
</template>

<style scoped>
  .nav-doc {
    z-index: 1;
  }
</style>