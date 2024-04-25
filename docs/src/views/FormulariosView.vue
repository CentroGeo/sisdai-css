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

    <div class="flex">
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
      <label for="campo">
        Etiqueta del campo
        <span class="formulario-obligatoriedad">
          (Obligatorio)
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
            (Obligatorio)
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
            (Obligatorio)
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

    <h2 class="m-t-10">Estados deshabilitados</h2>
    <div class="flex">
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
      <label for="campod">
        Campo deshabilitado
      </label>
      <input 
        id="campod" 
        type="text" 
        placeholder="Texto de ejemplo"
        value="Texto deshabilitado"
        disabled
      />
      '
    />
    </div>
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
        <label for="selectord">
          Selector deshabilitado
        </label>
        <select id="selectord" disabled>
          <option value="0">
            Selecciona algo
          </option>
        </select>
        '
    />
    </div>
    <div class="columna m-t-3">
    <EjemploCodigoVertical
      html='
        <label for="areadetextod">
          Área de texto
        </label>
        <textarea 
          id="areadetextod" 
          placeholder="Texto de ejemplo"
          disabled
        >Área de texto deshabilitada
        </textarea>
        '
    />
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
          value=""
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
    
    <div class="contenedor ancho-lectura m-l-0">
      <h3 class="m-t-6">Casillas de verificacion</h3>
      <p>
        Para las casillas de verificacion <code>checkbox</code> 
        es importante que su etiqueta <code>label</code> 
        se posicione justo después de ésta, ya es es a través 
        del <code>label</code> que se crean los estilos.
      </p>
    </div>
    <div class="grid">
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="checkbox1" 
          type="checkbox"
          name="checkboxes"
          checked
        />
        <label for="checkbox1">
          Casilla de verificación seleccionada
        </label>
      </p>
      '
      />
      </div>

      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="checkbox2" 
          type="checkbox" 
          name="checkboxes" 
          class="indeterminate"
          indeterminate
        />
        <label for="checkbox2">
          Casilla indeterminada
        </label>
      </p>
      '
      />
      </div>

      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="checkbox3" 
          type="checkbox" 
          name="checkboxes" 
          disabled
        />
        <label for="checkbox3">
          Casilla deshabilitada
        </label>
      </p>
      '
      />
      </div>
      
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="checkbox3" 
          type="checkbox" 
          name="checkboxes" 
          disabled
          checked
        />
        <label for="checkbox3">
          Casilla deshabilitada seleccionada
        </label>
      </p>
      '
      />
      </div>
    </div>

    <div class="contenedor ancho-lectura m-l-0">
      <h3 class="m-t-6">Checkboxes anidados</h3>
      <p>
        Contenedor <code>.casillas-anidadas</code> subcontenedor <code>.casillas-subseleccion</code>.
        Estas clases de contenedor funcionan tanto en <code>div</code>, 
        como en listas ordenadas <code>ol</code> y desordenadas <code>ul</code>.
      </p>
    </div>
    <div class="grid">
      <div class="columna-8">
        <div class="casillas-anidadas">
          <input id="dc1" type="checkbox" indeterminate />
          <label for="dc1">Casilla Madre</label>
          <div class="casillas-subseleccion casillas-anidadas">
            <input id="dc2" type="checkbox" />
            <label for="dc2">Casilla 2</label>
            <input id="dc3" type="checkbox" indeterminate />
            <label for="dc3">Casilla 3</label>
            <div class="casillas-subseleccion casillas-anidadas">
              <input id="dc4" type="checkbox" />
              <label for="dc4">Casilla 4</label>
              <input id="dc5" type="checkbox" checked>
              <label for="dc5">Casilla 5</label>
            </div>
          </div>
        </div>
      <EjemploCodigoVertical
      :tiene_ejemplo="false"
      html='
      <div class="casillas-anidadas">
        <input ... />
        <label> ... </label>
        <div class="casillas-subseleccion casillas-anidadas">
          <input ... />
          <label> ... </label>
          ...
        </div>
      </div>
      '
      />
      </div>
      
      <div class="columna-8">
        <ul class="casillas-anidadas">
          <li>
            <input id="uc1" type="checkbox" />
            <label for="uc1">Casilla 1</label>
            <ul class="casillas-subseleccion casillas-anidadas">
              <li>
                <input id="uc2" type="checkbox" />
                <label for="uc2">Casilla 1-1</label>
              </li>
              <li>
                <input id="uc3" type="checkbox" />
                <label for="uc3">Casilla 1-2</label>
                <ul class="casillas-subseleccion casillas-anidadas">
                  <li>
                    <input id="uc4" type="checkbox" />
                    <label for="uc4">Casilla 1-2-1</label>
                  </li>
                  <li>
                    <input id="uc5" type="checkbox" />
                    <label for="uc5">Casilla 1-2-2</label>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      <EjemploCodigoVertical
      :tiene_ejemplo="false"
      html='
      <ul class="casillas-anidadas">
        <li>
          <input ... />
          <label> ... </label>
          <ul class="casillas-subseleccion casillas-anidadas">
            <li>
              <input ... />
              <label> ... </label>
            </li>
            ...
          </ul>
          ...
        </li>
      </ul>
      '
      />
      </div>
    </div>


    <div class="contenedor ancho-lectura m-l-0">
      <h3 class="m-t-6">Botones de Radio</h3>
      <p>
        Al igual que las casillas de verificacion,
        en los botones de <code>radio</code>,
        es importante que su etiqueta <code>label</code> 
        se posicione justo después de ésta, ya es es a través 
        del <code>label</code> que se crean los estilos.
      </p>
    </div>
    <div class="grid">
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="r1" 
          type="radio" 
          name="radio"
        />
        <label for="r1">
          Radio
        </label>
      </p>
      '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="r2" 
          type="radio" 
          name="radio" 
          checked
        />
        <label for="r2">
          Radio seleccionado
        </label>
      </p>
      '
      />
      </div>
      
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="r3" 
          type="radio" 
          name="rdes" 
        disabled 
        />
        <label for="r3">
          Radio deshabilitado
        </label>
      </p>
      '
      />
      </div>
      <div class="columna-4 m-t-3">
      <EjemploCodigoVertical
      html='
      <p>
        <input id="r4" 
          type="radio"
          name="rdes"
          checked 
          disabled
        />
        <label for="r4">
          Radio deshabilitado seleccionado
        </label>
      </p>
      '
      />
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
          (Obligatorio)
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
          (Obligatorio)
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
