<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>
<template>
  <div class="contenedor p-y-maximo">
    <div class="ancho-lectura">
      <h1>Tarjetas</h1>
      <p>
        Las tarjetas son componentes flexibles que se componen de elementos opcionales adaptados a 
        las necesidades específicas de cada proyecto. La estructura básica de una tarjeta incluye: 
      </p>
      <ul>
        <li>
          Contenedor principal: utiliza la clase <code>.tarjeta</code>.
        </li>
        <li>
          Imagen: es opcional y se puede agregar con la clase <code>.tarjeta-imagen</code>.
        </li>
        <li>
          Cuerpo de la tarjeta: puede agregarse como <code>.tarjeta-cuerpo</code> y contener cualquier elemento HTML. 
          Frecuentemente incluye: <code>.tarjeta-etiqueta</code> (para texto cortos) y <code>.tarjeta-titulo</code> 
          para agregar título a la tarjeta.
        </li>
        <li>
          Pie de la tarjeta: es un elemento opcional que se agrega con la clase <code>.tarjeta-pie</code>.
          Es utilizado para agregar elementos interactivos como botones o hipervínculos al final de la tarjeta.
        </li>
      </ul>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de contenido</h2>
      <p>
        Las tarjetas de contenido siguen la estructura básica anteriormente descrita. 
      </p>
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
          <div class="tarjeta">
            <img class="tarjeta-imagen" ... />

            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta"> ... </p>
              <p class="tarjeta-titulo"> ... </p>
              <p> ... </p>  
            </div>
            
            <div class="tarjeta-pie">
              <button type="button" class="boton-primario boton-chico"> ... </button>
            </div>
          </div>
        '
      />
    </div>

    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-4">
        <div class="tarjeta">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/kale-1.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
          <div class="tarjeta-pie">
            <button type="button" class="boton-primario boton-chico">Botón de ejemplo</button>
          </div>
        </div>
      </div>
    
      <div class="columna-4">
        <div class="tarjeta">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/kale-2.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
        </div>
      </div>

      <div class="columna-4">
        <div class="tarjeta">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
          <div class="tarjeta-pie">
            <a href="#">Hiverínculo local de ejemplo</a>
          </div>
        </div>
      </div>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de contenido horizontal</h2>
      <p>
        Siguen la misma estructura básica de las tarjetas, pero se presentan de manera horizontal en la versión de escritorio. 
      </p>

      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
          <div class="tarjeta tarjeta-horizontal">
            <img class="tarjeta-imagen" ... />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta"> ... </p>
              <p class="tarjeta-titulo"> ... </p>
              <p> ... </p>
            </div>
            <div class="tarjeta-pie">
              <button type="button" class="boton-primario boton-chico"> ... </button>
            </div>
          </div>
        '
      />
    </div>

    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-8">
        <div class="tarjeta tarjeta-horizontal">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/kale-3.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
            <p>El texto descriptivo es conciso y significativo. Debe ayudar a la persona usuaria a tomar decisiones. Muestra de 100 a 120 caracteres.</p>
          </div>
          <div class="tarjeta-pie">
            <button type="button" class="boton-primario boton-chico">Botón primario ejemplo</button>
            <button type="button" class="boton-secundario boton-chico">Botón segundario ejemplo</button>
          </div>
        </div>
      </div>
      <div class="columna-8">
        <div class="tarjeta tarjeta-horizontal">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/gambusino.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
            <p class="tarjeta-titulo">Título de la tarjeta de una o más palabras</p>
          </div>
          <div class="tarjeta-pie">
            <button type="button" class="boton-primario boton-chico">Botón de otro ejemplo</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tarjetas de hipervínculo interno -->
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
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
          <a class="tarjeta tarjeta-hipervinculo-interno">
            <img class="tarjeta-imagen" ... />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-titulo"> ... </p>
              <p class="tarjeta-etiqueta"> ... </p>
              <p> ... </p>
            </div>
          </a>
        '
      />
    </div>
    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/asha.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta</p>
            <p class="tarjeta-etiqueta">Etiqueta o texto secundario</p>
          </div>
        </a>
      </div>
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/becka.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Texto largo de ejemplo.</p>
            <p> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit facere tempora, 
              laboriosam odio ducimus nisi adipisci obcaecati consequatur nemo. Iusto, incidunt dolorem. 
              Accusantium velit neque deleniti nisi nam ipsum.
            </p>
          </div>
        </a>
      </div>
      <div class="columna-4">
        <a class="tarjeta tarjeta-hipervinculo-interno" href="#">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/baghira.jpg`" alt="">
          <div class="tarjeta-cuerpo">
            <p class="tarjeta-titulo">Título de la tarjeta</p>
            <p>Párrafo normal, para agregar una descripción pequeña.</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Tarjetas de hipervínculo externo -->
    <div class="ancho-lectura">
      <h2 class="m-t-10">Tarjetas de hipervínculo externo</h2>
      <p>
        Las tarjetas de hipervínculo externo usan la clase <code>.tarjeta-hipervinculo-externo</code> 
        como contenedor principal. Incluye un degradado <code>.tarjeta-degradado</code> sobre la 
        imagen de fondo para mejorar la legibilidad, atenuando visualmente los detalles de la imagen 
        donde se superpone el texto. Al igual que las tarjetas de hipervínculos internos, no deben 
        contener hipervínculos ni botones adicionales dentro del contenedor principal.
      </p>
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="HTML"
        codigo='
          <a class="tarjeta tarjeta-hipervinculo-externo">
            <picture class="tarjeta-imagen">
              <source srcset="..." media="(min-width: 700px)"/>
              <img src="..." alt="" />
            </picture>
            <div class="tarjeta-degradado">
              <div class="tarjeta-cuerpo">
                <p>
                  Nota
                </p>
                <p class="h2 borde-b">
                  Título
                  <span class="pictograma-enlace-externo"></span>
                </p>
                <p class="h5">
                  Subtítulo
                </p>
                <p> ... </p>
              </div>
            </div>
          </a>
        '
      />
    </div>
    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-6">
        <a class="tarjeta tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <picture class="tarjeta-imagen"> 
            <source :srcset="`${cdn}documentacion/calamidad-3.jpg`" media="(min-width: 900px)"/>
            <img :src="`${cdn}documentacion/calamidad-2.jpg`" alt="" />
          </picture>
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>Etiqueta</p>
              <p class="h2 borde-b">Título del sitio externo <span class="pictograma-enlace-externo"></span></p>
              <p class="h5">Texto secundario</p>
            </div>
          </div>
        </a>
      </div>
      <div class="columna-6">
        <a class="tarjeta tarjeta-hipervinculo-externo" href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img class="tarjeta-imagen" :src="`${cdn}documentacion/perro-3.jpg`" alt="" />
          <div class="tarjeta-degradado">
            <div class="tarjeta-cuerpo">
              <p>Etiqueta</p>
              <p class="h1">Título del sitio externo <span class="pictograma-enlace-externo"></span></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>