<script setup>
import SisdaiCampoBase from '@/componetes/pruebas-concepto/CampoBase.vue'
import SisdaiAreaTexto from '@/componetes/pruebas-concepto/AreaTextoBase.vue'
import SisdaiSelector from '@/componetes/pruebas-concepto/SelectorBase.vue'
import SisdaiCasilla from '@/componetes/pruebas-concepto/CasillaVerificacionBase.vue'
import SisdaiBotonRadio from '@/componetes/pruebas-concepto/RadioBotonBase.vue'
import GrupoCasillasVerificacion from '@/componetes/pruebas-concepto/GrupoCasillasVerificacion.vue'
import SisdaiGrupoBotonesRadio from '@/componetes/pruebas-concepto/GrupoBotonesRadio.vue'

import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import { ref } from 'vue'

const ejemplo = ref({})

const casillaUnica = ref(false)
const casillaArreglo = ref([])
const botonRadio = ref('')

</script>
<template>
  <div class="contenedor m-y-maximo">

    <div id="formulario" class="ancho-lectura">
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

    <div id="campo-base" class="contenedor ancho-lectura">
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
          v-model="ejemplo.muestra"
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
              v-model="ejemplo.muestra"
              texto_ayuda="Texto de ayuda."
            />
          '
        />
        <p>
          El campo base debe recibir una variable
          de texto o numérica para su modelo de datos <code> v-model:{{ ejemplo.muestra }}</code>
        </p>
      </div>
    </div>

    <div id="campo-base-tipos" class="contenedor ancho-lectura">
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
          v-model="ejemplo.texto"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de texto"
            ejemplo="tipo text"
            tipo="text"
            v-model="ejemplo.texto"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de contraseña"
          ejemplo="tipo password"
          tipo="password"
          v-model="ejemplo.contrasenia"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de contraseña"
            ejemplo="tipo password"
            tipo="password"
            v-model="ejemplo.contrasenia"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de correo"
          ejemplo="tipo email"
          tipo="email"
          v-model="ejemplo.correo"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de correo"
            ejemplo="tipo email"
            tipo="email"
            v-model="ejemplo.correo"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de archivo"
          ejemplo="tipo file"
          tipo="file"
          v-model="ejemplo.archivo"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de archivo"
            ejemplo="tipo file"
            tipo="file"
            v-model="ejemplo.archivo"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de búsqueda"
          ejemplo="tipo search"
          tipo="search"
          v-model="ejemplo.busqueda"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de búsqueda"
            ejemplo="tipo search"
            tipo="search"
            v-model="ejemplo.busqueda"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo numérico"
          ejemplo="tipo number"
          tipo="number"
          v-model="ejemplo.numero"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo numérico"
            ejemplo="tipo number"
            tipo="number"
            v-model="ejemplo.numero"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo teléfono"
          ejemplo="tipo tel"
          tipo="tel"
          v-model="ejemplo.telefono"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo teléfono"
            ejemplo="tipo tel"
            tipo="tel"
            v-model="ejemplo.telefono"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de URL"
          ejemplo="tipo url"
          tipo="url"
          v-model="ejemplo.url"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de URL"
            ejemplo="tipo url"
            tipo="url"
            v-model="ejemplo.url"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de fecha"
          ejemplo="tipo date"
          tipo="date"
          v-model="ejemplo.fecha"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de fecha"
            ejemplo="tipo date"
            tipo="date"
            v-model="ejemplo.fecha"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de hora"
          ejemplo="tipo time"
          tipo="time"
          v-model="ejemplo.hora"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de hora"
            ejemplo="tipo time"
            tipo="time"
            v-model="ejemplo.hora"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de fecha y hora"
          ejemplo="tipo datetime-local"
          tipo="datetime-local"
          v-model="ejemplo.fechahora"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de fecha y hora"
            ejemplo="tipo datetime-local"
            tipo="datetime-local"
            v-model="ejemplo.fechahora"
          />
          '
        />
      </div>
      <div class="columna-4 m-t-3">
        <SisdaiCampoBase 
          etiqueta="Campo de mes"
          ejemplo="tipo month"
          tipo="month"
          v-model="ejemplo.mes"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCampoBase 
            etiqueta="Campo de mes"
            ejemplo="tipo month"
            tipo="month"
            v-model="ejemplo.mes"
          />
          '
        />
      </div>
    </div>

    <div id="area-de-texto" class="contenedor ancho-lectura">
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
          v-model="ejemplo.descripcion"
          texto_ayuda="Describe brevemente cómo llenar el campo."
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiAreaTexto 
            etiqueta="Descripción"
            v-model="ejemplo.descripcion"
            texto_ayuda="Describe brevemente cómo llenar el campo."
          />
          '
        />
        <p>
          El área de texto debe recibir una variable
          de texto o numérica para su modelo de datos <code> v-model:{{ ejemplo.descripcion }}</code>
        </p>
      </div>
    </div>

    <div id="selector" class="contenedor ancho-lectura">
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
          v-model="ejemplo.selector"
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
            v-model="ejemplo.selector"
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
        <p>
          El selector debe recibir una variable
          de texto o numérica para su modelo de datos <code> v-model:{{ ejemplo.selector }}</code>
        </p>
      </div>
    </div>

    <div id="casilla-verificacion" class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Casilla de verificación</h2>
      <p>
        Al utilizar el componente <code>SisdaiCasillaVerificacion</code> 
        nos aseguramos que la etiqueta y la casilla de verificación siempre estén vinculadas. 
      </p>
      <p>
        Opcionalmente podemos definir si es obligatorio, 
        agregar un mensaje de ayuda y 
        agregar un título o leyenda independiente de la etiqueta.
      </p>
      <p>
        Actualmente la casilla de verificación valida automáticamente cuando es requerida, 
        mostrando el mensaje de error <i>'Esta casilla necesita estar verificada. '</i>. 
        Podemos definir en cada componente si el mensaje de error es visible o no. 
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.
      </p>
    </div>
    <div class="contenedor ancho-lectura">
      <h3>Casilla única de verificación</h3>
      <p>
        Para cuando se tiene una única casilla de verificación, se puede seleccionar poner o no 
        un título al componente, que es independiente de la etiqueta. 
      </p>
      <p>
        Si el campo es obligatorio y tiene título, la etiqueta <i>(Obligatorio)</i> aparecerá en el título, si no tiene título
        se mostrará en la etiqueta, como normalmente aparece para todos los campos.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <span>
              <p class="titulo-leyenda">
                Título
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </p>
              <input 
                id="casilla-identificadorunico"
                type="checkbox"
                required
              />
              <label for="casilla-identificadorunico">
                Nombre de la etiqueta
              </label>
              <p aria-live="polite" class="formulario-ayuda" role="status"> 
                Texto de ayuda
              </p>
            </span>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <SisdaiCasilla
          etiqueta="Casilla única de verificación"
          v-model="casillaUnica"
          texto_ayuda="Texto de ayuda"
          :es_ayuda_visible="true"
          titulo="Título leyenda"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiCasilla
            etiqueta="Casilla única de verificación"
            v-model="casillaUnica"
            texto_ayuda="Texto de ayuda"
            :es_ayuda_visible="true"
            titulo="Título leyenda"
          />
          '
        />
        <p>
          La casilla única de verificación debe recibir una variable
          booleana para su modelo de datos <code> v-model:{{ casillaUnica }}</code>
        </p>
      </div>
    </div>
    <div class="contenedor ancho-lectura">
      <h3>Casillas agrupadas de verificación</h3>
      <p>
        Para cuando se tienen varias casillas de verificación relacionadas, necesitamos agruparlas.
        Con el uso del componente <code>GrupoCasillasVerificacion</code> nos aseguramos de que se encuentren
        correctamente etiquetadas como se requiere para mejorar la accesibilidad.
      </p>
      <p>
        Se recomienda no utilizar títulos ni mensajes de ayuda para cada casilla de verificacion anidada
        porque puede resultar engorroso. En su lugar el componente <code>GrupoCasillasVerificacion</code> 
        contiene un título y mensaje generales que podemos utilizar para dar instrucciones acerca del 
        grupo de casillas.
      </p>
      <p>
        Actualmente el componente <code>GrupoCasillasVerificacion</code> valida automáticamente cuando es requerida
        alguna de las casillas que contenga, mostrando el mensaje de error <i>'Una o más casillas necesitan estar verificadas. '</i>. 
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <fieldset class="grupo-formulario">
              <legend>Título de la agrupación de casillas
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </legend>
              
              <span>
                <input 
                  id="casilla-identificadorgrupaluno"
                  type="checkbox"
                  value="uno"
                  required
                />
                <label for="casilla-identificadorgrupaluno">
                  Uno
                </label>
              </span>
              <span>
                <input 
                  id="casilla-identificadorgrupaldos"
                  type="checkbox"
                  value="dos"
                  required
                />
                <label for="casilla-identificadorgrupaldos">
                  Dos
                </label>
              </span>
              <span>
                <input 
                  id="casilla-identificadorgrupaltre"
                  type="checkbox"
                  value="tres"
                  required
                />
                <label for="casilla-identificadorgrupaltre">
                  Tres
                </label>
              </span>
              
            </fieldset>
            <p aria-live="polite" class="formulario-ayuda" role="status"> 
              Texto de ayuda.
            </p>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <GrupoCasillasVerificacion
          leyenda="Grupo de casillas de verificacion"
          texto_ayuda="Texto de ayuda."
          :es_obligatorio="true"
        >
          <SisdaiCasilla
            etiqueta="Casilla Uno"
            v-model="casillaArreglo"
            value="Uno"
            :es_obligatorio="true"
          />
          <SisdaiCasilla
            etiqueta="Casilla Dos"
            v-model="casillaArreglo"
            value="Dos"
            :es_obligatorio="true"
          />
          <SisdaiCasilla
            etiqueta="Casilla Tres"
            v-model="casillaArreglo"
            value="Tres"
            :es_obligatorio="true"
          />
        </GrupoCasillasVerificacion>
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <GrupoCasillasVerificacion
            leyenda="Grupo de casillas de verificacion"
            texto_ayuda="Texto de ayuda"
            :es_obligatorio="true"
          >
            <SisdaiCasilla
              etiqueta="Casilla Uno"
              v-model="casillaArreglo"
              value="Uno"
              :es_obligatorio="true"
            />
            <SisdaiCasilla
              etiqueta="Casilla Dos"
              v-model="casillaArreglo"
              value="Dos"
              :es_obligatorio="true"
            />
            <SisdaiCasilla
              etiqueta="Casilla Tres"
              v-model="casillaArreglo"
              value="Tres"
              :es_obligatorio="true"
            />
          </GrupoCasillasVerificacion>
          '
        />
        <p>
          Las casillas agrupadas deben recibir un arreglo
          para su modelo de datos <code> v-model:{{ casillaArreglo }}</code>
        </p>
      </div>
    </div>

    <div id="botones-radio" class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Botones de radio</h2>
      <p>
        Al utilizar el componente <code>SisdaiBotonRadio</code> 
        nos aseguramos que la etiqueta y el campo botón de radio siempre estén vinculadas. 
      </p>
      <p>
        Debido a que el campo botón de radio solo tiene sentido para seleccionar una opción en una lista de elementos
        siempre se debe utilizar junto con el componente <code>SisdaiGrupoBotonesRadio</code> para aseguramos 
        de que se encuentren correctamente etiquetadas como se requiere para mejorar la accesibilidad. 
      </p>
      <p>
        Se recomienda agregar al <code>SisdaiGrupoBotonesRadio</code> un título y opcionalmente podemos agregar
        un mensaje de ayuda y definir si los campos y el grupo son obligatorios.
      </p>
      <p>
        El componente <code>SisdaiGrupoBotonesRadio</code> valida automáticamente cuando son requeridos los botones de radio que contiene, 
        mostrando el mensaje de error <i>'Un botón de radio necesita estar seleccionado. '</i>. 
        Las implementaciones de otros tipos de error deberán crearse en el momento de su uso. 
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <EjemploCodigo
        tipo='HTML que construye al componente'
        codigo='
          <form v-on:submit.prevent>
            <fieldset 
              class="grupo-formulario" 
              role="radiogroup"
            >
              <legend>Título de la agrupación de botones de radio
                <span class="formulario-obligatoriedad">
                  (Obligatorio)
                </span>
              </legend>
              
              <span>
                <input 
                  id="radio-identificadorgrupaluno"
                  type="radio"
                  value="uno"
                  name="nombredelgrupo"
                  required
                />
                <label for="radio-identificadorgrupaluno">
                  Uno
                </label>
              </span>
              <span>
                <input 
                  id="radio-identificadorgrupaldos"
                  type="radio"
                  value="dos"
                  name="nombredelgrupo"
                  required
                />
                <label for="radio-identificadorgrupaldos">
                  Dos
                </label>
              </span>
              <span>
                <input 
                  id="radio-identificadorgrupaltre"
                  type="radio"
                  value="tres"
                  name="nombredelgrupo"
                  required
                />
                <label for="radio-identificadorgrupaltre">
                  Tres
                </label>
              </span>
              
            </fieldset>
            <p aria-live="polite" class="formulario-ayuda" role="status"> 
              Texto de ayuda.
            </p>
          </form>
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <SisdaiGrupoBotonesRadio
          leyenda="Grupo de botones de radio"
          texto_ayuda="Texto de ayuda."
          :es_obligatorio="true"
        >
          <SisdaiBotonRadio 
            etiqueta="boton radio uno"
            v-model="botonRadio"
            value="Uno"
            name="nombredelgrupo"
            :es_obligatorio="true"
          />
          <SisdaiBotonRadio 
            etiqueta="boton radio dos"
            v-model="botonRadio"
            value="Dos"
            name="nombredelgrupo"
            :es_obligatorio="true"
          />
        </SisdaiGrupoBotonesRadio>
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Componente de VUE'
          codigo='
          <SisdaiGrupoBotonesRadio
            leyenda="Grupo de botones de radio"
            texto_ayuda="Texto de ayuda."
            :es_obligatorio="true"
          >
            <SisdaiBotonRadio 
              etiqueta="boton radio uno"
              v-model="botonRadio"
              value="Uno"
              name="nombredelgrupo"
              :es_obligatorio="true"
            />
            <SisdaiBotonRadio 
              etiqueta="boton radio dos"
              v-model="botonRadio"
              value="Dos"
              name="nombredelgrupo"
              :es_obligatorio="true"
            />
          </SisdaiGrupoBotonesRadio>
          '
        />
        <p>
          El grupo de botones de radio debe recibir una variable 
          de texto o número para su modelo de datos 
          <code>v-model:{{ botonRadio }}</code>
        </p>
      </div>
    </div>
  </div>
</template>
