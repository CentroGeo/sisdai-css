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
            <button type="button" class="boton-chico">predeterminado</button>
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
            
            <button type="button" class="boton-chico"> ... </button>
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
          <button type="button" class="boton-chico">predeterminado</button>
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
            <button type="button" class="boton-chico"> ... </button>
          </div>
          </div>
        </div>
        '
        />
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo interno</h2>
      <p>
        En este caso el elemeto principal, el contenedor de la tarjeta 
        es un hipervínculo con la clase <code>.tarjeta-hipervinculo-interno</code>.
      </p>
      <p>
        También como el resto de las tarjetas puede tener una <code>.portada</code> y
        un contenedor de <code>.contenido</code> al que se le puede agregar cualquier 
        elemento, pero mantiene las clases especiales de <code>.titulo</code> y <code>.etiqueta</code>.
      </p>
      <p>
        Obviamente a este elemento no se le deben agregar hipervínculos ni botones dentro! 
        porque el contenedor principal ya tiene la acción del hipervínculo.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <a class="tarjeta-hipervinculo-interno" href="#">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/asha.jpg" alt="">
          <div class="contenido">
            <p class="titulo">Título de la tarjeta</p>
            <p class="etiqueta">Etiqueta o texto secundario</p>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta-hipervinculo-interno">
          <img class="portada" ... />
          <div class="contenido">
            <p class="titulo"> ... </p>
            <p class="etiqueta"> ... </p>
          </div>
        </a>
        '
        />
      </div>
      <div class="columna-4">
        <a class="tarjeta-hipervinculo-interno" href="#">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/becka.jpg" alt="">
          
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta-hipervinculo-interno">
          <img class="portada" ... />
          <span class="a11y-solo-lectura">
            Texto que describe el hipervínculo
          </span>
        </a>
        '
        />
      </div>
      <div class="columna-4">
        <a class="tarjeta-hipervinculo-interno" href="#">
          <img class="portada" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/baghira.jpg" alt="">
          <div class="contenido">
            <p class="titulo">Título de la tarjeta</p>
            <p>Parrafo normal, para agregar una descripción pequeña.</p>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta-hipervinculo-interno">
          <img class="portada" ... />
          <div class="contenido">
            <p class="titulo"> ... </p>
            <p> ... </p>
          </div>
        </a>
        '
        />
      </div>
      
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo externo</h2>
      <p>
        Para éste tipo de tarjeta se espera que el contenedor principal sea un hipervínculo
        externo con la clase <code>.tarjeta-hipervinculo-externo</code>.
      </p>
      <p>
        Esta tarjeta tiene un contenedor <code>.fondo-imagen</code> para posicionar la imagen al fondo,
        un contenedor sobre la imagen para agregar un degradado <code>.fondo-degradado</code> que mejore
        la legibilidad del <code>.contenido</code> que acepta cualquier tipo de texto.
      </p>
      <p>
        Obviamente a este elemento no se le deben agregar hipervínculos ni botones dentro! 
        porque el contenedor principal ya tiene la acción del hipervínculo.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <a class="tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="fondo-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/calamidad-3.jpg" media="(min-width: 900px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/calamidad-2.jpg" alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>Capítulo</p>
              <p class="h2 borde-b">Nombre del capítulo <span class="pictograma-flecha-arriba-derecha"></span></p>
              <p class="h5">ENI Nombre</p>
            </div>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta-hipervinculo-externo">
          <picture class="fondo-imagen">
            <source srcset="..." media="(min-width: 700px)"/>
            <img src="..." alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>
                Capítulo
              </p>
              <p class="h2 borde-b">
                Nombre del capítulo 
                <span 
                  class="pictograma-flecha-arriba-derecha"
                ></span>
              </p>
              <p class="h5">
                ENI Nombre
              </p>
            </div>
          </div>
        </a>
        '
        />
      </div>
      <div class="columna-6">
        <a class="tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="fondo-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/perro-2.jpg" media="(min-width: 700px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/perro-3.jpg" alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>ENI</p>
              <p class="h1">Nombre ENI <span class="pictograma-flecha-arriba-derecha"></span></p>
            </div>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta-hipervinculo-externo">
          <picture class="fondo-imagen">
            <source srcset="..." media="(min-width: 700px)"/>
            <img src="..." alt="" />
          </picture>
          <div class="fondo-degradado">
            <div class="contenido">
              <p>ENI</p>
              <p class="h1">
                Nombre ENI 
                <span 
                  class="pictograma-flecha-arriba-derecha"
                ></span>
              </p>
            </div>
          </div>
        </a>
        '
        />
      </div>
    </div>

    

  </div>
</template>