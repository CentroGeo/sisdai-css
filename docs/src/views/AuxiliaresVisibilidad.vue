<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import EjemploCodigoTipografico from '@/componetes/EjemploCodigoTipografico.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="contenedor ancho-lectura">
      <h1>Visibilidad</h1>

      <h2 class="m-t-10">Oculto</h2>
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <ul>
          <li>
            Al agregar esta clase se hace que 
            el contenido de ésta no exista en pantalla.
          </li>
          <li class="oculto p-5">
            elemento oculto 
          </li>
          <li>
            El tamaño y margenes el elemento
            NO afectan al contenido en la pantalla.
          </li>
        </ul>
        '
      />

      <h2 class="m-t-10">No visible</h2>
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <ul>
          <li>
            Esta clase hace que el elemento no se vea
            pero exista en la pantalla.
          </li>
          <li class="no-visible p-5">
            elemento no visible 
          </li>
          <li>
            El tamaño y margenes el elemento
            afectan al contenido en la pantalla.
          </li>  
        </ul>
        '
      />
    </div>

    <div class="contenedor ancho-lectura m-b-6">
      <h2 class="m-t-10">Visibilidad por dispositivos</h2>
      <p>
        Para controlar la visibilidad de un elemento en diferentes 
        dispositivos, se pueden utilizar los sufijos <code>-mov</code> 
        para móviles y <code>-esc</code> para escritorio. Esto permite 
        especificar cómo se muestra o no un elemento en cada tipo de dispositivo.
      </p>
    </div>
    <EjemploCodigoTipografico 
    html='
    <p class="oculto-mov">
      Elemento oculto en dispositivos móviles
    </p>
    '
    :propiedades="[[
      {titulo:'Celular'},
      {nombre:'Display', valor:'none'},
    ],[
      {titulo:'Escritorio'},
      {nombre:'Display', valor:'inherit'},
    ]]"
    />
    <EjemploCodigoTipografico 
    html='
    <p class="oculto-esc">
      Elemento oculto en dispositivos de escritorio
    </p>
    '
    :propiedades="[[
      {titulo:'Celular'},
      {nombre:'display', valor:'inherit'},
    ],[
      {titulo:'Escritorio'},
      {nombre:'display', valor:'none'},
    ]]"
    />
    <EjemploCodigoTipografico 
    html='
    <p class="no-visible-mov">
      Elemento no visible en móviles
    </p>
    '
    :propiedades="[[
      {titulo:'Celular'},
      {nombre:'visibility', valor:'hidden'},
    ],[
      {titulo:'Escritorio'},
      {nombre:'visibility', valor:'inherit'},
    ]]"
    />
    <EjemploCodigoTipografico 
    html='
    <p class="no-visible-esc">
      Elemento no visible en escritorio
    </p>
    '
    :propiedades="[[
      {titulo:'Celular'},
      {nombre:'visibility', valor:'inherit'},
    ],[
      {titulo:'Escritorio'},
      {nombre:'visibility', valor:'hidden'},
    ]]"
    />

  </div>
</template>