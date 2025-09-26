# Changelog

Todos los cambios más importantes de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0)
y este proyecto se adhiere al [Versionamiento semántico](https://semver.org/spec/v2.0.0.html).

\*Nota: Este Changelog se comenzó el 2024-10-22. Se documentaron hacia atrás los cambios más relevantes
de la biblioteca. Por lo tanto no se listan aquí todos los tags existentes.

## [1.10.1] - 2025-09-25

### Arreglado (Fixed)

- Al pie de página de gobierno le quitamos la imagen que tenía de fondo y agregamos una nueva clase para ponérselo a algunos enlaces que deben ir subrayados por default.

## [1.10.0] - 2025-08-13

### Agregado (Added)

- Se actualizaron los pictogramas utilizando los archivos de tipografía de manera local y copiándolos en el `src/assets/` y en el `dist/`. También se agregó en el readme cómo agregar un nuevo pictograma.

## [1.9.1] - 2025-07-16

### Arreglado (Fixed)

- Se cambió el color que usan las líneas punteadas de las gráficas a `var(--borde-secundario)` para que sean un gris más claro.

## [1.9.0] - 2025-03-27

### Cambiado (Changed)

- Se actualizaron las versiones y archivos de configuración de las bibliotecas requeridas tanto para el proyecto como para la documentación.

## [1.8.1] - 2025-01-01

### Arreglado (Fixed)

- Funcionamiento de variables de ambiente

## [1.8.0] - 2025-01-01

### Agregado (Added)

- ID de seguimiento de Google Analytics con la cuenta pigema@centrogeo.edu.mx

### Quitado (Removed)

- Código de seguimiento de Matomo

## [1.7.4] - 2024-12-17

### Cambiado (Changed)

- homologando títulos de sección con títulos en el menú y títulos en las pesatañas, pestañas con la forma 'Nombre elemento | Sección | nombre-biblioteca'

## [1.7.3] - 2024-12-16

### Cambiado (Changed)

- actualizando rutas de imagenes al cdn
- actualizando readme para incluir el cambio del use del sass y el @centrogeo de la biblioteca

### Agregado (Added)

- agregando variables de entorno

## [1.7.2] - 2024-12-11

### Cambiado (Changed)

- Ajustando elementos de navegacion, agregando clase para submenu en columnas, agregando enlaces a otras bibliotecas en la página de inicio y moviendo los enlaces de la navegación principal para homologar las posiciones de los elementos.

## [1.7.1] - 2024-12-11

### Cambiado (Changed)

- Refactorización de la biblioteca entera para cambiar los @imports de sass y eliminar las advertencias de su futura obsolencia

## [1.7.0] - 2024-12-10

### Agregado (Added)

- Agregando componente de pestañas con su módulo scss y vistas en Visualizaciones y Componentes.

## [1.6.1] - 2024-12-06

### Cambiado (Changed)

- A los páneles del conenedor .contenedor-vis les cambiamos los paddings máximos de 32px a 24px.

## [1.6.0] - 2024-12-02

### Agregado (Added)

- Agregando pictogramas alerta, capas, escribir, filtro, norte en svg desde los archivos cdn de fontastic a la documentación en Fundamentos.

## [1.5.0] - 2024-11-22

### Agregado (Added)

- Agregando componentes de formulario de casilla de verificacion simple, grupo de casillas de verificacion y grupo de botones de radio

## [1.4.2] - 2024-10-25

### Arreglado (Fixed)

- Acomodando estilos de la etiqueta caption de tabla para que coincida con titulo-tabla. Cambiando documentación para promover el uso de caption para los títulos de tablas.

## [1.4.1] - 2024-10-25

### Arreglado (Fixed)

- Logo de pie sin remover en Mostrar solo texto

## [1.4.0] - 2024-11-22

### Agregado (Added)

- Agregando componentes de formulario con campo base, area de texto y selector

## [1.3.5] - 2024-11-21

### Cambiado (Changed)

- El nombre del proyecto en el `package.json` pasa a ser @centrogeomx/sisdai-css para su publicación en el repositorio de npm

## [1.3.4] - 2024-11-20

### Agregado (Added)

- Instrucciones en el README.md para coincidir con la publicación de la biblioteca en el repositorio de paquetes de npmjs.com

## [1.3.3] - 2024-10-22

### Cambiado (Changed)

- Perfil predeterminado
- Actualización de documentación de color

### Agregado (Added)

- Perfil eni

## [1.3.2] - 2024-10-21

### Cambiado (Changed)

- Reacomodo de estilos para componer el formato de Dart Sass 2
- Hoja de estilo de documentación

### Eliminado (Removed)

- Imágenes viejas que no se utilizan

## [1.3.1] - 2024-10-16

### Cambiado (Changed)

- Imágen para compartir en redes (X y facebook)

## [1.3.0] - 2024-10-15 - Release

### Cambiado (Changed)

- Colores institucionales del Gobierno de México para el periodo 2024-2030
- Documentación de header y footer institucionales del Gobierno de México para el periodo 2024-2030
- Información de color y navegación de la documentación

## [1.2.6] - 2024-09-27

### Cambiado (Changed)

- Cambiando todas las `aria-label` a nombres accesibles
- Etiqueta de menu por div en el menú de accesibilidad

### Agregado (Added)

- Nombres de ejemplos a distintos elementos
- Texto de enlaces de ejemplo

## [1.2.2] - 2024-09-13

### Arreglado (Fixed)

- Errores de accesibilidad en la navegación principal

### Agregado (Added)

- Títulos significativos a todas las secciones para mejorar la informacion de compartir

## [1.2.0] - 2024-09-03

### Agregado (Added)

- Matomo
- Archivos de ambiente de desarrollo y producción

### Cambiado (Changed)

- Información de rutas para el seguimiento de matomo

## [1.0.0] - 2024-06-01 - Release

### Cambiado (Changed)

- Refactorización de la biblioteca entera para homologar documentación y lineamientos de diseño de la información para el Sisdai
- Refactorización de color
- Refactorización de nombres de clases
- Versión estable de documentación

[1.10.1]: https://github.com/CentroGeo/sisdai-css/compare/v1.10.1...v1.10.0
[1.10.0]: https://github.com/CentroGeo/sisdai-css/compare/v1.10.0...v1.9.1
[1.9.1]: https://github.com/CentroGeo/sisdai-css/compare/v1.9.1...v1.9.0
[1.9.0]: https://github.com/CentroGeo/sisdai-css/compare/v1.9.0...v1.8.1
[1.8.1]: https://github.com/CentroGeo/sisdai-css/compare/v1.8.1...v1.8.0
[1.8.0]: https://github.com/CentroGeo/sisdai-css/compare/v1.8.0...v1.7.4
[1.7.4]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.7.4...v1.7.3
[1.7.3]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.7.3...v1.7.2
[1.7.2]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.7.2...v1.7.1
[1.7.1]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.7.1...v1.7.0
[1.7.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.7.0...v1.6.1
[1.6.1]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.6.1...v1.6.0
[1.6.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.6.0...v1.5.0
[1.5.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.5.0...v1.4.2
[1.4.2]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.4.2...v1.4.1
[1.4.1]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.4.1...v1.4.0
[1.4.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.4.0...v1.3.5
[1.3.5]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.5...v1.3.4
[1.3.4]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.4...v1.3.3
[1.3.3]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.3...v1.3.2
[1.3.2]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.2...v1.3.1
[1.3.1]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.1...v1.3.0
[1.3.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.3.0...v1.2.6
[1.2.6]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.2.6...v1.2.2
[1.2.2]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.2.2...v1.2.0
[1.2.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/compare/v1.2.0...v1.0.0
[1.0.0]: https://codigo.conahcyt.mx/sisdai/sisdai-css/-/releases/v1.0.0
