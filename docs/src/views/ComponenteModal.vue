<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'

const modalPredeterminado = ref()
const modalGrande = ref()

function abrirModalPredeterminado() {
  document.querySelector('body').classList.add('overflow-hidden')
  modalPredeterminado.value.showModal()
}
function cerrarModalPredeterminado() {
  modalPredeterminado.value.close()
  document.querySelector('body').classList.remove('overflow-hidden')
}

function abrirModalGrande() {
  document.querySelector('body').classList.add('overflow-hidden')
  modalGrande.value.showModal()
}
function cerrarModalGrande() {
  modalGrande.value.close()
  document.querySelector('body').classList.remove('overflow-hidden')
}

const reestablecerModalCerrado = ev => {
  if (ev.key === 'Escape') {
    document.querySelector('body').classList.remove('overflow-hidden')
    modalPredeterminado.value.close()
  }
}

onMounted(() => {
window.addEventListener('keydown', reestablecerModalCerrado)
})

onUnmounted(() => {
window.removeEventListener('keydown', reestablecerModalCerrado)
})
</script>

<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Modal</h1>
      <p>
        Estilos para el componente <code>SisdaiModal</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
      </p>
      <p>
        Para construir un modal se utiliza la etiqueta <code>dialog</code> con la clase <code>.modal</code>
        que contiene un elemento <code>.modal-contenedor</code> en donde se encapsulan
        el <code>.modal-cabecera</code>, el <code>.modal-cuerpo</code>, el <code>.modal-pie</code> 
        y el boton de cierre <code>.modal-cerrar</code>.
      </p>
      <EjemploCodigoVertical
        :tiene_ejemplo="false"
        html='
        <dialog
          class="modal"
          ref="modalPredeterminado"
          role="dialog"
          aria-labelledby="IDUNICOTITULOMODAL"
          aria-modal="true"
        >
          <div class="modal-contenedor">
            
            <div class="modal-cabecera">
              <h1 id="IDUNICOTITULOMODAL" class="modal-titulo">
                Modal predeterminado
              </h1>
            </div>
            
            <div class="modal-cuerpo">
              <p>
                Cualquier contenido
              </p>
            </div>

            <div class="modal-pie">
              <button type="button" class="boton-primario">
                Acción primaria
              </button>
            </div>
            
            <button 
              class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" 
              type="button" 
            >
              <span class="pictograma-cerrar" aria-hidden="true"></span>
              <span class="a11y-solo-lectura">Cerrar Modal.</span>
            </button>
            
          </div>
        </dialog>
        '
      />

      <h2 class="m-t-10">Tamaños de modal</h2>

      <p>
        Existen dos tamaños de modal, uno chico que se carga de forma predeterminada en la clase <code>.modal</code>
        y otro para contenido más extenso, para el que se agrega la clase <code>.modal-grande</code>.
      </p>
      <p>
        <button 
          type="button" 
          class="boton-primario"
          @click="abrirModalPredeterminado"
        >
          Abrir modal
        </button>
        
      </p>
      <pre class="nota nota-contenedor">
        <span aria-hidden="true">&lt;</span>dialog class="modal"<span aria-hidden="true">&gt;</span>
          ...
        <span aria-hidden="true">&lt;</span>/dialog<span aria-hidden="true">&gt;</span>
      </pre>
      
      
      <p>
        El <code>.modal-grande</code> tiene la misma estructura y secciones, únicamente se le agrega la clase 
        al <code>dialog</code> después de la <code>.modal</code>
      </p>
      <p>
        <button 
          type="button" 
          @click="abrirModalGrande"
          class="boton-primario"
        >
          Abrir modal grande
        </button>
      </p>
      <pre class="nota nota-contenedor">
        <span aria-hidden="true">&lt;</span>dialog class="modal modal-grande"<span aria-hidden="true">&gt;</span>
          ...
        <span aria-hidden="true">&lt;</span>/dialog<span aria-hidden="true">&gt;</span>
      </pre>
      
    </div>

    <dialog
      class="modal"
      ref="modalPredeterminado"
      role="dialog"
      aria-labelledby="titulopred"
      aria-modal="true"
    >
      <div class="modal-contenedor">
        <div class="modal-cabecera">
          <h1 id="titulopred" class="modal-titulo">
            Modal predeterminado
          </h1>
        </div>
        <div class="modal-cuerpo">
          <p>
            Se espera poco contenido
          </p>
        </div>
        <div class="modal-pie">
          <button type="button" class="boton-primario">Acción primaria</button>
        </div>
        <button class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" type="button" @click="cerrarModalPredeterminado">
          <span class="pictograma-cerrar" aria-hidden="true"></span>
          <span class="a11y-solo-lectura">Cerrar Modal.</span>
        </button>
      </div>
    </dialog>
    <dialog
      class="modal modal-grande"
      ref="modalGrande"
      role="dialog"
      aria-label="modal grande"
      aria-modal="true"
    >
      <div class="modal-contenedor">
        <div class="modal-cabecera">
          <h1 class="modal-titulo">
            Modal grande
          </h1>
        </div>
        <div class="modal-cuerpo">
          <p>
            Se espera que tenga mucho contenido.
          </p>
          <figure>
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/esparragus-1.jpg" 
              width="100%"
              alt=""
            />
            <figcaption>
              Esparragus el perrito el mejor y más bonito mister chaparrito.
            </figcaption>
          </figure>
          <p>
            Lorem, ipsum dolor ...
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex minus ad alias magni dolorem aliquam architecto eaque optio iste. Maiores, facilis laborum. Necessitatibus laudantium, optio inventore debitis illum recusandae quas.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex minus ad alias magni dolorem aliquam architecto eaque optio iste. Maiores, facilis laborum. Necessitatibus laudantium, optio inventore debitis illum recusandae quas.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex minus ad alias magni dolorem aliquam architecto eaque optio iste. Maiores, facilis laborum. Necessitatibus laudantium, optio inventore debitis illum recusandae quas.
          </p>
        </div>
        <div class="modal-pie">
          <button type="button" class="boton-primario">Aceptar</button>
          <button type="button" class="boton-secundario">Cancelar</button>
        </div>
        <button class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" type="button" @click="cerrarModalGrande">
          <span class="pictograma-cerrar" aria-hidden="true"></span>
          <span class="a11y-solo-lectura">Cerrar Modal.</span>
        </button>
      </div>
    </dialog>
  </div>

</template>
