# sisdai-css

El proyecto sisdai-css es una biblioteca de estilos de Sass alineada al Sistema de Diseño y Accesibilidad para la 
Investigación ([Sisdai](https://sisdai.conahcyt.mx/)). El Sisdai es un proyecto de investigación desarrollado por el 
Centro de Investigación en Ciencias de Información Geoespacial, A.C. 
([CentroGeo](https://www.centrogeo.org.mx/)) y coordinado por el Consejo Nacional de Humanidades, Ciencias y Tecnologías
([Conahcyt](https://conahcyt.mx)) del Gobierno de México.

Para leer la documentación de la biblioteca, puedes visitar el sitio [sisdai-css.conahcyt.mx](https://sisdai-css.conahcyt.mx) 
o levantar la documentación localmente siguiendo las instrucciones escritas en la sección [Uso local del proyecto](#uso-local-del-proyecto) de este
documento.

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla en su equipo a través del 
**protocolo HTTPS** o bien instalándola mediante [npm](https://www.npmjs.com/~centrogeomx).

## Utilidades

* Normaliza la forma en que se visualizan los elementos de HTML entre distintos navegadores como Firefox, Chrome, Opera, Safari, Edge
* Estandariza estilos desde las etiquetas de HTML
* Agrega clases para ayudar a la accesibilidad
* Contiene un archivo de `_variables` general para homogeneizar, tipografías, pesos, tamaños, espacios y colores
* Contiene un archivo de `_mixins` general para reutilizar los mediaquery de los límites declarados para la correcta visualización en celulares y pantallas más grandes

## Instalación y uso

Si tu desarrollo está creado con el [proyecto-base](https://github.com/CentroGeo/sisdai-proyecto-base), ya
tiene incluida una versión estable de sisdai-css y sisdai-componentes y no requiere ningún paso de instalación ni importación. En
ese caso puedes ir a la sección [Actualización](#actualización).

### Agrega las tipografías

Esta biblioteca utiliza las tipografías de Montserrat y Atkinson Hyperlegible de Google fonts.

Agrega las siguientes líneas dentro del `<head> </head>` del archivo de html en el siguiente orden:

1. Ligas de las tipografías de Google Fonts.
2. Ligas de la tipografía para los íconos (aún en desarrollo).

``` html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
```

### Instala la biblioteca

En la carpeta principal de tu proyecto Vue puedes instalar la última versión de sisdai-css mediante dos opciones:

**Opción A.** Desde el repositorio del [sisdai-css en npm](https://www.npmjs.com/package/@centrogeomx/sisdai-css).

En la línea de comando escribe

```bash
npm i @centrogeomx/sisdai-css
```

**Opción B.** Desde el repositorio de [sisdai-css en github](https://github.com/CentroGeo/sisdai-css).

En la línea de comando escribe

```bash
npm install git+https://github.com/CentroGeo/sisdai-css
```

### Importa la biblioteca

Puedes importar la biblioteca de manera general en el archivo `main.js` de tu proyecto Vue

```js
// src/main.js

import '@centrogeomx/sisdai-css'

```

Ó en el archivo de css o sección de estilos de tu proyecto 

```css
/* archivo css */
@import '@centrogeomx/sisdai-css';
```

*Opcionalmente se pueden importar las variables y mixins para utilizar las mismas referencias que la biblioteca en los estilos particulares de cada proyecto

```scss
/* archivo scss */
@use '@centrogeomx/sisdai-css/src/_variables' as variables;
@use '@centrogeomx/sisdai-css/src/_mixins' as mixins;
```

### Uso de la biblioteca

Muchos de los estilos de la biblioteca se muestran sin agregar ninguna clase, utilizando las etiquetas adecuadas para el HTML semántico. 

```html
  <h1> Estilo estandarizado de título principal </h1>
```

Existen además clases para dar estilo a elementos, las cuales se encuentran agrupadas por módulos dependiendo de su uso.

```html
  <p class="h1">Es la jerarquía de texto más alta, se ubica generalmente al inicio de la página y describe el contenido de la misma</p>
```

## Actualización

Si necesitas utilizar otra versión, ubícate en la carpeta del proyecto en donde necesitas la actualización e instala la versión que requieres nuevamente usando una de estas dos opciones

**Opción A.** Para versiones publicadas en el repositorio de [sisdai-css en npm](https://www.npmjs.com/package/sisdai-css).

```bash
npm i @centrogeomx/sisdai-css@vN.N.N
```

**Opción B.** Para cualquier versión desde el repositorio de [sisdai-css en github](https://github.com/CentroGeo/sisdai-css)
```bash
npm install git+https://github.com/CentroGeo/sisdai-css#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

Consulta el archivo `CHANGELOG.md` del repositorio de [sisdai-css](https://github.com/CentroGeo/sisdai-css) para conocer las nuevas características y cambios que sufre la biblioteca en cada una de sus versiones.


## Listado de elementos

El código se encuentra separado por carpetas dependiendo del tipo de etiqueta o funcionalidad de los elementos que contenga.
En general las clases fundamentales para estructurar las vistas, definir la tipografía, color, así como cada etiqueta nativa de html tiene su propia carpeta.
Se separaron los elementos compuestos, componentes y clases requeridas para visualizaciones en carpetas y archivos específicos para cada uno y así asegurar por 
jerarquía que unos estilos se puedan sobreescribir a otros.

| Módulo           | Descripción                                                                                                                                                                              |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Accesibilidad    | Clases para reescribir el estilo de elementos requeridos por el menú de accesibilidad                                                                                                    |
| Auxiliares       | Clases auxiliares para desarrollo, estilos de texto, bordes, alineación y visualización en distintos dispositivos                                                                        |
| Botón            | Clases que se aplican al elemento `<button>`                                                                                                                                             |
| Color            | Variables de CSS para las paletas de color en modo claro y modo oscuro para todos los elementos del sistema Sisdai                                                                       |
| Componentes*     | Estilos de componentes declarados en la biblioteca [sisdai-componentes](https://github.com/CentroGeo/sisdai-componentes)                                                            |
| Compuestos       | Estilos de múltiples elementos que combinados crean un nuevo estilo de elemento compuesto                                                                                                |
| Detalle          | Estilos las etiquetas `<details>` `<summary>`                                                                                                                                            |
| Formulario       | Estilos de todas las etiquetas que conforman y se utilizan dentro de formularios                                                                                                         |
| Hipervínculo     | Estilos de la etiqueta de hipervínculo `<a>`                                                                                                                                             |
| Imagen           | Estilos de las etiquetas relacionadas con imágenes `<img>`, `<figure>` y `<figcaption>`                                                                                                  |
| Lista            | Estilos de las etiquetas de listas `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>` y `<dd>` y clases de estilos para listas especiales                                                            |
| Pictograma       | Enlace y mapeado de la tipografía Sisdai-Pictogramas  `.pictograma-`                                                                                                                     |
| Separador        | Estilos de la etiqueta `<hr />` que puede ser complementada con el auxiliar de borde                                                                                                     |
| Retícula         | Clases de contenedores y retícula con filas y columnas                                                                                                                                   |
| Tabla            | Estilos para las etiquetas relacionadas con tablas `<table>`, `<caption>`, `<thead>`, `<tfoot>`, `<tbody>`, `<tr>`, `<th>` y `<td>`                                                      |
| Tipografía       | Estilos de las etiquetas de títulos, párrafos y texto en general.                                                                                                                        |
| Visualizaciones* | Estilos de elementos utilizados en las bibliotecas [sisdai-graficas](https://github.com/CentroGeo/sisdai-graficas) y [sisdai-mapas](https://github.com/CentroGeo/sisdai-mapas) |
 
> *Estilos que se utilizan en otras bibliotecas del Sisdai

## Uso local del proyecto

### Pasos previos recomendados

Para desarrollar este proyecto se usa [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^20)](https://nodejs.org/en/download/)
- [npm (^10)](https://www.npmjs.com/get-npm)

### Instalación

Clona este repositorio utilizando **solo el protocolo HTTPS**, es decir.

```bash
git clone https://github.com/CentroGeo/sisdai-css.git
```

Entra a la carpeta del proyecto

``` sh
cd sisdai-css
```

Instala las dependencias del proyecto

``` sh
npm install
```

Opcionalmente instala las dependencias de la documentación

``` sh
npm run docs:install
```

Opcionalmente levanta en local la documentación
```sh
npm run docs
```
ó
```sh
npm run docs:dev
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

Considerando lo anterior, sisdai-css se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio. El equipo del [Sisdai](https://sisdai.conahcyt.mx) se encargará de mantenerlo.

___

### ¿Cómo agregar un nuevo estilo?

#### Estructura

Las clases se encuentran agrupadas en módulos, dependiendo el tipo de elemento en el que se utilizará. Si no existiera 
una carpeta adecuada, se crea una nueva dentro de `src/` con el nombre del elemento. 

```bash
sisdai-css/
└── src
    └── *nuevoelemento* # carpeta del elemento
        ├── _index.scss # archivo con import de todos los archivos del nuevo elemento
        ├── base.scss # estilos generales
        └── subelemento.scss # sub elementos o casos particulares
```

Para agregar el nuevo elemento a la biblioteca se debe importar en el archivo principal `sisdai.scss`.
Hay que recordar que el orden en el que se importen los estilos tiene jerarquía. El último archivo importado es el 
que le dará estilo al elemento.

```bash
sisdai-css/
└── src
    ├── [...]
    └── sisdai.scss
```

Colócalo antes de los auxiliares y los archivos de accesibilidad

```scss
/* src/sisdai.scss */

@use 'nuevoelemento';

@use 'auxiliares';
@use 'accesibilidad';
```

Para facilitar el mantenimiento de la biblioteca se debe prestar atención en las variables declaradas en `_variables.css`
y hacer uso de ellas sobre todo en márgenes y colores; 
las tipografías deben estar declaradas en unidades _rem_ para que se actualicen conforme el tamaño general de la tipografía del sitio.

Además, se deben utilizar en la medida de lo posible los `_mixins.scss` de mediaquery 
o en su defecto utilizar las variables en el @media screen and (max-width: calc(map-get($breakpoints, 'esc')))
para controlar los puntos de cambio de diseño de celular, escritorio y navegación.


```bash
sisdai-css/
└── src
    ├── _mixins.scss
    ├── _variables.scss 
    └── [...]

```

```scss
@use '_variables' as variables;
@use '_mixins' as mixins;

```

#### Validaciones con Stylelint

El proyecto está construido con los estándares de [Stylelint](https://stylelint.io/user-guide/rules) para mejorar las convenciones y evitar errores comunes.
Después de agregar los estilos del nuevo elemento, asegúrate de que se cumplan las mismas reglas.

Para verificar el proyecto con Stylelint puedes correr en la terminal el comando 
```bash
npm run pruebas:stylelint
```

Aparecerá una lista de errores, en caso de que existan, con sugerencias para solucionarlos. 
Cuando no aparezca nada en tu lista, estás lista para continuar.

#### Validaciones con Sass

Para verificar que el proyecto corra con la última version de Sass, puedes correr en la terminal el comando 
```bash
npm run pruebas:sass
```

Aparecerá una lista de errores, en caso de que existan, con sugerencias para solucionarlos. 
Cuando no aparezca nada en tu lista, estás lista para continuar.

#### Agregar el nuevo elemento a la documentación

En la carpeta `docs` existe un proyecto de Vue para desplegar la documentación.
Parecido a los módulos en los que se agrupan los estilos, existen vistas en la
documentación en donde se demuestra como se ve el nuevo estilo, clase o componente
y se describe brevemente su funcionalidad.

En caso de necesitar una nueva vista, hay que agregarla en las rutas 
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

----------------

### ¿Cómo agregar un nuevo pictograma?

Antes de mapear la tipografía Sisdai-Pictogramas `.pictograma-`, es importante que el equipe de diseño valide los archivos SVG fuente. 

#### Mapear los archivos SVG fuente

Para mapear e importar la tipografía se recomienda utilizar [fontastic.me](https://app.fontastic.me/#) con la cuenta de [Sisdai](https://sisdai.conahcyt.mx).

#### Agregar los archivos de tipografía

Al descargar la nueva tipografía se deben colocar los archivos EOT, SVG, TTF y WOFF en la siguiente ruta `src/fonts` y después configurar los módulos `fuente.scss` y `mapa.scss`.

#### Configurar la fuente de la tipografía

Coloca la ruta de los archivos de tipografía en el módulo de `fuente.scss`. La url también puede ser de un servicio remoto.

```scss
/* src/pictograma/fuente.scss */

@font-face {
  font-family: sisdai-pictogramas;
  src:url('fonts/sisdai-pictogramas.eot');
  src:url('fonts/sisdai-pictogramas.eot?#iefix') format('embedded-opentype'),
    url('fonts/sisdai-pictogramas.woff') format('woff'),
    url('fonts/sisdai-pictogramas.ttf') format('truetype'),
    url('fonts/sisdai-pictogramas.svg#sisdai-pictogramas') format('svg');
  font-weight: normal;
  font-style: normal;
}

```

#### Configurar el mapeo de la tipografía

Copia y pega tal cual la lista del mapeo que viene en el archivo `style.css` importado de fontastic, asegurándote que el valor de la clave en la propiedad `content` no se repita.

```scss
/* src/pictograma/mapeo.scss */

.pictograma-a:before {
  content: "\1a";
}
.pictograma-b:before {
  content: "\1b";
}
.pictograma-c:before {
  content: "\1c";
}
...

```

#### Compilar para desplegar

Se debe compilar para desplegar la documentación en desarrollo con el comando `npm run docs:install` y el comando `npm run build` crear el archivo de estilos comprimido para producción.


#### Agregar el nuevo pictograma a la documentación

En la vista de Fundamentos/Pictogramas de la `docs/` se deben agregar los ejemplos de los nuevos pictogramas. Así, se asegura de que funcionan correctamente.

----------------