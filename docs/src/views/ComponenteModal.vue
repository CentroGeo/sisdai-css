<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'

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
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Modal" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiModal</code> facilita la creación de ventanas modales. 
        Para construir un modal se utiliza la etiqueta <code>dialog</code> con la clase <code>.modal</code>
        que contiene un elemento <code>.modal-contenedor</code> en donde se encapsulan
        el <code>.modal-cabecera</code>, el <code>.modal-cuerpo</code>, el <code>.modal-pie</code> 
        y el boton de cierre <code>.modal-cerrar</code>.
      </p>

      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
        <dialog
          class="modal"
          ref="modalPredeterminado"
          aria-labelledby="IDUNICOTITULOMODAL"
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
              aria-label="Cerrar"
              class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" 
              type="button" 
            >
              <span class="pictograma-cerrar" aria-hidden="true"></span>
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
      
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
          <dialog class="modal">
            ...
          </dialog>
        '
      />
      
      
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
      <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
          <dialog class="modal modal-grande">
            ...
          </dialog>
        '
      />
    </div>

    <dialog
      class="modal"
      ref="modalPredeterminado"
      aria-labelledby="idunicomodaluno"
    >
      <div class="modal-contenedor">
        <div class="modal-cabecera">
          <h1 id="idunicomodaluno" class="modal-titulo">
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
        <button aria-label="Cerrar" class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" type="button" @click="cerrarModalPredeterminado">
          <span class="pictograma-cerrar" aria-hidden="true"></span>
        </button>
      </div>
    </dialog>
    <dialog
      class="modal modal-grande"
      ref="modalGrande"
      aria-labelledby="idunicomodaldos"
    >
      <div class="modal-contenedor">
        <div class="modal-cabecera">
          <h1 id="idunicomodaldos" class="modal-titulo">
            Modal grande
          </h1>
        </div>
        <div class="modal-cuerpo">
          <p>
            Se espera que tenga mucho contenido.
          </p>
          <figure>
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/minou.jpg" 
              width="100%"
              alt=""
            />
            <figcaption>
              Sr. Gato (Minou)
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
        <button aria-label="Cerrar" class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" type="button" @click="cerrarModalGrande">
          <span class="pictograma-cerrar" aria-hidden="true"></span>
        </button>
      </div>
    </dialog>
  </div>

</template>
