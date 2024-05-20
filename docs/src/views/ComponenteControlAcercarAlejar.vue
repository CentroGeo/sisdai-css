<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Control Acercar Alejar</h1>
      <p>
        Estilos para el componente <code>SisdaiControlAcercarAlejar</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Este componente se utiliza para ajustar el nivel de acercamiento en un mapa.
      </p>
      <p>
        <b>Nota:</b> para mostrar el ejemplo se utiliza un campo <code lang="en">input type="range"</code>
        que debe ser reemplazado por el componente <code>SisdaiControlDeslizante</code>,
        al que se le debe agregar el nombre de la clase y el atributo <code>aria-label</code> 
        del campo, como se muestra a continuación.
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
