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
    <div class="ejemplo" :class="clases">
      <pre class="codigo">{{ codigo }}</pre>
    </div>
  </div>
</template>
<style lang="scss">
.ej-estilo-clase {
  .ejemplo {
    background: var(--nota-fondo);
  }
  .codigo {
    margin: 0 -3.5rem;
    font-size: 0.75rem;
  }
}
</style>
