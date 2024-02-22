# sisdai-css

El proyecto sisdai-css es una biblioteca de estilos de Sass 
alineada al Sistema de Diseño y Accesibilidad para la Investigación 
([Sisdai](https://sisdai.conahcyt.mx)).

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Utilidades

* Normaliza la forma en que se visualizan los elementos de HTML entre los distintos navegadores como Firefox, Chrome, Opera, Safari, Edge
* Estandariza estilos desde las etiquetas de HTML
* Agrega clases para ayudar a la accesibilidad
* Contiene un archivo de `_variables` general para homogeneizar, tipografias, pesos, tamaños, espacios y colores
* Contiene un archivo de `_mixins` general para reutilizar los mediaquery de los límites declarados para la correcta visualización en celulares y pantallas más grandes

## Instalación y uso

Si tu proyecto esta creado con [sisdai-proyecto-base](https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base) 
tiene incluida una versión estable de sisdai-componentes y no requiere ningún paso de instalación ni importación.

### Agrega las tipografías

Esta biblioteca utiliza las tipografias de Montserrat y Atkinson Hyperlegible de Google fonts 
y una tipografía de íconos publicada a través de Fontastic.

Agrega las siguientes lineas dentro del `<head> </head>` del archivo de html en el siguiente orden:

1. Ligas de las tipografías de Google Fonts.
2. Ligas de la tipografía para los íconos (aún en desarrollo).

``` html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css" rel="stylesheet">  
```

### Instala la biblioteca

En la carpeta principal de tu proyecto Vue, instala la biblioteca en las dependencias de tu proyecto con:

``` bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css
```

Dependiendo de la versión de la biblioteca a instalar, la instrucción anterior puede cambiar a:

``` bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

### Importa la biblioteca

Puedes importar la biblioteca de manera general en el archivo `main.js` de tu proyecto Vue

```js
// src/main.js

import 'sisdai-css/src/eni.scss'

```

Ó en el archivo o sección de estilos de tu proyecto

```css
@import 'sisdai-css/src/eni.scss';
```

*Opcionalmente** se pueden importar las variables y mixins para utilizar las mismas referencias que la biblioteca en los estilos particulares de cada proyecto

```css
@import 'sisdai-css/src/_variables';
@import 'sisdai-css/src/_mixins';
```

### Uso de la biblioteca

Muchos de los estilos de la biblioteca se muestran sin agregar ninguna clase, utilizando las etiquetas adecuadas para el HTML semántico. 

```html
  <h1> Estilo estandarizado de título principal </h1>
```

Existen además clases para dar estilo a elementos y se encuentran agrupadas por módulos dependiendo de su uso.

```html
  <h1 class="titulo-pagina">Es la jerarquía de texto más alta, se ubica generalmente al inicio de la página y describe el contenido de la misma</h1>
```

## Actualización

Si actualmente utilizas la biblioteca y necesitas utilizar otra versión, ubícate en la carpeta del proyecto en donde necesitas la actualización e instala la version que requieres nuevamente

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0


## Listado de elementos

El código se encuentra separado por módulos dependiendo del tipo de etiqueta o funcionalidad de los elementos que contenga.

| Modulo | Descripcion                                                                                                                                                            |
| ------ |------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Accesibilidad | Clases para reescribir el estilo de elementos requeridos por el menu de accesibilidad                                                                                  |
| Alertas | Contenedores para mostrar notificaciones de texto                                                                                                                      |
| Auxiliares | Clases globales para alinear contenedores y elementos                                                                                                                  |
| Bordes | Clases reutilizables de distintos estilos de bordes                                                                                                                    |
| Boton | Clases que se aplican al elemento `<boton>`                                                                                                                            |
| Color | Clases generales de colores para estados de elementos y clases de colores institucionales                                                                              |
| Detalle | Estilos de la etiqueta `<details>` `<summary>` utilizados en secciones de preguntas y respuestas                                                                       |
| Formularios | Estilos de todas las etiquetas que conforman y se utilizan dentro de formularios                                                                                       |
| Icono | Clases de tamaños para las clases de `.icono-`                                                                                                                         |
| Imagenes | Estilos de las etiquetas relacionadas con imágenes `<img>`, `<figure>` y `<figcaption>`                                                                                |
| Link | Estilos de la etiqueta de hipervinculo `<a>`                                                                                                                           |
| Listas | Estilos de las etiquedas de listas `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>` y `<dd>` y clases de estilos para listas especiales                                          |
| Navegacion* | Estilos y clases para todos los elementos que se necesitan en la navegación, desde el `<nav>` hasta listas anidadas de sub-menu                                        |
| Portada* | Clases del componente de diseño de portada para un capítulo ENI                                                                                                        |
| Reticula | Clases de contenedores y reticula con renglones y columnas                                                                                                             |
| Sombras | Clases reutilizables de distintos estilos de sombras                                                                                                                   |
| Tablas | Estilos para las etiquetas relacionadas con tablas `<table>`, `<caption>`, `<thead>`, `<tfoot>`, `<tbody>`, `<tr>`, `<th>` y `<td>`                                    |
| Tarjetas* | Clases para el componente tarjeta del sistema de diseño                                                                                                                |
| Tipografia | Estilos de las etiquetas de títulos y parrafos. Clases de títulos especiales responsivas que utilizan los capítulos de ENI y los componentes de visualización de datos |

## Uso local del proyecto

### Pasos previos recomendados

Para desarrollar este proyecto se usó [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Dado lo anterior las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^18)](https://nodejs.org/en/download/)
- [npm (^9)](https://www.npmjs.com/get-npm)

### Instalación

Clona este repositorio utilizando **solo el protocolo HTTPS**, es decir.

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-css.git
```

Instala las dependencias del proyecto

``` sh
npm install
```

Instala las dependencias de la documentación

``` sh
npm run docs:install
```

### Documentación

Este proyecto cuenta con una documentación más extensa que aún está
en proceso de desarrollo. Es posible levantarla en un ambiente local con la instrucción:

``` sh
npm run docs
```

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

Considerando lo anterior sisdai-css se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio.

___

### ¿Cómo agregar un nuevo estilo?

#### Estructura

Las clases se encuentran agrupadas en modulos, dependiendo el tipo de elemento en el que se utilizará,
si no existiera una carpeta adecuada, se crea una nueva dentro de `src/` con el nombre del componente. 

```bash
sisdai-css/
└── src
    └── *nuevoelemento* # carpeta del elemento o componente
        ├── base.scss # estilos generales
        └── subelemento.scss # sub elementos o casos particulares
```

Para agregar el nuevo elemento a la biblioteca se debe importar en el archivo principal `eni.scss`.
Hay que recordar que el orden en el que se impoten los estilos importa, el último archivo 'gana' el estilo final.

```bash
sisdai-css/
└── src
    ├── [...]
    └── eni.scss
```

Preferiblemente situarlo antes de los auxiliares y los archivos de accesibilidad

```css
/* src/eni.scss */
...

@import "nuevoelemento/base";
@import "nuevoelemento/buselemento";

@import "auxiliares/...";
...
@import "accesibilidad/...";
...
```

Para facilitar el mantenimiento de la biblioteca se debe prestar atención en las variables declaradas en `_variables.css`
y hacer uso de ellas sobre todo en márgenes y colores; 
las tipografías deben estar declaradas en unidades rem para que varien conforme el tamaño general de la tipografía del sitio.

Además se deben utilizar en la medida de lo posible los `_mixins.scss` de mediaquery 
o en su defecto utilizar las variables en el @media screen and (max-width: calc(map-get($breakpoints, 'esc')))
para controlar los puntos de cambio de diseño de celular, escritorio y navegación.


```bash
sisdai-css/
└── src
    ├── _mixins.scss
    ├── _variables.scss 
    └── [...]

```

#### Agregar el nuevo elemento a la documentacion

En la carpeta `docs` existe un proyecto de Vue para desplegar la documentación.
Parecido a los módulos en los que se agrupan los estilos, existen vistas en la
documentación en donde se demuestra como se ve el nuevo estilo, clase o componente
y se describe brevemente su funcionalidad.

En caso de necesitarse una nueva vista, hay que recordar agregarla en las rutas 
y en la navegación.

#### Compilación y actualización

Para las personas colaboradoras de este proyecto, la documentación se puede
compilar para su despliegue en desarrollo usando:

```bash
npm run docs:build
```

Y para compilar el archivo de estilos comprimido para producción:

```bash
npm run build
```

El **build** actualiza los archivos de la carpeta de distribución `dist` que se utilizan para actualizar la **CDN** y que puedes utilizar como archivos locales copiándolos y pegándolos en tus proyectos.
