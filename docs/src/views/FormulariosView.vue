<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="contenedor ancho-lectura">
      <h1>Formularios</h1>
      <p>
        El Sisdai recomienda el uso de HTML semántico para mejorar la usabilidad y accesibilidad de la web.
        Es por esto que reforzamos dando estilo a las etiquetas nativas para que se puedan utilizar sin agregar ninguna clase.
      </p>
      <p>
        Por otro lado, entendemos que existen componentes que necesitan mejor estructura para comprender su uso,
        por lo que se crearon clases para dar contexto, ayuda, o simplemente estructurar mejor la información.
      </p>
    </div>
    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Elementos</h2>

      <p>
        La etiqueta <code>&lt;label/></code> se recomienda siempre utilizarla y ligarla por medio de su atributo <code>for</code>
        al <code>input</code> al que sirve de referecia. Ésta etiqueta puede contener un elemento con la clase 
        <code>.formulario-obligatoriedad</code> para agregarle información acerca de si el campo es opcional o requerido.
      </p>
      
      <p>
        Tanto el campo de texto <code>&lt;input/></code> para las clases mas generales (no checkbox, ni radio, ni range), 
        como el selector y el área de texto; son del ancho del contenedor o columna que lo contenga, 
        pero tiene un ancho máximo de <code>700px</code> para mejorar la legibilidad.
      </p>

      <p>
        El área de texto además tiene un alto mínimo de <code>120px</code>, 
        ésta altura se puede incrementar con el atributo <code>rows</code> nativo del área de texto.
      </p>

      <p>
        Opcionalmente se agrega la clase <code>.formulario-ayuda</code> para poner notas debajo de las etiquetas <code>input</code>.
      </p>
    </div>

    <div class="contenedor">
    <div class="flex">
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
      <label for="campo">
        Etiqueta del campo
        <span class="formulario-obligatoriedad">
          (Obligarorio)
        </span>
      </label>
      <input 
        id="campo" 
        type="text" 
        placeholder="Texto de ejemplo"
      />
      <p class="formulario-ayuda">
        Texto de ayuda.
      </p>
      '
    />
    </div>
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
        <label for="selector">
          Selector
          <span class="formulario-obligatoriedad">
            (Obligarorio)
          </span>
        </label>
        <select id="selector">
          <option value="0" disabled selected>
            Selecciona algo
          </option>
          <option value="1">
            Opción uno
          </option>
          <option value="2">
            Opción dos
          </option>
        </select>
        <p class="formulario-ayuda">
          Texto de ayuda.
        </p>
        '
    />
    </div>
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
        <label for="areadetexto">
          Área de texto
          <span class="formulario-obligatoriedad">
            (Obligarorio)
          </span>
        </label>
        <textarea 
          id="areadetexto" 
          placeholder="Texto de ejemplo"
        ></textarea>
        <p class="formulario-ayuda">
          Texto de ayuda.
        </p>
        '
    />
    </div>
    </div>
    </div>


    <h2 class="m-t-10">Tipos de campo</h2>
    <div class="contenedor">
      <div class="flex">
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="texto">
          Campo de texto
        </label>
        <input
          id="texto"
          type="text"
          placeholder="Texto"
          value="Texto"
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="contrasenia">
          Campo de contraseña
        </label>
        <input
          id="contrasenia"
          type="password"
          placeholder="3jEmpl."
          value="3jEmpl."
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="correo">
          Campo de correo
        </label>
        <input
          id="correo"
          type="email"
          placeholder="nombre@dominio.mx"
          value="nombre@dominio.mx"
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="archivo">
          Campo para subir archivos
        </label>
        <input
          id="arvhico"
          type="file"
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="buscar">
          Campo de busqueda
        </label>
        <input
          id="buscar"
          type="search"
          placeholder="Buscando. . ."
          value="Buscando. . ."
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="numero">
          Campo numérico
        </label>
        <input
          id="numero"
          type="number"
          placeholder="10"
          step="10"
          min="10" 
          max="100"
          value=""
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="telefono">
          Campo de teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          placeholder="12 1234 1234"
          pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
          value=""
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="url">
          Campo de URL
        </label>
        <input
          id="url"
          type="url"
          placeholder="https://dominio.com"
          pattern="https://.*"
          value=""
        />
        '
      />
      </div>
    
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="fecha">
          Fecha
        </label>
        <input 
          id="fecha" 
          type="date"
          min="2020-01-01" 
          max="2023-12-31"
          value=""
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="hora">
          hora
        </label>
        <input 
          id="hora" 
          type="time"
          min="09:00"
          max="18:00"
          value=""
        />
        '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
        <label for="fechayhora">
          Fecha y hora
        </label>
        <input 
          id="fechayhora" 
          type="datetime-local"
          min="2018-06-07T00:00"
          max="2018-06-14T00:00"
          value="2018-06-12T19:30"
        />
        '
      />
      </div>
      </div>
    </div>

    <h2 class="m-t-10">Otros tipos de campo</h2>
    <h3>Rango</h3>
    <div>
      <EjemploCodigoVertical
        html='
          <label for="rango">
            Rango
          </label>
          <input 
            id="rango" 
            type="range"
            min="0"
            max="11"
            value=""
          />
          '
        />
      </div>
    

    <h3 class="m-t-6">Checkbox</h3>
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

    <h3 class="m-t-6">Radios</h3>
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



    <h2 class="m-t-10">Formulario horizontal</h2>
    <EjemploCodigoVertical
      html='
      <div class="formulario-horizontal">
        <label for="horizontal1">Etiqueta</label>
        <input id="horizontal1" type="text" placeholder="placeholder" value="value">
        <label for="horizontal2">Etiqueta</label>
        <input id="horizontal2" type="text" placeholder="placeholder" value="value">
      </div>
      '
    />
    

    
    <h2 class="m-t-10">Estados</h2>
    <div class="flex">
    <div class="columna-8 m-t-3">
    <EjemploCodigoVertical
      html='
      <label for="campo">
        Etiqueta del campo
        <span class="formulario-obligatoriedad">
          (Obligarorio)
        </span>
      </label>
      <input 
        id="campo" 
        class="formulario-campo-confirmacion"
        type="text" 
        placeholder="Texto de ejemplo"
      />
      <p 
        class="formulario-ayuda 
        formulario-texto-confirmacion"
      >
        Texto de ayuda.
      </p>
      '
    />
    </div>
    <div class="columna-8 m-t-3">
    <EjemploCodigoVertical
      html='
      <label for="campo">
        Etiqueta del campo
        <span class="formulario-obligatoriedad">
          (Obligarorio)
        </span>
      </label>
      <input 
        id="campo" 
        class="formulario-campo-error"
        type="text" 
        placeholder="Texto de ejemplo"
      />
      <p 
        class="formulario-ayuda 
        formulario-texto-error"
      >
        Texto de ayuda.
      </p>
      '
    />
    </div>
    </div>



  </div>
</template>
