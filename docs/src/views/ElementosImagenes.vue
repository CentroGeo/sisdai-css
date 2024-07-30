<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Imágenes</h1>
      
      <p>
        Es importante que cuando las imágenes aporten información relevante para el 
        sitio incluyan el atributo <code>alt</code> (<code>alt="texto que describe la imagen"</code>);
        sin embargo, si la imagen es ilustratova y no aporta contenido sustancial
        este atributo puede dejarse vacio (<code>alt=""</code>).
      </p>
      <p>
        Con la configuración de mostrar solo texto, las imágenes no deben mostrarse para 
        mantener un diseño más claro y centrado en el texto. 
      </p>
    </div>

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Imagen &lt; img /></h2>
      <p>
        La etiqueta <code>&lt;img/></code> es un elemento en línea que se renderiza 
        según las dimensiones especificadas en el archivo de la imagen. Es importante 
        gestionar adecuadamente las dimensiones para asegurar que la imagen se muestre 
        correctamente sin distorsión.
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
      <p>
        La etiqueta <code>&lt;picture/></code> permite definir varios archivos de imagen para 
        el mismo visual, facilitando la adaptación a diferentes tamaños de pantalla o resoluciones. 
        Utilizando el atributo <code>media</code>, se puede especificar el ancho mínimo o máximo 
        para seleccionar cuál imagen mostrar según el tamaño de la ventana del navegador. 
      </p>
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
        La etiqueta <code>&lt;figure/></code> es útil para agrupar una o varias imágenes 
        y se complementa con <code>&lt;figcaption/></code>, donde se puede agregar una 
        descripción más detallada de las imágenes contenidas. Esta descripción es accesible 
        y visible en todos los navegadores. Incluso si las imágenes se ocultan en la vista 
        mostrar solo texto, el texto de <code>&lt;figcaption/></code> sigue siendo visible, 
        proporcionando contexto sobre el contenido oculto.
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
