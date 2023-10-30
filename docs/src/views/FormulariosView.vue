<template>

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
  
  <div class="grid">
    <div class="columna-4">
      <input id="checkbox1" type="checkbox" name="checkboxes1">
      <label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox" name="checkboxes1">
      <label for="checkbox2">Checkbox 2</label>
      <input id="checkbox3" type="checkbox" name="checkboxes1">
      <label for="checkbox3">Checkbox 2</label>
    </div>
  </div>
  <div class="grid">
    <div class="columna-16">
      <span class="controlador-vis">
        <span class="figura-variable"></span>
        <input id="control_1" type="checkbox">
        <label class="nombre-variable" for="control_1">Etiqueta de texto</label>
      </span>
      <span class="controlador-vis">
        <span class="figura-variable"></span>
        <input id="control_2" type="checkbox">
        <label class="nombre-variable" for="control_2">Etiqueta de texto</label>
      </span>
      <span class="controlador-vis">
        <span class="figura-variable disabled"></span>
        <input id="control_3" type="checkbox" disabled>
        <label class="nombre-variable" for="control_3">Etiqueta de texto</label>
        <span class="info-variable"></span>
      </span>
      <span class="controlador-vis">
        <span class="figura-variable disabled"></span>
        <input id="control_4" type="checkbox" disabled checked>
        <label class="nombre-variable" for="control_4">Etiqueta de texto</label>
      </span>
    </div>
  </div>

  <div class="grid">
    <div class="columna-16">
      <span class="controlador-vis2">
        <input id="control_radio_1" type="radio" name="radioses2">
        <label for="control_radio_1">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2">
        <input id="control_radio_2" type="radio" name="radioses2">
        <label for="control_radio_2">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2">
        <input id="control_radio_3" type="radio" name="radioses2" disabled>
        <label for="control_radio_3">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
        <span class="info-variable"></span>
      </span>
      <span class="controlador-vis2">
        <input id="control_radio_4" type="radio" name="radioses2" disabled checked>
        <label for="control_radio_4">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
    </div>
  </div>
  <div class="grid">
    <div class="columna-16">
      <span class="controlador-vis2">
        <input id="control_check_1" type="checkbox">
        <label for="control_check_1">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2">
        <input id="control_check_2" type="checkbox">
        <label for="control_check_2">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2">
        <input id="control_check_3" type="checkbox" disabled>
        <label for="control_check_3">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
        <span class="info-variable"></span>
      </span>
      <span class="controlador-vis2">
        <input id="control_check_4" type="checkbox" disabled checked>
        <label for="control_check_4">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
    </div>
  </div>
  <div class="grid">
    <div class="columna-16">
      <span class="controlador-vis2 sin-control">
        <input id="control_check_2.1" type="checkbox">
        <label for="control_check_2.1">
        <!-- <label> -->
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2 sin-figura">
        <input id="control_check_2.2" type="checkbox">
        <label for="control_check_2.2">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2 sin-control sin-figura">
        <input id="control_check_2.3" type="checkbox" disabled>
        <label for="control_check_2.3">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
      <span class="controlador-vis2 grande">
        <input id="control_check_2.4" type="checkbox" disabled checked>
        <label for="control_check_2.4">
          <span class="figura-variable" />
          <span class="nombre-variable">Etiqueta de texto</span>
        </label>
      </span>
    </div>
  </div>
  <div class="grid">
    <div class="columna-4">
      <span class="controlador-vis2 sin-control">
        <input id="control_check_3.1" type="checkbox">
        <label for="control_check_3.1">
        <!-- <label> -->
          <span class="figura-variable" />
          <span class="nombre-variable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis tempore beatae dolorem nostrum. Velit, eos voluptates qui numquam asperiores atque recusandae autem sit. Obcaecati eligendi iste aliquid facilis perferendis.
          </span>
        </label>
      </span>
    </div>
    <div class="columna-4">
      <span class="controlador-vis2 sin-figura">
        <input id="control_check_3.2" type="checkbox">
        <label for="control_check_3.2">
          <span class="figura-variable" />
          <span class="nombre-variable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis tempore beatae dolorem nostrum. Velit, eos voluptates qui numquam asperiores atque recusandae autem sit. Obcaecati eligendi iste aliquid facilis perferendis.
          </span>
        </label>
      </span>
    </div>
    <div class="columna-4">
      <span class="controlador-vis2 sin-control sin-figura">
        <input id="control_check_3.3" type="checkbox" disabled>
        <label for="control_check_3.3">
          <span class="figura-variable" />
          <span class="nombre-variable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis tempore beatae dolorem nostrum. Velit, eos voluptates qui numquam asperiores atque recusandae autem sit. Obcaecati eligendi iste aliquid facilis perferendis.
          </span>
        </label>
      </span>
    </div>
    <div class="columna-4">
      <span class="controlador-vis2 grande">
        <input id="control_check_3.4" type="checkbox" disabled checked>
        <label for="control_check_3.4">
          <span class="figura-variable" />
          <span class="nombre-variable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis tempore beatae dolorem nostrum. Velit, eos voluptates qui numquam asperiores atque recusandae autem sit. Obcaecati eligendi iste aliquid facilis perferendis.
          </span>
        </label>
      </span>
    </div>
  </div>

  <div class="grid">
    <div class="columna-4">
      <input id="radio1" type="radio" name="radioses1">
      <label for="radio1">Radio 1</label>
      <input id="radio2" type="radio" name="radioses1">
      <label for="radio2">Radio 2</label>
      <input id="radio3" type="radio" name="radioses1">
      <label for="radio3">Radio 3</label>
    </div>
  </div>
  <div class="m-t-3 m-b-10">
    <button type="button" class="boton-primario">Enviar</button>
    <button type="button" class="boton-secundario">Cancelar</button>
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

</template>
