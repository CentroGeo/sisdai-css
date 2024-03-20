<template>
  <div>

    <h1>Imagenes</h1>
    
    <h2 class="m-t-10">&lt; img /></h2>
    <div class="grid">
      <div class="columna-6">
        <pre>
        &lt; img
          src="https://picsum.photos/200/150"
          alt="" />
        </pre>
        <p>
          La etiqueta de imágen es un elemento de linea que se dibuja dependiendo de las dimensiones del archivo.
          <img src="https://picsum.photos/200/150" alt=""> Si el archivo es más pequeño que el contenedor en donde está, únicamente cubrirá la proporción de sus dimensiones.
        </p>
      </div>
      <div class="columna-6">
        <pre>
        &lt; img
          src="https://picsum.photos/960/960"
          alt="" />
        </pre>
        <p>
          Si las dimensiones del archivo son mayores que del contenedor en el que está, se escalará para que el ancho sea del 100% el objeto que lo contenga.
          <img src="https://picsum.photos/920/920" alt="">
        </p>
      </div>
      <div class="columna-4">
        <p class="titulo-lista m-x-2">Notas de accesibilidad</p>
        <ul>
          <li>Ninguna imágen debe verse en la vista simplificada</li>
          <li>Siemre debe ir el atributo <code>alt</code> que:
            <ul>
              <li><b>puede</b> ir vacio <code>alt=""</code> si la imagen es únicamente decorativa</li>
              <li><b>debe</b> llevar texo alternativo <code>alt="texto que describe la imagen"</code> cuando la imágen da más información referente al contenido del sitio.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  
    <h2 class="m-t-10">&lt; picture ></h2>
    <div class="grid">
      <div class="columna-6">
        <picture> 
          <source srcset="https://picsum.photos/1920/1080" media="(min-width: 800px)" />
          <img src="https://picsum.photos/800/800" alt="" />
        </picture>
      </div>
      <div class="columna-6">
        <pre>
        &lt;picture> 
        &lt;source 
          srcset="https://picsum.photos/1920/1080"
          media="(min-width: 800px)" />
        &lt;img
          src="https://picsum.photos/800/800"
          alt="" />
        &lt;/picture>
        </pre>
      </div>
      <div class="columna-4">
        <p>Con la etiqueta <code>picture</code> se pueden definir distintos archivos para la misma imágen.</p>
        <p>Con el atributo <code>media</code> de puede definir el breackpoint de ancho minimo (o máximo) para mostrar una u otra imágen.</p>
      </div>
    </div>
  
    <h2 class="m-t-10">&lt; figure ></h2>
    <div class="grid">
      <div class="columna-6">
        <figure>
          <img src="https://picsum.photos/1900/1000" alt="">
          <img src="https://picsum.photos/1000/600" alt="">
          <figcaption>
            Galería de imágenes
          </figcaption>
        </figure>
      </div>
      <div class="columna-6">
        <pre>
        &lt;figure>
        &lt;img 
          src="https://picsum.photos/1900/1000"
          alt="">
        &lt;img 
          src="https://picsum.photos/1000/600"
          alt="">
        &lt;figcaption>
          Galería de imágenes
        &lt;/figcaption>
        &lt;/ figure>
        </pre>
      </div>
      <div class="columna-4">
        <p>La etiqueta de <code>figure</code> sirve para encapsular una o varias imágenes. Cuenta con la etiqueda de <code>figcaption</code> en donde se puede agregar una descripcion más explicativa de lo que se está viendo, este texto es visible por todos los navegadores</p>
        <p>Si se ocultan las imágenes por la selección de la <b>Vista simplificada</b>, el texto del <code>figcaption</code> permanecerá visible</p>
      </div>
    </div>
  </div>
</template>
