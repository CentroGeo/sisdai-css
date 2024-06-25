<script setup>
import EjemploMuestraColor from '../componetes/EjemploMuestraColor.vue'
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
      <h2 class="m-t-10">Paleta de color</h2>
      <p>
        El color predeterminado del Sisdai utiliza la familia de azul celeste como color principal de acción (--color-primario 1-4),
        la familia de azul marino para organizar el contenido de distintos elementos (--color-secundario 1-12).
      </p>
      <p>
        Las variables de color se encuentran definidas en el archivo <code>src/color/perfil-predeterminada.scss</code>. 
        Estas variables son la base modificable de cada perfil de color.
      </p>
      
    </div>
    <div class="flex m-y-5">
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-primario-4)" hexadecimal="#0058cc" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-primario-3)" hexadecimal="#0068FF" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-primario-2)" hexadecimal="#6692FF" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-primario-1)" hexadecimal="#80AAFF" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-12)" hexadecimal="#102543" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-11)" hexadecimal="#142a48" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-10)" hexadecimal="#1B304E" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-9)" hexadecimal="#2A3F5D" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-8)" hexadecimal="#364A69" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-7)" hexadecimal="#5E7392" texto="#fff"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-6)" hexadecimal="#889DBB" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-5)" hexadecimal="#B1C6E4" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-4)" hexadecimal="#CCE1FF" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-3)" hexadecimal="#DBEAFF" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-2)" hexadecimal="#F0F6FF" texto="#000"/>
      </div>
      <div class="columna-4">
        <EjemploMuestraColor variable="var(--color-secundario-1)" hexadecimal="#F8FBFF" texto="#000"/>
      </div>
    </div>

    <div class="ancho-lectura">
      <p>
        Además se incorporan otros colores, reutilizables en todos los perfiles, para mejorar la usabilidad 
        y la comunicación visual efectiva en el diseño de la interfaz de persona usuaria.
      </p>
      <h3 class="m-t-5">Colores base</h3>
      <p>
        Definidas en el archivo <code>src/color/base.scss</code>, las variables base son colores que se reutilizan en
        todos los perfiles de color, no es necesario redefinirlas para crear una paleta nueva.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <p>Neutro</p>
        <EjemploMuestraColor variable="var(--color-neutro-7)" hexadecimal="#000000" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-6)" hexadecimal="#141414" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-5)" hexadecimal="#434344" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-4)" hexadecimal="#767677" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-neutro-3)" hexadecimal="#AAAAAA" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-2)" hexadecimal="#DDDDDD" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-1)" hexadecimal="#F5F5F5" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-neutro-0)" hexadecimal="#FFFFFF" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Interactivo</p>
        <EjemploMuestraColor variable="var(--color-interactivo-6)" hexadecimal="#9233FF" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-interactivo-5)" hexadecimal="#CF99FF" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-4)" hexadecimal="#8999CC" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-3)" hexadecimal="#668BFF" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-interactivo-2)" hexadecimal="#356CCC" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-interactivo-1)" hexadecimal="#005DFF" texto="#fff"/>
      </div>
    </div>

    <div class="flex">
      <div class="columna-4">
        <p>Informativo</p>
        <EjemploMuestraColor variable="var(--color-informativo-4)" hexadecimal="#172136" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-informativo-3)" hexadecimal="#19439C" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-informativo-2)" hexadecimal="#66A5FE" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-informativo-1)" hexadecimal="#ECF2FF" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Confirmación</p>
        <EjemploMuestraColor variable="var(--color-confirmacion-4)" hexadecimal="#0D2619" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-3)" hexadecimal="#2A6F4D" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-2)" hexadecimal="#1BD97C" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-confirmacion-1)" hexadecimal="#E7FBF1" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Alerta</p>
        <EjemploMuestraColor variable="var(--color-alerta-4)" hexadecimal="#201C11" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-alerta-3)" hexadecimal="#916802" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-alerta-2)" hexadecimal="#FFDC69" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-alerta-1)" hexadecimal="#FFF7E3" texto="#000"/>
      </div>
    
      <div class="columna-4">
        <p>Error</p>
        <EjemploMuestraColor variable="var(--color-error-4)" hexadecimal="#341116" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-error-3)" hexadecimal="#940B1C" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-error-2)" hexadecimal="#FF6969" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-error-1)" hexadecimal="#FCDADE" texto="#000"/>
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
        <EjemploMuestraColor variable="var(--color-mx-5)" hexadecimal="#434344" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-mx-4)" hexadecimal="#767677" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-mx-3)" hexadecimal="#AAAAAA" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-mx-2)" hexadecimal="#DDDDDD" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-mx-1)" hexadecimal="#F5F5F5" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-mx-0)" hexadecimal="#FFFFFF" texto="#000"/>
      </div>

      <div class="columna-4">
        <p>Conahcyt</p>
        <EjemploMuestraColor variable="var(--color-conahcyt-5)" hexadecimal="#CF99FF" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-4)" hexadecimal="#8999CC" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-3)" hexadecimal="#668BFF" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-2)" hexadecimal="#356CCC" texto="#fff"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-1)" hexadecimal="#005DFF" texto="#000"/>
        <EjemploMuestraColor variable="var(--color-conahcyt-0)" hexadecimal="#005DFF" texto="#000"/>
      </div>
    </div>

  </div>
</template>
