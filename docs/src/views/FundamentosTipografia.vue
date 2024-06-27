<script setup>
import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="contenedor ancho-lectura">
      <h1>Tipografía</h1>
      <p>
        El Sistema de Diseño y Accesibilidad para la Investigación (Sisdai) utiliza 
        <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer">Montserrat</a> 
        como su familia tipográfica predeterminada, con un tamaño base de 16px, 
        equivalente a 1rem. Todas las medidas tipográficas están definidas en 
        <code>rem</code> para asegurar que, al cambiar el tamaño base, todos 
        los textos se ajustan proporcionalmente manteniendo la jerarquía visual. 
        Las variables de familia tipográfica y tamaño están declaradas en el archivo 
        <code>src/_variables.scss</code> en la carpeta raíz del proyecto, bajo los nombres
        <code>--tipografia-familia</code> y <code>--tipografia-tamanio</code>.
      </p>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Títulos</h2>
      <p>
        Para todas las etiquetas de encabezado (heading) y clases de títulos, 
        el interlineado se mantiene en 1.25em y la tipografía tiene un peso 
        medio (medium 500). Además, todos los encabezados y títulos incluyen 
        márgenes superior e inferior de 24px, excepto para el <code>h1</code> 
        en su versión de escritorio donde estas medidas pueden variar. 
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <h1>Título h1</h1>
      <p class="h1">Clase de titulo h1</p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'2rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'2.25rem'},
        {nombre:'Margen superior', valor:'64px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h2>Título h2</h2>
      <p class="h2">Clase de titulo h2</p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.75rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'2rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h3>Título h3</h3>
      <p class="h3">Clase de titulo h3</p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.5rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.75rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h4>Título h4</h4>
      <p class="h4">Clase de titulo h4</p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.25rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h5>Título h5</h5>
      <p class="h5">Clase de titulo h5</p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.125rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.25rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h6>Título h6</h6>
      <p class="h6">Clase de titulo h6</p>
      '
      :propiedades="[[
        {titulo:'Celular'},  
        {nombre:'Tamaño', valor:'1rem'},
      ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.125rem'},
      ]]"
    />


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Parrafos</h2>
      <p>
        El tamaño de texto general es de 1 rem, con un interlineado de 
        1.5em y un peso tipográfico 400 (regular). Además, los párrafos 
        cuentan con márgenes superior e inferior de 24px.
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p>
        Ejemplo de párrafo. Lorem ipsum dolor sit 
        amet elit. Aspernatur culpa pariatur suscipit
        recusandae, modi sit ipsa fugiat facere 
        doloremque animi.
      </p>
      '
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="parrafo-texto-secundario">
        Ejemplo de párrafo texto secundario.
        Lorem ipsum dolor sit amet elit.
      </p>
      '
      :propiedades="[[
        {titulo:'.parrafo-texto-secundario'},
        {nombre:'Color', valor:'var(--tipografia-color-3)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="parrafo-texto-alto">
        Ejemplo de párrafo texto alto.
        Utilizado para introducciones o 
        textos de mayor importancia.
      </p>
      '
      :propiedades="[[
        {titulo:'.parrafo-texto-alto'},
        {nombre:'Tamaño', valor:'1.25rem'},
      ]]"
    />




    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Notas</h2>
      <p>
        El <i>estilo</i> <code>notas</code> es un tipo de párrafo con texto más pequeño, 
        que puede usarse con o sin título y con o sin contenedor. 
      </p>
    </div>

    <EjemploCodigoHorizontal 
      html='
      <p class="nota">
        <b>Las notas</b> se utilizan para hacer observaciones 
        o aclaraciones respecto a un tema. 
      </p>
      '
      :propiedades="[[
        {titulo:'.nota'},
        {nombre:'Tamaño', valor:'0.875rem'},
        {nombre:'Interlineado', valor:'1.3em'},
        {nombre:'Peso', valor:'Regular (400)'},
        {nombre:'Margen superior', valor:'24px'},
        {nombre:'Margen inferior', valor:'24px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="nota-titulo">
        Notas:
      </p>

      <p class="nota">
        Las notas se utilizan para hacer observaciones 
        o aclaraciones respecto a un tema. 
      </p>
      '
      :propiedades="[[
        {titulo:'.nota-titulo'},
        {nombre:'Tamaño', valor:'1rem'},
        {nombre:'Interlineado', valor:'1.3em'},
        {nombre:'Peso', valor:'Medium (500)'},
        {nombre:'Margen superior', valor:'24px'},
        {nombre:'Margen inferior', valor:'16px'},
        {titulo:''},
        {titulo:'.nota'},
        {nombre:'Margen superior', valor:'16px'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <div class="notas-contenedor">
        <p class="nota-titulo">
          Notas:
        </p>
        <p class="nota">
          Las notas se utilizan para hacer observaciones 
          o aclaraciones respecto a un tema. 
        </p>
      </div>
      '
      :propiedades="[[
        {titulo:'.nota-contenedor'},
        {nombre:'Fondo', valor:'var(--nota-fondo)'},
        {nombre:'Margen interior', valor:'24px'},
      ]]"
    />

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Etiquetas de texto en línea</h2>
      <p>
        Es importante utilizar las etiquetas HTML de manera semántica. 
        Si el uso previsto es por estilo y no por definición, es 
        recomendable consultar con el equipo de diseño.
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html="
      <p>
        texto <b>bold</b>
        texto <strong>strong</strong>
        texto <small>small</small> 
        texto <i>italica</i> 
        texto <abbr title='abbr title'>abreviación</abbr>
        texto <ins>insertado</ins> 
        texto <del>eliminado</del> 
        texto <dfn>definición</dfn>
        texto <sub>sub</sub> 
        texto <sup>sup</sup> 
        texto <em>énfasis</em> 
        texto <cite>cita</cite>
        texto <q cite=''> q cita </q>
        texto <mark>resaltado</mark>
      </p>
      "
      :propiedades="[[
        {titulo:'General'},
        {nombre:'Tamaño', valor:'1em'},
        {titulo:''},
        {titulo:'<b> <strong>'},
        {nombre:'Peso', valor:'Medium (500)'},
        {titulo:''},
        {titulo:'<small>'},
        {nombre:'Tamaño', valor:'0.875em'},
        {titulo:''},
        {titulo:'<sup> <sub>'},
        {nombre:'Tamaño', valor:'0.75em'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html="
      <p>
        <code>código</code>
        <kbd>entrada teclado</kbd>
        <samp>Mensaje del sistema</samp>
        <var>variable</var>
      </p>
      "
      :propiedades="[[
        {titulo:'General'},
        {nombre:'Tipografia', valor:'var(--tipografia-codigo, monospace)'},
        {nombre:'Color', valor:'var(--tipografia-color-3)'},
        {titulo:''},
        {titulo:'<kdb>'},
        {nombre:'Fondo', valor:'var(--nota-fondo)'},
        {nombre:'Borde redondeado', valor:'4px'},
      ]]"
    />
    
  </div>
</template>
