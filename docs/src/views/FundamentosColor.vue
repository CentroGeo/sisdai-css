<script setup>
import EjemploMuestraColor from '../componetes/EjemploMuestraColor.vue'
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">
    
    <div class="ancho-lectura">
      <h1>Color</h1>
      
      <p>
        La paleta de color del Sisdai, así como su uso y aplicación en interfaces digitales, 
        tienen como fundamento los criterios de contraste de las 
        <a href="https://www.w3.org/TR/WCAG22/">
          Directrices de Accesibilidad al Contenido Web 2.2
        </a>
        (WCAG 2.2) de la Iniciativa de Accesibilidad Web (WAI) del Consorcio World Wide Web (W3C). 
      </p>
      <p>
        Además la lógica del color en el Sisdai atiende requerimientos de jerarquia, legibilidad y consistencia.
        Desde el diseño hasta la implementación en las bibliotecas y componentes.
      </p>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Perfil de color</h2>
      <p>
        Las variables de color se encuentran definidas en el archivo <code>src/color/perfil-sisdai.scss</code>. 
        Estas variables son la base modificable de cada perfil de color.
      </p>
      <p>
        Además se incorporan otros colores, reutilizables en todos los perfiles, para mejorar la usabilidad 
        y la comunicación visual efectiva en el diseño de la interfaz de persona usuaria.
      </p>
    </div>
    <div class="flex flex-contenido-centrado m-y-5">
      <div class="columna-4">
        <p>Primario</p>
        <EjemploMuestraColor variable="var(--color-primario-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-primario-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-primario-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-primario-1)" texto="#000"/>
      </div>
      <div class="columna-4">
        <p>Secundario</p>
        <EjemploMuestraColor variable="var(--color-secundario-12)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-11)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-10)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-9)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-8)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-7)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-secundario-6)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-secundario-5)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-secundario-4)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-secundario-3)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-secundario-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-secundario-1)" texto="#000"/>
      </div>
    </div>

    <div class="ancho-lectura">
      <p>
        Para crear un nuevo perfil de color es necesario únicamente crear las 16 variables antes mencionadas,
        tomanto como ejemplo el archivo de perfil de color predeterminado <code>src/color/perfil-sisdai.scss</code>.
      </p>
      <EjemploCodigo
        :tiene_ejemplo="false"
        tipo="CSS"
        codigo="
          body[data-perfil='predeterminada'],
          :root {
            // colores primarios
            --color-primario-4: #2B13B1;
            --color-primario-3: #3F17E4;
            --color-primario-2: #9674E1;
            --color-primario-1: #A28BDF;
            
            // colores secundarios
            --color-secundario-12: #201540;
            --color-secundario-11: #1f143f;
            --color-secundario-11-rgb: 31, 20, 63;
            --color-secundario-10: #2B204C;
            --color-secundario-9: #3A2F5B;
            --color-secundario-8: #453B67;
            --color-secundario-7: #6E6380;
            --color-secundario-6: #978CB7;
            --color-secundario-5: #BFB5E0;
            --color-secundario-4: #DBD0FB;
            --color-secundario-3: #E4DEFC;
            --color-secundario-2: #F4F1FE;
            --color-secundario-1: #FEFAF8;
          }
        "
      />
    </div>

    <div class="ancho-lectura">
      <h3 class="m-t-5">Colores base</h3>
      <p>
        Definidas en el archivo <code>src/color/base.scss</code>, las variables base son colores que se reutilizan en
        todos los perfiles de color, no es necesario redefinirlas para crear un perfil de color nuevo.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <p>Neutro</p>
        <EjemploMuestraColor variable="var(--color-neutro-7)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-6)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-5)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-3)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-1)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-0)" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Interactivo</p>
        <EjemploMuestraColor variable="var(--color-interactivo-6)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-interactivo-5)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-4)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-3)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-2)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-interactivo-1)" texto="#fff"/>
      </div>
    </div>

    <div class="flex">
      <div class="columna-4">
        <p>Informativo</p>
        <EjemploMuestraColor variable="var(--color-informativo-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-informativo-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-informativo-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-informativo-1)" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Confirmación</p>
        <EjemploMuestraColor variable="var(--color-confirmacion-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-1)" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Alerta</p>
        <EjemploMuestraColor variable="var(--color-alerta-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-alerta-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-alerta-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-alerta-1)" texto="#000"/>
      </div>
    
      <div class="columna-4">
        <p>Error</p>
        <EjemploMuestraColor variable="var(--color-error-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-error-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-error-2)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-error-1)" texto="#000"/>
      </div>
    </div>

    <div class="ancho-lectura">
      <h3 class="m-t-5">Colores institucionales</h3>
      <p>
        Definidas en el archivo <code>src/color/institucionales.scss</code>, estas variables son colores definidos 
        en base a los colores institucionales del Gobierno de México y Conahcyt durante el 2024.
        Que necesitarán actualizarse cuando los colores de identidad de alguno cambie.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <p>Gobierno de México</p>
        <EjemploMuestraColor variable="var(--color-mx-2)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-mx-1)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-mx-0)" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Conahcyt</p>
        <EjemploMuestraColor variable="var(--color-conahcyt-degradado)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-4)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-3)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-2)" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-1)" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-0)" texto="#000"/>
      </div>
    </div>

  </div>
</template>
