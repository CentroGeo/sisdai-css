<script setup>  
  import { computed } from 'vue'

  const identificador = idAleatorio()

  function idAleatorio() {
    return 'area-' + Math.random().toString(36).substring(2)
  }

  defineExpose({
    identificador,
  })
  
  const props = defineProps({
    etiqueta: {
      type: String,
      required: true
    },
    ejemplo: {
      type: String,
    },
    texto_ayuda: {
      type: String,
      default: '',
    },
    texto_error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ""
    },
    es_etiqueta_visible: {
      type: Boolean,
      default: true
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
  })
  
  const emit = defineEmits(['update:modelValue'])

  const modeloAreaTexto = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>
<template>
  <div>
    <label :for="identificador" :class="(es_etiqueta_visible)?'':'a11y-solo-lectura'">
      {{ etiqueta }}
      <span 
        v-if="es_obligatorio"
        class="formulario-obligatoriedad" 
      >
        (Obligatorio)
      </span>
    </label>
    <textarea 
      :name="identificador" 
      :id="identificador"
      :placeholder="ejemplo"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      v-model="modeloAreaTexto"
      v-bind="$attrs"
    />
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda || es_obligatorio || texto_error"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </div>
</template>
