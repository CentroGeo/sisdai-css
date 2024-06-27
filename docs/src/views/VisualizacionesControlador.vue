<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    
    <div class="ancho-lectura">
      <h1>Controlador Vis</h1>
      <p>
        El controlador-vis es un componente especializado que se emplea en 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas" target="_blank" rel="noopener noreferrer">sisdai-graficas</a>
        y <a href="https://codigo.conahcyt.mx/sisdai/sisdai-mapas" target="_blank" rel="noopener noreferrer">sisdai-mapas</a> 
        para gestionar y controlar las variables mostradas en las visualizaciones. 
        Este controlador permite:
      </p>
      <p>
        Utilizar la clase <code>muestra</code> en el elemento que contiene la <code>figura-variable</code> 
        para demostrar cómo se visualiza el símbolo de una nomenclatura específica. Esta clase puede 
        omitirse o personalizarse según se necesite para adaptar la forma de los símbolos. 
      </p>
    </div>

    <div class="contenedor-vis m-y-3">
      <div class="contenedor-vis-paneles con-panel-derecha-vis">
        <div class="panel-derecha-vis">

          <div class="sisdai-mapa-leyenda"> <!-- clase no requerida, solo referencia -->
            <div class="leyenda-titulo">
              <div class="controlador-vis">
                <input type="checkbox" id="aaa">
                <label for="aaa">
                  <span class="nombre-variable">Nombre variable</span>
                </label>
              </div>
            </div>
            <div class="leyenda-clases">
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 18px;">
                <p class="lectura">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 18px; min-width: 18px;" width="18" height="18">
                    <line x1="0" y1="18" x2="18" y2="0" style="stroke:#0d9fea;stroke-width:1;stroke-opacity:1;stroke-linecap:square;stroke-linejoin:bevel;fill:transparent;"></line>
                  </svg>
                  <span class="nombre-variable">Controlador con párrafo de lectura</span>
                </p>
              </div>
            </div>
          </div>

          <div class="sisdai-mapa-leyenda"> <!-- clase no requerida, solo referencia -->
            <div class="leyenda-titulo">
              <div class="controlador-vis">
                <input type="checkbox" id="bbb">
                <label for="bbb">
                  <span class="nombre-variable">Nombre variable</span>
                </label>
              </div>
            </div>
            <div class="leyenda-clases">
              <p class="titulo-clases">Título clases</p>
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 3px;">
                <input type="checkbox" id="ccc">
                <label for="ccc">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 3px; min-width: 39px;" width="39" height="3">
                    <circle cx="19.5" cy="1.5" r="1.5" style="mark:circle;fill:#E8921A;fill-opacity:1.0;"></circle>
                  </svg>
                  <span class="nombre-variable">Figura variable con muestra de 3px</span>
                </label>
              </div>
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 7px;">
                <input type="checkbox" id="ddd">
                <label for="ddd">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 7px; min-width: 39px;" width="39" height="7">
                    <circle cx="19.5" cy="3.5" r="3" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                  </svg>
                  <span class="nombre-variable">Figura variable con muestra de 7px</span>
                </label>
              </div>
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 13px;">
                <input type="checkbox" id="eee">
                <label for="eee">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 13px; min-width: 39px;" width="39" height="13">
                    <circle cx="19.5" cy="6.5" r="6" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                  </svg>
                  <span class="nombre-variable">Figura variable con muestra de 13px</span>
                </label>
              </div>
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 23px;">
                <input type="checkbox" id="fff">
                <label for="fff">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 23px; min-width: 39px;" width="39" height="23">
                    <circle cx="19.5" cy="11.5" r="11" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                  </svg>
                  <span class="nombre-variable">Figura variable con muestra de 23px</span>
                </label>
              </div>
              <div class="controlador-vis" style="--controlador-vis-figura-alto: 39px;">
                <input type="checkbox" id="ggg">
                <label for="ggg">
                  <svg class="figura-variable" style="--controlador-vis-figura-alto: 39px; min-width: 39px;" width="39" height="39">
                    <circle cx="19.5" cy="19.5" r="19" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                  </svg>
                  <span class="nombre-variable">Figura variable con muestra de 39px</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="contenido-vis">
          <div style="border: 1px dashed #00f; padding: 8px; height: 100%; ">
            gráfica o mapa
          </div>
        </div>
      </div>
      <div class="contenedor-vis-atribuciones borde-t borde-color-3">
        <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img
            class="color-invertir"
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg"
            alt="Conahcyt"
          />
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <span class="controlador-vis">
          <input id="zz" type="checkbox">
          <label for="zz">
            <span class="nombre-variable">Nombre variable</span>
          </label>
        </span>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <span class="controlador-vis">
            <input id="zz" type="checkbox">
            <label for="zz">
              <span class="nombre-variable">
                Nombre variable
              </span>
            </label>
          </span>
        '/>
      </div>
      <div class="columna-8">
        <div class="controlador-vis" style="--controlador-vis-figura-alto: 18px;">
          <p class="lectura">
            <svg class="figura-variable" style="--controlador-vis-figura-alto: 18px; min-width: 18px;" width="18" height="18">
              <line x1="0" y1="18" x2="18" y2="0" style="stroke:#0d9fea;stroke-width:1;stroke-opacity:1;stroke-linecap:square;stroke-linejoin:bevel;fill:transparent;"></line>
            </svg>
            <span class="nombre-variable">Controlador con párrafo de lectura</span>
          </p>
        </div>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <div class="controlador-vis" style="--controlador-vis-figura-alto: 18px;">
            <p class="lectura">
              <svg class="figura-variable">
                ...
              </svg>
              <span class="nombre-variable">
                Controlador con párrafo de lectura
              </span>
            </p>
          </div>
        '/>
      </div>
      <div class="columna-8">
        <span class="controlador-vis">
          <input id="yy" type="checkbox">
          <label for="yy">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Figura variable con muestra</span>
          </label>
        </span>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <span class="controlador-vis">
            <input id="yy" type="checkbox">
            <label for="yy">
              <span class="figura-variable muestra" />
              <span class="nombre-variable">
                Figura variable con muestra
              </span>
            </label>
          </span>
        '/>
      </div>
    </div>
   
    <div class="ancho-lectura">
      <h2 class="m-t-10">Tamaño</h2>
      <p>
        A través de la variable CSS <code>--controlador-vis-figura-alto</code>, es posible modificar el tamaño de 
        la <code>figura-variable</code>, permitiendo una adaptación precisa al diseño de la visualización. 

      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <span class="controlador-vis">
          <input id="xx" type="checkbox">
          <label for="xx">
            <span class="figura-variable pictograma-visualizador" />
            <span class="nombre-variable">Con pictograma</span>
          </label>
        </span>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <span class="controlador-vis">
            <input id="xx" type="checkbox">
            <label for="xx">
              <span class="figura-variable pictograma-visualizador" />
              <span class="nombre-variable">
                Con pictograma
              </span>
            </label>
          </span>
        '/>
      </div>
      <div class="columna-8">
        <span class="controlador-vis"  style="--controlador-vis-figura-alto: 32px;">
          <input id="ww" type="checkbox">
          <label for="ww">
            <span class="figura-variable pictograma-visualizador" />
            <span class="nombre-variable">
              Pictograma 32px
            </span>
          </label>
        </span>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <span class="controlador-vis" style="--controlador-vis-figura-alto: 32px;">
            <input id="ww" type="checkbox">
            <label for="ww">
              <span class="figura-variable pictograma-visualizador" />
              <span class="nombre-variable">
                Pictograma 32px
              </span>
            </label>
          </span>
        '/>
      </div>
      <div class="columna-8">
        <div class="controlador-vis" style="--controlador-vis-figura-alto: 37px;">
          <input id="vv" type="checkbox">
          <label for="vv">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Figura variable con muestra de 37px.<br>
              Nombre de variable largo para probar el acomodo del texto con 
              algunas líneas extra que luego si pasa por ejemplo en los mapas
              que las variables que se utilizan son muy muy específicas.
            </span>
          </label>
        </div>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <div class="controlador-vis" style="--controlador-vis-figura-alto: 37px;">
            <input id="vv" type="checkbox">
            <label for="vv">
              <span class="figura-variable muestra" />
              <span class="nombre-variable">
                Figura variable con muestra de 37px.<br>
                Nombre de variable largo para probar el acomodo del texto con 
                algunas líneas extra que luego si pasa por ejemplo en los mapas
                que las variables que se utilizan son muy muy específicas.
              </span>
            </label>
          </div>
        '/>
      </div>
      <div class="columna-8">
        <div class="controlador-vis" style="--controlador-vis-figura-alto: 7px;">
          <input id="uu" type="checkbox">
          <label for="uu">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Figura variable con muestra de 7px
            </span>
          </label>
        </div>
        <EjemploCodigoVertical
          :tiene_ejemplo="false"
          html='
          <div class="controlador-vis" style="--controlador-vis-figura-alto: 7px;">
            <input id="uu" type="checkbox">
            <label for="uu">
              <span class="figura-variable muestra" />
              <span class="nombre-variable">
                Figura variable con muestra de 7px
              </span>
            </label>
          </div>
        '/>
      </div>
    </div>

  </div>

</template>
