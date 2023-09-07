# sisdai-css

Biblioteca de estilos en scss con sass para el Sistema de Diseño y Accesibilidad para la Investigación
([Sisdai](https://sisdai.conacyt.mx/)).

> **_Limitación de responsabilidad_**
>
> El presente es un proyecto en construcción, por tanto el equipo del Sisdai
> no es responsable del uso y contenido del presente recurso,
> toda vez que se trata de una versión en su modalidad prueba, y no de una
> versión liberada al público, por lo que una vez que sea lanzada la versión
> final,
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
```

## Cómo instalar la biblioteca en un proyecto

1. Instala la biblioteca
    ``` sh
    npm i gitlab:codigo.conahcyt.mx/sisdai/sisdai-css
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
    npm run build:docs
    ```

3. Para levantar la documentación en local

    ``` sh
    npm run build:dev
    ```

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

Sisdai y sisdai-css están alineadas a las disposiciones establecidas por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

## Contribuir

Para contribuir al proyecto, se pide que se haga tomando en cuenta la guía de
contribución
de [git](https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Contribuyendo-a-un-Proyecto)
.