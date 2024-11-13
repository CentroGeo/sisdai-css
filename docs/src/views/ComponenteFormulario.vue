<script setup>
import SisdaiCampoBase from '@/componetes/pruebas-concepto/CampoBase.vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import { ref } from 'vue'

const fechaNacimiento = ref('')

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
      <h2 class="p-t-10 m-t-0">Elementos dentro del formulario</h2>
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
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="p-t-10 m-t-0">Componente CampoBase</h2>
      <p>
        Al utilizar éste componente nos aseguramos que la etiqueta y el campo siempre estén vinculados,
        opcionalmente podemos definir para cada componente si es obligatorio, un texto de ejemplo 
        y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse cada elemento del formulario.
      </p>
      <p>Referencias:</p>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/tutorials/forms/">Notas de accesibilidad para formularios</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">Aria live</a>
        </li>
        <li>
          <a href="https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/">Notificaciones en formularios</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6 m-t-3">
        <SisdaiCampoBase 
          identificador="campofechanac"
          etiqueta="Fecha de nacimiento"
          ejemplo="31/12/2024"
          texto_ayuda="Escribir la fecha en formato Día/Mes/Año"
          :es_obligatorio="false"
          v-model="fechaNacimiento"
        />
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='Código VUE'
          codigo='
            <SisdaiCampoBase 
              identificador="identificadorunico"
              etiqueta="Fecha de nacimiento"
              ejemplo="31/12/2024"
              texto_ayuda="Escribir la fecha en formato Día/Mes/Año"
              :es_obligatorio="false"
              v-model="variableValor"
            />
          '
        />
      </div>
      <div class="columna-6 m-t-3">
        <EjemploCodigo
          tipo='Código HTML'
          codigo='
            <label for="campo">
              Nombre del campo
              <span class="formulario-obligatoriedad">
                (Obligatorio)
              </span>
            </label>
            <input 
              id="campo" 
              type="text" 
              placeholder="Muestra de ejemplo"
            />
            <p class="formulario-ayuda">
              Mensaje de ayuda.
            </p>
          '
        />
      </div>
    </div>
    
    

    <!-- <div>
      <p>Requerimientos</p>
      <ul>
        <li>
          un input debe tener un label visible vinculado
          <ul>
            <li>
              si el label no puede ser visible, igual debe existir para que los usuarios puedan escuchar el nombre del campo
            </li>
          </ul>
          ref: <a href="https://www.w3.org/WAI/tutorials/forms/labels/">labels</a>
        </li>
        <li>
          el placeholder es para mostrar como se llena correctamente el campo, no es copia del label ni mucho menos lo reemplaza
        </li>
      </ul>

      

      <SisdaiCampoBase 
        identificador="camposinlabel"
        nombre="Nombre completo"
        :es_nombre_visible="false"
        ejemplo="Ejemplo: Jorge Acosta Nuñez"
        v-model="nombreCompleto"
      />

      <SisdaiCampoBase 
        identificador="campoconinstrucciones"
        nombre="Fecha de nacimiento"
        ejemplo="31/12/2024"
        instrucciones="Escribir Día, Mes, Año, con el formato DD/MM/AAAA"
        v-model="nombreCompleto"
      />
      
      
    </div> -->
  </div>
</template>
