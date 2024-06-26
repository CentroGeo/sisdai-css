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
    <div class="columna-8 columna-6-esc fondo-color-informacion borde-redondeado-8 texto-tamanio-1 desbordado-x m-y-1">
      <pre class="m-l--3">{{ html }}</pre>
    </div>
    <div class="columna-8 columna-4-esc propiedades p-t-1 texto-tamanio-1">
      <ul class="lista-limpia" v-for="(dispositivo, index) in propiedades" :key="index">
        <li v-for="(prop, index) in dispositivo" :key="index">
          <b>{{ prop.titulo }}</b>
          <span class="texto-color-secundario m-r-1">{{ prop.nombre }}</span>
          {{ prop.valor }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.ej-horizontal {
  .propiedades {
    display: flex;
    ul {
      flex: 1 1 50%;
    }
  }
}
</style>
