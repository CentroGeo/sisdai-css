<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Institucionales</h1>
      <p>
        Las clases y ejemplos a continuación pueden variar, han variado un poco cada año. 
        Pero al ser elementos requeridos a la hora de construir sitios web solicitados por 
        el Gobierno de México y el Conahcyt, se hace más útil tenerlos en un único lugar
        para a la hora de actualizar no tener que estar creando componentes cada vez.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Navegación de Gobierno de México</h2>
      <p>
        En el ejemplo se muestran las clases necesarias para armar el componente de navegación del Gobierno de México.
        En la biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        se encuentra con la estructura y enlaces utilizados durante el año 2024.
      </p>
    </div>
    <nav class="navegacion navegacion-gobmx" aria-label="Menú Gobierno de México">
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
        <button class="nav-boton-menu"> <!-- alternar la clase abierto -->
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
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <nav class="navegacion navegacion-gobmx" aria-label="Menú Gobierno de México">
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
            <button class="nav-boton-menu"> <!-- alternar la clase abierto -->
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
        Las clases para construir la navegación del Conahcyt son las mismas que las que requiere el componente de Navegacion principal.
        En la biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        se encuentra con la estructura y enlaces utilizados durante el año 2024.
      </p>
    </div>
    <nav class="navegacion" aria-label="Menú principal">
      <div class="nav-contenedor-identidad">
        <a href="#" class="nav-hiperviculo-logo">
          <img 
            class="nav-logo invertir" 
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" 
            alt="Conahcyt."
            width="130" 
            height="38" 
          />
        </a>
        <button class="nav-boton-menu"> <!-- alternar la clase abierto -->
          <span class="nav-icono-menu"></span>
        </button>
        <div class="nav-informacion">Nombre de la sección actual</div>
      </div>
      <div class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
        <div class="nav-menu-complementario">
          <a href="#" class="nav-hipervinculo">Menú complementario</a>
        </div>
        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <a href="#" class="nav-hipervinculo">Menú</a>
            </li>
            <li>
              <button class="nav-boton-submenu">Menú con submenu</button>
              <ul class="nav-submenu">
                <li>
                  <button class="nav-boton-regresar">Menú con submenu</button>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo">Submenu</a>
                </li>
              </ul>
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
        <nav class="navegacion navegacion-conahcyt" aria-label="Menú principal">
          <div class="nav-contenedor-identidad">
            <a href="#" class="nav-hiperviculo-logo">
              <img 
                class="nav-logo invertir" 
                src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg" 
                alt="Conahcyt."
                width="130" 
                height="38" 
              />
            </a>
            <button class="nav-boton-menu"> <!-- alternar la clase abierto -->
              <span class="nav-icono-menu"></span>
            </button>
            <div class="nav-informacion">Nombre de la sección actual</div>
          </div>
          <div class="nav-menu-contenedor"> <!-- alternar la clase abierto -->
            <div class="nav-menu-complementario">
              <a href="#" class="nav-hipervinculo">Menú complementario</a>
            </div>
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Menú</a>
                </li>
                <li>
                  <button class="nav-boton-submenu">Menú con submenu</button>
                  <ul class="nav-submenu">
                    <li>
                      <button class="nav-boton-regresar">Menú con submenu</button>
                    </li>
                    <li>
                      <a href="#" class="nav-hipervinculo">Submenu</a>
                    </li>
                  </ul>
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
        En el ejemplo se muestran las clases necesarias para armar el componente de pie de página del Gobierno de México.
        En la biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        se encuentra con la estructura y enlaces utilizados durante el año 2024.
      </p>
    </div>
    <footer class="contenedor piepagina-gobmx" aria-label="Gobierno de México">
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
            <a href="#">
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
              <a href="#">
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
              <a href="#">
                <span class="pictograma-social-facebook" aria-hidden="true"></span>
                <span class="a11y-solo-lectura">feisbuk</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="pictograma-social-x" aria-hidden="true"></span>
                <span class="a11y-solo-lectura">x.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <footer class="contenedor piepagina-gobmx" aria-label="Gobierno de México">
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
                <a ... >
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
                  <a ... >
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
                  <a ... >
                    <span class="pictograma-social-facebook" ... />
                  </a>
                </li>
                <li>
                  <a ... >
                    <span class="pictograma-social-x" ... />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </footer>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Pie de página del Conahcyt</h2>
      <p>
        En el ejemplo se muestran las clases necesarias para armar el componente de pie de página del Conahcyt.
        En la biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        se encuentra con la estructura y enlaces utilizados durante el año 2024.
      </p>
    </div>
    <footer class="contenedor piepagina-conahcyt" aria-label="Conahcyt">
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
            <a href="#">
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
              <a href="#">
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
              <a href="#">
                <span class="pictograma-social-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <span class="pictograma-social-x" />
              </a>
            </li>
            <li>
              <a href="#">
                <span class="pictograma-social-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <span class="pictograma-social-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="contenedor ancho-lectura m-y-1">
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <footer class="contenedor piepagina-conahcyt" aria-label="Conahcyt">
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
                <a href="#">
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
                  <a href="#">
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
                  <a href="#">
                    <span class="pictograma-social-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="pictograma-social-x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="pictograma-social-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="pictograma-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        '
      />
    </div>

  </div>
</template>