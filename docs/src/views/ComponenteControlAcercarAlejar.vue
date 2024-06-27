<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
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
        Puedes notar en el siguiente ejemplo que se emplea un <code>&lt;input type="range"></code>, el cual 
        debe ser reemplazado por el componente <code>SisdaiControlDeslizante</code> . A este último se le 
        debe asignar el nombre de la clase y el atributo <code>aria-label</code> adecuados para asegurar 
        su funcionalidad correcta. 
      </p>
      <EjemploCodigoVertical
        html='
        <div 
          class="control-acercar-alejar" 
          role="toolbar"
          aria-label="Controles para ajustar el nivel de acercamiento"
        >
          <button class="boton-pictograma boton-sin-contenedor-secundario">
            <span class="pictograma-restar" aria-label="Alejar"></span>
          </button>

          <input 
            type="range" 
            class="control-acercar-alejar-rango" 
            aria-label="Ajustar el nivel de acercamiento"
          />
          
          <button class="boton-pictograma boton-sin-contenedor-secundario">
            <span class="pictograma-agregar" aria-label="Acercar"></span>
          </button>

          <input 
            type="text" 
            maxlength="3"
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
