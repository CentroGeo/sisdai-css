<script setup>
import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="contenedor ancho-lectura">
      <h1>Tipografía</h1>
      <p>
        El Sisdai utiliza <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer">Montserrat</a> 
        como familia tipográfica base, con un tamaño de 16px que se equivale a 1rem.  
      </p>
      <p>
        Todas las tipografías se calculan en <code>rem</code> para que al momento de
        cambiar el tamaño de la tipografía todos los textos se ajusten manteniendo la
        relación jerárquica del tamaño.
      </p>
      <p>
        Las variables de familia tipografica y tamaño estan
        declaradas dentro del archivo <code>src/_variables.scss</code> 
        de la carpeta raiz del proyecto, bajo los nombres de
        <code>--tipografia-familia</code> y <code>--tipografia-tamanio</code>
      </p>
    </div>


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Títulos</h2>
      <p>
        Para todas las etiquetas de heading y clases de titulos el
        interlineado se mantiene de 1.25em, el peso de la tipografia es medium
        (500) y tienen margenes superior e inferior de 24px 
        <i>*con la excepción del h1 en su versión de escritorio</i>.
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
      <h2 class="m-t-10">Color en Títulos</h2>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <h3 class="titulo-color-primario">
        Título color primario
      </h3>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--titulo)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h3 class="titulo-color-acento">
        Título color acento
      </h3>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--titulo-acento)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <h3 class="titulo-color-inverso">
        Título color inverso
      </h3>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--titulo-inverso)'},
      ]]"
    />


    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Parrafos</h2>
      <p>
        El texto en general tiene el tamaño de 1rem con interlineado
        de 1.5em y su peso tipográfico es regular (400).
        Los parrafos tienen margenes superior e inferior de 24px.
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
      <h2 class="m-t-10">Color en Texto</h2>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-primario">
        Texto color primario
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-primario)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-secundario">
        Texto color secundario
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-secundario)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-acento">
        Texto color acento
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-acento)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-inverso">
        Texto color inverso
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-inverso)'},
      ]]"
    />




    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Notas</h2>
      <p>
        Notas es un estilo de parrafo con texto pequeño, puede utilizarse con o sin título y con o sin contenedor.
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
      <div class="nota-contenedor">
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
        {nombre:'Fondo', valor:'var(--fondo-acento)'},
        {nombre:'Margen interior', valor:'24px'},
      ]]"
    />

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Etiquetas de texto en línea</h2>
      <p>
        Es importante utilizar las etiquetas de html semánticamente.
        Si lo que se requiere es por estilo y no por definición,
        por favor acerquese a su equipo de diseño para hablar del tema.
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
        {nombre:'Color', valor:'var(--texto-secundario)'},
        {titulo:''},
        {titulo:'<kdb>'},
        {nombre:'Fondo', valor:'var(--fondo-acento)'},
        {nombre:'Borde redondeado', valor:'4px'},
      ]]"
    />
    
  </div>
</template>
