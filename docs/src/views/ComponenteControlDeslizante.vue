<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Control deslizante</h1>
      <p>
        La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Control deslizante" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiControlDeslizante</code> toma la base de 
        un <code lang="en">input type="range"</code> pero se enriquece con 
        estilos adicionales para modificar el color de la barra de progreso 
        conforme al valor del atributo <code>value</code>, mostrando los cambios de manera 
        dinámica. Este componente es clave para interfaces interactivas que 
        requieren ajustes graduales de valores.
      </p>
      
      <EjemploCodigoVertical
        html='
        <label for="rango">
            Rango
          </label>
          <input 
            id="rango" 
            type="range"
            class="control-deslizante"
            min="0"
            max="100"
            value="50"
          />
        '
      />

    </div>    
  </div>
</template>

<style lang="scss">

// estilos únicamente de ejemplo
// este fondo se tiene que agregar de manera dinamica con javascipt

.control-deslizante {
  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--input-controles-color),
      var(--input-controles-color) 50%,
      var(--input-deshabilitado-fondo) 50%
    );
  }
  &::-moz-range-track {
    background: linear-gradient(
      to right,
      var(--input-controles-color),
      var(--input-controles-color) 50%,
      var(--input-deshabilitado-fondo) 50%
    );
  }
  &::-ms-fill-upper {
    background: linear-gradient(
      to right,
      var(--input-controles-color),
      var(--input-controles-color) 50%,
      var(--input-deshabilitado-fondo) 50%
    );
  }
}
</style>
