<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Hipervínculos</h1>
      <p>
        Para los hipervínculos se aplican estilos a las etiquetas nativas <code>&lt;a/></code> 
        las cuales recomendamos utilizar cumpliendo con los requerimientos del HTML semántico. 
        Esto asegura que los enlaces se integren correctamente en la estructura de la página y 
        sean accesibles para todas las personas usuarias. 
      </p>
      <p>
        Para aquellos casos donde se requiera aplicar estilos de hipervínculo a un elemento 
        que no es un enlace nativo, se puede utilizar la clase <code>.hipervinculo</code>. 
        A estos elementos se les debe asignar el atributo <code>role="link"</code> para 
        preservar la semántica y asegurar que mantengan la funcionalidad de un hipervínculo, 
        generalmente a través de funciones de JavaScript.
      </p>
      <p>
        Cuando se utiliza la propiedad <code>target="_blank"</code> para abrir enlaces en 
        una nueva pestaña, se añade un pseudo elemento con el contenido <code>content:". Abre nueva pestaña."</code>. 
        Este añadido mejora la experiencia para las personas usuarias que utilizan lectores 
        de pantalla, proporcionando un contexto adicional sobre el comportamiento del enlace. 
        Esta práctica ayuda a comunicar claramente que el enlace se abrirá en una nueva ventana 
        o pestaña, lo cual es útil para la navegación accesible.
      </p>
    </div>

    <div class="flex flex-contenido-centrado m-t-5">
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <a href="#">
            Hipervínculo de ejemplo
          </a>
        '
      />
      </div>

      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ejemplo hipervínculo externo
            <span
              class="pictograma-enlace-externo"
              aria-hidden="true"
            />
          </a>
        '
      />
      </div>
    </div>

  </div>
</template>
