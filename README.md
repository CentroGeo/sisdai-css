# sisdai-css

El proyecto sisdai-css es una biblioteca de estilos de Sass 
alineada al Sistema de Diseño y Accesibilidad para la Investigación 
([Sisdai](https://sisdai.conahcyt.mx/)).

Para leer la documentación de la biblioteca, puedes visitar el sitio [sisdai-css.conahcyt.mx](https://sisdai-css.conahcyt.mx/) ó seguir las instrucciones escritas en la sección [Uso local del proyecto](#uso-local-del-proyecto) de éste README.md para levantar la documentación localmente.

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Utilidades

* Normaliza la forma en que se visualizan los elementos de HTML entre distintos navegadores como Firefox, Chrome, Opera, Safari, Edge
* Estandariza estilos desde las etiquetas de HTML
* Agrega clases para ayudar a la accesibilidad
* Contiene un archivo de `_variables` general para homogeneizar, tipografías, pesos, tamaños, espacios y colores
* Contiene un archivo de `_mixins` general para reutilizar los mediaquery de los límites declarados para la correcta visualización en celulares y pantallas más grandes

## Instalación y uso

Si tu proyecto está creado con [sisdai-proyecto-base](https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base) , ya
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

import 'sisdai-css/dist/sisdai.min.css'

```

Ó en el archivo o sección de estilos de tu proyecto

```css

@import 'sisdai-css/dist/sisdai.min.css';
```

*Opcionalmente se pueden importar las variables y mixins para utilizar las mismas referencias que la biblioteca en los estilos particulares de cada proyecto

```css
@import 'sisdai-css/src/_variables';
@import 'sisdai-css/src/_mixins';
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

Si actualmente utilizas la biblioteca y necesitas utilizar otra versión, ubícate en la carpeta del proyecto en donde necesitas la actualización e instala la versión que requieres nuevamente

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-css#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0


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
| Componentes*     | Estilos de componentes declarados en la biblioteca [sisdai-componentes](https://codigo.conahcyt.mx/sisdai/sisdai-componentes)                                                            |
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
| Visualizaciones* | Estilos de elementos utilizados en las bibliotecas [sisdai-graficas](https://codigo.conahcyt.mx/sisdai/sisdai-graficas) y [sisdai-mapas](https://codigo.conahcyt.mx/sisdai/sisdai-mapas) |

> [!NOTE]  
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
git clone https://codigo.conahcyt.mx/sisdai/sisdai-css.git
```

Entra a la carpeta del proyecto

``` sh
cd sisdai-css
```

Instala las dependencias del proyecto

``` sh
npm install
```

Instala las dependencias de la documentación

``` sh
npm run docs:install
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
podrán levantar issues en este repositorio.

___

### ¿Cómo agregar un nuevo estilo?

#### Estructura

Las clases se encuentran agrupadas en módulos, dependiendo el tipo de elemento en el que se utilizará. Si no existiera 
una carpeta adecuada, se crea una nueva dentro de `src/` con el nombre del componente. 

```bash
sisdai-css/
└── src
    └── *nuevoelemento* # carpeta del elemento o componente
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

```css
/* src/sisdai.scss */
...
...

@import "nuevoelemento";

@import "auxiliares";
@import "accesibilidad";
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

#### Validaciones con Stylelint

El proyecto está construido con los estándares de [Stylelint](https://stylelint.io/user-guide/rules) para mejorar las convenciones y evitar errores comunes.
Después de agregar los estilos del nuevo elemento, asegúrate de que se cumplan las mismas reglas.

Para verificar el proyecto con Stylelint puedes correr en la terminal el comando 
```bash
npx stylelint "**/*.scss"
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

