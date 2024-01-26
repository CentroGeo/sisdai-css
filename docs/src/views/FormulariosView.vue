<template>
  <div>
    <h1>Formularios</h1>
    <p>Formularios en un grid. Por defecto los elementos de formulario toman el ancho maximo del contenedor o columna que los contenga.</p>
    <div class="grid">
      <div class="columna-4">
        <label for="input1">Etiqueta</label>
        <input id="input1" type="text" placeholder="placeholder" value="value">
      </div>
        <div class="columna-4">
        <label for="input-readonly">Attr readonly</label>
        <input id="input-readonly" type="text" readonly value="solo lectura">
      </div>
      <div class="columna-4">
        <label for="input-disabled">Attr disabled</label>
        <input id="input-disabled" type="text" disabled value="desabilitado">
      </div>
      <div class="columna-4">
        <label for="password1">Password</label>
        <input id="password1" type="password" placeholder="Contraseña" value="ejelesposcomocrees">
      </div>
      <div class="columna-4">
        <label for="email1">Email</label>
        <input id="email1" type="email" placeholder="placeholder" value="asdf@comimsa.com">
      </div>
      <div class="columna-4">
        <label for="file1">Archivos</label>
        <input id="file1" type="file" placeholder="seleccione" value="">
      </div>
      <div class="columna-4">
        <label for="rango1">Rango</label>
        <input id="rango1" type="range"  name="volume" min="0" max="11">
      </div>
      <div class="columna-4">
        <label for="selectoption1">Selector</label>
        <select name="selectoption" id="selectoption1">
          <option value="o1">Opción uno</option>
          <option value="o2" selected>Opción seleccionada</option>
          <option value="o3" disabled>Opción deshabilitada</option>
        </select>
      </div>
      <div class="columna-4">
        <label for="textarea1">Area de texto</label>
        <textarea name="" id="" cols="30" rows="10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos unde itaque maxime alias tempora quas sed tenetur saepe reiciendis deserunt iure magnam minima facilis, ullam excepturi recusandae consequuntur. Totam, ut?</textarea>
      </div>
    </div>
    
    <h2 class="m-t-10">Checkbox</h2>
    <div class="grid">
      <div class="columna-16">
        <input id="checkbox1" type="checkbox" name="checkboxes1">
        <label for="checkbox1">Checkbox 1</label>
        <input id="checkbox2" type="checkbox" name="checkboxes1">
        <label for="checkbox2">Checkbox 2</label>
        <input id="checkbox3" type="checkbox" name="checkboxes1" disabled>
        <label for="checkbox3">Checkbox desabilitado</label>
        <input id="checkbox4" type="checkbox" name="checkboxes1" indeterminate>
        <label for="checkbox4">Checkbox indeterminado</label>
      </div>
      <div class="columna-16">
        <h3>Checkboxes anidados</h3>
        <p>Contenedor <code>.casillas-anidadas</code> subcontenedor <code>.casillas-subseleccion</code></p>
        <p>Personalmente prefiero las listas para las cosas anidadas, pero tambien funciona con divs.</p>
      </div>
      <div class="columna-4">
        <div class="casillas-anidadas">
          <input id="checkbox-parent" type="checkbox" name="checkbox-parent">
          <label for="checkbox-parent">Checkbox Padre</label>
          <div class="casillas-subseleccion casillas-anidadas">
            <input id="checkbox-child1" type="checkbox" name="checkbox-child">
            <label for="checkbox-child1">Checkbox Hijo 1</label>
            <input id="checkbox-child2" type="checkbox" name="checkbox-child">
            <label for="checkbox-child2">Checkbox Hijo 2</label>
            <div class="casillas-subseleccion casillas-anidadas">
              <input id="checkbox-child21" type="checkbox" name="checkbox-child">
              <label for="checkbox-child21">Checkbox Hijo 2-1</label>
              <input id="checkbox-child22" type="checkbox" name="checkbox-child">
              <label for="checkbox-child22">Checkbox Hijo 2-2</label>
            </div>
          </div>
        </div>
      </div>
      <div class="columna-4">
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
      <div class="columna-4">
        <ol class="casillas-anidadas">
          <li>
            <input id="ol-checkbox-parent" type="checkbox" name="ol-checkbox-parent">
            <label for="ol-checkbox-parent">Checkbox Padre</label>
            <ol class="casillas-subseleccion casillas-anidadas">
              <li>
                <input id="ol-checkbox-child1" type="checkbox" name="ol-checkbox-child">
                <label for="ol-checkbox-child1">Checkbox Hijo 1</label>
              </li>
              <li>
                <input id="ol-checkbox-child2" type="checkbox" name="ol-checkbox-child">
                <label for="ol-checkbox-child2">Checkbox Hijo 2</label>
                <ol class="casillas-subseleccion casillas-anidadas">
                  <li>
                    <input id="ol-checkbox-child21" type="checkbox" name="ol-checkbox-child">
                    <label for="ol-checkbox-child21">Checkbox Hijo 2-1</label>
                  </li>
                  <li>
                    <input id="ol-checkbox-child22" type="checkbox" name="ol-checkbox-child">
                    <label for="ol-checkbox-child22">Checkbox Hijo 2-2</label>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>

    <h2 class="m-t-10">Radios</h2>
    <div class="grid">
      <div class="columna-16">
        <input id="radio1" type="radio" name="radioses1">
        <label for="radio1">Radio 1</label>
        <input id="radio2" type="radio" name="radioses1">
        <label for="radio2">Radio 2</label>
        <input id="radio3" type="radio" name="radioses1" disabled>
        <label for="radio3">Radio 3 desabilitado</label>
      </div>
    </div>

    <h2 class="m-t-10">controlador-vis</h2>
    <div class="grid">
      <div class="columna-16">
        <!-- <ControladorVis deshabilitado encendido /> -->
        <span class="controlador-vis">
          <input id="control_check_1.1" type="checkbox">
          <label for="control_check_1.1">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Valor y Muestra</span>
          </label>
        </span>
        <!-- <ControladorVis deshabilitado sinSimbolo /> -->
        <span class="controlador-vis">
          <input id="control_check_1.2" type="checkbox">
          <label for="control_check_1.2">
            <span class="nombre-variable">Valor</span>
          </label>
        </span>
        <!-- <ControladorVis sinControl /> -->
        <span class="controlador-vis">
          <input id="control_check_1.3" type="checkbox" disabled>
          <label for="control_check_1.3">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">Deshabilitado</span>
          </label>
        </span>
        <!-- <ControladorVis simbolo="30px" /> -->
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
        <span class="controlador-vis grande">
          <input id="control_check_2.3" type="checkbox">
          <label for="control_check_2.3">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto ullam, quibusdam adipisci maiores inventore! Eum at voluptates deserunt iure, veritatis dolore atque mollitia quidem esse nemo consectetur, doloremque dolorum?
            </span>
          </label>
        </span>
      </div>
      <div class="columna-4">
        <span class="controlador-vis chica">
          <input id="control_check_2.4" type="checkbox">
          <label for="control_check_2.4">
            <span class="figura-variable muestra" />
            <span class="nombre-variable">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, illum similique quos neque rem hic aut minima quibusdam eaque. Cupiditate eligendi reprehenderit dignissimos, recusandae laboriosam iste facere officiis ut est.
            </span>
          </label>
        </span>
      </div>
    </div>

    <h2 class="m-t-10">Fielset</h2>
    <form action="#">
      <fieldset>
        <legend>legend</legend>
        <div class="grid">
          <div class="columna-8">
            <label for="inputfieldset1">Etiqueta</label>
            <input id="inputfieldset1" type="text" placeholder="placeholder" value="value">
          </div>
          <div class="columna-8">
            <label for="inputfieldset2">Etiqueta</label>
            <input id="inputfieldset2" type="text" placeholder="placeholder" value="value">
          </div>
          <div class="columna-8">
            <input class="boton-primario" type="submit" value="input[submit]">
            <input class="boton-secundario" type="reset" value="input[reset]">
            <input class="boton" type="button" value="input[button]">
          </div>
        </div>
      </fieldset>
    </form>

    <h2 class="m-t-10">Formulario horizontal</h2>
    <form action="#" class="formulario-horizontal">
      <label for="inputhorizontal1">Etiqueta</label>
      <input id="inputhorizontal1" type="text" placeholder="placeholder" value="value">

      <label for="inputhorizontal2">Etiqueta</label>
      <input id="inputhorizontal2" type="text" placeholder="placeholder" value="value">

      <input class="boton-primario" type="submit" value="input[submit]">
      <input class="boton-secundario" type="reset" value="input[reset]">
      <input class="boton" type="button" value="input[button]">
    </form>

    <h2 class="m-t-10">Formulario validaciones</h2>
    <div class="grid">
      <div class="columna-4">
        <label for="input-error">Error</label>
        <div class="input-error">
          <input id="input-error" type="text" placeholder="placeholder" value="value">
          <span class="icono-cerrar"></span>
        </div>
      </div>
      <div class="columna-4">
        <label for="input-correcto">Correcto</label>
        <div class="input-correcto">
          <input id="input-correcto" type="text" placeholder="placeholder" value="value">
          <span class="icono-aprobado"></span>
        </div>
      </div>
    </div>
    
    <div class="formulario-horizontal">
      <label for="input-error">Error</label>
      <div class="input-error">
        <input id="input-error" type="text" placeholder="placeholder" value="value">
        <span class="icono-cerrar"></span>
      </div>
      <label for="input-correcto">Correcto</label>
      <div class="input-correcto">
        <input id="input-correcto" type="text" placeholder="placeholder" value="value">
        <span class="icono-aprobado"></span>
      </div>
    </div>
  </div>
</template>
