# sisdai-css

Biblioteca de estilos en scss con sass para el Sistema de Diseño y Accesibilidad para la Investigación
([Sisdai](https://sisdai.conacyt.mx/)).

> **_Limitación de responsabilidad_**
> El presente es un proyecto en construcción, por tanto ni el equipo del Sisdai 
> ni el de Salsa son responsables del uso y contenido del presente recurso, 
> toda vez que se trata de una versión en su modalidad prueba, y no de una 
> versión pública, por lo que una vez que sea lanzada la versión final, 
> se invita a la persona usuaria a consultarla y validar sus requisitos.

## Cómo utilizar la biblioteca en un proyecto estático

Esta biblioteca utiliza las tipografias de Montserrat y Atkinson Hyperlegible de Google fonts y una tipografía de íconos
publicada a través de Fontastic.

Agrega las siguientes lineas en el `<head> </head>` del archivo de html, y que aparecerán en el siguiente orden:

1. ligas de las tipografías de Google Fonts,
2. ligas de la tipografía para los íconos (aún en desarrollo),
3. y la liga de la hoja de estilos (también en desarrollo).

``` html

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css" rel="stylesheet">  
  <link href="https://cdn.jsdelivr.net/gh/conacyt-dai/dadsig-css/dist/eni.min.css" rel="stylesheet">

```

## Cómo instalar la biblioteca en un proyecto

1. Instala la biblioteca
    ``` sh
    npm i github:salsa-community/sisdai-css
    ```

2. Importa la biblioteca
    ``` css
    @import 'sisdai-css/src/eni.scss';
    ```
   2.2 Opcional*  Se pueden importar las variables para utilizar las mismas referencias que la biblioteca en los estilos
   particulares de cada proyecto
    ``` css
    @import 'sisdai-css/src/_variables.scss';
    ```

## Para la edición local del proyecto

0. Prerequisitos:

   Familiaridad con la terminal o línea de comandos

   Tener [Node.js](https://nodejs.org/es/) instalado


1. Clona el repositorio con la siguiente linea en la terminal

    ``` sh
    git clone git@github.com:salsa-community/sisdai-css.git
    ```
   Si por alguna razón no pudiste clonar, puedes leer la
   [documentación de Github acerca de cómo clonar un repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

2. Instala las dependencias del proyecto

    ``` sh
    npm install
    ```

   Y la documentación del proyecto
    ``` sh
    npm run install:docs
    ```

3. Levantar el entorno local

    ``` sh
    npm start
    ```
   Ese comando debe compilar y dejar vigilando los cambios de la carpeta `src/` que contiene los estilos en scss,
   levantar un entorno local de la carpeta de documentación del proyecto `docs/`

4. Abre tu navegador con la siguiente dirección
    ```
    http://localhost:3000
    ```

Para obtener el archivo de distribución actualizado, compila el proyecto con

``` sh
npm run build
```

El **build** actualiza los archivos de la carpeta de distribución `dist` que se utilizan para actualizar la **CDN** y
que puedes utilizar como archivos locales copiándolos y pegándolos en tus proyectos.

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-css está alineado a las disposiciones establecidas por la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su licenciamiento original [...]", en este
sentido este proyecto está alineado a lo que se define desde [SALSA](https://salsa.crip.conacyt.mx/).

## Contribuir

Para contribuir al proyecto, se pide que se haga por medio de los lineamientos de contribución de SALSA que se
pueden consultar [aquí](https://salsa.crip.conacyt.mx/guidelines/contribute/).

*En los lineamientos de contribución se lista la rama _master_ como principal, sin embargo en este proyecto, dicha
rama es _main_.

