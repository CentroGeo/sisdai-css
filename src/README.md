# Contenido del proyecto

Listado de los elementos de la librería en proceso de desarrollo y documencación
- Generales
  - [x] __mixins_
  - [x] __normalizar_
  - [x] __variables_
  - [x] _eni_
- Accesibilidad
  - [x] Vista simplificada
  - [x] Cambio de tipografía
  - [x] Hipervinculos subrayados
  - [-] Cambio de color (tema claro/oscuro)
  - [x] Auxiliares de lectura
  - [ ] Auxiliares de navegación por teclado
  - [ ] Auxiliares de animación
- Auxiliares
  - [x] Alineación de bloque
  - [x] Alineación de texto
  - [ ] Peso tipográfico
  - [ ] Animación
- Módulos
  - [x] Tipografía
  - [x] Iconografía
  - [x] Botones
  - [x] Links
  - [x] Color
  - [x] Retícula
  - [x] Tablas
  - [x] Listas
  - [x] Imagenes
  - [x] Bordes
  - [x] Sombras
  - [x] Separadores
  - [x] Formulario



## Variables
**Breakpoints** variable de sass para guardar el `min-width` del `media query`, que cambia entre la versión móvil a tableta y escritorio

``` css
$breakpoints: (
  'mov': 320px,
  'tab': 768px,
  'esc': 1496px,
);
```

**Espaciado** base8, variable de sass que se incrementa de 8 en 8, de 0 a 80, mas dos extras de 96px y 120px. id incremental de 0 a 12.
Se utiliza para crear los margenes, paddings y espaciados entre columnas.

``` css
$espaciado: (
  '0': 0,
  '1': 8px,
  '2': 16px,
  '3': 24px,
  '4': 32px,
  '5': 40px,
  '6': 48px,
  '7': 56px,
  '8': 64px,
  '9': 72px,
  '10': 80px,
  '11': 96px, // extra1
  '12': 120px, // extra2
);
```

___

## Módulos

### Retícula

1. **Contenedores**

    1.1 Existe una clase `.contenedor` general que se extiende a lo ancho de toda la pantalla, respetando margenes interiores izquierdo y derecho definidos segun los `breakpoints` para cada dispositivo.

    Se puede agregar la clase `.ancho-fijo` al contenedor para que tome el ancho máximo definido en el arreglo por dispositivo. Por default el contendor se centrará en la vista.

    ```css
    $contenedores: (
      'mov': (
        'ancho-maximo': 100%,
        'margen': map-get($espaciado, '3'), // 24px
      ),
      'tab': (
        'ancho-maximo': 1064px,
        'margen': map-get($espaciado, '5'), // 40px
      ),
      'esc': (
        'ancho-maximo': 1416px,
        'margen': map-get($espaciado, '5'), // 40px
      ),
    );
    ```

    1.2 También existe una clase especial `.ancho-lectura` que define el ancho máximo de la caja a `720px`. Por default el contendor se centrará en la vista.

    1.3 Por último existe una clase casada con la función de accesibilidad de vista simplificada, por lo que en caso de existir la clase `.a11y-simplificada` los bloques que contengan la clase `.a11y-simplificada-contenedor` pasaran en version de escritorio un grid de dos columnas con espaciado de `map-get($espaciado, '3'), // 24px`
    
    ___
    ***hacer nota a los helpers de posicion de contenddores***
    ____

2. **Columnas**

    Existen varios tipos de columnas dependiendo de en que se arman, hay en grid, en flex y en columns. 

    Tanto grid como flex se basan en la idea que en celular existan 4, en tableta 8 y en escritorio hasta 12 columnas por fila, como se muestra en el arreglo en las variables. Las clases de numero mayor al limite de columnas por dispositivo, se reformatea al 100% para dicho dispositovo.
    
    Por ejemplo: grid-col-5 en celular es del 100% del ancho igual que grid-col-6... 12


    ```css
    $columnas: (
      'mov': 4,
      'tab': 8,
      'esc': 12
    );
    $columnas-espaciado: map-get($espaciado, '3');
    ```

    2.1 **columna**
    
    Unicamente se necesita poner la clase `columns-3` al bloque que se requiera en columnas, en donde el digito describe cuantas columnas se espera que existan, existiendo números consecutivos del `1` al `12`.
    
    ***NOTA:*** *la forma en que se formatean con este atributo es muy diferente al de flex o grid, este se formatea automáticamente, no se tiene mucho control de en qué punto pasa de una columna a otra. Pero funciona bien para textos, por ejemplo.*

    2.2 **flex**
    
    Debe estar dentro de un elemento con la clase `flex` cada columna debe tener la clase `flex-basis-1` en donde el dígito describe el ancho de la columna, existiendo números consecutivos del `1` al `12`.

    2.3 **grid**

    Debe estar dentro de un elemento con la clase `grid` cada columna debe tener la clase `grid-column-1` en donde el dígito describe el ancho de la columna, existiendo números consecutivos del `1` al `12`.

    2.4 **gap**

    Es una clase con la que se puede redefinir el espaciado en `columns` y `grid`. Existen 13 variantes que vienen del arreglo de `$espaciado` de incrementos de 8 en 8

    2.5 **flex-gap**

    Hace la misma funcion que `gap` pero es una clase especial para utilizar con las columnas de `flex`.

