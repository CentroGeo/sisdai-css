<script setup>
  defineProps({
    html: {
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
  <div class="ej-vertical">
    <div v-if="tiene_ejemplo" v-html="html"></div>
    <div class="codigo">
      <code>HTML</code>
      <pre>{{ html }}</pre>
    </div>
  </div>
</template>
<style lang="scss">
.ej-vertical {
  .codigo {
    background: var(--fondo-acento);
    border-radius: 0 0 8px 8px;
    font-size: 0.75rem;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    code {
      display: block;
      padding: 4px;
    }
    pre {
      margin: -1rem 0 0 -2rem;
    }
  }
}
</style>
