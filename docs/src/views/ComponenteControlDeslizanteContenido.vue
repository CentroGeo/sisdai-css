<script setup>
// import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor p-y-maximo">
    <div class="ancho-lectura">
      <h1>Control Deslizante de Contenido</h1>
      
      <figure>
        <div class="control-deslizante-contenido">
          <div class="control-deslizante-contenido-tarjeta tarjeta borde-l-redondeado-0">
            <img
              class="tarjeta-imagen"
              src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/duke-1.jpg"
              alt=""
            />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">deslizable</p>
              <p class="tarjeta-titulo">duke</p>
              <p>hola</p>
            </div>
            <div class="tarjeta-pie flex-contenido-final">
              <button
                type="button"
                class="boton-primario boton-chico"
              >
                descarga
              </button>
            </div>
          </div>
          <button class="control-deslizante-contenido-boton" type="button">
            <span class="control-deslizante-contenido-boton-pictogramas">
              <span class="pictograma-angulo-izquierdo borde-r-redondeado-20"></span>
              <span class="pictograma-angulo-derecho borde-l-redondeado-20"></span>
            </span>
            <span class="a11y-solo-lectura">
              Pa arrastrar imagenes
            </span>
          </button>
          <div class="control-deslizante-contenido-tarjeta tarjeta borde-r-redondeado-0 fondo-color-acento">
            <img
              class="tarjeta-imagen"
              src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/crepa-1.jpg"
              alt=""
            />
            <div class="tarjeta-cuerpo">
              <p class="tarjeta-etiqueta">fijo</p>
              <p class="tarjeta-titulo">crepa</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsam,
                reiciendis voluptate nostrum facere sit aliquam labore ut, excepturi
                nam inventore odit beatae rem soluta alias? Aut praesentium accusamus
                quidem!
              </p>
            </div>
            <div class="tarjeta-pie flex-contenido-final">
              <button
                type="button"
                class="boton-primario boton-chico"
              >
                descarga
              </button>
            </div>
          </div>
        </div>
        <figcaption>
            Aqui va la descripcion de lo que muestran ambas tarjetas.
        </figcaption>
      </figure>

    </div>
  </div>
</template>
