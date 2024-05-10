<script setup>
import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
</script>
<template>
  <div>
    <h1>Visualizaciones</h1>

    <h2>Gráficas</h2>
    <div class="contenedor-vis borde-redondeado-8 m-b-4">
      <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-pie-vis">
        <div class="panel-encabezado-vis">
          <p class="vis-titulo-visualizacion">
            Evolución de variantes del virus SARS-CoV-2
          </p>
          <p class="vis-titulo-proyecto">
            (Solamente se muestran variantes de preocupación y de interés)
          </p>
        </div>
        <figure class="contenido-vis">
          <EjemploGloboInfoExtCerrar style="position: absolute;" />
          <img
            src="/img/grafica-variantes.png"
            alt="visualizacion"
          />
        </figure>
        <div class="panel-pie-vis">
          <p class="vis-titulo-leyenda">
            Variantes del virus SARS-CoV-2
          </p>
          <div>
            <span class="controlador-vis">
              <input id="c1" type="checkbox">
              <label for="c1">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c2" type="checkbox">
              <label for="c2">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c3" type="checkbox">
              <label for="c3">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c4" type="checkbox">
              <label for="c4">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c5" type="checkbox">
              <label for="c5">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c6" type="checkbox">
              <label for="c6">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c7" type="checkbox">
              <label for="c7">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c8" type="checkbox">
              <label for="c8">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c9" type="checkbox">
              <label for="c9">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
            <span class="controlador-vis">
              <input id="c10" type="checkbox">
              <label for="c10">
                <span class="figura-variable muestra" />
                <span class="nombre-variable">Valor y Muestra</span>
              </label>
            </span>
          </div>
          <p class="vis-fuente">
            Fuente. Las fechas que se despliegan corresponden al día en que se tomó la muestra.
          </p>
        </div>
      </div>
      <div class="contenedor-vis-atribuciones borde-t borde-color-3">
        <a
          class="logo-conacyt atribucion-conahcyt"
          href="https://conahcyt.mx/"
          target="_blank"
        >
          <img
            class="invertir"
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


    <h2>Mapas</h2>
    <UsoSisdaiMapa />


    <h2 class="m-t-10">Tipografía</h2>
    <div class="contenedor-lectura  m-b-6">
      <p>
        Las visualizaciones de datos usan tipografía para dar contexto a la información mostrada.
        Se integran diferentes jerarquías tipográficas para distinguir títulos, nombres de ejes, variables, etc. 
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-titulo-visualizacion">
        Título de visualización
      </p>'
      :atributos="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.125rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
        {nombre:'Margen inferior', valor:'8px'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-fecha-actualizacion">
        Fecha de actualización
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.2em'},
        {nombre:'Peso', valor:'Medium (500)'},
        {nombre:'Margen superior', valor:'8px'},
        {nombre:'Margen inferior', valor:'16px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-instruccional">
        Instruccional
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Regular (400)'},
        {nombre:'Margen superior', valor:'16px'},
        {nombre:'Margen inferior', valor:'16px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-valores-ejes">
        Valores de ejes
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.2em'},
        {nombre:'Peso', valor:'Medium (500)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-titulo-ejes">
        Título de ejes
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'0.75rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-titulo-leyenda">
        Título de leyenda
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Semibold (600)'},
        {nombre:'Margen superior', valor:'16px'},
        {nombre:'Margen inferior', valor:'8px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="vis-nomenclatura">
        <span class="figura-variable"></span>
        Nomenclatura
      </p>
      <p class="vis-nomenclatura">
        <span class="figura-variable"></span>
        Nomenclatura
      </p>'
      :atributos="[[
        {titulo:'Celular y escritorio'},
        {nombre:'Presentación', valor:'inline-block'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.25em'},
        {nombre:'Peso', valor:'Regular (400)'},
        {nombre:'Margen derecho', valor:'24px'},
        {nombre:'Margen inferior', valor:'8px'},
      ]]"
    /> 
   





    <h2 class="m-t-10">controlador-vis</h2>
    <div class="grid">
      <div class="columna-16">
        
        <span class="controlador-vis">
          <input id="control_check_1.1" type="checkbox">
          <label for="control_check_1.1">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Valor y Muestra</span>
          </label>
        </span>

        <span class="controlador-vis">
          <input id="control_check_1.2" type="checkbox">
          <label for="control_check_1.2">
            <span class="nombre-variable">Valor</span>
          </label>
        </span>

        <span class="controlador-vis">
          <input id="control_check_1.3" type="checkbox" disabled>
          <label for="control_check_1.3">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Deshabilitado</span>
          </label>
        </span>

        <span class="controlador-vis">
          <input id="control_check_1.4" type="checkbox" checked disabled>
          <label for="control_check_1.4">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Seleccionado Deshabilitado</span>
          </label>
        </span>
      </div>
    </div>
    <div class="grid">
      <div class="columna-16">
        <span class="controlador-vis">
          <input id="control_radio_1.1" type="radio" name="radio-control-vis">
          <label for="control_radio_1.1">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Valor y Muestra</span>
          </label>
        </span>
        <span class="controlador-vis">
          <input id="control_radio_1.2" type="radio" name="radio-control-vis">
          <label for="control_radio_1.2">
            <span class="nombre-variable">Valor</span>
          </label>
        </span>
        <span class="controlador-vis">
          <input id="control_radio_1.3" type="radio" name="radio-control-vis" disabled>
          <label for="control_radio_1.3">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Deshabilitado</span>
          </label>
        </span>
        <span class="controlador-vis">
          <input id="control_radio_1.4" type="radio" name="radio-control-vis" disabled checked>
          <label for="control_radio_1.4">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Seleccionado Deshabilitado</span>
          </label>
        </span>
      </div>
    </div>
    <p>En estos ejemplos se usa la clase .muestra en el elemento que contiene la figura para mostrar como se vé el símbolo de una nomenclatura. Puede precendír de esta clase o customizarla para dar forma a los simbolos necesarios.</p>

    <h3>Tamaños</h3>
    <p>La clase `.controlador-vis` contiene la variable `--controlador-vis-figura-alto`, la cual se puede usar para modificar el tamaño de la figura.</p>
    <div class="grid">
      <div class="columna-4">
        <span class="controlador-vis grande">
          <input id="control_check_2.1" type="checkbox">
          <label for="control_check_2.1">
            <span class="figura-variable icono-visualizador icono-4" />
            <span class="nombre-variable">Icono grande</span>
          </label>
        </span>
        </div>
        <div class="columna-4">
        <span class="controlador-vis chica">
          <input id="control_check_2.2" type="checkbox">
          <label for="control_check_2.2">
            <span class="figura-variable icono-visualizador icono-1" />
            <span class="nombre-variable">Icono chico</span>
          </label>
        </span>
      </div>
      <div class="columna-4">
        <div class="controlador-vis" style="--controlador-vis-figura-alto: 37px;">
          <input id="control_check_2.3" type="checkbox">
          <label for="control_check_2.3">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto ullam, quibusdam adipisci maiores inventore! Eum at voluptates deserunt iure, veritatis dolore atque mollitia quidem esse nemo consectetur, doloremque dolorum?
            </span>
          </label>
        </div>
      </div>
      <div class="columna-4">
        <div class="controlador-vis" style="--controlador-vis-figura-alto: 7px;">
          <input id="control_check_2.4" type="checkbox">
          <label for="control_check_2.4">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, illum similique quos neque rem hic aut minima quibusdam eaque. Cupiditate eligendi reprehenderit dignissimos, recusandae laboriosam iste facere officiis ut est.
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
