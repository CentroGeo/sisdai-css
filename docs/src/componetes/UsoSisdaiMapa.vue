<template>
  <div class="contenedor-vis borde-redondeado-8">
    <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-izquierda-vis con-panel-derecha-vis con-panel-pie-vis">
      <div class="panel-encabezado-vis">
        <p class="vis-titulo-visualizacion">
          Población total en 2020 por el método de clasificación de rupturas naturales (Jenks)
        </p>
        <div class="flex">
          <div class="columna-4">
            <label for="selector1">Muestra</label>
            <select id="selector1">
              <option>uno</option>
              <option>dos</option>
            </select>
          </div>
          <div class="columna-4">
            <label for="selector2">Muestra</label>
            <select id="selector2">
              <option>tres</option>
              <option>cuatro</option>
            </select>
          </div>
          <div class="columna-4">
            <label for="selector3">Muestra</label>
            <select id="selector3">
              <option>cinco</option>
              <option>seis</option>
            </select>
          </div>
          <div class="columna-4">
            <label for="selector3">Muestra</label>
            <select id="selector3">
              <option>siete</option>
              <option>ocho</option>
            </select>
          </div>
        </div>
      </div>

      <div class="panel-izquierda-vis">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat ipsa atque velit
          temporibus autem quod similique cum odit excepturi inventore, id iste deleniti eveniet
          asperiores cupiditate possimus dolorem numquam.
        </p>
        <div>
          <input id="checkbox-map1" type="checkbox" name="checkboxes-mapa">
          <label for="checkbox-map1">Checkbox de un mapita con texto largo largo</label>
        </div>
        <div>
          <input id="checkbox-map2" type="checkbox" name="checkboxes-mapa">
          <label for="checkbox-map2">Checkbox</label>
        </div>
      </div>
      
      <div class="panel-derecha-vis">
        <div class="sisdai-mapa-leyenda">
          <div class="leyenda-titulo">
            <div class="controlador-vis" style="--controlador-vis-figura-alto: undefinedpx;">
              <input type="checkbox" id="corrientes-control-4f21cb898u7">
              <label for="corrientes-control-4f21cb898u7">
                <!--v-if-->
                <span class="nombre-variable">Corrientes de agua 2021</span>
              </label>
            </div>
          </div>
          <div class="leyenda-clases">
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 18px;">
              <!--v-if-->
              <p class="lectura anidado">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 18px; min-width: 18px;" width="18" height="18">
                  <line x1="0" y1="18" x2="18" y2="0" style="stroke:#0d9fea;stroke-width:1;stroke-opacity:1;stroke-linecap:square;stroke-linejoin:bevel;fill:transparent;"></line>
                </svg>
                <span class="nombre-variable">Intermitente</span>
              </p>
            </div>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 18px;">
              <!--v-if-->
              <p class="lectura anidado">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 18px; min-width: 18px;" width="18" height="18"><line x1="0" y1="18" x2="18" y2="0" style="stroke:#0556cd;stroke-width:1;stroke-opacity:1;stroke-linecap:square;stroke-linejoin:bevel;fill:transparent;"></line>
                </svg>
                <span class="nombre-variable">Perenne</span>
              </p>
            </div>
          </div>
        </div>

        <div class="sisdai-mapa-leyenda">
          <div class="leyenda-titulo">
            <div class="controlador-vis" style="--controlador-vis-figura-alto: undefinedpx;">
              <input type="checkbox" id="localidades-control-17wlhav14i">
              <label for="localidades-control-17wlhav14i">
                <!--v-if-->
                <span class="nombre-variable">Localidades en la Cuenca del Alto Atoyac y su área de influencia 2020</span>
              </label>
            </div>
          </div>
          <div class="leyenda-clases">
            <p class="titulo-clases m-y-1">Número de habitantes</p>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 3px;">
              <input type="checkbox" id="localidades-clase-control-0-b9uz3rcy7q4">
              <label for="localidades-clase-control-0-b9uz3rcy7q4">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 3px; min-width: 39px;" width="39" height="3">
                  <circle cx="19.5" cy="1.5" r="1.5" style="mark:circle;fill:#E8921A;fill-opacity:1.0;"></circle>
                </svg>
                <span class="nombre-variable">1 a 2,500</span>
              </label>
            </div>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 7px;">
              <input type="checkbox" id="localidades-clase-control-1-ae792vl0ee6">
              <label for="localidades-clase-control-1-ae792vl0ee6">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 7px; min-width: 39px;" width="39" height="7">
                  <circle cx="19.5" cy="3.5" r="3" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                </svg>
                <span class="nombre-variable">2,501 a 15,000</span>
              </label>
            </div>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 13px;">
              <input type="checkbox" id="localidades-clase-control-2-fbncir5kj0s">
              <label for="localidades-clase-control-2-fbncir5kj0s">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 13px; min-width: 39px;" width="39" height="13">
                  <circle cx="19.5" cy="6.5" r="6" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                </svg>
                <span class="nombre-variable">15,001 a 100,000</span>
              </label>
            </div>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 23px;">
              <input type="checkbox" id="localidades-clase-control-3-mzkz53vc8gn">
              <label for="localidades-clase-control-3-mzkz53vc8gn">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 23px; min-width: 39px;" width="39" height="23">
                  <circle cx="19.5" cy="11.5" r="11" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                </svg>
                <span class="nombre-variable">100,001 a 294,000</span>
              </label>
            </div>
            <div class="controlador-vis" style="--controlador-vis-figura-alto: 39px;">
              <input type="checkbox" id="localidades-clase-control-4-n9w9vmze4ok">
              <label for="localidades-clase-control-4-n9w9vmze4ok">
                <svg class="figura-variable" style="--controlador-vis-figura-alto: 39px; min-width: 39px;" width="39" height="39">
                  <circle cx="19.5" cy="19.5" r="19" style="mark:circle;fill:#DB8719;fill-opacity:1.0;stroke:#ffffff;stroke-width:1;stroke-opacity:1;stroke-linecap:butt;stroke-linejoin:miter;"></circle>
                </svg>
                <span class="nombre-variable">1,542,232</span>
              </label>
            </div>
          </div>
        </div>

        <ul class="casillas-anidadas">
          <li>
            <input id="ul-checkbox-parent" type="checkbox" name="ul-checkbox-parent">
            <label for="ul-checkbox-parent">Checkbox Padre</label>
            <ul class="casillas-subseleccion casillas-anidadas">
              <li>
                <input id="ul-checkbox-child1" type="checkbox" name="ul-checkbox-child">
                <label for="ul-checkbox-child1">Checkbox Hijo 1</label>
              </li>
              <li>
                <input id="ul-checkbox-child2" type="checkbox" name="ul-checkbox-child">
                <label for="ul-checkbox-child2">Checkbox Hijo 2</label>
                <ul class="casillas-subseleccion casillas-anidadas">
                  <li>
                    <input id="ul-checkbox-child21" type="checkbox" name="ul-checkbox-child">
                    <label for="ul-checkbox-child21">Checkbox Hijo 2-1</label>
                  </li>
                  <li>
                    <input id="ul-checkbox-child22" type="checkbox" name="ul-checkbox-child">
                    <label for="ul-checkbox-child22">Checkbox Hijo 2-2</label>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <figure class="contenido-vis">
        <img
          src="/img/mapa-poblacion.png"
          alt="visalizacion"
          height="100%"
          width="100%"
        />
      </figure>

      <div class="panel-pie-vis">
        <p class="notas">
          Nota. Datos de origen del Instituto Nacional de Estadística y Geografía (INEGI), 2020.
        </p>
      </div>
    </div>

    <div class="contenedor-vis-atribuciones borde-t borde-color-3 p-y-2 m-x-2-mov m-x-3-esc">
      <a
        class="logo-conacyt atribucion-conahcyt"
        href="https://conahcyt.mx/"
        target="_blank"
      >
        <img
          src="https://conahcyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
          alt="Conahcyt"
        />
      </a>

      <a
        class="atribucion-sisdai"
        href="https://sisdai.conahcyt.mx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sisdai
      </a>
    </div>
  </div>
</template>