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
    <pre class="codigo">{{ codigo }}</pre>
  </div>
</template>
<style lang="scss">
.ej-espaciado {
  .ejemplo {
    background-color: var(--fondo-acento);
    background-image: radial-gradient(var(--borde-color-3) 1px, transparent 0);
    background-size: 8px 8px;
    display: inline-block;
    > * {
      background: var(--fondo-acento);
    }
  }
  .codigo {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
  }
}
</style>
