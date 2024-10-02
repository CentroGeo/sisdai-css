<script setup>
import { ref } from 'vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
const estaAbierto = ref(true)
</script>
<template>
  <div>

    <div class="flex">
      <div class="columna-4 columna-1-mov menu-lateral-fondo">

        <nav class="menu-lateral" :class="{abierto: estaAbierto}">

          <button 
            class="menu-lateral-boton" 
            aria-label="Menú secundario"
            aria-controls="ejemplomenulateral" 
            :aria-expanded="estaAbierto"
            @click="estaAbierto = !estaAbierto"
            type="button"
          >
            <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
          </button>
          
          <div 
            class="menu-lateral-contenedor"
            id="ejemplomenulateral"
            >
            <ul>
              <li>
                <router-link to="/">
                  Enlace a la página de inicio
                </router-link>
              </li>
              <li>
                <a href="#">
                  Enlace local ejemplo uno
                </a>
              </li>
              <li class="colapsable abierto">
                <button class="colapsable-boton">
                  Nombre de sección colapsable
                  <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                </button>
                <ul>
                  <li>
                    <a href="#">
                      Enlace local ejemplo colapsable abierto
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Enlace local ejemplo dos
                </a>
              </li>
              <li>
                <a href="#">
                  Enlace local ejemplo tres
                </a>
              </li>
              <li>
                <a href="#">
                  Enlace local ejemplo cuatro
                </a>
              </li>
              
            </ul>
          </div>
        </nav>

      </div>
      <div class="columna-12 columna-7-mov">
        <div class="contenedor m-y-maximo">
          <div class="contenedor alineacion-izquierda ancho-lectura">

            <h1>Menú lateral <span class="etiqueta">preliminar</span></h1>
            <p>
              La biblioteca <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
              proporciona una serie de componentes reutilizables diseñados para mejorar la usabilidad y accesibilidad de los sitios web. Cada componente 
              está diseñado para cumplir con funciones específicas y se integra fácilmente en cualquier proyecto web. A continuación, se describe 
              el componente "Menú lateral" y sus características particulares.
            </p> 
            <p>
              Cada componente en <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a> 
              está diseñado pensando en la accesibilidad y adaptabilidad,  lo cual nos acerca a que las personas usuarias puedan navegar e interactuar 
              con el sitio web de manera efectiva.
            </p>

            <p>
              El componente <code>SisdaiMenuLateral</code> gestiona los elementos colapsables en versión móvil, 
              facilitando la interacción en dispositivos más pequeños. A través de un botón (<code>menu-lateral-boton</code>), 
              este componente permite agregar o quitar la clase <code>abierto</code> para controlar la visualización de su contenido.
            </p>
            <EjemploCodigo
              :tiene_ejemplo='false'
              margen_pre='m-l--10'
              tipo='HTML'
              codigo='
              <nav class="menu-lateral"> <-- aqui se agrega .abierto (notas estado abierto) -->
  
                <button 
                  class="menu-lateral-boton" 
                  aria-controls="ID-UNICO" 
                  aria-expanded="false" <- aqui se cambia a true (notas estado abierto)
                  aria-label="Menú secundario"
                  type="button"
                >
                  <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                </button>
  
                <div 
                  class="menu-lateral-contenedor"
                  id="ID-UNICO"
                >
  
                  <!-- contenido que se muestra u oculta en móvil, siempre visible en escritorio -->
  
                </div>
              </nav>
            '/>
            <p>
              Dentro del componente se encuentra la clase <code>.menu-lateral-contenedor</code>, que puede contener listas anidadas de hipervínculos 
              y otros componentes colapsables.
            </p>
  
            <EjemploCodigo
              :tiene_ejemplo='false'
              margen_pre='m-l--10'
              tipo='HTML'
              codigo='
              <nav class="menu-lateral abierto">
  
                <button 
                  class="menu-lateral-boton" 
                  aria-controls="ID-UNICO-DOS" 
                  aria-expanded="true" 
                  aria-label="Menú secundario"
                  type="button"
                >
                  <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                </button>
  
                <div 
                  class="menu-lateral-contenedor"
                  id="ID-UNICO-DOS"
                >
                  <ul>
                    <li>
                      <router-link to="/">
                        Enlace a la página de inicio
                      </router-link>
                    </li>
                    <li>
                      <a href="#">
                        Enlace local ejemplo uno
                      </a>
                    </li>
                    <li class="colapsable abierto">
                      <button 
                        class="colapsable-boton" 
                        aria-controls="ID-UNICO-TRES" 
                        aria-expanded="true" 
                        type="button"
                      >
                        Nombre de sección colapsable
                        <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                      </button>
                      <div 
                        class="colapsable-contenedor" 
                        id="ID-UNICO-TRES" 
                        aria-hidden="false"
                      >
                        <ul>
                          <li>
                            <a href="#">Enlace local ejemplo colapsable abierto</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            '/>
            
            <p>
              Adicionalmente, <code>menu-lateral-fondo</code> ayuda a uniformizar el color de 
              fondo en la columna donde se ubica el menú.
            </p>
            
            <EjemploCodigo
              :tiene_ejemplo='false'
              margen_pre='m-l--10'
              tipo='HTML'
              codigo='
              <div class="columna-4 columna-1-mov menu-lateral-fondo">
  
                <nav class="menu-lateral">
  
                  <!-- contenido del menu -->
  
                </nav>
              </div>
            '/>

            <p>
              Es importante notar que para el <code>menu-lateral</code> en vista de celular, se mantiene una columna;
              misma que debe restarse de la sección del contenido que aparezca en la vista, como se muestra a continuación.
            </p>
            <EjemploCodigo
              :tiene_ejemplo='false'
              margen_pre='m-l--10'
              tipo='HTML'
              codigo='
              <div class="columna-4 columna-1-mov menu-lateral-fondo">
  
                <nav class="menu-lateral">
  
                  <!-- contenido del menu -->
  
                </nav>

                <div class="columna-12 columna-7-mov">
                  
                  <!-- contenido de la página -->

                </div>
                
              </div>
            '/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
