<script setup>  
  const identificador = idAleatorio()

  function idAleatorio() {
    return 'selector-' + Math.random().toString(36).substring(2)
  }

  defineExpose({
    identificador,
  })
  
  defineProps({
    etiqueta: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: false,
      default: 'Selecciona una opción'
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
      type: String,
      default: ""
    },
    es_etiqueta_visible: {
      type: Boolean,
      required: true,
      default: true
    },
    es_titulo_visible: {
      type: Boolean,
      required: true,
      default: true
    },
    es_obligatorio: {
      type: Boolean,
      required: true,
      default: false
    },
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
    <select 
      :name="identificador" 
      :id="identificador"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    > 
      <option disabled value="" v-if="es_titulo_visible">{{ titulo }}</option>
      <slot></slot>
    </select>
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda || es_obligatorio || texto_error"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </div>
</template>
