<script setup>
import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    
    <div class="contenedor ancho-lectura">
      <h1>Texto</h1>
      <h2 class="m-t-10">Tamaño</h2>
      <p>
        El tamaño base del sistema es de 16px, que equivale a 1rem. Esta 
        equivalencia facilita a las personas desarrolladoras establecer 
        reglas adaptativas para diferentes tamaños y resoluciones de 
        dispositivos. Basándose en esta medida, la jerarquía de tamaños 
        se define generalmente en múltiplos de 4. Sin embargo, se permiten 
        excepciones: los textos secundarios como notas y pies de foto tienen 
        un tamaño de 14 px y los subtítulos de nivel 6 son de 18 px.  
      </p>
      
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-1">
        texto-tamanio-1
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'0.75rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-2">
        texto-tamanio-2
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'0.875rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-3">
        texto-tamanio-3
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-4">
        texto-tamanio-4
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.125rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-5">
        texto-tamanio-5
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.25rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-6">
        texto-tamanio-6
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-7">
        texto-tamanio-7
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'2.25rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-8">
        texto-tamanio-8
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'3rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-9">
        texto-tamanio-9
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'3.5rem'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-10">
        texto-tamanio-10
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'5rem'},
      ]]"
    />

    <div class="contenedor ancho-lectura m-b-6">
      <h3 class="m-t-10">Tamaño responsivo</h3>
      <p>
        Para adaptar el tamaño del texto según el dispositivo, 
        se añaden los sufijos <code>-mov</code> para móviles o 
        <code>-esc</code> para escritorio, especificando así 
        el tamaño adecuado para cada tipo de pantalla.
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-tamanio-4-mov texto-tamanio-6-esc">
        texto-tamanio-4-mov texto-tamanio-6-esc
      </p>
      '
      :propiedades="[[
        {titulo:'Celular'},
        {nombre:'Tamaño', valor:'1.125rem'},
        ],[
        {titulo:'Escritorio'},
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Color de texto</h2>
      <p>
        Se dispone de clases de color para el texto, correspondientes 
        a variables definidas para modos claro y oscuros en cada tema.
      </p>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-base">
        texto-color-base
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--tipografia-color)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-1">
        texto-color-1
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--tipografia-color-1)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-2">
        texto-color-2
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--tipografia-color-2)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-3">
        texto-color-3
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--tipografia-color-3)'},
      ]]"
    />

  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Alineación</h2>
    </div>
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-centrado">
        texto-centrado
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'centrada'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-derecha">
        texto-derecha
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'derecha'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-izquierda">
        texto-izquierda
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'izquierda'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-justificado">
        texto-justificado
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'justificada'},
      ]]"
    />

    
  </div>
</template>
