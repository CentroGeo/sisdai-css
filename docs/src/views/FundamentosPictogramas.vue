<script setup>
import EjemploCodigoVertical from '../componetes/EjemploCodigoVertical.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="contenedor ancho-lectura">
      <h1>Pictogramas</h1>
      <p>
        La mayoría de los pictogramas utilizados en Sisdai se recuperaron de 
        <a href="https://carbondesignsystem.com" target="_blank" ref="noopener noreferrer">Carbon Design System</a>
        de código abierto.
      </p>
      <p>
        Desde Sisdai se han incorporado pictogramas acordes a requerimientos de comunicación particulares basados en la plantilla maestra del mismo. 
      </p>
      <p>
        Estos pictogramas se acomodan dentro de una tipografía para mejorar la flexibilidad de su uso dentro de la web
        y se utilizan mediante clases que se utilizan en etiquetas de texto, como se muestra en el ejemplo.
      </p>

      <EjemploCodigoVertical
      html='
      <h2 class="icono-actualizar"></h2>
      '
      />
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Listado de clases</h2>
    </div>
    <div class="columns-3 columns-1-mov">
      <div>
        <span class="icono-actualizar"></span>
        <span class="icono-clase-ejemplo">icono-actualizar</span>
      </div>
      <div>
        <span class="icono-agregar"></span>
        <span class="icono-clase-ejemplo">icono-agregar</span>
      </div>
      <div>
        <span class="icono-angulo-abajo"></span>
        <span class="icono-clase-ejemplo">icono-angulo-abajo</span>
      </div>
      <div>
        <span class="icono-angulo-arriba"></span>
        <span class="icono-clase-ejemplo">icono-angulo-arriba</span>
      </div>
      <div>
        <span class="icono-angulo-derecho"></span>
        <span class="icono-clase-ejemplo">icono-angulo-derecho</span>
      </div>
      <div>
        <span class="icono-angulo-doble-abajo"></span>
        <span class="icono-clase-ejemplo">icono-angulo-doble-abajo</span>
      </div>
      <div>
        <span class="icono-angulo-doble-arriba"></span>
        <span class="icono-clase-ejemplo">icono-angulo-doble-arriba</span>
      </div>
      <div>
        <span class="icono-angulo-doble-derecha"></span>
        <span class="icono-clase-ejemplo">icono-angulo-doble-derecha</span>
      </div>
      <div>
        <span class="icono-angulo-doble-izquierda"></span>
        <span class="icono-clase-ejemplo">icono-angulo-doble-izquierda</span>
      </div>
      <div>
        <span class="icono-angulo-izquierdo"></span>
        <span class="icono-clase-ejemplo">icono-angulo-izquierdo</span>
      </div>
      <div>
        <span class="icono-aprobado"></span>
        <span class="icono-clase-ejemplo">icono-aprobado</span>
      </div>
      <div>
        <span class="icono-archivo-descargar"></span>
        <span class="icono-clase-ejemplo">icono-archivo-descargar</span>
      </div>
      <div>
        <span class="icono-archivo-subir"></span>
        <span class="icono-clase-ejemplo">icono-archivo-subir</span>
      </div>
      <div>
        <span class="icono-arrastrar"></span>
        <span class="icono-clase-ejemplo">icono-arrastrar</span>
      </div>
      <div>
        <span class="icono-ayuda"></span>
        <span class="icono-clase-ejemplo">icono-ayuda</span>
      </div>
      <div>
        <span class="icono-bajar-capa"></span>
        <span class="icono-clase-ejemplo">icono-bajar-capa</span>
      </div>
      <div>
        <span class="icono-buscar"></span>
        <span class="icono-clase-ejemplo">icono-buscar</span>
      </div>
      <div>
        <span class="icono-calendario"></span>
        <span class="icono-clase-ejemplo">icono-calendario</span>
      </div>
      <div>
        <span class="icono-cambio-tipografia"></span>
        <span class="icono-clase-ejemplo">icono-cambio-tipografia</span>
      </div>
      <div>
        <span class="icono-capa-lineas"></span>
        <span class="icono-clase-ejemplo">icono-capa-lineas</span>
      </div>
      <div>
        <span class="icono-capa-puntos"></span>
        <span class="icono-clase-ejemplo">icono-capa-puntos</span>
      </div>
      <div>
        <span class="icono-casilla"></span>
        <span class="icono-clase-ejemplo">icono-casilla</span>
      </div>
      <div>
        <span class="icono-casilla-verificada"></span>
        <span class="icono-clase-ejemplo">icono-casilla-verificada</span>
      </div>
      <div>
        <span class="icono-cerrar"></span>
        <span class="icono-clase-ejemplo">icono-cerrar</span>
      </div>
      <div>
        <span class="icono-colaborar"></span>
        <span class="icono-clase-ejemplo">icono-colaborar</span>
      </div>
      <div>
        <span class="icono-compartir"></span>
        <span class="icono-clase-ejemplo">icono-compartir</span>
      </div>
      <div>
        <span class="icono-contraste"></span>
        <span class="icono-clase-ejemplo">icono-contraste</span>
      </div>
      <div>
        <span class="icono-control-comenzar"></span>
        <span class="icono-clase-ejemplo">icono-control-comenzar</span>
      </div>
      <div>
        <span class="icono-control-detener"></span>
        <span class="icono-clase-ejemplo">icono-control-detener</span>
      </div>
      <div>
        <span class="icono-control-final"></span>
        <span class="icono-clase-ejemplo">icono-control-final</span>
      </div>
      <div>
        <span class="icono-control-inicio"></span>
        <span class="icono-clase-ejemplo">icono-control-inicio</span>
      </div>
      <div>
        <span class="icono-control-pausa"></span>
        <span class="icono-clase-ejemplo">icono-control-pausa</span>
      </div>
      <div>
        <span class="icono-copiar"></span>
        <span class="icono-clase-ejemplo">icono-copiar</span>
      </div>
      <div>
        <span class="icono-documento"></span>
        <span class="icono-clase-ejemplo">icono-documento</span>
      </div>
      <div>
        <span class="icono-documento-csv"></span>
        <span class="icono-clase-ejemplo">icono-documento-csv</span>
      </div>
      <div>
        <span class="icono-documento-geojson"></span>
        <span class="icono-clase-ejemplo">icono-documento-geojson</span>
      </div>
      <div>
        <span class="icono-documento-geopaquete"></span>
        <span class="icono-clase-ejemplo">icono-documento-geopaquete</span>
      </div>
      <div>
        <span class="icono-documento-pdf"></span>
        <span class="icono-clase-ejemplo">icono-documento-pdf</span>
      </div>
      <div>
        <span class="icono-documento-png"></span>
        <span class="icono-clase-ejemplo">icono-documento-png</span>
      </div>
      <div>
        <span class="icono-documento-ppt"></span>
        <span class="icono-clase-ejemplo">icono-documento-ppt</span>
      </div>
      <div>
        <span class="icono-documento-word"></span>
        <span class="icono-clase-ejemplo">icono-documento-word</span>
      </div>
      <div>
        <span class="icono-editar"></span>
        <span class="icono-clase-ejemplo">icono-editar</span>
      </div>
      <div>
        <span class="icono-eliminar"></span>
        <span class="icono-clase-ejemplo">icono-eliminar</span>
      </div>
      <div>
        <span class="icono-enlace-subrayado"></span>
        <span class="icono-clase-ejemplo">icono-enlace-subrayado</span>
      </div>
      <div>
        <span class="icono-estrella"></span>
        <span class="icono-clase-ejemplo">icono-estrella</span>
      </div>
      <div>
        <span class="icono-flecha-abajo"></span>
        <span class="icono-clase-ejemplo">icono-flecha-abajo</span>
      </div>
      <div>
        <span class="icono-flecha-abajo-derecha"></span>
        <span class="icono-clase-ejemplo">icono-flecha-abajo-derecha</span>
      </div>
      <div>
        <span class="icono-flecha-abajo-izquierda"></span>
        <span class="icono-clase-ejemplo">icono-flecha-abajo-izquierda</span>
      </div>
      <div>
        <span class="icono-flecha-arriba"></span>
        <span class="icono-clase-ejemplo">icono-flecha-arriba</span>
      </div>
      <div>
        <span class="icono-flecha-arriba-derecha"></span>
        <span class="icono-clase-ejemplo">icono-flecha-arriba-derecha</span>
      </div>
      <div>
        <span class="icono-flecha-arriba-izquierda"></span>
        <span class="icono-clase-ejemplo">icono-flecha-arriba-izquierda</span>
      </div>
      <div>
        <span class="icono-flecha-derecha"></span>
        <span class="icono-clase-ejemplo">icono-flecha-derecha</span>
      </div>
      <div>
        <span class="icono-flecha-izquierda"></span>
        <span class="icono-clase-ejemplo">icono-flecha-izquierda</span>
      </div>
      <div>
        <span class="icono-flechas-horizontales"></span>
        <span class="icono-clase-ejemplo">icono-flechas-horizontales</span>
      </div>
      <div>
        <span class="icono-flkt"></span>
        <span class="icono-clase-ejemplo">icono-flkt</span>
      </div>
      <div>
        <span class="icono-grupo"></span>
        <span class="icono-clase-ejemplo">icono-grupo</span>
      </div>
      <div>
        <span class="icono-guardar"></span>
        <span class="icono-clase-ejemplo">icono-guardar</span>
      </div>
      <div>
        <span class="icono-social-facebook"></span>
        <span class="icono-clase-ejemplo">icono-social-facebook</span>
      </div>
      <div>
        <span class="icono-social-github"></span>
        <span class="icono-clase-ejemplo">icono-social-github</span>
      </div>
      <div>
        <span class="icono-social-instagram"></span>
        <span class="icono-clase-ejemplo">icono-social-instagram</span>
      </div>
      <div>
        <span class="icono-social-linkedin"></span>
        <span class="icono-clase-ejemplo">icono-social-linkedin</span>
      </div>
      <div>
        <span class="icono-social-twitter"></span>
        <span class="icono-clase-ejemplo">icono-social-twitter</span>
      </div>
      <div>
        <span class="icono-social-youtube"></span>
        <span class="icono-clase-ejemplo">icono-social-youtube</span>
      </div>
      <div>
        <span class="icono-social-x"></span>
        <span class="icono-clase-ejemplo">icono-social-x</span>
      </div>
      <div>
        <span class="icono-subir-capa"></span>
        <span class="icono-clase-ejemplo">icono-subir-capa</span>
      </div>
      <div>
        <span class="icono-informacion"></span>
        <span class="icono-clase-ejemplo">icono-informacion</span>
      </div>
      <div>
        <span class="icono-inicio"></span>
        <span class="icono-clase-ejemplo">icono-inicio</span>
      </div>
      <div>
        <span class="icono-mapa-centro"></span>
        <span class="icono-clase-ejemplo">icono-mapa-centro</span>
      </div>
      <div>
        <span class="icono-mapa-generador"></span>
        <span class="icono-clase-ejemplo">icono-mapa-generador</span>
      </div>
      <div>
        <span class="icono-maximizar"></span>
        <span class="icono-clase-ejemplo">icono-maximizar</span>
      </div>
      <div>
        <span class="icono-menu"></span>
        <span class="icono-clase-ejemplo">icono-menu</span>
      </div>
      <div>
        <span class="icono-mexico"></span>
        <span class="icono-clase-ejemplo">icono-mexico</span>
      </div>
      <div>
        <span class="icono-minimizar"></span>
        <span class="icono-clase-ejemplo">icono-minimizar</span>
      </div>
      <div>
        <span class="icono-mover"></span>
        <span class="icono-clase-ejemplo">icono-mover</span>
      </div>
      <div>
        <span class="icono-nivel"></span>
        <span class="icono-clase-ejemplo">icono-nivel</span>
      </div>
      <div>
        <span class="icono-numerales"></span>
        <span class="icono-clase-ejemplo">icono-numerales</span>
      </div>
      <div>
        <span class="icono-ojo-ocultar"></span>
        <span class="icono-clase-ejemplo">icono-ojo-ocultar</span>
      </div>
      <div>
        <span class="icono-ojo-ver"></span>
        <span class="icono-clase-ejemplo">icono-ojo-ver</span>
      </div>
      <div>
        <span class="icono-ordenar-alfabetico-asc"></span>
        <span class="icono-clase-ejemplo">icono-ordenar-alfabetico-asc</span>
      </div>
      <div>
        <span class="icono-ordenar-alfabetico-desc"></span>
        <span class="icono-clase-ejemplo">icono-ordenar-alfabetico-desc</span>
      </div>
      <div>
        <span class="icono-ordenar-asc"></span>
        <span class="icono-clase-ejemplo">icono-ordenar-asc</span>
      </div>
      <div>
        <span class="icono-ordenar-desc"></span>
        <span class="icono-clase-ejemplo">icono-ordenar-desc</span>
      </div>
      <div>
        <span class="icono-persona"></span>
        <span class="icono-clase-ejemplo">icono-persona</span>
      </div>
      <div>
        <span class="icono-capa-poligono"></span>
        <span class="icono-clase-ejemplo">icono-capa-poligono</span>
      </div>
      <div>
        <span class="icono-reloj"></span>
        <span class="icono-clase-ejemplo">icono-reloj</span>
      </div>
      <div>
        <span class="icono-restar"></span>
        <span class="icono-clase-ejemplo">icono-restar</span>
      </div>
      <div>
        <span class="icono-tabla"></span>
        <span class="icono-clase-ejemplo">icono-tabla</span>
      </div>
      <div>
        <span class="icono-teclado"></span>
        <span class="icono-clase-ejemplo">icono-teclado</span>
      </div>
      <div>
        <span class="icono-ubicacion"></span>
        <span class="icono-clase-ejemplo">icono-ubicacion</span>
      </div>
      <div>
        <span class="icono-vista-simplificada"></span>
        <span class="icono-clase-ejemplo">icono-vista-simplificada</span>
      </div>
      <div>
        <span class="icono-voto-no"></span>
        <span class="icono-clase-ejemplo">icono-voto-no</span>
      </div>
      <div>
        <span class="icono-voto-si"></span>
        <span class="icono-clase-ejemplo">icono-voto-si</span>
      </div>
      <div>
        <span class="icono-accesibilidad"></span>
        <span class="icono-clase-ejemplo">icono-accesibilidad</span>
      </div>
      <div>
        <span class="icono-restablecer"></span>
        <span class="icono-clase-ejemplo">icono-restablecer</span>
      </div>
      <div>
        <span class="icono-flecha-izquierda"></span>
        <span class="icono-clase-ejemplo">icono-flecha-izquierda</span>
      </div>
      <div>
        <span class="icono-enlace-externo"></span>
        <span class="icono-clase-ejemplo">icono-enlace-externo</span>
      </div>
      <div>
        <span class="icono-metadatos"></span>
        <span class="icono-clase-ejemplo">icono-metadatos</span>
      </div>
      <div>
        <span class="icono-visualizador"></span>
        <span class="icono-clase-ejemplo">icono-visualizador</span>
      </div>
      <div>
        <span class="icono-zoom-instruccional"></span>
        <span class="icono-clase-ejemplo">icono-zoom-instruccional</span>
      </div>
    </div>
      

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Tamaños</h2>
      <p>
        Los iconos al ser tipografía varian dependiendo de la etiquta en donde se encuentre.
        Aún así en el sistema de diseño especifica que se deben usar los tamaños originales 
        o los que correspondan a incrementos de 24px, 32px y 48px respectivamente. 
      </p>
      <p>
        Para lo que se crearon las clases de tamaño <code>.icono-24</code>, <code>.icono-32</code>
        e <code>.icono-48</code> en donde el número corresponde al tamaño de la fuente en pixeles
        cuando la tipografía base esta en <code>16px</code>. Están declarados en unidades <code>rem</code>
        para respetar la jerarquia en caso que se incremente o reduzca el tamaño tipográfico general.
      </p>
      <EjemploCodigoVertical
      html='
      <span class="icono-flkt icono-24"></span>
      <span class="icono-flkt icono-32"></span>
      <span class="icono-flkt icono-48"></span>
      '
      />

      <h3 class="m-t-10">Tamaños responsivos</h3>
      <p>
        Como en el resto de las clases responsivas, se utiliza agregando el subfijo 
        <code>-mov</code> para dispositivos móviles y 
        <code>-esc</code> para dispositivos de escritorio.
      </p>
      <EjemploCodigoVertical
      html='
      <span class="icono-flkt icono-24-mov icono-48-esc"></span>
      '
      />
    </div>

  </div>
</template>
<style>
  .icono-clase-ejemplo {
    background: var(--nota-fondo);
    margin: 8px;
    padding: 4px 16px;
    border-radius: 4px;
  }
</style>