3. **Márgenes** (margin - padding)

    Para los nombres de las clases se utilizan los prefijos `m-` (margin) y `p-` (padding) seguido del id del espaciado para diferenciar el tamaño del margen exterior e interior respectivamente.

    Para ambos casos, para definir únicamente algun lado se utiliza el prefijo seguido de la inicial de la posición en inglés separado con guión, ej. `m-t` (margin-top) y se crearon clases especiales para el eje `x` y `y` ej. `p-y` (padding-top + padding-bottom).

    También se agrega al final la abreviatura del dispositivo en el que se agregará el margen, ej.
    `m-t-3-tab` lo que le pone un margen arriba de 24px para la tableta, clase que existe a partir del breakpoint tab (768), por lo que existirá la clase para tablet y escritorio, pero no para el móvil.


### Color
1. **Colores institucionales Gobierno de México**

    Existe un arreglo de colores que se utilizan en la identidad y en la página de gobierno que se enlista a continuación.

    Además para el sub arreglo de identidad se crearon clases de color de fondo, texto y borde. 

    Los nombres de las clases siguen la lógica de poner primero que se va a formatear, seguido del nombre de color de la varible, por ejemplo `fondo-gobmx-verde` ó `texto-gobmx-dorado`.

    ``` css
    $color-gobmx: (
      'identidad': (
        'gobmx-verde': #1F5D50, //header gobierno
        'gobmx-pino': #18302D, // footer gobierno
        'gobmx-beige': #DFC9A1, // enlaces gobierno
        'gobmx-dorado': #BD9558, // hover enlaces gobierno
        'gobmx-tinto': #9E2148,
      ),
      'utiles': (
        'gobmx-gris-0': #404041, // hover de boton
        'gobmx-gris-1': #6F7271, // texto secundario
        'gobmx-gris-2': #A9A8A9, // textos deshabilitados
        'gobmx-gris-3': #DDD, // fondo en cajas
        'gobmx-gris-4': #F6F6F6,
        'gobmx-blanco': #FFF, // textos footer gobierno
      ),
    );
    ```

2. **Colores institucionales Conahcyt**
    
    Así mismo se creó un arreglo con las variables de color que utiliza el Conahcyt en su identidad y en su página web. 

    Para este caso se utiliza igual el sub arreglo de identidad para crear clases de color de fondo, texto y borde, agregando una clase extra de `fondo-conahcyt-degradato` que se utiliza en el footer del mismo.

    ``` css
    $color-conahcyt: (
      'conahcyt-degradado': linear-gradient(to bottom, #003384, #002663, #001c4a), // footer conahcyt // este es especial na mas pa fondos
      'identidad': (
        'conahcyt-azul': #022563,
        'conahcyt-gris': #8C8D8E,
      ),
      'utiles': (
        'conahcyt-negro': #141414, // cuerpo de texto
        'conahcyt-gris': #d5d5d5, // enlaces conahcyt
        'conahcyt-blanco': #fff, // texto footer conahcyt
        'conahcyt-cian': #13aff0, // hover enlaces conahcyt
      ),
    );
    ```


## Notas
links sistema de diseño:

* [xd primeras secciones aprobadas](https://xd.adobe.com/view/b6b1d14e-1cf2-46c0-b71c-7dafcbbb8f07-e3e2/)

* [xd por validar en diseño](https://xd.adobe.com/view/5a240017-8409-4dee-acd1-443275e2be51-0f77/)



___
TODO: borrar despues
___
links doc color themas :

* [exploracion color](https://docs.google.com/spreadsheets/d/1fEzL0wHeZSFvr-qk1IHAgBaRMCdDHNE1IGYBBr6SZeE/edit#gid=0)
* [codepen switch checkbox](https://codepen.io/michellebarker/pen/GzzrGJ)
* [swich data-tema](https://lukelowrey.com/css-variable-theme-switcher/)
* [mdn :root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
* [mdn: media color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
___