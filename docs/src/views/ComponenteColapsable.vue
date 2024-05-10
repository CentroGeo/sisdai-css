<script setup>
import { ref } from "vue";
const colapsable_activo1 = ref(false);
</script>
<template>
  <div>

    <h1>Colapsable</h1>
    <div class="contenedor-lectura ">
      <p>
        Los estilos de estos elementos colapsables como elementos independientes aún
        no está definido dentro del sistema de diseño. Consiste en un elemento
        .contenedor-colapsable que contiene un botón visible y al agregarse la clase
        .activo, entonces muestra una lista de enlaces.
      </p>
      <p>En el siguiente ejemplo, la clase .activo se agrega al hacer click</p>
    </div>

    <div class="contenedor-colapsable" :class="{ activo: colapsable_activo1 }">
      <button
        :aria-expanded="colapsable_activo1"
        class="colapsable-boton"
        @click="colapsable_activo1 = !colapsable_activo1"
      >
        <div class="contenedor-encabezado-colapsable">
          <p class="m-0">Encabezado colapsable</p>
        </div>
        <div class="p-t-1">
          <span aria-hidden="true" class="nav-boton-submenu"></span>
        </div>
      </button>
      <div class="contenedor-colapsable-contenido">
        <ul>
          <li>
            <a
              href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
              target="_blank"
              :tabindex="colapsable_activo1 ? undefined : -1"
            >
              Elemento desplegado</a
            >
          </li>
        </ul>
      </div>
    </div>

</div>
</template>
