<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'

import { onMounted } from 'vue';

class TabsManual {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];

    this.firstTab = null;
    this.lastTab = null;

    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      // Enfocando el tab, sin ser accesible a través de la navegación secuencial 
      // del teclado. Es útil para crear widgets accesibles con JavaScript.
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }
    // para especificar con cuál tab iniciar
    // this.setSelectedTab(this.tabs[1]);
    this.setSelectedTab(this.firstTab);
  }

  setSelectedTab(currentTab) {
    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        // TODO: elegir una opcion
        // this.tabpanels[i].removeAttribute('hidden', true)
        this.tabpanels[i].hidden = false
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        // TODO: elegir una opcion
        this.tabpanels[i].setAttribute('hidden', false)
        // this.tabpanels[i].hidden = true
      }
    }
  }

  moveFocusToTab(currentTab) {
    currentTab.focus();
  }

  moveFocusToPreviousTab(currentTab) {
    var index;

    if (currentTab === this.firstTab) {
      // Si el enfoque está en la primera pestaña, mueve el foco a la última.
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index - 1]);
    }
  }

  moveFocusToNextTab(currentTab) {
    var index;

    if (currentTab === this.lastTab) {
      // Si el enfoque está en la última pestaña, mueve el foco a la primera.
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.moveFocusToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.moveFocusToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // Debido a que utiliza botones para las pestañas, el evento de click es activado
  // con las teclas de barra espaciadora o enter
  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}
onMounted(() => {
  // Inicializa tablist
  window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist]');
    for (var i = 0; i < tablists.length; i++) {
      new TabsManual(tablists[i]);
    }
  });
  })
</script>

