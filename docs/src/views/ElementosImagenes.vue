<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Imágenes</h1>
      
      <p class="h4">Acerca de la accesibilidad en el Sisdai.</p>
      <p>
        Todas las imágenes deben tener el atributo <code>alt</code>. 
        Éste atrubuto <b>puede</b> ir vacio <code>alt=""</code> si la imagen es únicamente decorativa;  
        pero <b>debe</b> llevar texo alternativo <code>alt="texto que describe la imagen"</code> 
        cuando la imágen da más información referente al contenido del sitio.
      </p>
      <p>
        Ninguna imágen debe verse en la vista simplificada.
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Imagen &lt; img /></h2>
      <p>
        La etiqueta de imagen <code>&lt; img /></code> es un elemento de linea
        que se dibuja dependiendo de las dimensiones del archivo.
      </p>
    </div>
    <div class="flex">
      <div class="columna-8">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <img 
            src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/xiu.jpg" 
            alt=""
          />
          
          Si el archivo es más pequeño que el contenedor en donde está,
          únicamente cubrirá la proporción de sus dimensiones.
        '
      />
      </div>
      <div class="columna-8">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <img 
            src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/bose-1.jpg" 
            alt=""
          />
          
          Si las dimensiones del archivo son mayores que del contenedor en el que está,
          el ancho se ajusta para no pasar del ancho del contenedor.
        '
      />
      </div>
    </div>

    
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Imagen compuesta &lt; picture /></h2>
      <p>Con la etiqueta <code>picture</code> se pueden definir distintos archivos para la misma imágen.</p>
      <p>Con el atributo <code>media</code> de puede definir el ancho minimo (o máximo) para mostrar una u otra imágen.</p>

      <EjemploCodigo
        tipo='HTML'
        codigo='
          <picture> 
            <source 
              srcset="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/pekibb.jpg"
              media="(min-width: 700px)"
            />
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/pekihermosa.jpg"
              alt="" 
            />
          </picture>
        '
      />
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Contenedor de imágenes &lt; figure /></h2>
      <p>
        La etiqueta de <code>figure</code> sirve para encapsular una o varias imágenes. 
        Cuenta con la etiqueda de <code>figcaption</code> en donde se puede agregar 
        una descripcion más explicativa de lo que se está viendo, 
        este texto es visible por todos los navegadores.
      </p>
      <p>
        Si se ocultan las imágenes por la selección de la <b>Vista simplificada</b>, 
        el texto del <code>figcaption</code> permanecerá visible.
      </p>
    </div>
    <EjemploCodigo
        tipo='HTML'
        codigo='
          <figure>
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/esparragus-1.jpg" 
              height="380px"
              alt=""
            />
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/esparragus-2.jpg" 
              height="380px"
              alt=""
            />
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/esparragus-3.jpg" 
              height="380px"
              alt=""
            />
            <img 
              src="https://cdn.conacyt.mx/sisdai/recursos/imagenes/documentacion/esparragus-4.jpg" 
              height="380px"
              alt=""
            />
            <figcaption>
              Galería de esparragus
            </figcaption>
          </figure>
        '
      />

  </div>
</template>
