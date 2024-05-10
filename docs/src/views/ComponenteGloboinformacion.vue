<script setup>
import EjemploGloboInfoExtCerrar from "../componetes/EjemploGloboInfoExtCerrar.vue";
</script>

<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Globo de información</h1>
      <p>
        Directiva declarada en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>
        Comunmente conocidos como Tooltips, 
        estas directivas funcionan para cualquier elemento html o componente de vue, 
        agregando la directiva <code>v-globo-informacion</code> o <code>v-globo-informacion-extendido</code>.
      </p>
    </div>
    <div class="contenedor-lectura">
      <h2>Globo de información normal</h2>
      <div class="contenedor-globo-info">
        <div class="cuerpo-globo-info">
          <p>Lorem ipsum, dolor sit amet consectetur</p>
        </div>
      </div>

      <h2>Globo de información extendido</h2>
      <div class="contenedor-globo-info-ext">
        <div class="cuerpo-globo-info">
          <p>
            <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Odio omnis, quas sequi mollitia dolorem enim molestiae tempore temporibus fugiat esse sed, voluptatem expedita porro cupiditate minima unde quaerat corporis. Nihil.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad nobis id, vitae iusto non mollitia! Ex id, illum magnam dolorem asperiores autem? Aperiam, alias inventore eveniet doloremque atque voluptas?</p>
        </div>
      </div>

      <h2>Globo de información extendido con botón de cierre</h2>
      <EjemploGloboInfoExtCerrar />
    </div>
  </div>
</template>

