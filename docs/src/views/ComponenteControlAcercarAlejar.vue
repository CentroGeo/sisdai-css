<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Control Acercar Alejar</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Control acercar alejar" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiControlAcercarAlejar</code> es utilizado para ajustar el nivel de zoom en mapas.
      </p>
      <p>
        Este componente consta de un contenedor <code>control-acercar-alejar</code> 
        un campo de rango <code>control-acercar-alejar-rango</code>, 
        un par de botones para incrementar o decrementar el valor del rango 
        y un campo de texto <code>control-acercar-alejar-porcentaje</code> para mostrar y editar la cantidad de zoom.
      </p>
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <div 
          class="control-acercar-alejar" 
          role="toolbar"
          aria-label="Controles para ajustar el nivel de acercamiento"
        >
          <button aria-label="Alejar un paso" class="boton-pictograma boton-sin-contenedor-secundario" type="button">
            <span class="pictograma-restar" aria-hidden="true" />
          </button>

          <input 
            type="range" 
            class="control-acercar-alejar-rango" 
            aria-label="Ajustar el nivel de acercamiento"
          />
          
          <button aria-label="Acercar un paso" class="boton-pictograma boton-sin-contenedor-secundario" type="buttpm">
            <span class="pictograma-agregar" aria-hidden="true"/>
          </button>

          <input 
            type="text" 
            maxlength="4"
            inputmode="numeric" 
            min="0"
            max="100"
            pattern="\d*"
            class="control-acercar-alejar-porcentaje" 
            aria-label="Porcentaje de acercamiento"
          />
        </div>
        '
      />

    </div>    
  </div>
</template>
