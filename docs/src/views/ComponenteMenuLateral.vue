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
            aria-controls="ejemplomenulateral" 
            :aria-expanded="estaAbierto"
            @click="estaAbierto = !estaAbierto"
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
                  router link inicio prueba
                </router-link>
              </li>
              <li>
                <a href="#">
                  hipervinculo 1
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 2
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 3
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 4
                </a>
              </li>
              <li class="colapsable">
                <button 
                  class="colapsable-boton" 
                  aria-controls="ejemplocolapsable1" 
                  aria-expanded="false" 
                  aria-label="Abrir/Cerrar colapsable"
                >
                  Colapsable cerrado
                  <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                </button>
                <div 
                  class="colapsable-contenedor"
                  id="ejemplocolapsable1"
                  aria-hidden="true" 
                >
                  <ul>
                    <li>
                      <a href="#">Enlace colapsado</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="colapsable abierto">
                <button 
                  class="colapsable-boton" 
                  aria-controls="ejemplocolapsable2" 
                  aria-expanded="true" 
                  aria-label="Abrir/Cerrar colapsable"
                >
                  Colapsable abierto
                  <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                </button>
                <div 
                  class="colapsable-contenedor"
                  id="ejemplocolapsable2"
                >
                  <ul>
                    <li>
                      <a href="#">Enlace</a>
                    </li>
                    <li>
                      <a href="#">Enlace</a>
                    </li>
                    <li class="colapsable abierto">
                      <button 
                        class="colapsable-boton" 
                        aria-controls="ejemplocolapsable3" 
                        aria-expanded="true" 
                        aria-label="Abrir/Cerrar colapsable"
                      >
                        Colapsable sublista abierto
                        <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                      </button>
                      <div 
                        class="colapsable-contenedor"
                        id="ejemplocolapsable3"
                      >
                        <ul>
                          <li>
                            <a href="#">Enlace</a>
                          </li>
                          <li>
                            <a href="#">Enlace</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  hipervinculo 5
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 6
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 7
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 8
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 9
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 10
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 11
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 12
                </a>
              </li>
              <li>
                <a href="#">
                  hipervinculo 13
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
              Estilos para el componente <code>SisdaiMenuLateral</code> declarado en la biblioteca 
              <a href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes" target="_blank" rel="noopener noreferrer">sisdai-componentes</a>.
            </p>
  
            <p>
              Este componente <code>menu-lateral</code> tiene la logica de los colapsables en versión móvil, 
              es decir que en celulares se muestra el botón <code>menu-lateral-boton</code> a través del cual 
              se agrega o quita la clase <code>abierto</code> directamente sobre el <code>menu-lateral</code> 
              para mostrar u ocultar su contenido.
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
                  aria-label="Abrir/Cerrar navegación"
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
              Dentro del componente, se encuentra el contenedor <code>menu-lateral-contenedor</code> que se espera
              contenga listas anidadas de hipervínculos y componentes de contenido colapsable <code>SisdaiColapsableNavegacion</code>
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
                  aria-label="Abrir/Cerrar navegación"
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
                        router link inicio prueba
                      </router-link>
                    </li>
                    <li>
                      <a href="#">
                        hipervinculo
                      </a>
                    </li>
                    <li class="colapsable">
                      <button 
                        class="colapsable-boton" 
                        aria-controls="ID-UNICO-TRES" 
                        aria-expanded="false" 
                        aria-label="Abrir/Cerrar colapsable"
                      >
                        Colapsable
                        <span aria-hidden="true" class="pictograma-angulo-derecho"></span>
                      </button>
                      <div 
                        class="colapsable-contenedor" 
                        id="ID-UNICO-TRES" 
                        aria-hidden="true"
                      >
                        <ul>
                          <li>
                            <a href="#">Enlace colapsado</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            '/>
            
            <p>
              La clase <code>menu-lateral-fondo</code>, no forma parte del <code>menu-lateral</code>, pero ayuda a poner el mismo
              color de fondo en la columna en donde se encuentre el menu para que en la vista de escritorio se complete visualmente
              la sección aunque el menu tenga poca altura. 
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
