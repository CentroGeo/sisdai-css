<script setup>  
  import { computed } from 'vue'

  const identificador = idAleatorio()

  function idAleatorio() {
    return 'casilla-' + Math.random().toString(36).substring(2)
  }

  defineExpose({
    identificador,
  })
  
  const props = defineProps({
    titulo: {
      type: String,
    },
    etiqueta: {
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
    modelValue: {
      type: [Boolean, Array],
      required: true,
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
    es_ayuda_visible: {
      type: Boolean,
      default: false
    },
  });

  const emit = defineEmits(['update:modelValue'])

  const modeloCasilla = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
  
</script>
<template>
  <span>
    <p v-if="titulo" class="titulo-leyenda">
      {{ titulo }}
      <span 
        v-if="es_obligatorio"
        class="formulario-obligatoriedad" 
      >
        (Obligatorio)
      </span>
    </p>
    <input 
      :id="identificador"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      v-model="modeloCasilla"
      type="checkbox"
      v-bind="$attrs"
    />
    <label :for="identificador">
      {{ etiqueta }}
      <span 
        v-if="es_obligatorio && !titulo"
        class="formulario-obligatoriedad" 
      >
        (Obligatorio)
      </span>
    </label>
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="es_ayuda_visible && (texto_ayuda || es_obligatorio || texto_error)"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </span>
</template>
