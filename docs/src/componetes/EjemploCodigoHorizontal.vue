<script setup>
  defineProps({
    html: {
      type: String,
      required: true
    },
    propiedades: {
      type: Array
    },
  })
</script>
<template>
  <div class="ej-horizontal flex borde-b borde-color-secundario">
    <div class="columna-8 columna-6-esc" v-html="html"></div>
    <div class="columna-8 columna-6-esc">
      <pre class="codigo">{{ html }}</pre>
    </div>
    <div class="columna-8 columna-4-esc propiedades p-t-1">
      <ul v-for="(dispositivo, index) in propiedades" :key="index">
        <li v-for="(prop, index) in dispositivo" :key="index">
          <b>{{ prop.titulo }}</b>
          <span>{{ prop.nombre }}</span>
          {{ prop.valor }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.ej-horizontal {
  .codigo {
    font-size: 0.75rem;
    padding: 0;
    margin: -0.75rem;
  }
  .propiedades {
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5em;
    ul {
      flex: 1 1 50%;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin: 0;
    }
    span {
      color: var(--texto-secundario);
      margin-right: 8px;
    }
  }
}
</style>
