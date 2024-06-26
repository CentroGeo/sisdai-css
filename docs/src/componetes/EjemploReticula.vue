<script setup>
  defineProps({
    codigo: {
      type: String,
      required: true
    },
    mostrarEjemplo: {
      type: Boolean,
      default: true,
    },
    mostrarCodigo: {
      type: Boolean,
      default: true,
    }
  })
</script>
<template>
  <div class="ej-reticula m-y-3">
    <div class="ejemplo" v-html="codigo" v-if="mostrarEjemplo"></div>
    <div class="fondo-color-informacion borde-redondeado-8 texto-tamanio-1 desbordado-x m-t-1 p-1" v-if="mostrarCodigo">
      <code class="texto-color-informacion">HTML</code>
      <pre class="m-l--3">{{ codigo }}</pre>
    </div>
  </div>
</template>
<style lang="scss">
.ej-reticula {
  .ejemplo {
    background-image: radial-gradient(currentColor 1px, transparent 0);
    background-size: 8px 8px;
    [class^='columna'],
    [class*=" columna"] {
      background: var(--fondo-informacion);
      min-height: 40px;
      line-height: 40px;
      text-align: center;
    }
    p {
      background: var(--fondo-informacion);
    }
  }
}
</style>
