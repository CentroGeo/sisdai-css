<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Listas compuestas</h1>
      <p>
        La <i>clase</i> <code>.lista-compuesta</code> está diseñada para etiquetas de listas 
        ordenadas <code>&lt;ol/></code> o desordenadas <code>&lt;ul/></code> , permitiendo 
        contener múltiples elementos dentro de cada <code>&lt;li/></code>. Estas listas 
        incorporan el bloque <code>.lista-compuesta-cuerpo</code>, que puede incluir las clases 
        <code>.lista-compuesta-texto-primario</code>, <code>.lista-compuesta-texto-secundario</code> y 
        <code>.lista-compuesta-texto-terciario</code>.
      </p>
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Lista avatar</h2>
      <p>
        Cada elemento en la <i>clase</i> <code>.lista-avatar</code> contiene un bloque 
        <code>.lista-avatar-imagen</code> para agregar una imagen circular y un bloque 
        <code>.lista-compuesta-cuerpo</code>. Dentro del elemento de la lista, puede 
        incluirse una etiqueta de hipervínculo que englobe ambos bloques. 
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <ul class="lista-compuesta lista-avatar">
          <li>
            <a href="#">
              <div class="lista-avatar-imagen">
                <img src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/avatar.svg" alt=""/>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-titulo">titulo</p>
                <p class="lista-compuesta-texto-primario">texto-primario</p>
                <p class="lista-compuesta-texto-secundario">texto-secundario</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="lista-avatar-imagen">
                <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/nymeria.jpg" alt=""/>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-titulo">Nombre(s) Primer y Segundo apellido</p>
                <p class="lista-compuesta-texto-primario">Rol o cargo</p>
                <p class="lista-compuesta-texto-secundario">Institución de adscripción</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="lista-avatar-imagen">
                <img src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/nilo.jpg" alt=""/>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-titulo">Nombre(s) Primer y Segundo apellido</p>
                <p class="lista-compuesta-texto-primario">Rol o cargo</p>
                <p class="lista-compuesta-texto-secundario">Institución de adscripción</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='HTML'
          codigo='
          <ul class="lista-compuesta lista-avatar">
            <li>
              <a href="#">
                <div class="lista-avatar-imagen">
                  <img src="..." alt=""/>
                </div>
                <div class="lista-compuesta-cuerpo">
                  <p class="lista-compuesta-titulo">
                    titulo
                  </p>
                  <p class="lista-compuesta-texto-primario">
                    texto-primario
                  </p>
                  <p class="lista-compuesta-texto-secundario">
                    texto-secundario
                  </p>
                </div>
              </a>
            </li>
            ...
          </ul>
          '
        />
      </div>
    </div>



    <div class="ancho-lectura">
      <h2 class="m-t-10">Lista logotipo</h2>
      <p>
        En la <i>clase</i> <code>.lista-logotipo</code>, cada elemento de la lista incorpora un bloque 
        <code>.lista-logotipo-imagen</code> para una imagen rectangular y un bloque 
        <code>.lista-compuesta-cuerpo</code>. Este diseño también puede incluir una etiqueta de 
        hipervínculo que contenga ambos bloques. 
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <ul class="lista-compuesta lista-logotipo">
          <li>
            <a href="#">
              <div class="lista-logotipo-imagen">
                <img class="color-invertir" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/logo.svg" alt=""/>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-texto-primario">texto-primario</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="lista-logotipo-imagen">
                <img class="color-invertir" src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/logo.svg" alt=""/>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-texto-primario">Nombre de la institución</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='HTML'
          codigo='
          <ul class="lista-compuesta lista-logotipo">
            <li>
              <a href="#">
                <div class="lista-logotipo-imagen">
                  <img class="color-invertir" src="..." alt=""/>
                </div>
                <div class="lista-compuesta-cuerpo">
                  <p class="lista-compuesta-texto-primario">texto-primario</p>
                </div>
              </a>
            </li>
            ...
          </ul>
          '
        />
      </div>
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Lista pictograma</h2>
      <p>
        La <i>clase</i> <code>.lista-pictograma</code> utiliza pictogramas del sistema de diseño. 
        Dado que estos pictogramas funcionan como tipografía, su tamaño varía dependiendo de la 
        etiqueta o clase aplicada. Para mantener una presentación uniforme, se recomienda usar 
        el mismo tamaño de pictograma en todos los elementos de la lista.

      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <ul class="lista-compuesta lista-pictograma">
          <li>
            <div class="lista-pictograma-imagen">
              <span class="pictograma-flkt pictograma-mediano texto-color-acento"></span>
            </div>
            <div class="lista-compuesta-cuerpo">
              <p class="lista-compuesta-texto-primario">texto-primario</p>
            </div>
          </li>
          <li>
            <div class="lista-pictograma-imagen">
              <span class="pictograma-flkt pictograma-mediano texto-color-acento"></span>
            </div>
            <div class="lista-compuesta-cuerpo">
              <p class="lista-compuesta-texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aut perspiciatis dolores magni temporibus, ab consequuntur molestiae, 
                illo quasi ipsum at natus qui autem facere ducimus consectetur 
                totam eos! Nostrum, officiis?
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="columna-6">
        <EjemploCodigo
          :tiene_ejemplo="false"
          tipo='HTML'
          codigo='
          <ul class="lista-compuesta lista-pictograma">
            <li>
              <div class="lista-pictograma-imagen">
                <span 
                  class="pictograma-flkt pictograma-mediano texto-color-acento"
                ></span>
              </div>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-texto-primario">
                  texto-primario
                </p>
              </div>
            </li>
          </ul>
          '
        />
      </div>
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Lista con acciones</h2>
      <p>
        La <i>clase</i> <code>.lista-accion</code> incorpora los bloques <code>.lista-compuesta-cuerpo</code> y 
        <code>.lista-accion-acciones</code>, donde se pueden agregar múltiples botones según las necesidades 
        de cada elemento de la lista.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <ul class="lista-compuesta lista-accion">
          <li>
            <div class="lista-compuesta-cuerpo">
              <p class="lista-compuesta-titulo">titulo</p>
              <p class="lista-compuesta-texto-primario">texto-primario</p>
              <p class="lista-compuesta-texto-secundario">texto-secundario</p>
            </div>
            <div class="lista-accion-acciones">
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-editar" aria-hidden="true"/>
                <span class="a11y-solo-lectura">
                    Editar
                </span>
              </button>
              <button class="boton-pictograma boton-sin-contenedor-secundario">
                <span class="pictograma-eliminar" aria-hidden="true"/>
                <span class="a11y-solo-lectura">
                    Eliminar
                </span>
              </button>
            </div>
          </li>
          <li>
            <div class="lista-compuesta-cuerpo">
              <p class="lista-compuesta-titulo">Nombre de archivo</p>
              <p class="lista-compuesta-texto-primario">19/12/2024</p>
              <p class="lista-compuesta-texto-secundario">355kb</p>
            </div>
            <div class="lista-accion-acciones">
              <button class="boton-pictograma boton-sin-contenedor-primario">
                <span class="pictograma-editar" aria-hidden="true"/>
                <span class="a11y-solo-lectura">
                    Editar
                </span>
              </button>
              <button class="boton-pictograma boton-sin-contenedor-secundario">
                <span class="pictograma-eliminar" aria-hidden="true"/>
                <span class="a11y-solo-lectura">
                    Eliminar
                </span>
              </button>
            </div>
          </li>
          <li>
            <div class="lista-compuesta-cuerpo">
              <p class="lista-compuesta-titulo">Nombre de archivo</p>
              <p class="lista-compuesta-texto-primario">19/12/2024</p>
              <p class="lista-compuesta-texto-secundario">355kb</p>
            </div>
            <div class="lista-accion-acciones">
              <button class="boton-pictograma boton-sin-contenedor-secundario">
                <span class="pictograma-archivo-descargar" aria-hidden="true"/>
                <span class="a11y-solo-lectura">Descargar</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="columna-6">
        <EjemploCodigo
        :tiene_ejemplo="false"
        tipo='HTML'
        codigo='
          <ul class="lista-compuesta lista-accion">
            <li>
              <div class="lista-compuesta-cuerpo">
                <p class="lista-compuesta-titulo"> titulo </p>
                <p class="lista-compuesta-texto-primario"> texto-primario </p>
                <p class="lista-compuesta-texto-secundario"> texto-secundario </p>
              </div>
              <div class="lista-accion-acciones">
                <button 
                  class="boton-pictograma boton-sin-contenedor-primario">
                  <span class="pictograma-editar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">
                    Editar
                  </span>
                </button>
                <button class="boton-pictograma boton-sin-contenedor-secundario">
                  <span class="pictograma-eliminar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">
                    Eliminar
                  </span>
                </button>
              </div>
            </li>
            ...
          </ul>
          '
        />
      </div>
    </div>



    <div class="ancho-lectura">
      <h2 class="m-t-10">Lista con casillas</h2>
      <p>
        La <i>clase</i> <code>.lista-casilla</code> utiliza un <code>&lt;input type="checkbox"/></code> 
        seguido inmediatamente por su etiqueta <code>&lt;label /></code>, la cual contiene las clases 
        de textos primario, secundario y terciario, facilitando la estructura y accesibilidad de la lista. 
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <ul class="lista-compuesta lista-casilla">
          <li>
              <input id="checkbox1" 
                type="checkbox"
                name="checkboxes"
                checked
              />
              <label for="checkbox1">
                <p class="lista-compuesta-titulo">titulo</p>
                <p class="lista-compuesta-texto-primario">texto-primario</p>
                <p class="lista-compuesta-texto-secundario">texto-secundario</p>
            </label>
          </li>
          <li>
              <input id="checkbox2" 
                type="checkbox"
                name="checkboxes"
              />
              <label for="checkbox2">
                <p class="lista-compuesta-titulo">Nombre de archivo</p>
                <p class="lista-compuesta-texto-primario">19/12/2024</p>
                <p class="lista-compuesta-texto-secundario">355kb</p>
            </label>
          </li>
          <li>
              <input id="checkbox3" 
                type="checkbox"
                name="checkboxes"
              />
              <label for="checkbox3">
                <p class="lista-compuesta-titulo">Nombre de archivo</p>
                <p class="lista-compuesta-texto-primario">19/12/2024</p>
                <p class="lista-compuesta-texto-secundario">355kb</p>
            </label>
          </li>
        </ul>
      </div>
      <div class="columna-6">
        <EjemploCodigo
        :tiene_ejemplo="false"
        tipo='HTML'
        codigo='
          <ul class="lista-computesta lista-casilla">
            <li>
                <input id="checkbox1" 
                  type="checkbox"
                  name="checkboxes"
                  checked
                />
                <label for="checkbox1">
                  <p class="lista-compuesta-titulo"> titulo </p>
                  <p class="lista-compuesta-texto-primario"> texto-primario </p>
                  <p class="lista-compuesta-texto-secundario"> texto-secundario </p>
              </label>
            </li>
            ...
          </ul>
          '
        />
      </div>
    </div>

  </div>
</template>