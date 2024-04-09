<script setup>
  defineProps({
    html: {
      type: String
    },
    celular: {
      type: Array
    },
    escritorio: {
      type: Array
    }
  })
</script>
<template>
  <div class="flex m-y-3">
    <div class="columna-8 columna-6-esc" v-html="html"></div>
    <div class="columna-8 columna-6-esc">
      <pre class="codigo">{{ html }}</pre>
    </div>
    <div class="columna-4 columna-2-esc">
      <span v-if="celular && escritorio">Celular</span>
      <ul class="atributos">
        <li v-for="(atributo, index) in celular" :key="index">
          <span class="atributo-nombre">
            {{ atributo.nombre }}
          </span>
          {{ atributo.valor }}
        </li>
      </ul>
    </div>
    <div class="columna-4 columna-2-esc">
      <span v-if="escritorio">Escritorio</span>
      <ul class="atributos">
        <li v-for="(atributo, index) in escritorio" :key="index">
          <span class="atributo-nombre">
            {{ atributo.nombre }}
          </span>
          {{ atributo.valor }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.codigo {
  color: var(--tipografia-color-2);
  font-size: 0.875rem;
  font-family: monospace;
  padding: 0 1rem 1rem 0;
  @media screen and (min-width: 768px) {
    margin: -1rem 0 0 -1rem;
  }
}
.atributos{
  list-style: none;
  padding: 0;
  font-size: 0.875rem;
  .atributo-nombre {
    opacity: .75;
  }
  li {
    margin: 0;
  }
}
</style>
