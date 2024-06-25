<script setup>
  defineProps({
    texto: {
      type: String,
      required: true
    },
    variable: {
      type: String,
      required: true
    },
  })
</script>
<template>
  <div class="p-3 borde borde-color-secundario texto-tamanio-1" :style="{'background-color': variable}">
    <code :style="{'color': texto}">{{ variable }}</code>
  </div>
</template>
