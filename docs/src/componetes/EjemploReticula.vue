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
    <div class="codigo" v-if="mostrarCodigo">
      <code>HTML</code>
      <pre>{{ codigo }}</pre>
    </div>
  </div>
</template>
<style lang="scss">
.ej-reticula {
  .ejemplo {
    background-image: radial-gradient(var(--borde-color-3) 1px, transparent 0);
    background-size: 8px 8px;
    [class^='columna'],
    [class*=" columna"] {
      background: var(--nota-fondo);
      min-height: 40px;
      line-height: 40px;
      text-align: center;
    }
    p {
      background: var(--nota-fondo);
    }
  }
  .codigo {
    background: var(--nota-fondo);
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
  .ejemplo + .codigo {
    margin-top: 8px;
  }
}
</style>
