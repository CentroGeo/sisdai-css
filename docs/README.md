# Docs

El proyecto de 'documentación' de la biblioteca sisdai-css es un proyecto creado con Vue3.

Es a la fecha, más bien un lugar en donde se muestran ejemplos de cómo son visualmente los elementos y componentes que existen hasta el momento.

## Instalación y uso

Se recomienda seguir la documentación y scripts del proyecto madre de ésta documentación. 

Pero si por alguna razón se necesita correr éste proyecto independiente, entiéndase como un proyecto anidado, está vinculado a la biblioteca de estilos sisdai-css únicamente por el archivo compilado `sisdai.css`, que se importa en el archivo `App.vue` en la línea `@import '@/assets/sisdai.css';`. Por lo demás es independiente para su instalación, compilación y publicación.

## Uso local del proyecto

### Instalación 
```sh
npm install
```

### Levantar el entorno local

```sh
npm run dev
```

### Compilar para publicar

```sh
npm run build
```

Para customizar la configuración hay que revisar la documentación oficial de Vite en [Configurando Vite](https://es.vitejs.dev/config/). 

### Revisar errores de estilo [ESLint](https://eslint.org/)

```sh
npm run lint
```
