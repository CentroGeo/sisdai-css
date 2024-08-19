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
      <pre class="texto-tamanio-1 m-l--5">{{ codigo }}</pre>
    </div>
  </div>
</template>
