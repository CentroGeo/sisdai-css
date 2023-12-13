# sisdai-css

Biblioteca de estilos en scss con sass para el Sistema de Diseño y Accesibilidad para la Investigación
([Sisdai](https://sisdai.conacyt.mx/)).

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Instalación y uso

### Utilizar la biblioteca en un proyecto estático

Esta biblioteca utiliza las tipografias de Montserrat y Atkinson Hyperlegible de Google fonts y una tipografía de íconos
publicada a través de Fontastic.

Agrega las siguientes lineas en el `<head> </head>` del archivo de html, y que aparecerán en el siguiente orden:

1. Ligas de las tipografías de Google Fonts.
2. Ligas de la tipografía para los íconos (aún en desarrollo).
3. Liga de la hoja de estilos (también en desarrollo).

``` html

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css" rel="stylesheet">  
```

1. Instala la biblioteca en un proyecto
    ``` bash
    npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css
    ```
    Dependiendo de la versión de la biblioteca a instalar, la instrucción anterior puede cambiar a:
    ``` bash
    npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css#vN.N.N
    ```
    donde N.N.N indica el número de versión, por ejemplo v1.0.0

2. Importa la biblioteca
    ``` css
    @import 'sisdai-css/src/eni.scss';
    ```
   2.2 Opcional*  Se pueden importar las variables para utilizar las mismas referencias que la biblioteca en los estilos
   particulares de cada proyecto
    ``` css
    @import 'sisdai-css/src/_variables.scss';
    ```

### Para la edición local del proyecto

#### Pasos previos recomendados

Para desarrollar este proyecto se usó [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Dado lo anterior las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^18)](https://nodejs.org/en/download/)
- [npm (^9)](https://www.npmjs.com/get-npm)

### Instalación y uso

Clona este repositorio utilizando **solo el protocolo HTTPS**, es decir.

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-css.git
```

Instala las dependencias del proyecto

``` sh
npm install
```

Este proyecto cuenta con una documentación más extensa que aún está
en proceso de desarrollo. Es posible levantarla en un ambiente local con la instrucción:
``` sh
npm run build:dev
```

Para las personas colaboradoras de este proyecto, la documentación se puede
compilar para su despliegue en desarrollo usando:

```bash
npm run docs:build
```

Y para su despliegue en producción:

```bash
npm run build
```
    ```


El **build** actualiza los archivos de la carpeta de distribución `dist` que se utilizan para actualizar la **CDN** y
que puedes utilizar como archivos locales copiándolos y pegándolos en tus proyectos.

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-componentes están alineadas a las disposiciones establecidas por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

Considerando lo anterior sisdai-componentes se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio.
