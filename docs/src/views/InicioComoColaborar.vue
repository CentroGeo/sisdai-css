<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor ancho-lectura p-b-maximo">
    <section id="introduccion">
      <h1 class="texto-centrado">¿Cómo colaborar?</h1>
      
      <div class="nota-contenedor borde-redondeado-20">
        <p class="nota">
          Por el momento sólo quienes sean parte de un equipo de investigación del 
          capítulo de un <a href="https://eni.conahcyt.mx/" target="_blank" rel="noopener noreferrer">ENI</a> 
          podrán levantar issues en este repositorio. 
        </p>
      </div>
    
      <p>
        La colaboración en cualquiera de los repositorios de SALSA, se lleva 
        a cabo a través de un <b>Pull Request</b> y siguiendo el flujo de trabajo 
        que se detalla en esta sección:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           st=>start: Crear Fork 
           e=>end: Hacer Pull Request 
           stage2=>operation: Clonar repositorio 
           stage3=>operation: Actualizar rama master 
           stage4=>operation: Crear una rama 
           stage5=>operation: Hacer cambios

           st->stage2->stage3->stage4->stage5->e
        '
      />
    </section>

    <section id="crear-fork">
      <h2>Crear Fork del repositorio</h2>
      <p>
        El primer paso es hacer un “Fork” del repositorio en el que se quiere 
        participar. Para saber más sobre los Forks, puedes consultar la 
        documentación en 
        <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo" target="_blank" rel="noopener noreferrer">Fork a repo</a>
      </p>
    </section>
    
    <section id="clonar-repo">
      <h2>Clonar el repositorio</h2>
      <p>
        Después de tener el repositorio en tu cuenta, debes seleccionar la dirección del repositorio “SSH o HTTP” y clonar:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git clone https://github.com/[tu-usuario]/[nombre-repositorio].git
        '
      />

      <p>
        Una vez clonado el repositorio, siempre es recomendable comprobar 
        la URL del repositorio a través del siguiente comando:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git remote -v
        '
      />

      <p>
        Antes de realizar cualquier modificación, debes agregar la URL del 
        repositorio original como <b>upstream</b>:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git remote add upstream https://github.com/[usuario-original]/[nombre-repositorio-original].git`
        '
      />

      <p>
        Comprobar
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git remote -v
        '
      />
    </section>

    <section id="ramas">
      <h2>Actualizar la rama Master</h2>
      <p>
        Antes de empezar a trabajar, debes obtener los últimos cambios realizados en el repositorio original:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git pull -r upstream master
        '
      />

      <h2>Crear una Rama a partir de master para trabajar</h2>
      <p>
        Para crear una rama usar la opción “checkout” de git:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git checkout -b feature/nombre-rama
        '
      />

      <h2>Hacer cambios</h2>
      <ol>
        <li>Realizar todos los cambios que se desea hacer al proyecto.</li>
        <li>
          Después de realizar el commit hacer el push hacia 
          tu repositorio, indicando la rama que has creado.
        </li>
      </ol>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
           $ git push origin feature/nombre-rama
        '
      />
      <p>
        No olvides agregar tu nombre en el README del proyecto, 
        en la sección de Contribuidores
      </p>

      <h2>Hacer un Pull Request</h2>
      <ol>
        <li>Hacer click en Compare & Pull Request</li>
        <li>Si todo está bien, enviar con el botón Send Pull Request</li>
        <li>Esperar a que el equipo de SALSA lo revise, acepte y una tus cambios en la rama correspondiente.</li>
      </ol>
      <p>
        Para mayor información sobre Pull Request, puedes consultar la documentación 
        oficial de Gihub 
        <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" target="_blank" rel="noopener noreferrer">Pull Request</a>
        
      </p>
    </section>

  </div>
</template>