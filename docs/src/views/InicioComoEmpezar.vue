<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor ancho-lectura p-b-maximo">
    <section id="introduccion">
      <h1 class="texto-centrado">¿Cómo empezar?</h1>
      <h2>sisdai-css</h2>
      <p>
        Biblioteca de estilos en scss con sass para el Sistema de Diseño y Accesibilidad para la Investigación 
        (<a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">Sisdai</a>).
      </p>
      <p>
        Cualquier persona puede hacer uso de esta biblioteca al clonarla 
        e instalarla en su equipo a través del <b>protocolo HTTPS</b>.
      </p>
    </section>
    <section id="instalacion-uso">
      <h2>Instalación y uso</h2>
      <h3>Utilizar la biblioteca en un proyecto estático</h3>
      <p>
        Esta biblioteca utiliza las tipografias de Montserrat y Atkinson 
        Hyperlegible de Google fonts y una tipografía de íconos publicada 
        a través de Fontastic.
      </p>
      <p>
        Agrega las siguientes lineas en la etiqueta <code>&lt;head/></code> 
        del archivo de html, y que aparecerán en el siguiente orden:
      </p>
      <ol>
        <li>Ligas de las tipografías de Google Fonts.</li>
        <li>Ligas de la tipografía para los íconos (aún en desarrollo).</li>
        <li>Liga de la hoja de estilos (también en desarrollo).</li>
        <EjemploCodigo
        :tiene_ejemplo='false'
        tipo='HTML'
        codigo='
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link 
            href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Montserrat:wght@400;500;600&display=swap" 
            rel="stylesheet"
          >
          <link href=“https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css” rel=“stylesheet”>
        '
        />     
      </ol>

      <ol>
        <li>Instala la biblioteca en un proyecto
          <EjemploCodigo
          :tiene_ejemplo='false'
          codigo='
            npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css
          '
          />
          <p>
            Dependiendo de la versión de la biblioteca a instalar, la 
            instrucción anterior puede cambiar a:
          </p>
          <EjemploCodigo
          :tiene_ejemplo='false'
          codigo='
            npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css#vN.N.N
          '
          />
          <p>
            donde N.N.N indica el número de versión, por ejemplo v1.0.0
          </p>
        </li>
        <li> Importa la biblioteca
          <EjemploCodigo
          :tiene_ejemplo='false'
          codigo='
            @import ‘sisdai-css/src/eni.scss’;
          '
          />
          <ol>
            <li>
              Opcional* Se pueden importar las variables para utilizar 
              las mismas referencias que la biblioteca en los estilos 
              particulares de cada proyecto
              <EjemploCodigo
              :tiene_ejemplo='false'
              codigo='
                @import ‘sisdai-css/src/eni.scss’;
              '
              />
            </li>
          </ol>
        </li>
      </ol>

      <h3>Para la edición local del proyecto</h3>
      <h4>Pasos previos recomendados</h4>
      <p>
        Para desarrollar este proyecto se usó <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">node.js</a> 
        como entorno de ejecución de JavaScript. La opción recomendada para instalarlo es vía
        <a href="https://nvm.sh" target="_blank" rel="noopener noreferrer">nvm</a> 
        que es el manejador de versiones de node. Siguiendo este camino, también se instalará 
        el manejador de paquetes <a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a>. 
        Dado lo anterior las instrucciones de instalación y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.
      </p>

      <h4>Dependencias</h4>
      <ul>
        <li>
          <a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noopener noreferrer">node.js (^18)</a> 
        </li>
        <li>
          <a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer">npm (^9)</a> 
        </li>
      </ul>

      <h4>Instalación y uso</h4>
      <p>
        Clona este repositorio utilizando solo el protocolo HTTPS, es decir.
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
          git clone https://codigo.conahcyt.mx/sisdai/sisdai-css.git
        '
      />

      <p>
        Instala las dependencias del proyecto.
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
          npm install
        '
      />

      <p>
        Este proyecto cuenta con una documentación más extensa que aún 
        está en proceso de desarrollo. Es posible levantarla en un 
        ambiente local con la instrucción:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
          npm run build:dev
        '
      /> 

      <p>
        Para las personas colaboradoras de este proyecto, la documentación 
        se puede compilar para su despliegue en desarrollo usando:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
          npm run docs:build
        '
      />

      <p>
        Y para su despliegue en producción:
      </p>
      <EjemploCodigo
        :tiene_ejemplo='false'
        codigo='
          npm run build
        '
      />

      <p>
        El <b>build</b> actualiza los archivos de la carpeta de distribución 
        <code>dist</code> que se utilizan para actualizar la <b>CDN</b> y que puedes 
        utilizar como archivos locales copiándolos y pegándolos en tus proyectos.
      </p>
    </section>
    <section id="licencia">
      <h2>Licencia</h2>
      <h3>SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS</h3>
      <p>
        Sisdai y sisdai-css están alineadas a las disposiciones establecidas por la 
        Coordinación de Estrategia Digital Nacional (DOF:06/09/2021) en donde se 
        estipula que las “políticas y disposiciones tienen como objetivo fortalecer 
        el uso del software libre y los estándares abiertos, fomentar el desarrollo 
        de aplicaciones institucionales con utilidad pública, lograr la autonomía, 
        soberanía e independencia tecnológicas dentro de la APF”. En el artículo 63 
        se explicita que “cuando se trate de desarrollos basados en software libre, 
        se respetarán las condiciones de su licenciamiento original […]”.
      </p>

      <p>
        Considerando lo anterior sisdai-css se publica bajo la licencia 
        <a href="https://www.gnu.org/licenses/lgpl-3.0.html" target="_blank" rel="noopener noreferrer">LGPLv3</a>.
        Dicha licencia se puede consultar en el archivo LICENSE de este 
        repositorio. Esta licencia se encuentra disponible en inglés 
        porque aunque el Sisdai privilegia el idioma español se respeta la 
        versión original de acuerdo al proyecto 
        <a href="https://www.gnu.org/licenses/licenses.html" target="_blank" rel="noopener noreferrer">GNU</a>.
      </p>

    </section>
  </div>
</template>