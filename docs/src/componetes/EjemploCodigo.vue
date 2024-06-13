<script setup>
  defineProps({
    html: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <div class="ej-codigo">
    <code>{{ tipo }}</code>
    <pre>{{ html }}</pre>
  </div>
</template>
<style lang="scss">
.ej-codigo {
  background: var(--fondo-acento);
  border-radius: 8px;
  font-size: 0.75rem;
  margin: 0;
  code {
    display: block;
    padding: 4px;
  }
  pre {
    margin: -1rem;
  }
}
</style>
