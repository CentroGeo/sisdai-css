<script setup>
  defineProps({
    propiedades: {
      type: Array,
      required: true
    },
  })
</script>
<template>
  <div class="ej-propiedades">
    <ul v-for="(dispositivo, index) in propiedades" :key="index">
      <li v-for="(prop, index) in dispositivo" :key="index">
        <b>{{ prop.titulo }}</b>
        <span>{{ prop.nombre }}</span>
        {{ prop.valor }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .ej-propiedades {
    display: flex;
    gap: 48px;
    font-size: 0.75rem;
    line-height: 1.5em;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin: 0;
    }
    span {
      opacity: 0.75;
      margin-right: 8px;
    }
  }
</style>
