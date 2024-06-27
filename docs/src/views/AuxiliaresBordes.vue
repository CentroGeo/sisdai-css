<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Bordes</h1>
      <p>
        Utilizando la clase de posición de bordes se crea un borde 
        de 1px de grosor y de color base especificado en la 
        variable CSS <code>--borde-color-1</code>. Es posible modificar 
        el grosor y el color utilizado clases adicionales diseñadas 
        para cada propiedad específica. 
      </p>
      <h2 class="m-t-10">Posiciones</h2>
      <p> 
        Las posiciones de borde incluyen:
        <code>t</code> para arriba (top), 
        <code>b</code> para abajo (bottom), 
        <code>l</code> para izquierda (left), 
        <code>r</code> para derecha (right), 
        <code>x</code> para el eje horizontal (combinación de izquierda y derecha), 
        <code>y</code> para el eje vertical (combinación de arriba y abajo). 
        Estas especificaciones permiten una aplicación precisa de cada lado del elemento.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde">
            borde general
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-t">
            borde arriba
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-b">
            borde abajo
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-l">
            borde izquierda
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-r">
            borde derecha
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-x">
            borde izquierda y derecha
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-y">
            borde arriba y abajo
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Colores</h2>
      <p>
        Las variables de color para los bordes están definidas para modos claro y oscuro 
        y se encuentra en la carpeta <code>src/accesibilidad</code>. Las variaciones de 
        color se pueden aplicar de manera independiente para cada posición, permitiendo 
        una personalización detallada según el diseño deseado.
        </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-primario">
            var(--borde)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-secundario">
            var(--borde-secundario)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-acento">
            var(--borde-acento)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-informacion">
            var(--borde-informacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-confirmacion">
            var(--borde-confirmacion)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-alerta">
            var(--borde-alerta)
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-color-error">
            var(--borde-error)
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Grosores</h2>
      <p>
        El grosor del borde se indica con un sufijo en el nombre de la clase, que 
        representa el grosor en píxeles y varía en incrementos de 1, desde 0 hasta 4. 
        Estas variaciones permiten ajustar el grosor del borde de manera independiente 
        para cada posición.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde borde-l-grosor-0">
            borde 0px a la izquierda
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-t borde-grosor-1">
            borde arriba de 1px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-b borde-grosor-2">
            borde abajo de 2px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-y borde-grosor-3">
            borde arriba y abajo de 3px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-x borde-grosor-4">
            borde izquierda y derecha de 4px
          </p>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <p class="borde-x borde-l-grosor-4">
            borde izquierda 4px y derecha de 1px
          </p>
          '
        />
      </div>
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Redondeado</h2>
      <p>
        Para los bordes redondeados, el sufijo en el nombre de la clase indica el grado 
        de redondeo de píxeles, en incrementos de 4, desde 0 hasta 24, con un incremento 
        adicional de 2px. Al igual que con los colores y grosores, las variaciones de 
        redondeo se pueden aplicar de forma independiente para cada posición, proporcionando 
        flexibilidad en el diseño visual de los elementos.   
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-0">
            <p>borde sin redondear</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-2">
            <p>borde redondeado de 2px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-4">
            <p>borde redondeado de 4px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-8">
            <p>borde redondeado de 8px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-16">
            <p>borde redondeado de 16px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-20">
            <p>borde redondeado de 20px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-redondeado-24">
            <p>borde redondeado de 24px</p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-l-redondeado-0 borde-r-redondeado-24">
            <p>
              borde sin redondear a la derecha
              redondeado a 24px a la izquierda
            </p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-t-l-redondeado-16">
            <p>
              borde redondeado arriba a la izquierda
            </p>
          </div>
          '
        />
      </div>
      <div class="columna-6">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <div class="borde borde-b-r-redondeado-16">
            <p>
              borde redondeado abajo a la derecha
            </p>
          </div>
          '
        />
      </div>
    </div>
    
  </div>
</template>
