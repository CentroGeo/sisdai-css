<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Tarjetas</h1>
      <p>
        Las tarjetas son un 'componente' de diseño en el que todos sus elementos son opcionales,
        razón por la cual se crearon en la sección de elementos compuestos,
        para darle la flexibilidad al desarrollador de hacer lo que se requiera en determinado proyecto.
      </p>
    </div>

    <div class="ancho-lectura m-b-10">
      <h2 class="m-t-10">Tarjetas de contenido</h2>
      <p>
        Las tarjetas de contenido se conforman de un contenedor principal
        llamado con la clase <code>.tarjeta</code> en el que puede existir
        una imagen <code>img.portada</code> y un contenedor general <code>div.contenido</code>.
      </p>
      <p>
        En el <code>div.contenido</code> puede existir cualquier elemento de html,
        pero tiene dos clases especiales para agregar un texto pequeño de <code>.etiqueta</code>
        y un <code>.titulo</code> de la tarjeta.
      </p>
    </div>

    <div class="flex">
      <div class="columna-4">
        <div class="tarjeta">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-1.jpg" alt="">
          <div class="contenido">
            <p class="etiqueta">Etiqueta o texto secundario</p>
            <p class="titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
            <button type="button">predeterminado</button>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <img class="portada" ... />

          <div class="contenido">
            <p class="etiqueta"> ... </p>
            <p class="titulo"> ... </p>
            <p> ... </p>
            
            <button type="button"> ... </button>
          </div>
        </div>
        '
        />
      </div>
    
      <div class="columna-4">
        <div class="tarjeta">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-2.jpg" alt="">
          <div class="contenido">
            <p class="etiqueta">Etiqueta o texto secundario</p>
            <p class="titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <img class="portada" ... />

          <div class="contenido">
            <p class="etiqueta"> ... </p>
            <p class="titulo"> ... </p>
            <p> ... </p>
          </div>
        </div>
        '
        />
      </div>

      <div class="columna-4">
        <div class="tarjeta">
          <div class="contenido">
            <p class="etiqueta">Etiqueta o texto secundario</p>
            <p class="titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <div class="contenido">
            <p class="etiqueta"> ... </p>
            <p class="titulo"> ... </p>
            <p> ... </p>
          </div>
        </div>
        '
        />
      </div>

      <div class="columna-4">
        <div class="tarjeta">
          <div class="contenido">
            <p class="titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
            <a href="#">Enlace</a>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <div class="contenido">
            <p class="etiqueta"> ... </p>
            <p class="titulo"> ... </p>
            <p> ... </p>
            <a href="#">Enlace</a>
          </div>
        </div>
        '
        />
      </div>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de contenido horizontal</h2>
      <p>
        Tienen los mismos elementos que las tarjetas de contenido,
        con la diferencia que en su versión de escritorio se muestran de manera horizontal.
      </p>
      <div class="tarjeta-horizontal">
        <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-3.jpg" alt="">
        <div class="contenido">
          <p class="etiqueta">Etiqueta o texto secundario</p>
          <p class="titulo">Título de la tarjeta de una o más palabras</p>
          <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          <button type="button">predeterminado</button>
        </div>
      </div>
      <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta-horizontal">
          <img class="portada" ... />
          <div class="contenido">
            <p class="etiqueta"> ... </p>
            <p class="titulo"> ... </p>
            <p> ... </p>
            <button type="button"> ... </button>
          </div>
          </div>
        </div>
        '
        />
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo externo</h2>
      
    </div>

    <div class="flex">
      <div class="columna-8">
        <a class="tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="fondo-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/burbuja-1.jpg" media="(min-width: 700px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/burbuja-2.jpg" alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>Capítulo</p>
              <p class="h2 borde-b">Nombre del capítulo <span class="pictograma-flecha-arriba-derecha"></span></p>
              <p class="h4">ENI Nombre</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-8">
        <a class="tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="fondo-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/burbuja-1.jpg" media="(min-width: 700px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/burbuja-2.jpg" alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>ENI</p>
              <p class="h1">Nombre ENI <span class="pictograma-flecha-arriba-derecha"></span></p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo interno</h2>
      
    </div>
    <div class="flex">

      <div class="columna-4">
        <a class="tarjeta-hipervinculo-interno" href="#">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-2.jpg" alt="">
          <div class="contenido">
            <p class="titulo">Título de la tarjeta</p>
            <p class="etiqueta">Etiqueta o texto secundario</p>
          </div>
        </a>
      </div>
      
    </div>

    

  </div>
</template>