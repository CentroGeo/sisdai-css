<script setup>
import SisdaiCampoBase from '@/componetes/pruebas-concepto/CampoBase.vue'
import SisdaiAreaTexto from '@/componetes/pruebas-concepto/AreaTextoBase.vue'
import SisdaiSelector from '@/componetes/pruebas-concepto/SelectorBase.vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import { ref } from 'vue'

const campoEjemplo = ref('')
const descripcionEjemplo = ref('')
const seleccionEjemplo = ref('')

</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Formulario</h1>
      <p>
        El Sisdai fomenta el uso de HTML semántico 
        para mejorar la usabilidad y accesibilidad de la web. Por ello, damos estilo a las etiquetas nativas 
        para que puedan utilizarse eficientemente sin necesidad de añadir clases adicionales. 
      </p>
      <p>
        Reconocemos que algunos componentes requieren una estructura más definida para facilitar su comprensión. 
        Así, hemos creado clases específicas que proporcionan contexto, asistencia o simplemente organizan mejor la información. 
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Elementos</h2>
      <p>
        Recomendamos siempre utilizar la etiqueta <code>&lt;label/></code>, vinculándola al <code>input</code>
        correspondiente mediante el atributo <code>for</code>. Esta etiqueta puede incluir un elemento con la clase 
        <code>.formulario-obligatoriedad</code> para indicar si el campo es opcional o requerido.       
      </p>
      <p>
        Para las clases más generales de <code>&lt;input/></code> (excluyendo checkbox, radio y range), así 
        como para selectores y áreas de texto, el ancho se adapta al contenedor o columna que los contiene, 
        pero no excede los 700px para asegurar una buena legibilidad. 
      </p>
      <p>
        El <code>&lt;textarea/></code> tiene un alto mínimo de 120px, que puede incrementarse con el atributo 
        <code>rows</code>. Este diseño facilita la escritura de contenido extenso sin restricciones visuales.
      </p>
      <p>
        Opcionalmente, se puede añadir la clase <code>.formulario-ayuda</code> para incluir texto de ayuda a la persona usuaria.
      </p>
      <EjemploCodigo
        tipo='HTML de un campo'
        codigo='
        <form v-on:submit.prevent>
          <div>
            <label for="idcampo">
              Nombre del campo
              <span class="formulario-obligatoriedad">
                (Obligatorio)
              </span>
            </label>

            <input 
              id="idcampo" 
              type="text" 
              placeholder="Muestra de ejemplo"
              value="Campo de ejemplo llenado"
              required
            />

            <p class="formulario-ayuda">
              Mensaje de ayuda.
            </p>
          </div>
        </form>
        '/>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Campo base</h2>
      <p>
        Al utilizar el componente <code>SisdaiCampoBase</code> nos aseguramos que la etiqueta y el campo siempre estén vinculados,
        opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo 
        y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo.
      </p>
      <p>
        De manera predeterminada el componente es de tipo texto <code>type="text"</code> pudiendo cambiar el atributo
        escribiendo en la propiedad tipo, el <code>tipo</code>, excluyendo los tipos checkbox, radio y range, que tienen su propio componente. 
      </p>
      <p>
        Actualmente el campo valida automáticamente cuando es requerido, mostrando el mensaje de error <i>'Este campo no puede quedar vacío. '</i>.
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <div>
              <label for="campo-idcreadoautomaticamente">
                Nombre del campo
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </label>

              <input 
                id="campo-idcreadoautomaticamente" 
                type="text" 
                placeholder="Muestra de ejemplo"
                value=""
                required
              />

              <p class="formulario-ayuda">
                Texto de ayuda.
              </p>
            </div>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Nombre de la etiqueta"
          ejemplo="Ejemplo"
          :es_obligatorio="false"
          :es_etiqueta_visible="true"
          v-model="campoEjemplo"
          texto_ayuda="Texto de ayuda."
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
            <SisdaiCampoBase 
              etiqueta="Nombre de la etiqueta"
              ejemplo="Ejemplo"
              :es_obligatorio="false"
              :es_etiqueta_visible="true"
              v-model="campoEjemplo"
              texto_ayuda="Texto de ayuda."
            />
          '
        />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h3 class="p-t-10 m-t-0">Tipos de campo base</h3>
      <p>
        Acerca de los tipos de campo, todos se encuentran construidos con etiquetas nativas, por lo que no controlamos como se 
        presenten, que sabemos que algunos son distintos entre navegadores. 
      </p>
      <p>
        También dependiendo del tipo de campo y navegador, 
        existen componentes que no muestran los textos de ejemplo debido a que el navegador agrega información específica al campo, 
        justo donde debería existir el <i lang="en">placeholder</i>.
      </p>
      <p>
        Para éstos casos, se puede hacer uso de la propiedad <code>texto_ayuda</code> del componente, para agregar mensajes de ayuda
        y/o ejemplos.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de texto"
          ejemplo="tipo text"
          tipo="text"
          v-model="campoTexto"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de texto"
            ejemplo="tipo text"
            tipo="text"
            v-model="campoTexto"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de contraseña"
          ejemplo="tipo password"
          tipo="password"
          v-model="campoContrasenia"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de contraseña"
            ejemplo="tipo password"
            tipo="password"
            v-model="campoContrasenia"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de correo"
          ejemplo="tipo email"
          tipo="email"
          v-model="campoCorreo"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de correo"
            ejemplo="tipo email"
            tipo="email"
            v-model="campoCorreo"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de archivo"
          ejemplo="tipo file"
          tipo="file"
          v-model="campoArchivo"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de archivo"
            ejemplo="tipo file"
            tipo="file"
            v-model="campoArchivo"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de búsqueda"
          ejemplo="tipo search"
          tipo="search"
          v-model="campoBuscar"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de búsqueda"
            ejemplo="tipo search"
            tipo="search"
            v-model="campoBuscar"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo numérico"
          ejemplo="tipo number"
          tipo="number"
          v-model="campoNumerico"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo numérico"
            ejemplo="tipo number"
            tipo="number"
            v-model="campoNumerico"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo teléfono"
          ejemplo="tipo tel"
          tipo="tel"
          v-model="campoTelefono"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo teléfono"
            ejemplo="tipo tel"
            tipo="tel"
            v-model="campoTelefono"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de URL"
          ejemplo="tipo url"
          tipo="url"
          v-model="campoURL"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de URL"
            ejemplo="tipo url"
            tipo="url"
            v-model="campoURL"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de fecha"
          ejemplo="tipo date"
          tipo="date"
          v-model="campoFecha"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de fecha"
            ejemplo="tipo date"
            tipo="date"
            v-model="campoFecha"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de hora"
          ejemplo="tipo time"
          tipo="time"
          v-model="campoHora"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de hora"
            ejemplo="tipo time"
            tipo="time"
            v-model="campoHora"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de fecha y hora"
          ejemplo="tipo datetime-local"
          tipo="datetime-local"
          v-model="campoFechaHora"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de fecha y hora"
            ejemplo="tipo datetime-local"
            tipo="datetime-local"
            v-model="campoFechaHora"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de mes"
          ejemplo="tipo month"
          tipo="month"
          v-model="campoMes"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de mes"
            ejemplo="tipo month"
            tipo="month"
            v-model="campoMes"
          />
          '
        />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Casillas de verificación</h2>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Botones de radio</h2>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Área de texto</h2>
      <p>
        Al utilizar el componente <code>SisdaiAreaTexto</code> nos aseguramos que la etiqueta y el área de texto siempre estén vinculados,
        opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo 
        y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo.
      </p>
      <p>
        Actualmente el área de texto valida automáticamente cuando es requerido, mostrando el mensaje de error <i>'Este campo no puede quedar vacío. '</i>.
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <div>
              <label for="area-idcreadoautomaticamente">
                Nombre del campo
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </label>

              <textarea 
                id="area-idcreadoautomaticamente" 
                placeholder="Muestra de ejemplo"
                required
              ></textarea>

              <p class="formulario-ayuda">
                Mensaje de ayuda.
              </p>
            </div>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <SisdaiAreaTexto 
          etiqueta="Descripción"
          v-model="descripcionEjemplo"
          texto_ayuda="Describe brevemente cómo llenar el campo."
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiAreaTexto 
            etiqueta="Descripción"
            v-model="descripcionEjemplo"
            texto_ayuda="Describe brevemente cómo llenar el campo."
          />
          '
        />
      </div>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Selector</h2>
      <p>
        Al utilizar el componente <code>SisdaiSelector</code> nos aseguramos que la etiqueta y el selector siempre estén vinculados.
      </p>
      <p>
        Opcionalmente podemos definir si es obligatorio, agregar la opción deshabilitada para cambiar el instruccional <i>Selecciona una opción</i>
        seleccionar si se muestra o no la primer opción deshabilitada, agregar un mensaje de ayuda y declarar la lista de opciones del selector.
      </p>
      <p>
        Actualmente el selector valida automáticamente cuando es requerido, mostrando el mensaje de error <i>'Este campo no puede quedar vacío. '</i>.
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <div>
              <label for="selector-idcreadoautomaticamente">
                Nombre del campo
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </label>
              
              <select id="selector-idcreadoautomaticamente" required>
                <option disabled value="" selected>
                  Selecciona una opción 
                </option>
                <option value="1">
                  Opcion Uno
                </option>
                <option value="2">
                  Opcion Dos
                </option>
                <option value="3">
                  Opcion Tres
                </option>
              </select>

              <p class="formulario-ayuda">
                Mensaje de ayuda.
              </p>
            </div>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <SisdaiSelector
          etiqueta="Selector de ejemplo"
          v-model="seleccionEjemplo"
          texto_ayuda="Texto de ayuda."
        >
          <option value="1">
            Opcion Uno
          </option>
          <option value="2">
            Opcion Dos
          </option>
          <option value="3">
            Opcion Tres
          </option>
        </SisdaiSelector>
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiSelector
            etiqueta="Selector de ejemplo"
            v-model="seleccionEjemplo"
            texto_ayuda="Texto de ayuda."
          >
            <option value="1">
              Opcion Uno
            </option>
            <option value="2">
              Opcion Dos
            </option>
            <option value="3">
              Opcion Tres
            </option>
          </SisdaiSelector>
          '
        />
      </div>
    </div>
    
  </div>
</template>
