<script setup>
  defineProps({
    leyenda: {
      type: String,
      required: true
    },
    texto_ayuda: {
      type: String,
      default: ''
    },
    texto_error: {
      type: String,
      default: ''
    },
    es_vertical: {
      type: Boolean,
      default: false
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
  });

  
</script>
<template>
  <div>
    <fieldset 
      class="grupo-formulario" 
      :class="{'grupo-formulario-vertical':es_vertical}"
    >
      <legend>
        {{ leyenda }}
        <span 
          v-if="es_obligatorio"
          class="formulario-obligatoriedad" 
        >
          (Obligatorio)
        </span>
      </legend>
      <slot></slot>
    </fieldset>
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda || es_obligatorio || texto_error"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </div>
</template>
