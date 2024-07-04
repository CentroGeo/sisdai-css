<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
import { ref, computed } from 'vue'

const rango = ref(50)
const posicion = computed(() => `${(rango.value - 100)}%`)
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>
        Control Deslizante de Contenido
        <span class="etiqueta">preliminar</span>
      </h1>
      <p>
        El control deslizante de contenido es un componente que permite comparar dos contenidos. 
        Por ejemplo, el antes y el después de un tema.
      </p>
      <p>
        Se compone de un contenedor general <code>control-deslizante-contenido</code> que dentro
        debe llevar dos tarjetas a las que se le agrega la clase <code>control-deslizante-contenido-tarjeta</code>,
        en medio de ambas tarjetas se encuentra un campo de rango con la clase <code>control-deslizante-contenido-control</code>.
        Deben mantener ese órden para tener la secuencia de tabuladores natural. 
      </p>
      <p>
        Para mejorar la accesibilidad se agrega el componente dentro de un elemento <code>figure</code>
        y se le agrega el <code>figcaption</code> con la descripción de lo que trate la comparativa.
      </p>
      
      <figure>
        <div class="control-deslizante-contenido borde-redondeado-24">
          <div class="control-deslizante-contenido-tarjeta-fija tarjeta">
            <img
              class="tarjeta-imagen"
              src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/duke-1.jpg"
              alt=""
            />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Antes</p>
              <p class="tarjeta-titulo">Duke el perrito mas locochon de la comarca</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto voluptatum consectetur autem? 
              </p>
            </div>
            <div class="tarjeta-pie">
              <a
                class="boton boton-primario boton-chico"
                href="#"
                download
              >
                Descarga
                <span class="pictograma-archivo-descargar" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          
          <input type="range" min="0" max="100" v-model="rango" class="control-deslizante-contenido-control" />

          <div class="control-deslizante-contenido-tarjeta-movil tarjeta">
            <img
              class="tarjeta-imagen"
              src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/crepa-1.jpg"
              alt=""
            />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">Después</p>
              <p class="tarjeta-titulo">Crepa, le perri pa desayunarks</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsam,
                reiciendis voluptate nostrum facere sit aliquam labore ut, excepturi
                nam inventore odit beatae rem soluta alias? Aut praesentium accusamus
                quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Culpa repudiandae quod voluptates unde laudantium recusandae, 
                soluta doloremque autem reiciendis sint incidunt repellendus 
                magni voluptas nostrum blanditiis voluptatibus cumque, 
                ipsa voluptatum!
              </p>
            </div>
            <div class="tarjeta-pie">
              <a
                class="boton boton-primario boton-chico"
                href="#"
                download
              >
                Descarga
                <span class="pictograma-archivo-descargar" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
        <figcaption>
            Aqui va la descripcion de lo que muestran ambas tarjetas.
        </figcaption>
      </figure>
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
          <figure>
            <div class="control-deslizante-contenido borde-redondeado-24">
              <div class="control-deslizante-contenido-tarjeta-fija tarjeta">
                <img
                  class="tarjeta-imagen"
                  src="..."
                  alt=""
                />
                <div class="tarjeta-cuerpo">
                  <p class="tarjeta-etiqueta"> Antes </p>
                  <p class="tarjeta-titulo"> Título /p>
                  <p> Lorem ipsum... </p>
                </div>
                <div class="tarjeta-pie">
                  <a
                    class="boton boton-primario boton-chico"
                    href="#"
                    download
                  >
                    Descarga
                    <span class="pictograma-archivo-descargar" aria-hidden="true" />
                  </a>
                </div>
              </div>
              
              <input 
                type="range" 
                min="0" 
                max="100" 
                v-model="rango" 
                class="control-deslizante-contenido-control"
              />

              <div class="control-deslizante-contenido-tarjeta-movil tarjeta">
                <img
                  class="tarjeta-imagen"
                  src="..."
                  alt=""
                />
                <div class="tarjeta-cuerpo">
                  <p class="tarjeta-etiqueta"> Después </p>
                  <p class="tarjeta-titulo"> Título </p>
                  <p> Lorem ipsum dolor... </p>
                </div>
                <div class="tarjeta-pie">
                  <a
                    class="boton boton-primario boton-chico"
                    href="#"
                    download
                  >
                    Descarga
                    <span class="pictograma-archivo-descargar" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <figcaption> Descripción Comparativa </figcaption>
          </figure>
        '
      />
      <p>
        El elemento de rango se conecta con una variable <code>rango</code>
        que se inicializa con el estado predeterminado que tendrá el componente,
        en éste caso 50, ya que se especificó en el HTML el mínimo de 0 y máximo de 100.
      </p>
      
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='Vue.js'
        codigo="
          import { ref, computed } from 'vue'

          const rango = ref(50)
          const posicion = computed(() => `${(rango.value - 100)}%`)
        "
      />
      <p>
        Ésta variable conectada con el <code>v-model</code> del campo a su vez
        recalcula la variable <code>posicion</code> que utiliza la tarjeta móvil
        <code>control-deslizante-contenido-tarjeta-movil</code> para moverse
        en el componente.
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='CSS'
        codigo='
          .control-deslizante-contenido-tarjeta-movil {
            transform: translateX(v-bind(posicion));
          }
        '
      />
    </div>
  </div>
</template>
<style lang="scss">
.control-deslizante-contenido-tarjeta-movil {
  transform: translateX(v-bind(posicion));
}
</style>