<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>

<template>
  <div class="ej-backdrop">
    <dialog
      open
      class="modal"
      ref="trapRef"
      role="dialog"
      aria-labelledby="titulo_modal"
      aria-modal="true"
    >
      <div class="modal-contenedor">
        <div class="modal-cuerpo">
          <h1 id="titulo_modal" class="modal-titulo">
            Componente Modal.<br />
            Declarado en la biblioteca 
            <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
          </h1>
          <p>
            La estructura y clases que se requieren utilizar para construir el modal se muestran en el código de ejemplo.
            Adicionalmente existen las clases <code>.modal-chico</code>, <code>.modal-grande</code> y <code>.modal-pantalla-completa</code>
            para modificar el tamaño de la caja del modal, las cuales deben colocarse en la etiqueda de <code>dialog</code>
            al lado de la clase <code>modal</code>.
          </p>
          <EjemploCodigoVertical
            :tiene_ejemplo="false"
            html='
            <dialog class="modal">
              <div class="modal-contenedor">
                <div class="modal-cuerpo">
                  <h1 class="modal-titulo"> Componente Modal </h1>
                  <p> ... </p>
                  <p class="modal-pie">
                    <button type="button" class="boton-secundario">Secundario</button>
                    <button> Acción primaria </button>
                  </p>
                </div>
                <button class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar">
                  <span class="pictograma-cerrar" aria-hidden="true"></span>
                  <span class="a11y-solo-lectura">Cerrar Modal.</span>
                </button>
              </div>
            </div>
            '
          />
          <p class="modal-pie">
            <button type="button" class="boton-secundario">Secundario</button>
            <button type="button">Acción primaria</button>
          </p>
        </div>
        <button class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar">
          <span class="pictograma-cerrar" aria-hidden="true"></span>
          <span class="a11y-solo-lectura">Cerrar Modal.</span>
        </button>
      </div>
    </dialog>

  </div>
</template>

<style lang="scss" scoped>
// este estilo es solo de ejemplo
// el modal tiene su backdrop dec
  .ej-backdrop {
    background-color: var(--dialogo-fondo);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
</style>