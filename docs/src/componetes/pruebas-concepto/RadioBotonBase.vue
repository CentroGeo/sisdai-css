<script setup>  
  import { computed } from 'vue'

  const identificador = idAleatorio()

  function idAleatorio() {
    return 'radio-' + Math.random().toString(36).substring(2)
  }

  defineExpose({
    identificador,
  })
  
  const props = defineProps({
    etiqueta: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
  });

  const emit = defineEmits(['update:modelValue'])

  const modeloRadio = computed({
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
    <input 
      :id="identificador"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      v-model="modeloRadio"
      type="radio"
      v-bind="$attrs"
    />
    <label :for="identificador">
      {{ etiqueta }}
    </label>
  </span>
</template>
