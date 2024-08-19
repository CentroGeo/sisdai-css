<script setup>
  defineProps({
    codigo: {
      type: String,
      required: true
    },
  })
</script>
<template>
  <div class="ej-espaciado m-y-3">
    <span class="ejemplo" v-html="codigo"></span>
    <pre class="texto-tamanio-1">{{ codigo }}</pre>
  </div>
</template>
<style lang="scss">
.ej-espaciado {
  .ejemplo {
    background-image: radial-gradient(currentColor 1px, transparent 0);
    background-size: 8px 8px;
    display: inline-block;
    > * {
      background: var(--fondo-informacion);
    }
  }
}
</style>
