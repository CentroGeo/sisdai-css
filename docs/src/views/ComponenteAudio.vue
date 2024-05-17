<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Audio</h1>
      <p>
        Componente declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Este componente permite reproducir audios en el navegador.
      </p>
      
      <EjemploCodigoVertical

        html='
        <div class="audio">
          <div class="audio-cabecera">
            <p class="notas">Etiqueta o texto secundario .notas</p>
            <p class="h3">Titulo .h3</p>
            <p>
              Texto descriptivo. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Placeat dolor, repudiandae perspiciatis autem, magnam aut 
              inventore animi repellendus nesciunt eum ipsam! Doloremque, 
              ducimus consequuntur! Distinctio accusantium quisquam 
              natus nobis dolor!
            </p>
          </div>
          
          <div class="audio-cuerpo">
            <!-- <audio src=""></audio> -->
            
            <div class="flex flex-contenido-separado texto-color-2">
              <div> 00:00 </div>
              <div> 09:14 </div>
            </div>
            
            <input type="range" /> 
            <!-- <SisdaiControlDeslizante /> -->
      
            <div class="flex">
              
              <div class="audio-velocidad">
                <select>
                  <optgroup label="Velocida de reproduccion">
                    <option value="0.25"> 0.25x </option>
                    <option value="0.5"> 0.5x </option>
                    <option value="1"> 1x </option>
                  </optgroup>
                </select>
              </div>
              
              <div class="audio-reproduccion">
                <button class="boton-pictograma boton-sin-contenedor-primario">
                  <span class="pictograma-regresar-10"></span>
                </button>
                <button class="boton-pictograma boton-sin-contenedor-primario">
                  <span class="pictograma-control-comenzar"></span>
                  <!-- <span class="pictograma-control-pausa"></span> -->
                </button>
                <button class="boton-pictograma boton-sin-contenedor-primario">
                  <span class="pictograma-adelantar-10"></span>
                </button>
              </div>
              
              <div class="audio-volumen">
                <button class="boton-pictograma boton-sin-contenedor-primario">
                  <span class="pictograma-volumen"></span>
                  <!-- <span class="pictograma-silenciar"></span> -->
                </button>
                <input type="range" />
                <!-- <SisdaiControlDeslizante /> -->
              </div>

            </div>
          </div>
        </div>
        '
      />

    </div>


    
  </div>
</template>
