<script setup>
import EjemploCodigoHorizontal from '@/componetes/EjemploCodigoHorizontal.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    
    <div class="contenedor ancho-lectura">
      <h1>Texto</h1>
      <h2 class="m-t-10">Tamaño</h2>
      <p>
        Este sistema de diseño tiene un tamaño base de 16px equivalente a 1rem. 
        Esta equivalencia ayuda a las personas desarrolladoras a establecer 
        reglas que permiten adaptar el texto a los diferentes 
        tamaños y resoluciones de dispositivos. 
      </p>
      <p>
        A partir de esta base (16px) se establecen jerarquías preferentemente en múltiplos de 4. 
        Sin embargo, pueden hacerse excepciones en los textos secundarios, 
        como notas y pies de foto, donde el tamaño de la tipografía será 14px 
        y en los subtítulos Nivel 6 donde es de 18px. 
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
        Además se puede especificar para el dispositivo para 
        el que se require determinado tamaño, agregando el sufijo
        <code>-mov</code> ó <code>-esc</code>
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
        Existen clases de color para el texto equivalentes a
        variables de color definidas en modo claro y oscuro para cada tema.
      </p>
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
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-informacion">
        Texto color informacion
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-informacion)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-confirmacion">
        Texto color confirmacion
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-confirmacion)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
      html='
      <p class="texto-color-alerta">
        Texto color alerta
      </p>
      '
      :propiedades="[[
        {nombre:'Color', valor:'var(--texto-alerta)'},
      ]]"
    />
    <EjemploCodigoHorizontal 
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
