<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Listas</h1>
      <p>
        Se recomienda aplicar los estilos directamente a las etiquetas nativas 
        de listas <code>&lt;ol/></code> y <code>&lt;ul/></code>, cumpliendo con 
        los requerimientos del HTML semántico. Esto asegura una integración 
        coherente y accesible dentro de la estructura web. 
      </p>
      <ul>
        <li>
          Listas ordenadas <code>&lt;ol/></code>: se pueden anidar, incrementando 
          la numeración de los subelementos en cada nivel. Esto ayuda a mantener una 
          jerarquía clara y entender la estructura de los elementos listados.
        </li>
        <li>
          Listas desordenadas <code>&lt;ul/></code>: también admiten anidación con un 
          espacio de sangría que se incrementa con cada nivel, facilitando la distinción 
          visual entre diferentes niveles y subniveles. 
        </li>
      </ul>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
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
      <EjemploCodigo
        tipo='HTML'
        codigo='
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
      <EjemploCodigo
        tipo='HTML'
        codigo='
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

  </div>

</template>
