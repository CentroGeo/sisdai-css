<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Hipervínculos</h1>
      <p>
        Los estilos se aplican a las etiquetas nativas para hipervínculos <code>a</code>.
        Etiqueta que recomendamo utilizar observando los requerimientos del HTML semántico.
      </p>
      <p>
        Aún así, existe la clase <code>.hipervinculo</code> para agregarle el estilo a otro tipo de elemento,
        al que además deberá agregársele el rol de boton <code>role="link"</code> y en el que se 
        debe cuidar mantener la funcionalidad de un hipervínculo a través de funciones de javascript.
      </p>
      <p>
        Al utilizar la propiedad <code>target="_blank"</code> se le añade un pseudoelemento
        con el contenido <code>content:". Abre nueva pestaña.";</code>  para mejorar accesibilidad con lectores de pantalla.
      </p>
    </div>

    <div class="flex flex-contenido-centrado m-t-5">
      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <a href="#">
        hipervinculo
      </a>
      '
      />
      </div>

      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <button 
        class="hipervinculo"
        type="button"
        role="link"
      >
        boton estilo hipervinculo
      </a>
      '
      />
      </div>

      <div class="columna-4">
      <EjemploCodigoVertical
      html='
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        hipervinculo externo
        <span
          class="pictograma-enlace-externo"
          aria-hidden="true"
        />
      </a>
      '
      />
      </div>
    </div>


    <div class="ancho-lectura">
      <h2 class="m-t-10">Hipervínculos institucionales</h2>
      <p>
        Estos estilos vienen copiados directamente de los estilos que actualmente se utilizan
        en las páginas de Gobierno y del Conhacyt. No forman parte del sistema de diseño pero 
        al ser requeridos para agregar los pies de página y encabezados, necesitan estar.
      </p>
      
      <p class="gobmx-fondo-oscuro-1 p-3">
        <a href="#" class="hipervinculo-gobmx m-r-3">a.hipervinculo-gobmx</a>
        <button class="hipervinculo-gobmx">button.hipervinculo-gobmx</button>
      </p>
      <p class="conahcyt-fondo-oscuro-1 p-3">
        <a href="#" class="hipervinculo-conahcyt m-r-3">a.hipervinculo-conahcyt</a>
        <button class="hipervinculo-conahcyt">button.hipervinculo-conahcyt</button>
      </p>
     

    </div>

  </div>
</template>
