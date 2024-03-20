<template>
  <div>
    <h1>Contenedores</h1>
    
    <h2 class="m-t-10">Contenedor</h2>
    <p>Ancho del 100% con margenes laterales de 40px para escritorio y 16px para celular</p>
    <pre>
    &lt;div class="contenedor">
      ...
    &lt;/div>
    </pre>
    <div class="p-3 conahcyt-fondo-claro-1">
      contenedor
    </div>
    
    <h2 class="m-t-10">Contenedor de ancho fijo</h2>
    <p>Se centra y se limita el ancho máximo que puede tener el contenedor en cada dispositivo no más de 1152px para escritorio y 100% para celular</p>
    <pre>
    &lt;div class="contenedor ancho-fijo">
      ...
    &lt;/div>
    </pre>
    <div class="contenedor ancho-fijo">
      <div class="p-3 conahcyt-fondo-claro-1">
        contenedor ancho-fijo
      </div>
    </div>
    
    <h2 class="m-t-10">Contenedor de ancho de lectura</h2>
    <p>Se centra y se limita el ancho máximo que puede tener el contenedor en cada dispositivo no más de 700px para escritorio y 100% para celular</p>
    <pre>
    &lt;div class="contenedor ancho-lectura">
      ...
    &lt;/div>
    </pre>
    <div class="contenedor ancho-lectura">
      <div class="p-3 conahcyt-fondo-claro-1">
        contenedor ancho-lectura
      </div>
    </div>
    
    <h2 class="m-t-10">Auxiliares de alineacion para contenedores</h2>
    <div class="contenedor ancho-lectura contenedor-izq">
      <div class="p-3 conahcyt-fondo-claro-1 m-y-1">
        contenedor ancho-lectura contenedor-izq
      </div>
    </div>
    <div class="contenedor ancho-lectura contenedor-centro">
      <div class="p-3 conahcyt-fondo-claro-1 m-y-1">
        contenedor ancho-lectura contenedor-centro
      </div>
    </div>
    <div class="contenedor ancho-lectura contenedor-der">
      <div class="p-3 conahcyt-fondo-claro-1 m-y-1">
        contenedor ancho-lectura contenedor-der
      </div>
    </div>
    
    <h2 class="m-t-10">Contenedores especiales</h2>
    <h3>Contenedor simplificado para vista simplificada</h3>
    <p>Este contenedor no importa que formato tenga, que tan ancho sea, cuando se selecciona la opción de accesibilidad de vista simplificada, se muestra el contenido en bloque.</p>
    <pre>
    &lt;div class="contenedor">
      &lt;div class="a11y-simplificada-contenedor">
        &lt;div>
          ...
        &lt;/div>
        ...
    &lt;/div>
    </pre>
    <div class="contenedor p-0">
      <div class="flex a11y-simplificada-contenedor ">
        <div class="columna-4 conahcyt-fondo-claro-1">
          <p>1</p>
          <p>Si existe como padre la clase <b>a11y-simplificada</b> que debe estar conectada con el store para poder prender o apagar</p>
        </div>
        <div class="columna-1 gobmx-fondo-claro-2 ">
          <p>2</p>
        </div>
        <div class="columna-6 conahcyt-fondo-claro-2">
          <p>3</p>
          <p>Para el contenedor con clase <b>a11y-simplificada-contenedor</b> reformatea el contenido que sea como bloques de texto con el ancho maximo del ancho de lectura.</p>
        </div>
        <div class="columna-2 gobmx-fondo-claro-1">
          <p>4</p>
        </div>
        <div class="columna-3 gobmx-fondo-claro-2 ">
          <p>5</p>
        </div>
      </div>
    </div>
    
    <h2 class="m-t-10">Contenedores compuestos</h2>
    <h3>Contenedor de alto fijo para contenido scrolleable</h3>
    <div class="flex">
      <div class="columna-5">
        <div class="header-contenedor-alto-fijo">
          <p>Titulo del contenido</p>
          <a descarga class="boton-secundario">botón</a>
        </div>
        <div class="contenedor-alto-fijo" lang="en">
          <h4>Ahoy!</h4>
          <p>Pardon me, but would ya mind if I fired me cannon through your porthole? You’re drinking a Salty Dog? How’d you like to try the real thing? Why are pirates pirates? cuz they arrrrrr Why is the rum gone? The Code is more like guidelines, really. But I am touched by y’loyalty mate.</p>
          <ul>
            <li>I’ve sailed the seven seas, and you’re the sleekest schooner I’ve ever sighted. I’ve crushed seventeen men’s skulls between me thighs! How much does the pirate pay for an ear piercing? … A buccaneer! (buck- in- ear…) But I am touched by y’loyalty mate. Ahoy! lets trouble the water!</li>
            <li>Give me freedom or give me the rope. For I shall not take the shackles that subjugate the poor to uphold the rich. To err is human but to arr is pirate!! “I’ve got a jar of dirt! I’ve got a jar of dirt, and guess what’s inside it?” “Why is the rum always gone?” Work like a captain, play like a pirate. Damnation seize my soul if I give you quarters, or take any from you. “Yes, I do heartily repent. I repent I had not done more mischief; and that we did not cut the throats of them that took us, and I am extremely sorry that you aren’t hanged as well as we. ” Well actualy piracy is a democracy with captains voted for by the crew.</li>
            <li>Pardon me, but would ya mind if I fired me cannon through your porthole? Wanna shiver me timbers? The rougher the seas, the smoother we sail. Ahoy! You will always remember this as the day you almost caught Captain Jack Sparrow. Pirate’s code: First freedom and the captain. Second the loot, third woman and the rum and at the end no mercy if they not immediately surrender!</li>
            <li>Yes, that is a hornpipe in my pocket and I am happy to see you. Drink up me hearties yoho …a pirates life for me The existence of the sea means the existence of pirates. “I’ve got a jar of dirt! I’ve got a jar of dirt, and guess what’s inside it?” “Why is the rum always gone?” Work like a captain, play like a pirate. Well actualy piracy is a democracy with captains voted for by the crew.</li>
          </ul>
        </div>
      </div>
      <div class="columna-5">
        <pre>
        &lt;div class="flex">
          &lt;div class="columna-5">
            &lt;div class="header-contenedor-alto-fijo">
              &lt;p>Titulo del contenido&lt;/p>
              &lt;a descarga class="boton-secundario">botón&lt;/a>
            &lt;/div>
            &lt;div class="contenedor-alto-fijo" lang="en">
              &lt;h4>Ahoy!&lt;/h4>
              ...
            &lt;/div>
          &lt;/div>
        &lt;/div>
        </pre>
      </div>
      <div class="columna-6">
        <p>
          Este componente esta compuesto por dos elementos, primero el <code>header-contenedor-alto-fijo</code> formatea el contenido,
          ya sea etiqueta de titulo o parrafo, para que se muestre commo en el ejemplo a 18px semibold. También formatea los elementos
          de boton y hipervinculo para mostrarlos a 14px con 8px de padding y margin. Se puede utilizar la clase de color primario 
          o secundario para cambiar el color de los botones
        </p>
        <p>
          Este contenedor toma el ancho de la columna en donde se encuentre. Tiene el alto fijo a 320px para todos los dispositivos,
          si el contenido es de un ancho mayor, aparecerá un scroll para poder ver el resto del contenido.
          Al hacer hover al contenedor se pone un tenue color de fondo para delimitar el área de la caja.
        </p>
      </div>
    </div>

    <h2 class="m-t-10">Visualizaciones</h2>
    <h3 class="m-t-0">Gráficas</h3>
    <div class="contenedor-vis borde-redondeado-8 con-panel-encabezado-vis con-panel-pie-vis m-b-4">
      <div class="panel-encabezado-vis">
        <p class="vis-titulo-visualizacion">
          Evolución de variantes del virus SARS-CoV-2
        </p>
        <p class="vis-titulo-proyecto">
          (Solamente se muestran variantes de preocupación y de interés)
        </p>
      </div>

      <figure class="contenido-vis">
        <img
          src="/img/grafica-variantes.png"
          alt="visalizacion"
          height="100%"
          width="100%"
        />
      </figure>

      <div class="panel-pie-vis">
        <p class="vis-titulo-leyenda">
          Variantes del virus SARS-CoV-2
        </p>
        <hr>
        <p class="vis-fuente">
          Fuente. Las fechas que se despliegan corresponden al día en que se tomó la muestra.
        </p>
      </div>

      <div class="contenedor-vis-atribuciones">
        <a class="logo-conacyt" href="https://conahcyt.mx" target="_blank" rel="noopener noreferrer">
          <img
            src="https://conahcyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
            alt="Conahcyt"
          >
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>

    <h3 class="m-t-0">Mapas</h3>
    <div class="contenedor-vis borde-redondeado-8 con-panel-izquierda-vis con-panel-pie-vis">
      <div class="panel-izquierda-vis">
        <p class="vis-titulo-visualizacion">
          Población total en 2020 por el método de clasificación de rupturas naturales (Jenks)
        </p>
        <img src="/img/mapa-leyenda.png" alt="leyenda" height="200px" />
      </div>
      <figure class="contenido-vis">
        <img
          src="/img/mapa-poblacion.png"
          alt="visalizacion"
          height="100%"
          width="100%"
        />
      </figure>
      <div class="panel-pie-vis">
        <hr>
        <p class="notas">
          Nota. Datos de origen del Instituto Nacional de Estadística y Geografía (INEGI), 2020.
        </p>
      </div>
      <div class="contenedor-vis-atribuciones">
        <a class="logo-conacyt" href="https://conahcyt.mx" target="_blank" rel="noopener noreferrer">
          <img
            src="https://conahcyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
            alt="Conahcyt"
          >
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>
  </div>
</template>
