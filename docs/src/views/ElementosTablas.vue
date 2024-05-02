<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    
    <div class="ancho-lectura">
      <h1>Tablas</h1>
      <p>
        El Sisdai recomienda el uso de HTML semántico para mejorar la usabilidad y accesibilidad de la web.
        Es por esto que reforzamos dando estilo a las etiquetas nativas para que se puedan utilizar sin agregar ninguna clase.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Tabla base</p>
          <table>
            <caption>Descripción on información adicional de la tabla</caption>
            <thead>
              <tr>
                <th>Encabezado A</th>
                <th>Encabezado B</th>
                <th>Encabezado C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Celda 1</td>
                <td>Celda 2</td>
                <td>Celda 3</td>
              </tr>
              <tr>
                <td>Celda 4</td>
                <td>Celda 5</td>
                <td>Celda 6</td>
              </tr>
              <tr>
                <td>Celda 7</td>
                <td>Celda 8</td>
                <td>Celda 9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>pie 1</td>
                <td>pie 2</td>
                <td>pie 3</td>
              </tr>
            </tfoot>
          </table>
          <br />
          '
        />
      </div>
    </div>

    <div class="ancho-lectura m-t-10">
      <h2>Variaciones de tamaño</h2>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Tabla condensada</p>
          <table class="tabla-condensada">
            <caption>
              Utiliza la tabla condensada para mostrar muchos datos en poco espacio.
            </caption>
            <thead>
              <tr>
                <th>Encabezado A</th>
                <th>Encabezado B</th>
                <th>Encabezado C</th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                <td>Celda 1</td>
                <td>Celda 2</td>
                <td>Celda 3</td>
              </tr>
              <tr>
                <td>Celda 4</td>
                <td>Celda 5</td>
                <td>Celda 6</td>
              </tr>
              <tr>
                <td>Celda 7</td>
                <td>Celda 8</td>
                <td>Celda 9</td>
              </tr>
            </tbody>
          </table>
          <br />
          '
        />
      </div>
    </div>

    <div class="flex flex-contenido-centrado m-t-5">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Tabla expandida</p>
          <table class="tabla-expandida">
            <caption>
              Utiliza este estilo cuando los datos tengan 
              más de dos líneas de contenido por celda.
            </caption>
            <thead>
              <tr>
                <th>Encabezado A</th>
                <th>Encabezado B</th>
                <th>Encabezado C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Celda 1<br />
                  Segunda línea
                </td>
                <td>
                  Celda 2<br />
                  Segunda línea
                </td>
                <td>
                  Celda 3<br />
                  Segunda línea
                </td>
              </tr>
              <tr>
                <td>
                  Celda 4<br />
                  Segunda línea
                </td>
                <td>
                  Celda 5<br />
                  Segunda línea
                </td>
                <td>
                  Celda 6<br />
                  Segunda línea
                </td>
              </tr>
              <tr>
                <td>
                  Celda 7<br />
                  Segunda línea
                </td>
                <td>
                  Celda 8<br />
                  Segunda línea
                </td>
                <td>
                  Celda 9<br />
                  Segunda línea
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          '
        />
      </div>
    </div>

  </div>
</template>
