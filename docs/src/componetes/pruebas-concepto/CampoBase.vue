<script setup>
  defineProps({
    etiqueta: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true,
      default: 'text'
    },
    ejemplo: {
      type: String,
      required: false
    },
    texto_ayuda: {
      type: String,
      requiered: false
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
    es_obligatorio: {
      type: Boolean,
      required: true,
      default: false
    },
    err_mensaje_obligatorio: { // TODO: borrame
      type: String,
      required: false,
      default: 'Este campo no puede quedar vacío.'
    },
  })
  // TODO: identificador crear automáticamente
  // TODO: mensaje error fijo
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
    <input 
      :name="identificador" 
      :id="identificador"
      :placeholder="ejemplo"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind:type="tipo"
    />
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda">
      <em v-if="err_mensaje_obligatorio">{{ err_mensaje_obligatorio }}</em>      
      {{ texto_ayuda }}
    </p>
  </div>
</template>
