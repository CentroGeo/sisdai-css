<template>
  <div>

    <h1>Separadores</h1>
  
    <h2 class="m-t-10">1. Separar el contenido de una nota</h2>
    <hr>
    <p class="notas">NOTA: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusantium nam eveniet voluptatum, cumque ad perspiciatis cum modi velit, corporis ipsum quia nobis adipisci labore delectus, eligendi fugit cupiditate pariatur.</p>
    
    <h2 class="m-t-10">2. Dividir en grupos conjuntos de elementos similares</h2>
    <div class="grid">
      <div class="columna-4 columna-8-esc">
        <ul class="lista-avatar">
          <li>
            <div class="avatar">
              <img src="https://placebear.com/400/400" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://placebear.com/300/300" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://placebear.com/100/100" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario<br>a dos lineas</p>
              <p class="texto-secundario">texto-secundario.</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
        </ul>
        <hr class="separador-secundario">
        <ol class="lista-avatar">
          <li>
            <div class="avatar">
              <img src="https://placebear.com/300/300" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://placebear.com/600/600" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
          <li>
            <div class="avatar">
              <img src="https://placebear.com/250/250" alt="placebear"/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario<br>a dos lineas</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </li>
        </ol>
      </div>
      <div class="columna-4 columna-8-esc">
        <dl>
          <dt>Doloribus</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum. Laboriosam voluptas quo amet doloribus.</dd>
          <dt>Lorem</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt perspiciatis nihil error non debitis iste cumque voluptatum totam?</dd>
        </dl>
        <hr class="separador-secundario">
        <dl>
          <dt>Ejele</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>
        </dl>
        <hr class="separador-secundario">
        <dl>
          <dt>Description list</dt>
          <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
