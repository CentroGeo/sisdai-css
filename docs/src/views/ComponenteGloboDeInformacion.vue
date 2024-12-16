<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>

<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Globo de información</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Globo de información" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>
      <p>
        Comúnmente conocido como “Tooltips”, el globo de información puede aplicarse a cualquier elemento HTML 
        o componente de Vue. Se implementa agregando la directiva <code>v-globo-informacion</code> 
        o <code>v-globo-informacion-extendido</code>, proporcionando información adicional a la persona usuaria. 
      </p>

      <p>
        El globo de información es un elemento flexible que se adapta al ancho y alto del contenido,
        que puede contener básicamente cualquier cosa. Utilizado por medio de la directiva <code>v-globo-informacion</code> de la biblioteca de componentes, 
        el único elemento que no se podría utilizar sería un elemento interactivo, debido a que el tooltip se cierra
        en el momento en el que el elemento que lanza el evento de mostrar el globo de información pierda el foco.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion" role="tooltip">
            <div class="globo-informacion-cuerpo">
              Soy un globo de información
            </div>
          </div>
          '
        />
      </div>
    </div>
    <div class="ancho-lectura m-y-5">
      <p>
        Sin embargo, las clases del globo de información, también son utilizadas en las bibliotecas de gráficas y mapas, en las que
        se puede introducir la funcionalidad de dejar visible el globo, dependiendo de los requerimientos de la visualización.
        Lo que hece necesaria la existencia de un el botón <code>globo-informacion-cerrar</code> mediante el cuál pueda ocultarse el globo.
      </p>
    </div>
    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion" role="tooltip">
            <div class="globo-informacion-cuerpo">
              <p>
                <span class="globo-informacion-punto-color"></span>
                <b>Variable</b> | Valor
              </p>
              <p>
                <span class="globo-informacion-punto-color"></span>
                <b>Variable</b> | Valor
              </p>
              <p>
                <span class="globo-informacion-punto-color"></span>
                <b>Variable</b> | Valor
              </p>
            </div>
            <button aria-label="Cerrar" class="globo-informacion-cerrar" type="button">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
            </button>
          </div>
          '
        />
      </div>
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion" role="tooltip">
            <div class="globo-informacion-cuerpo">
              <p class="h3">
                Titulos
              </p>
              <p>
                texto <b>bold</b>
                texto <strong>strong</strong>
                texto <small>small</small> 
                texto <i>italica</i> 
                texto <abbr title="abbr title">abreviación</abbr>
                texto <ins>insertado</ins> 
                texto <del>eliminado</del> 
                texto <dfn>definición</dfn>
                texto <sub>sub</sub> 
                texto <sup>sup</sup> 
                texto <em>énfasis</em> 
                texto <cite>cita</cite>
                texto <q cite=""> q cita </q>
                texto <mark>resaltado</mark>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officia. Quasi natus alias id itaque quod non distinctio quia nam iste quam doloremque harum eum esse sit asperiores, possimus cum.</p>
            </div>
            <button aria-label="Cerrar" class="globo-informacion-cerrar" type="button">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
            </button>
          </div>
          '
        />
      </div>
      <div class="columna-8">
        <div class="globo-informacion" role="tooltip">
            <div class="globo-informacion-cuerpo">
              <div class="flex">
                <div class="columna-8">
                  <img 
                    :src="`${cdn}documentacion/baghira.jpg`" 
                    alt=""
                  />
                </div>
                <div class="columna-8">
                  <p class="h2">Título</p>
                  <p>
                    Puedo tener casi cualquier contenido, 
                    deveritas deveritas.
                  </p>
                  <p>
                    texto <b>bold</b>
                    texto <strong>strong</strong>
                    texto <small>small</small> 
                    texto <i>italica</i> 
                    texto <abbr title="abbr title">abreviación</abbr>
                    texto <ins>insertado</ins> 
                    texto <del>eliminado</del> 
                    texto <dfn>definición</dfn>
                    texto <sub>sub</sub> 
                    texto <sup>sup</sup> 
                    texto <em>énfasis</em> 
                    texto <cite>cita</cite>
                    texto <q cite=""> q cita </q>
                    texto <mark>resaltado</mark>
                  </p>
                  <ul>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                  </ul>
                  <p class="nota">
                    <b>Nota: </b>
                    No utilizar elementos que tengan fondo predeterminado pero no tambien
                    también de color de texto. No se leen bien
                    en modo claro porque el texto del globo siempre se mantiene claro.
                  </p>
                </div>
              </div>
            </div>
            <button aria-label="Cerrar" class="globo-informacion-cerrar" type="button">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
            </button>
          </div>
        <EjemploCodigo
          :tiene_ejemplo='false'
          tipo='HTML'
          codigo='
          <div class="globo-informacion" role="tooltip">
            <div class="globo-informacion-cuerpo">
              <div class="flex">
                <div class="columna-8">
                  <img 
                    src="..." 
                    alt=""
                  />
                </div>
                <div class="columna-8">
                  <p class="h2">Título</p>
                  <p>
                    Puedo tener casi cualquier contenido, 
                    deveritas deveritas.
                  </p>
                  <p>
                    texto <b>bold</b>
                    texto <strong>strong</strong>
                    texto <small>small</small> 
                    texto <i>italica</i> 
                    texto <abbr title="abbr title">abreviación</abbr>
                    texto <ins>insertado</ins> 
                    texto <del>eliminado</del> 
                    texto <dfn>definición</dfn>
                    texto <sub>sub</sub> 
                    texto <sup>sup</sup> 
                    texto <em>énfasis</em> 
                    texto <cite>cita</cite>
                    texto <q cite=""> q cita </q>
                    texto <mark>resaltado</mark>
                  </p>
                  <ul>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                    <li>elemento de lista</li>
                  </ul>
                  <p class="nota">
                    <b>Nota: </b>
                    No utilizar elementos que tengan fondo predeterminado pero no tambien
                    también de color de texto. No se leen bien
                    en modo claro porque el texto del globo siempre se mantiene claro.
                  </p>
                </div>
              </div>
            </div>
            <button aria-label="Cerrar" class="globo-informacion-cerrar" type="button">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
            </button>
          </div>
          '
        />
      </div>

    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Globo de información extendido</h2>
      <p>
        La clase de <code>globo-informacion-extendido</code> es una variación del globo de información
        que utiliza los estilos tipográficos regulares definidos para cada elemento del sisdai.
        Además la funcionalidad en la directiva acepta elementos interactivos cuando se utiliza <code>v-globo-informacion-extendido</code>,
        debido a que mantiene abierto el tooltip aunque el elemento que lanzo el evento haya sido desenfocado.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="globo-informacion globo-informacion-extendido" role="tooltip">
            <div class="globo-informacion-cuerpo">
              <p class="h1">
                Título del globo de información
              </p>
              <p>
                Texto descriptivo con un breve detalle (aja)
                de la muestra o elemento en el que se esta enfocando
                <a href="#"> 
                  con un hipervínculo
                </a>.
              </p>
              <button type="boton" class="boton boton-primario boton-chico">
                También con botón
              </button>
            </div>
            <button aria-label="Cerrar" class="globo-informacion-cerrar" type="button">
              <span class="pictograma-cerrar" aria-hidden="true"></span>
            </button>
          </div>
          '
        />
      </div>
    </div>

  </div>
</template>

