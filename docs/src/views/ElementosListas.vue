<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Listas</h1>
      <p>
        Los estilos se aplican directamente a las etiquetas nativas para listas, 
        mismas que recomendamo utilizar observando los requerimientos del HTML semántico. 
      </p>
      <p>
        Tanto las listas ordenadas <code>&lt;ol/></code> como las desordenadas <code>&lt;ul/></code> se pueden 
        anidar agregando un espacio de sangría en cada nivel como se ve en los ejemplos.
        En la lista ordenada además se incrementa la numeración de sub elementos en cada nivel.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigoVertical
        html='
        <ol>
          <li>Lista Nivel 1</li>
          <li>
            Lista Nivel 1
            <ol>
              <li>
                Lista Nivel 2
                <ol>
                  <li>ListaNivel 3</li>
                </ol>
              </li>
              <li>Lista Nivel 2</li>
            </ol>
          </li>
          <li>Lista Nivel 1</li>
        </ol>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
        html='
        <ul>
          <li>Lista Nivel 1</li>
          <li>
            Lista Nivel 1
            <ul>
              <li>
                Lista Nivel 2
                <ul>
                  <li>Lista Nivel 3</li>
                </ul>
              </li>
              <li>Lista Nivel 2</li>
            </ul>
          </li>
          <li>Lista Nivel 1</li>
        </ul>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigoVertical
        html='
        <dl>
          <dt>Término</dt>
          <dd>Descripción del término</dd>

          <dt>Término</dt>
          <dd>Descripción del término</dd>

          <dt>Término</dt>
          <dd>Descripción del término</dd>
        </dl>
        '
      />
      </div>
    </div>



    <div class="ancho-lectura">
      <h2 class="m-t-10">listas compuestas</h2>
      <p>
        Las listas compuestas son clases creadas para etiquetas de listas ordenadas <code>&lt;ol/></code> o desordenadas <code>&lt;ul/></code>. 
        Pueden contener multiples elementos dentro del elemento de lista <code>&lt;li/></code>.
      </p>
      <p>
        Dentro de los elementos de lista, todas comparten el bloque de <code>.texto</code> que puede contener las clases 
        <code>.texto-primario</code>, <code>.texto-secundario</code> y <code>.texto-terciario</code>
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
    <div class="columna-8">
      <h3 class="m-t-6">Lista avatar</h3>
      <p>
        La clase <code>.lista-avatar</code> cada elemento de lista contiene un bloque de 
        <code>.avatar</code> para agregar una imagen circular y un bloque de <code>.texto</code>. 
        Dentro del elemento de la lista puede ir la etiqueta de hipervínculo conteniendo ambos bloques.
      </p>
      <EjemploCodigoVertical
      html='
      <ul class="lista-avatar">
        <li>
          <a href="#">
            <div class="avatar">
              <img src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/avatar.svg" alt=""/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
              <p class="texto-secundario">texto-secundario</p>
              <p class="texto-terciario">texto-terciario</p>
            </div>
          </a>
        </li>
        <li>
          <div class="avatar">
            <img src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/avatar.svg" alt=""/>
          </div>
          <div class="texto">
            <p class="texto-primario">Nombre(s) Primer y Segundo apellido</p>
            <p class="texto-secundario">Rol o cargo</p>
            <p class="texto-terciario">Institución de adscripción</p>
          </div>
        </li>
      </ul>
      '
      />
      </div>
    
      <div class="columna-8">
      <h3 class="m-t-6">Lista logotipo</h3>
      <p>
        La clase <code>.lista-logo</code> cada elemento de lista contiene un bloque de 
        <code>.logo</code> para agregar una imagen rectangular y un bloque de <code>.texto</code>. 
        Dentro del elemento de la lista puede ir la etiqueta de hipervínculo conteniendo ambos bloques.
      </p>
      <EjemploCodigoVertical
      html='
      <ul class="lista-logo">
        <li>
          <a href="#">
            <div class="logo">
              <img src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/logo.svg" alt=""/>
            </div>
            <div class="texto">
              <p class="texto-primario">texto-primario</p>
            </div>
          </a>
        </li>
        <li>
          <div class="logo">
            <img src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/predeterminadas/logo.svg" alt=""/>
          </div>
          <div class="texto">
            <p class="texto-primario">Nombre de la institución</p>
          </div>
        </li>
      </ul>
      '
      />
      </div>
      <div class="columna-8">
        <h3 class="m-t-6">Lista con accion</h3>
        <p>
          La clase <code>.lista-accion</code> puede contener un bloque de <code>.texto</code> y un bloque
          de <code>.accion</code> en el que se pueden agregar tantos botones como requiera cada elemento de lista.
        </p>
        <EjemploCodigoVertical
        html='
          <ul class="lista-accion">
            <li>
              <div class="texto">
                <p class="texto-primario">texto-primario</p>
                <p class="texto-secundario">texto-secundario</p>
                <p class="texto-terciario">texto-terciario</p>
              </div>
              <div class="acciones">
                <button class="boton-pictograma boton-primario-sin-contenedor">
                  <span class="pictograma-editar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">
                      Editar
                  </span>
                </button>
                <button class="boton-pictograma boton-secundario-sin-contenedor">
                  <span class="pictograma-eliminar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">
                      Eliminar
                  </span>
                </button>
                <button class="boton-pictograma boton-secundario-sin-contenedor">
                  <span class="pictograma-archivo-descargar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">
                      Descargar
                  </span>
                </button>
              </div>
            </li>
            <li>
              <div class="texto">
                <p class="texto-primario">Nombre de archivo</p>
                <p class="texto-secundario">19/12/2024</p>
                <p class="texto-terciario">355kb</p>
              </div>
              <div class="acciones">
                <button class="boton-pictograma boton-secundario-sin-contenedor">
                  <span class="pictograma-archivo-descargar" aria-hidden="true"/>
                  <span class="a11y-solo-lectura">Descargar</span>
                </button>
              </div>
            </li>
           
          </ul>
          '
        />
      </div>
      <div class="columna-8">
        <h3 class="m-t-6">Lista con casilla</h3>
        <p>
          La clase <code>.lista-casilla</code> requiere que se utilice un <code>&lt;input type="checkbox"/></code> 
          seguido inmediatamente de su <code>&lt;label /></code>. 
          En éste caso la etiqueta <code>&lt;label /></code> contendra las clases de textos primario, secundario y terciario.
        </p>
        <EjemploCodigoVertical
        html='
          <ul class="lista-casilla">
            <li>
                <input id="checkbox1" 
                  type="checkbox"
                  name="checkboxes"
                  checked
                />
                <label for="checkbox1">
                  <p class="texto-primario">texto-primario</p>
                  <p class="texto-secundario">texto-secundario</p>
                  <p class="texto-terciario">texto-terciario</p>
              </label>
            </li>
            <li>
                <input id="checkbox2" 
                  type="checkbox"
                  name="checkboxes"
                />
                <label for="checkbox2">
                  <p class="texto-primario">Nombre de archivo</p>
                  <p class="texto-secundario">19/12/2024</p>
                  <p class="texto-terciario">355kb</p>
              </label>
            </li>

          </ul>
          '
        />
      </div>
    </div>


  
    
  
    
  </div>

</template>
