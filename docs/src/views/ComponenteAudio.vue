<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Audio</h1>
      <p>
        La biblioteca <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
        está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
        el componente "Audio" y sus características particulares.
      </p> 
      <p>
        Cada componente en <a href="https://github.com/CentroGeo/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
        está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
        con el sitio web de manera efectiva.
      </p>

      <p>
        El componente <code>SisdaiAudio</code> está diseñado para facilitar la reproducción 
        de audios directamente en el navegador. 
      </p>
      <p>
        Puedes notar en el siguiente ejemplo que se utiliza un campo <code>&lt;input type="range"></code>, 
        el cual debe ser sustituido por el componente <code>SisdaiControlDeslizante</code>. A este último 
        se le debe asignar el nombre de la clase y el atributo <code>aria-label</code> adecuados para asegurar su funcionalidad correcta. 
      </p>
      
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <div class="audio" role="toolbar" aria-label="Reproductor de audio">

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
          
          <div class="flex flex-contenido-separado texto-color-secundario">
            <div role="timer" aria-label="Tiempo transcurrido">
              00:00 
            </div>
            <div>
              <span class="a11y-solo-lectura"> Duración total: </span>
              09:14 
            </div>
          </div>
          
          <input type="range" aria-label="Barra de reproducción" />
    
          <div class="flex">
            <div class="audio-velocidad">
              <select aria-label="Velocidad de reproducción">
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

              <button aria-label="Atrasar 10 segundos" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-regresar-10" aria-hidden="true"></span>
              </button>


              <!-- Opción para reproducir o pausar la reproducción del audio, la funcionalidad se debe agregar con JavaScript -->
              <button aria-label="Reproducir" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-control-comenzar" aria-hidden="true"></span>
              </button>
              <!-- 
              <button aria-label="Pausar" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-control-pausa" aria-hidden="true"></span>
              </button> 
              -->

              <button aria-label="Adelantar 10 segundos" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-adelantar-10" aria-hidden="true"></span>
              </button>
            </div>
            
            <div class="audio-volumen">
              
              <!-- Opción para escuchar o no el sonido, la funcionalidad se debe agregar con JavaScript -->
              <button aria-label="Silenciar" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-volumen" aria-hidden="true" />
              </button>
              <!-- 
              <button aria-label="Desactivar silencio" class="boton-pictograma boton-sin-contenedor-primario" type="button">
                <span class="pictograma-silenciar" aria-hidden="true" />
              </button> 
              -->

              <input type="range" aria-label="Volumen" />
            </div>

          </div>

        </div>
        '
      />

    </div>
  </div>
</template>
