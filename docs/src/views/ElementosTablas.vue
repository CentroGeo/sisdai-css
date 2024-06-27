<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Tablas</h1>
      <p>
        Desde el Sistema de Diseño y Accesibilidad para la Investigación (Sisdai) enfatizamos el uso del HTML 
        semántico para tablas, lo cual mejora su usabilidad y accesibilidad. Se proporciona estilo a las 
        etiquetas nativas de tablas para que puedan utilizarse sin la necesidad de clases adicionales.
      </p>
      
      <h3>Tabla Base</h3>
      <p>
        Esta configuración es la predeterminada, ideal para mostrar datos de manera clara 
        y estructurada. Se debe proporcionar una descripción o información adicional sobre 
        la tabla para contextualizar los datos presentados.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Título tabla base</p>
          <table>
            <caption>Descripción o información adicional de la tabla</caption>
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
    
      <h3>Tabla Condensada</h3>
      <p>
        Este estilo se recomienda para mostrar una gran cantidad de datos en un espacio reducido. 
        Puedes optar por la tabla condensada cuando la eficiencia espacial es prioritaria y cada 
        celda contiene información breve.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Título tabla condensada</p>
          <table class="tabla-condensada">
            <caption> Descripción o información adicional de la tabla </caption>
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

    <div class="ancho-lectura m-t-5">
      <h3>Tabla Expandida</h3>
      <p>
        Utiliza este estilo cuando los datos en las celdas requieren más de dos líneas de contenido. 
        La tabla expandida ofrece más espacio por celda, lo cual es ideal para datos detallados o 
        explicaciones extensas.
      </p>
    </div>

    <div class="flex flex-contenido-centrado m-t-5">
      <div class="columna-8">
        <EjemploCodigoVertical
          html='
          <p class="titulo-tabla">Título tabla expandida</p>
          <table class="tabla-expandida">
            <caption>
              Descripción o información adicional de la tabla
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