<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Pestañas Vis</h1>
      <p>
        El contenedor-vis es un elemento importante utilizado por las bibliotecas 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-graficas" target="_blank" rel="noopener noreferrer">sisdai-graficas</a>
        y <a href="https://codigo.conahcyt.mx/sisdai/sisdai-mapas" target="_blank" rel="noopener noreferrer">sisdai-mapas</a>
        para agrupar y organizar visualizaciones gráficas y de mapas. Este contenedor además de sus paneles, puede contener un apartado para colocar el componente de <router-link to="/pestanias">Pestañas</router-link>.
      </p>
      <p>Sugerimos ubicarlas debajo del <code>panel-encabezado-vis</code> y seguir las recomendaciones la vista de estilos del componente.</p>
    </div>

    <div class="contenedor-vis m-y-3">
      <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-pie-vis">
        <div class="panel-encabezado-vis">
          <p id="vistitulovisualizacion" class="vis-titulo-visualizacion">
            Título visualización
          </p>
          <p class="vis-fecha-actualizacion">
            Fecha de actualización
          </p>
          <p class="vis-instruccional">
            Instruccional ó texto descriptivo de la visualización.
          </p>
        </div>

        <div class="pestanias">
          <div role="tablist" aria-labelledby="idvistitulovisualizacion">
            <button id="tabvis-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanelvis-1">
              Gráfica
            </button>
            <button id="tabvis-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-2" tabindex="-1">
              Tabla
            </button>
            <button id="tabvis-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-3" tabindex="-1" disabled>
              Deshabilitada
            </button>
          </div>

          <div id="tabpanellistid">
            <div id="tabpanelvis-1" role="tabpanel" tabindex="0" aria-labelledby="tabvis-1">
              <div class="contenido-vis">
                <div style="border: 1px dashed #00f; padding: 8px; height: 100%;">
                  <p class="vis-titulo-ejes">
                    Título de ejes
                  </p>
                  <p class="vis-valores-ejes">
                    Valores de ejes
                  </p>
                </div>
              </div>

              <div class="panel-pie-vis">
                <p class="vis-titulo-leyenda">
                  Título de leyenda
                </p>

                <p class="vis-nomenclatura">
                  <span class="figura-variable disabled"></span>
                  Nomenclatura deshabilitada
                </p>
                <p class="vis-nomenclatura">
                  <span class="figura-variable"></span>
                  Nomenclatura
                </p>
              </div>
            </div>

            <div id="tabpanelvis-2" role="tabpanel" tabindex="0" aria-labelledby="tabvis-2" hidden>
              <div class="contenido-vis">
                <div class="contenedor-tabla">
                  <table>
                    <caption class="a11y-solo-lectura">Tabla con contenedor horizontal</caption>
                    <thead>
                      <tr>
                        <th>Encabezado A</th>
                        <th>Encabezado B</th>
                        <th>Encabezado C</th>
                        <th>Encabezado D</th>
                        <th>Encabezado E</th>
                        <th>Encabezado F</th>
                        <th>Encabezado G</th>
                        <th>Encabezado H</th>
                        <th>Encabezado I</th>
                        <th>Encabezado J</th>
                        <th>Encabezado K</th>
                        <th>Encabezado L</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Celda 1</td>
                        <td>Celda 2</td>
                        <td>Celda 3</td>
                        <td>Celda 4</td>
                        <td>Celda 5</td>
                        <td>Celda 6</td>
                        <td>Celda 7</td>
                        <td>Celda 8</td>
                        <td>Celda 9</td>
                        <td>Celda 10</td>
                        <td>Celda 11</td>
                        <td>Celda 12</td>
                      </tr>
                      <tr>
                        <td>Celda 13</td>
                        <td>Celda 14</td>
                        <td>Celda 15</td>
                        <td>Celda 16</td>
                        <td>Celda 17</td>
                        <td>Celda 18</td>
                        <td>Celda 19</td>
                        <td>Celda 20</td>
                        <td>Celda 21</td>
                        <td>Celda 22</td>
                        <td>Celda 23</td>
                        <td>Celda 24</td>
                      </tr>
                      <tr>
                        <td>Celda 25</td>
                        <td>Celda 26</td>
                        <td>Celda 27</td>
                        <td>Celda 28</td>
                        <td>Celda 29</td>
                        <td>Celda 30</td>
                        <td>Celda 31</td>
                        <td>Celda 32</td>
                        <td>Celda 33</td>
                        <td>Celda 34</td>
                        <td>Celda 35</td>
                        <td>Celda 36</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Pie 1</td>
                        <td>Pie 2</td>
                        <td>Pie 3</td>
                        <td>Pie 4</td>
                        <td>Pie 5</td>
                        <td>Pie 6</td>
                        <td>Pie 7</td>
                        <td>Pie 8</td>
                        <td>Pie 9</td>
                        <td>Pie 10</td>
                        <td>Pie 11</td>
                        <td>Pie 12</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
              
            <div id="tabpanelvis-3" role="tabpanel" tabindex="0" aria-labelledby="tabvis-3" hidden>
              <p></p>
            </div>
          </div>            
        </div>          
      </div>

      <div class="contenedor-vis-atribuciones borde-t borde-color-secundario">
        <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img
            class="a11y-oscura-filtro-blanco"
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg"
            alt="Conahcyt"
          />
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>

    <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <div class="contenedor-vis m-y-3">
          <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-pie-vis">
            <div class="panel-encabezado-vis">
              <p id="vistitulovisualizacion" class="vis-titulo-visualizacion">
                Título visualización
              </p>
              <p class="vis-fecha-actualizacion">
                Fecha de actualización
              </p>
              <p class="vis-instruccional">
                Instruccional ó texto descriptivo de la visualización.
              </p>
            </div>

            <div class="pestanias">
              <div role="tablist" aria-labelledby="idvistitulovisualizacion">
                <button id="tabvis-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanelvis-1">
                  Gráfica
                </button>
                <button id="tabvis-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-2" tabindex="-1">
                  Tabla
                </button>
                <button id="tabvis-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-3" tabindex="-1" disabled>
                  Deshabilitada
                </button>
              </div>

              <div id="tabpanellistid">
                <div id="tabpanelvis-1" role="tabpanel" tabindex="0" aria-labelledby="tabvis-1">
                  <div class="contenido-vis">
                    <div style="border: 1px dashed #00f; padding: 8px; height: 100%;">
                      <p class="vis-titulo-ejes">
                        Título de ejes
                      </p>
                      <p class="vis-valores-ejes">
                        Valores de ejes
                      </p>
                    </div>
                  </div>

                  <div class="panel-pie-vis">
                    <p class="vis-titulo-leyenda">
                      Título de leyenda
                    </p>

                    <p class="vis-nomenclatura">
                      <span class="figura-variable disabled"></span>
                      Nomenclatura deshabilitada
                    </p>
                    <p class="vis-nomenclatura">
                      <span class="figura-variable"></span>
                      Nomenclatura
                    </p>
                  </div>
                </div>

                <div id="tabpanelvis-2" role="tabpanel" tabindex="0" aria-labelledby="tabvis-2" hidden>
                  <div class="contenido-vis">
                    <div class="contenedor-tabla">
                      <table>
                        <caption class="a11y-solo-lectura">Tabla con contenedor horizontal</caption>
                        <thead>
                          <tr>
                            <th>Encabezado A</th>
                            <th>Encabezado B</th>
                            <th>Encabezado C</th>
                            <th>Encabezado D</th>
                            <th>Encabezado E</th>
                            <th>Encabezado F</th>
                            <th>Encabezado G</th>
                            <th>Encabezado H</th>
                            <th>Encabezado I</th>
                            <th>Encabezado J</th>
                            <th>Encabezado K</th>
                            <th>Encabezado L</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Celda 1</td>
                            <td>Celda 2</td>
                            <td>Celda 3</td>
                            <td>Celda 4</td>
                            <td>Celda 5</td>
                            <td>Celda 6</td>
                            <td>Celda 7</td>
                            <td>Celda 8</td>
                            <td>Celda 9</td>
                            <td>Celda 10</td>
                            <td>Celda 11</td>
                            <td>Celda 12</td>
                          </tr>
                          <tr>
                            <td>Celda 13</td>
                            <td>Celda 14</td>
                            <td>Celda 15</td>
                            <td>Celda 16</td>
                            <td>Celda 17</td>
                            <td>Celda 18</td>
                            <td>Celda 19</td>
                            <td>Celda 20</td>
                            <td>Celda 21</td>
                            <td>Celda 22</td>
                            <td>Celda 23</td>
                            <td>Celda 24</td>
                          </tr>
                          <tr>
                            <td>Celda 25</td>
                            <td>Celda 26</td>
                            <td>Celda 27</td>
                            <td>Celda 28</td>
                            <td>Celda 29</td>
                            <td>Celda 30</td>
                            <td>Celda 31</td>
                            <td>Celda 32</td>
                            <td>Celda 33</td>
                            <td>Celda 34</td>
                            <td>Celda 35</td>
                            <td>Celda 36</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>Pie 1</td>
                            <td>Pie 2</td>
                            <td>Pie 3</td>
                            <td>Pie 4</td>
                            <td>Pie 5</td>
                            <td>Pie 6</td>
                            <td>Pie 7</td>
                            <td>Pie 8</td>
                            <td>Pie 9</td>
                            <td>Pie 10</td>
                            <td>Pie 11</td>
                            <td>Pie 12</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
                  
                <div id="tabpanelvis-3" role="tabpanel" tabindex="0" aria-labelledby="tabvis-3" hidden>
                  <p></p>
                </div>
              </div>            
            </div>          
          </div>

          <div class="contenedor-vis-atribuciones borde-t borde-color-secundario">
            <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
              <img
                class="a11y-oscura-filtro-blanco"
                src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg"
                alt="Conahcyt"
              />
            </a>
            <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
              Sisdai
            </a>
          </div>
        </div>
        '
      />
  </div>
</template>
