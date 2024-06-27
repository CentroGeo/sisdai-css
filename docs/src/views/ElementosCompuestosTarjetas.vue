<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Tarjetas</h1>
      <p>
        Las tarjetas son componentes flexibles que se componen de elementos opcionales adaptados a 
        las necesidades específicas de cada proyecto. La estructura básica de una tarjeta incluye: 
      </p>
      <ul>
        <li>Contenedor principal: generalmente lleva la clase <code>.tarjeta</code>.</li>
        <li>Imagen: es opcional y se puede agregar con la clase <code>.tarjeta-imagen</code>.</li>
        <li>
          Cuerpo de la tarjeta: puede agregarse como <code>.tarjeta-cuerpo</code> y contender cualquier elemento HTML. 
          Frecuentemente incluye: <code>.tarjeta-etiqueta</code> (para texto cortos) y <code>.tarjeta-titulo</code> 
          para agregar título a la tarjeta.
        </li>
      </ul>
    </div>

    <div class="ancho-lectura m-b-10">
      <h2 class="m-t-10">Tarjetas de contenido</h2>
      <p>
        Las tarjetas de contenido siguen la estructura básica anteriormente descrita. 
      </p>
    </div>

    <div class="flex">
      <div class="columna-4">
        <div class="tarjeta">
          <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-1.jpg" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
            <button type="button" class="boton-primario boton-chico">predeterminado</button>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <img class="tarjeta-imagen" ... />

          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta"> ... </p>
            <p class="tarjeta-titulo"> ... </p>
            <p> ... </p>
            
            <button type="button" class="boton-primario boton-chico"> ... </button>
          </div>
        </div>
        '
        />
      </div>
    
      <div class="columna-4">
        <div class="tarjeta">
          <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-2.jpg" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <img class="tarjeta-imagen" ... />

          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta"> ... </p>
            <p class="tarjeta-titulo"> ... </p>
            <p> ... </p>
          </div>
        </div>
        '
        />
      </div>

      <div class="columna-4">
        <div class="tarjeta">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta"> ... </p>
            <p class="tarjeta-titulo"> ... </p>
            <p> ... </p>
          </div>
        </div>
        '
        />
      </div>

      <div class="columna-4">
        <div class="tarjeta">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
            <a href="#">Enlace</a>
          </div>
        </div>
        <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta"> ... </p>
            <p class="tarjeta-titulo"> ... </p>
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
        Siguen la misma estructura básica de las tarjetas, pero se presentan de manera horizontal en la versión de escritorio. 
      </p>
      <div class="tarjeta tarjeta-horizontal">
        <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-3.jpg" alt="">
        <div class="tarjeta-cuerpo">
          <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
          <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
          <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          <button type="button" class="boton-primario boton-chico">predeterminado</button>
        </div>
      </div>
      <EjemploCodigoVertical
        class="m-y-1"
        :tiene_ejemplo="false"
        html='
        <div class="tarjeta tarjeta-horizontal">
          <img class="tarjeta-imagen" ... />
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta"> ... </p>
            <p class="tarjeta-titulo"> ... </p>
            <p> ... </p>
            <button type="button" class="boton-primario boton-chico"> ... </button>
          </div>
          </div>
        </div>
        '
        />
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo interno</h2>
      <p>
        Las tarjetas de hipervínculo interno utilizan la clase <code>.tarjeta-hipervinculo-interno</code> 
        como contenedor principal. Este elemento actúa como un hipervínculo, 
        envolviendo todos los componentes de la tarjeta.
      </p>
      <p>
        Incluye los mismos elementos que la estructura básica de las tarjetas, pero no debe contener 
        otros hipervínculos o botones internos para evitar conflictos con la acción principal del hipervínculo. 
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/asha.jpg" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta</p>
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta tarjeta-hipervinculo-interno">
          <img class="tarjeta-imagen" ... />
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo"> ... </p>
            <p class="tarjeta-etiqueta"> ... </p>
          </div>
        </a>
        '
        />
      </div>
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/becka.jpg" alt="">
          
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta tarjeta-hipervinculo-interno">
          <img class="tarjeta-imagen" ... />
          <span class="a11y-solo-lectura">
            Texto que describe el hipervínculo
          </span>
        </a>
        '
        />
      </div>
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/baghira.jpg" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta</p>
            <p>Párrafo normal, para agregar una descripción pequeña.</p>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta tarjeta-hipervinculo-interno">
          <img class="tarjeta-imagen" ... />
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo"> ... </p>
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

        Las tarjetas de hipervínculo externo usan la clase <code>.tarjeta-hipervinculo-externo</code> 
        como contenedor principal. Incluye un degradado <code>.tarjeta-degradado</code> sobre la 
        imagen de fondo para mejorar la legibilidad, atenuando visualmente los detalles de la imagen 
        donde se superpone el texto. Al igual que las tarjetas de hipervínculos internos, no deben 
        contener hipervínculos ni botones adicionales dentro del contenedor principal.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <a class="tarjeta tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="tarjeta-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/calamidad-3.jpg" media="(min-width: 900px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/calamidad-2.jpg" alt="" />
          </picture>
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>Capítulo</p>
              <p class="h2 borde-b">Nombre del capítulo <span class="pictograma-flecha-arriba-derecha"></span></p>
              <p class="h5">ENI Nombre</p>
            </div>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta tarjeta-hipervinculo-externo">
          <picture class="tarjeta-imagen">
            <source srcset="..." media="(min-width: 700px)"/>
            <img src="..." alt="" />
          </picture>
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>
                Capítulo
              </p>
              <p class="h2 borde-b">
                Nombre del capítulo 
                <span class="pictograma-flecha-arriba-derecha"></span>
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
        <a class="tarjeta tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="tarjeta-imagen"> 
            <source srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/perro-2.jpg" media="(min-width: 700px)"/>
            <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/perro-3.jpg" alt="" />
          </picture>
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>ENI</p>
              <p class="h1">Nombre ENI <span class="pictograma-flecha-arriba-derecha"></span></p>
            </div>
          </div>
        </a>
        <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <a class="tarjeta tarjeta-hipervinculo-externo">
          <picture class="tarjeta-imagen">
            <source srcset="..." media="(min-width: 700px)"/>
            <img src="..." alt="" />
          </picture>
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>ENI</p>
              <p class="h1">
                Nombre ENI 
                <span class="pictograma-flecha-arriba-derecha"></span>
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