<script setup>
import EjemploCodigoTipografico from '@/componetes/EjemploCodigoTipografico.vue'
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
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-1">
        texto-tamanio-1
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'0.75rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-2">
        texto-tamanio-2
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'0.875rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-3">
        texto-tamanio-3
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-4">
        texto-tamanio-4
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.125rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-5">
        texto-tamanio-5
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.25rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-6">
        texto-tamanio-6
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'1.5rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-7">
        texto-tamanio-7
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'2.25rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-8">
        texto-tamanio-8
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'3rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-tamanio-9">
        texto-tamanio-9
      </p>
      '
      :propiedades="[[
        {nombre:'Tamaño', valor:'3.5rem'},
      ]]"
    />
    <EjemploCodigoTipografico 
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
    <EjemploCodigoTipografico 
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
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-primario">
        Texto color primario
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-primario)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-secundario">
        Texto color secundario
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-secundario)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-acento">
        Texto color acento
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-acento)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-inverso">
        Texto color inverso
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-inverso)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-informacion">
        Texto color informacion
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-informacion)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-confirmacion">
        Texto color confirmacion
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-confirmacion)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-alerta">
        Texto color alerta
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-alerta)'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-color-error">
        Texto color error
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-error)'},
      ]]"
    />

  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Alineación</h2>
    </div>
    <EjemploCodigoTipografico 
      html='
      <p class="texto-centrado">
        texto-centrado
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'centrada'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-derecha">
        texto-derecha
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'derecha'},
      ]]"
    />
    <EjemploCodigoTipografico 
      html='
      <p class="texto-izquierda">
        texto-izquierda
      </p>
      '
      :propiedades="[[
        {nombre:'Alineacion', valor:'izquierda'},
      ]]"
    />
    <EjemploCodigoTipografico 
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
