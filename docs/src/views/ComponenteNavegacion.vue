<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Navegación</h1>
      <p>
        Estilos para el componente <code>SisdaiNavegacionPrincipal</code> declarado en la biblioteca 
        <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
        Este componente se utiliza para crear la navegación principal de un sitio web.
      </p>
    </div>

    
    <div class="">
      <EjemploCodigoVertical
        
        html='
        <nav class="navegacion" aria-label="Navegación principal">
          
          <div class="nav-contenedor-identidad">
            <a href="#" class="nav-hiperviculo-logo">
              <img 
                class="nav-logo color-invertir" 
                src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/logo.svg" 
                alt=""
              />
            </a>
            
            <button 
              class="nav-boton-menu"
              aria-expanded="true"
              aria-label="Abrir/Cerrar navegación principal"
              aria-controls="navegacionprincipal"
            >
              <span class="nav-icono-menu" aria-hidden="true"></span>
            </button>
            <div class="nav-informacion">Nombre de la sección actual</div>
          </div>

          <div 
            class="nav-menu-contedor"
            id="navegacionprincipal"
          > 

            <div class="nav-menu-complementario">
              <a 
                href="#" 
                class="nav-hipervinculo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                ENLACE EXTERNO
              </a>
            </div>
            
            <div class="nav-menu-principal">
              <ul class="nav-menu">
                <li>
                  <a href="#" class="nav-hipervinculo">Menú</a>
                </li>
                <li>
                  <a href="#" class="nav-hipervinculo active">Menú Activo</a>
                </li>
                <li class="nav-contenedor-submenu">
                  <button class="nav-boton-submenu">
                    Menú con submenu
                  </button>
                  <ul class="nav-submenu">
                    <li>
                      <button class="nav-boton-regresar">Menú con submenu</button>
                    </li>
                    <li>
                      <a href="#" class="nav-hipervinculo">Submenu uno</a>
                    </li>
                    <li>
                      <a href="#" class="nav-hipervinculo">Submenu dos</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button class="nav-boton">nav boton</button>
                </li>
                <li>
                  <button class="nav-boton">
                    <span class="pictograma-buscar" aria-hidden="true"></span>
                    <span class="a11y-solo-lectura"> Buscar </span>
                  </button>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        '
      />
    </div>
  </div>
</template>