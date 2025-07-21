<script setup>
  defineProps({
    clases: {
      type: String
    },
    codigo: {
      type: String,
      required: true
    },
  })
</script>
<template>
  <div class="ej-estilo-clase">
    <div class="fondo-color-informacion" :class="clases">
      <pre class="texto-tamanio-1">{{ codigo }}</pre>
    </div>
  </div>
</template>

<style lang="scss">
.ej-estilo-clase {
  .fondo-color-informacion pre {
    max-width: 100%;
    overflow: auto;
  }
}
</style>
