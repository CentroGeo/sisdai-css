<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Pictogramas</h1>
      <p>
        La mayoría de los pictogramas utilizados en Sisdai se recuperaron de
        <a href="https://carbondesignsystem.com" target="_blank" ref="noopener noreferrer">Carbon Design System</a>, 
        sistema de código abierto.
      </p>
      <p>
        Además, hemos incorporado pictogramas específicos que cumplen con 
        requisitos de comunicación particulares, siguiendo la plantilla 
        maestra del sistema. Estos pictogramas se han adaptado para funcionar 
        como parte de la tipografía, aumentando así su flexibilidad de uso 
        en sitios web. Se implementan a través de clases aplicadas a etiquetas 
        de texto, tal como se ilustra en el siguiente ejemplo: 
      </p>

      <EjemploCodigo
      tipo='HTML'
      codigo='
        <h2 class="pictograma-actualizar"></h2>
      '
      />
    </div>
  
    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Listado de clases</h2>
    </div>
    <div class="columns-3 columns-1-mov">
      <div>
        <span class="pictograma-actualizar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-actualizar</span>
      </div>
      <div>
        <span class="pictograma-agregar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-agregar</span>
      </div>
      <div>
        <span class="pictograma-angulo-abajo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-abajo</span>
      </div>
      <div>
        <span class="pictograma-angulo-arriba"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-arriba</span>
      </div>
      <div>
        <span class="pictograma-angulo-derecho"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-derecho</span>
      </div>
      <div>
        <span class="pictograma-angulo-doble-abajo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-doble-abajo</span>
      </div>
      <div>
        <span class="pictograma-angulo-doble-arriba"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-doble-arriba</span>
      </div>
      <div>
        <span class="pictograma-angulo-doble-derecha"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-doble-derecha</span>
      </div>
      <div>
        <span class="pictograma-angulo-doble-izquierda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-doble-izquierda</span>
      </div>
      <div>
        <span class="pictograma-angulo-izquierdo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-angulo-izquierdo</span>
      </div>
      <div>
        <span class="pictograma-aprobado"></span>
        <span class="pictograma-clase-ejemplo">pictograma-aprobado</span>
      </div>
      <div>
        <span class="pictograma-archivo-descargar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-archivo-descargar</span>
      </div>
      <div>
        <span class="pictograma-archivo-subir"></span>
        <span class="pictograma-clase-ejemplo">pictograma-archivo-subir</span>
      </div>
      <div>
        <span class="pictograma-arrastrar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-arrastrar</span>
      </div>
      <div>
        <span class="pictograma-ayuda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ayuda</span>
      </div>
      <div>
        <span class="pictograma-bajar-capa"></span>
        <span class="pictograma-clase-ejemplo">pictograma-bajar-capa</span>
      </div>
      <div>
        <span class="pictograma-buscar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-buscar</span>
      </div>
      <div>
        <span class="pictograma-calendario"></span>
        <span class="pictograma-clase-ejemplo">pictograma-calendario</span>
      </div>
      <div>
        <span class="pictograma-cambio-tipografia"></span>
        <span class="pictograma-clase-ejemplo">pictograma-cambio-tipografia</span>
      </div>
      <div>
        <span class="pictograma-capa-lineas"></span>
        <span class="pictograma-clase-ejemplo">pictograma-capa-lineas</span>
      </div>
      <div>
        <span class="pictograma-capa-puntos"></span>
        <span class="pictograma-clase-ejemplo">pictograma-capa-puntos</span>
      </div>
      <div>
        <span class="pictograma-casilla"></span>
        <span class="pictograma-clase-ejemplo">pictograma-casilla</span>
      </div>
      <div>
        <span class="pictograma-casilla-verificada"></span>
        <span class="pictograma-clase-ejemplo">pictograma-casilla-verificada</span>
      </div>
      <div>
        <span class="pictograma-cerrar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-cerrar</span>
      </div>
      <div>
        <span class="pictograma-colaborar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-colaborar</span>
      </div>
      <div>
        <span class="pictograma-compartir"></span>
        <span class="pictograma-clase-ejemplo">pictograma-compartir</span>
      </div>
      <div>
        <span class="pictograma-contraste"></span>
        <span class="pictograma-clase-ejemplo">pictograma-contraste</span>
      </div>
      <div>
        <span class="pictograma-control-comenzar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-control-comenzar</span>
      </div>
      <div>
        <span class="pictograma-control-detener"></span>
        <span class="pictograma-clase-ejemplo">pictograma-control-detener</span>
      </div>
      <div>
        <span class="pictograma-control-final"></span>
        <span class="pictograma-clase-ejemplo">pictograma-control-final</span>
      </div>
      <div>
        <span class="pictograma-control-inicio"></span>
        <span class="pictograma-clase-ejemplo">pictograma-control-inicio</span>
      </div>
      <div>
        <span class="pictograma-control-pausa"></span>
        <span class="pictograma-clase-ejemplo">pictograma-control-pausa</span>
      </div>
      <div>
        <span class="pictograma-copiar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-copiar</span>
      </div>
      <div>
        <span class="pictograma-documento"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento</span>
      </div>
      <div>
        <span class="pictograma-documento-csv"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-csv</span>
      </div>
      <div>
        <span class="pictograma-documento-geojson"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-geojson</span>
      </div>
      <div>
        <span class="pictograma-documento-geopaquete"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-geopaquete</span>
      </div>
      <div>
        <span class="pictograma-documento-pdf"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-pdf</span>
      </div>
      <div>
        <span class="pictograma-documento-png"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-png</span>
      </div>
      <div>
        <span class="pictograma-documento-ppt"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-ppt</span>
      </div>
      <div>
        <span class="pictograma-documento-word"></span>
        <span class="pictograma-clase-ejemplo">pictograma-documento-word</span>
      </div>
      <div>
        <span class="pictograma-editar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-editar</span>
      </div>
      <div>
        <span class="pictograma-eliminar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-eliminar</span>
      </div>
      <div>
        <span class="pictograma-enlace-subrayado"></span>
        <span class="pictograma-clase-ejemplo">pictograma-enlace-subrayado</span>
      </div>
      <div>
        <span class="pictograma-estrella"></span>
        <span class="pictograma-clase-ejemplo">pictograma-estrella</span>
      </div>
      <div>
        <span class="pictograma-flecha-abajo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-abajo</span>
      </div>
      <div>
        <span class="pictograma-flecha-abajo-derecha"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-abajo-derecha</span>
      </div>
      <div>
        <span class="pictograma-flecha-abajo-izquierda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-abajo-izquierda</span>
      </div>
      <div>
        <span class="pictograma-flecha-arriba"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-arriba</span>
      </div>
      <div>
        <span class="pictograma-flecha-arriba-derecha"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-arriba-derecha</span>
      </div>
      <div>
        <span class="pictograma-flecha-arriba-izquierda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-arriba-izquierda</span>
      </div>
      <div>
        <span class="pictograma-flecha-derecha"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-derecha</span>
      </div>
      <div>
        <span class="pictograma-flecha-izquierda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-izquierda</span>
      </div>
      <div>
        <span class="pictograma-flechas-horizontales"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flechas-horizontales</span>
      </div>
      <div>
        <span class="pictograma-flkt"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flkt</span>
      </div>
      <div>
        <span class="pictograma-grupo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-grupo</span>
      </div>
      <div>
        <span class="pictograma-guardar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-guardar</span>
      </div>
      <div>
        <span class="pictograma-social-facebook"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-facebook</span>
      </div>
      <div>
        <span class="pictograma-social-github"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-github</span>
      </div>
      <div>
        <span class="pictograma-social-instagram"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-instagram</span>
      </div>
      <div>
        <span class="pictograma-social-linkedin"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-linkedin</span>
      </div>
      <div>
        <span class="pictograma-social-twitter"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-twitter</span>
      </div>
      <div>
        <span class="pictograma-social-youtube"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-youtube</span>
      </div>
      <div>
        <span class="pictograma-social-x"></span>
        <span class="pictograma-clase-ejemplo">pictograma-social-x</span>
      </div>
      <div>
        <span class="pictograma-subir-capa"></span>
        <span class="pictograma-clase-ejemplo">pictograma-subir-capa</span>
      </div>
      <div>
        <span class="pictograma-informacion"></span>
        <span class="pictograma-clase-ejemplo">pictograma-informacion</span>
      </div>
      <div>
        <span class="pictograma-inicio"></span>
        <span class="pictograma-clase-ejemplo">pictograma-inicio</span>
      </div>
      <div>
        <span class="pictograma-mapa-centro"></span>
        <span class="pictograma-clase-ejemplo">pictograma-mapa-centro</span>
      </div>
      <div>
        <span class="pictograma-mapa-generador"></span>
        <span class="pictograma-clase-ejemplo">pictograma-mapa-generador</span>
      </div>
      <div>
        <span class="pictograma-maximizar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-maximizar</span>
      </div>
      <div>
        <span class="pictograma-menu"></span>
        <span class="pictograma-clase-ejemplo">pictograma-menu</span>
      </div>
      <div>
        <span class="pictograma-mexico"></span>
        <span class="pictograma-clase-ejemplo">pictograma-mexico</span>
      </div>
      <div>
        <span class="pictograma-minimizar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-minimizar</span>
      </div>
      <div>
        <span class="pictograma-mover"></span>
        <span class="pictograma-clase-ejemplo">pictograma-mover</span>
      </div>
      <div>
        <span class="pictograma-nivel"></span>
        <span class="pictograma-clase-ejemplo">pictograma-nivel</span>
      </div>
      <div>
        <span class="pictograma-numerales"></span>
        <span class="pictograma-clase-ejemplo">pictograma-numerales</span>
      </div>
      <div>
        <span class="pictograma-ojo-ocultar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ojo-ocultar</span>
      </div>
      <div>
        <span class="pictograma-ojo-ver"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ojo-ver</span>
      </div>
      <div>
        <span class="pictograma-ordenar-alfabetico-asc"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ordenar-alfabetico-asc</span>
      </div>
      <div>
        <span class="pictograma-ordenar-alfabetico-desc"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ordenar-alfabetico-desc</span>
      </div>
      <div>
        <span class="pictograma-ordenar-asc"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ordenar-asc</span>
      </div>
      <div>
        <span class="pictograma-ordenar-desc"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ordenar-desc</span>
      </div>
      <div>
        <span class="pictograma-persona"></span>
        <span class="pictograma-clase-ejemplo">pictograma-persona</span>
      </div>
      <div>
        <span class="pictograma-capa-poligono"></span>
        <span class="pictograma-clase-ejemplo">pictograma-capa-poligono</span>
      </div>
      <div>
        <span class="pictograma-reloj"></span>
        <span class="pictograma-clase-ejemplo">pictograma-reloj</span>
      </div>
      <div>
        <span class="pictograma-restar"></span>
        <span class="pictograma-clase-ejemplo">pictograma-restar</span>
      </div>
      <div>
        <span class="pictograma-tabla"></span>
        <span class="pictograma-clase-ejemplo">pictograma-tabla</span>
      </div>
      <div>
        <span class="pictograma-teclado"></span>
        <span class="pictograma-clase-ejemplo">pictograma-teclado</span>
      </div>
      <div>
        <span class="pictograma-ubicacion"></span>
        <span class="pictograma-clase-ejemplo">pictograma-ubicacion</span>
      </div>
      <div>
        <span class="pictograma-vista-simplificada"></span>
        <span class="pictograma-clase-ejemplo">pictograma-vista-simplificada</span>
      </div>
      <div>
        <span class="pictograma-voto-no"></span>
        <span class="pictograma-clase-ejemplo">pictograma-voto-no</span>
      </div>
      <div>
        <span class="pictograma-voto-si"></span>
        <span class="pictograma-clase-ejemplo">pictograma-voto-si</span>
      </div>
      <div>
        <span class="pictograma-accesibilidad"></span>
        <span class="pictograma-clase-ejemplo">pictograma-accesibilidad</span>
      </div>
      <div>
        <span class="pictograma-restablecer"></span>
        <span class="pictograma-clase-ejemplo">pictograma-restablecer</span>
      </div>
      <div>
        <span class="pictograma-flecha-izquierda"></span>
        <span class="pictograma-clase-ejemplo">pictograma-flecha-izquierda</span>
      </div>
      <div>
        <span class="pictograma-enlace-externo"></span>
        <span class="pictograma-clase-ejemplo">pictograma-enlace-externo</span>
      </div>
      <div>
        <span class="pictograma-metadatos"></span>
        <span class="pictograma-clase-ejemplo">pictograma-metadatos</span>
      </div>
      <div>
        <span class="pictograma-visualizador"></span>
        <span class="pictograma-clase-ejemplo">pictograma-visualizador</span>
      </div>
      <div>
        <span class="pictograma-zoom-instruccional"></span>
        <span class="pictograma-clase-ejemplo">pictograma-zoom-instruccional</span>
      </div>
    </div>
      

    <div class="contenedor ancho-lectura">
      <h2 class="m-t-10">Tamaños especiales</h2>
      <p>
        Al integrarse con la tipografía, el tamaño de los pictogramas varía dependiendo 
        de la etiqueta en la que se encuentren. Sin embargo,  el Sisdai específica el 
        uso de los tamaños originales o aquellos que correspondan a incrementos de 24px, 
        32px y 48px. Para esto, se han creado las clases <code>.pictograma-24</code>, 
        <code>.pictograma-32</code> y <code>.pictograma-48</code>, donde el número indica 
        el tamaño de la fuente en píxeles asumiendo una tipografía base de <code>16px</code>. 
        Estos tamaños están expresados en unidades <code>rem</code> para mantener la jerarquía 
        tipográfica ante ajustes de tamaño general.
      </p>
      <EjemploCodigo
      tipo='HTML'
      codigo='
        <span class="pictograma-flkt pictograma-chico"></span>
        <span class="pictograma-flkt pictograma-mediano"></span>
        <span class="pictograma-flkt pictograma-grande"></span>
      '
      />

      <h3 class="m-t-10">Tamaños especiales responsivos</h3>
      <p>
        Al igual que con otras clases responsivas, los pictogramas adaptan su tamaño 
        agregando el sufijo <code>-mov</code> para dispositivos móviles y <code>-esc</code> 
        para dispositivos de escritorio.
      </p>
      <EjemploCodigo
      tipo='HTML'
      codigo='
        <span class="pictograma-flkt pictograma-chico-mov pictograma-grande-esc"></span>
      '
      />
    </div>

  </div>
</template>
