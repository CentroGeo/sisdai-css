<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    <div class="ancho-lectura">
      <h1>Tablas</h1>
      <p>
        Desde el Sisdai enfatizamos el uso del HTML 
        semántico para tablas, lo cual mejora su usabilidad y accesibilidad. Se proporciona estilo a las 
        etiquetas nativas de tablas para que puedan utilizarse sin la necesidad de clases adicionales.
      </p>
      
      <h3>Tabla Base</h3>
      <p>
        Esta configuración es la predeterminada, ideal para mostrar datos de manera clara y estructurada. 
        Se debe proporcionar un título conciso con información acerca de la tabla para contextualizar los datos presentados.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <table>
            <caption>Título de la tabla de ejemplo</caption>
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
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <table class="tabla-condensada">
            <caption>Tabla condensada</caption>
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
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <table class="tabla-expandida">
            <caption>Tabla expandida</caption>
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
          '
        />
      </div>
    </div>

    <div class="ancho-lectura m-t-10">
      <h2>Complementos</h2>
    
      <h3>Titulo para tablas</h3>
      <p>
        La etiqueta <code>caption</code> que se utiliza para agregar títulos a las tablas, basa su estilo en a la declaracion del <code>h6</code>.
        Además se agregó la clase <code>.titulo-tabla</code> por si se necesitara utilizar el estilo fuera de la etiqueta. 
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="titulo-tabla">Clase titulo-tabla</p>

          <table>
            <caption>Etiqueta nativa para títulos de tablas</caption>
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
            </tbody>
          </table>
          '
        />
      </div>
    </div>

    <div class="ancho-lectura m-t-10">
      <h3>Contenedor de tablas</h3>
      <p>
        La clase <code>.contenedor-tabla</code> se utiliza cuando el contenido de una tabla
        se sabe muy extenso en cuanto a cantidad de columnas, para agregar un scroll horizontal
        cuando la pantalla no es suficiente para mostrar toda la información.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="contenedor-tabla">
            <table>
              <caption>Tabla con contenedor horizontal</caption>
              <thead>
                <tr>
                  <th>Encabezado A</th>
                  <th>Encabezado B</th>
                  <th>Encabezado C</th>
                  <th>Encabezado D</th>
                  <th>Encabezado E</th>
                  <th>Encabezado F</th>
                  <th>Encabezado G</th>
                  <th>Encabezado H</th>
                  <th>Encabezado I</th>
                  <th>Encabezado J</th>
                  <th>Encabezado K</th>
                  <th>Encabezado L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Celda 1</td>
                  <td>Celda 2</td>
                  <td>Celda 3</td>
                  <td>Celda 4</td>
                  <td>Celda 5</td>
                  <td>Celda 6</td>
                  <td>Celda 7</td>
                  <td>Celda 8</td>
                  <td>Celda 9</td>
                  <td>Celda 10</td>
                  <td>Celda 11</td>
                  <td>Celda 12</td>
                </tr>
              </tbody>
            </table>
          </div>
          '
        />
      </div>
    </div>

  </div>
</template>
