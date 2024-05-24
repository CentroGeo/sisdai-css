<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Audio</h1>
      <p>
        Estilos para el componente <code>SisdaiAudio</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Este componente permite reproducir audios en el navegador.
      </p>
      <p>
        <b>Nota:</b> para mostrar el ejemplo se utiliza un campo <code lang="en">input type="range"</code>
        que debe ser reemplazado por el componente <code>SisdaiControlDeslizante</code>,
        al que se le debe agregar el nombre de la clase y el atributo <code lang="en">aria-label</code> 
        del campo, como se muestra a continuación.
      </p>
      
      <EjemploCodigoVertical
        html='
        <div class="audio"  role="toolbar" aria-label="Controles para reproducir audio">

          <div class="audio-cabecera">
            <p class="nota">Etiqueta o texto secundario .nota</p>
            <p class="h3">Titulo .h3</p>
            <p>
              El texto descriptivo es conciso y significativo. 
              Debe ayudar a la persona usuaria a tomar decisiones. 
              Muestra 2 líneas y alberga de 100 a 120 caracteres.
            </p>
          </div>

          <audio src="ruta/archivo/audio.mp3"></audio>
          
          <div class="flex flex-contenido-separado texto-color-2">
            <div role="timer" aria-label="Tiempo transcurrido">
              00:00 
            </div>
            <div>
              <span class="a11y-solo-lectura"> Duración total: </span>
              09:14 
            </div>
          </div>
          
          <input type="range" aria-label="Barra de progreso de la reproducción" />
    
          <div class="flex">
            <div class="audio-velocidad">
              <select aria-label="Selecciona la velocidad de reproducción">
                <optgroup label="Velocidad de reproduccion">
                  <option value="0.25"> 0.25x </option>
                  <option value="0.5"> 0.5x </option>
                  <option value="0.75"> 0.75x </option>
                  <option value="1" selected> 1x </option>
                  <option value="1.25"> 1.25x </option>
                  <option value="1.5"> 1.5x </option>
                  <option value="1.75"> 1.75x </option>
                  <option value="2"> 2x </option>
                </optgroup>
              </select>
            </div>
            
            <div class="audio-reproduccion">
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-regresar-10" aria-hidden="true"></span>
                <span class="a11y-solo-lectura"> Regresar </span>
              </button>
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-control-comenzar" aria-hidden="true"></span>
                <span class="a11y-solo-lectura"> Comenzar reproducción </span>
                <!-- <span class="pictograma-control-pausa" aria-hidden="true"></span> -->
                <!-- <span class="a11y-solo-lectura"> Pausar reproducción </span> -->
              </button>
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-adelantar-10" aria-hidden="true"></span>
                <span class="a11y-solo-lectura"> Adelantar </span>
              </button>
            </div>
            
            <div class="audio-volumen">
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-volumen" aria-hidden="true"></span>
                <span class="a11y-solo-lectura"> Encender sonido </span>
                <!-- <span class="pictograma-silenciar" aria-hidden="true"></span> -->
                <!-- <span class="a11y-solo-lectura"> Apagar sonido </span> -->
              </button>
              <input type="range" aria-label="Nivel de volumen" />
            </div>

          </div>

        </div>
        '
      />

    </div>
  </div>
</template>
