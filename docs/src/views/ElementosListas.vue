<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
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
