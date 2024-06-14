<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Control deslizante</h1>
      <p>
        Estilos para el componente <code>SisdaiControlDeslizante</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
      </p>
      <p>
        Toma los estilos del <code lang="en">input type="range"</code>
        pero le agrega estilos declarados en el componente
        para cambiar el color de la barra conforme cambia el valor del atributo <code lang="en">value</code>,
        como se muestra en el ejemplo, pero de manera dinámica.
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
      var(--campo-rango-activo),
      var(--campo-rango-activo) 50%,
      var(--campo-rango) 50%
    );
  }
  &::-moz-range-track {
    background: linear-gradient(
      to right,
      var(--campo-rango-activo),
      var(--campo-rango-activo) 50%,
      var(--campo-rango) 50%
    );
  }
  &::-ms-fill-upper {
    background: linear-gradient(
      to right,
      var(--campo-rango-activo),
      var(--campo-rango-activo) 50%,
      var(--campo-rango) 50%
    );
  }
}
</style>
