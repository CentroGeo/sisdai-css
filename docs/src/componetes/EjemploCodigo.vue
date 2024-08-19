<script setup>
  defineProps({
    codigo: {
      type: String,
      required: true
    },
    margen_pre: {
      type: String,
      default: 'm-l--7'
    },
    tipo: {
      type: String,
      required: true
    },
    tiene_ejemplo: {
      type: Boolean,
      default: true
    }
  })
</script>
<template>
  <div>
    <div v-if="tiene_ejemplo" v-html="codigo"></div>
    <div class="fondo-color-informacion borde-redondeado-8 texto-tamanio-1 desbordado-x m-t-1 p-1">
      <code class="texto-color-informacion">{{ tipo }}</code>
      <pre :class="margen_pre">{{ codigo }}</pre>
    </div>
  </div>
</template>
