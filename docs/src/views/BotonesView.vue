<template>

  <h1>Botones</h1>

  <h2 class="m-t-10">base</h2>
  <p>
    <button>button</button>
    <a href="" class="boton">a.boton</a>
    <input type="button" value="input[button]">
    <input type="submit" value="input[submit]">
    <input type="reset" value="input[reset]">
  </p>

  <h2 class="m-t-10">color</h2>
  <h3>primario</h3>
  <p>
    <button class="boton-primario">button.boton-primario</button>
    <button class="boton-primario" disabled>disabled</button>
    <a href="" class="boton boton-primario">a.boton.boton-primario</a>
    <input class="boton-primario" type="button" value="input[button]">
    <input class="boton-primario" type="submit" value="input[submit]">
    <input class="boton-primario" type="reset" value="input[reset]">
  </p>
  <h3>secundario</h3>
  <p>
    <button class="boton-secundario">button.boton-secundario</button>
    <button class="boton-secundario" disabled>disabled</button>
    <a href="" class="boton boton-secundario">a.boton.boton-secundario</a>
    <input class="boton-secundario" type="button" value="input[button]">
    <input class="boton-secundario" type="submit" value="input[submit]">
    <input class="boton-secundario" type="reset" value="input[reset]">
  </p>
  <!-- <h3>terciario</h3>
  <p>
    <button class="boton-terciario">button.boton-terciario</button>
    <button class="boton-terciario" disabled>disabled</button>
    <a href="" class="boton boton-terciario">a.boton.boton-terciario</a>
    <input class="boton-terciario" type="button" value="input[button]">
    <input class="boton-terciario" type="submit" value="input[submit]">
    <input class="boton-terciario" type="reset" value="input[reset]">
  </p> -->

  <h2 class="m-t-10">tamaño</h2>
  <p>
    <button class="boton-primario"> boton </button>
    <button class="boton-primario boton-chico"> boton-chico </button>
    <button class="boton-primario boton-grande"> boton-grande </button>
  </p>
  <p>
    <button class="boton-secundario"> boton </button>
    <button class="boton-secundario boton-chico"> boton-chico </button>
    <button class="boton-secundario boton-grande"> boton-grande </button>
  </p>
  <!-- <p>
    <button class="boton-terciario"> boton </button>
    <button class="boton-terciario boton-chico"> boton-chico </button>
    <button class="boton-terciario boton-grande"> boton-grande </button>
  </p> -->
  <p>
    <button class="boton-primario"> boton <span class="icono-flecha-derecha"></span></button>
    <button class="boton-primario boton-chico"> boton-chico <span class="icono-flecha-derecha"></span></button>
    <button class="boton-primario boton-grande"> boton-grande <span class="icono-flecha-derecha"></span></button>
  </p>
  <p>
    <button class="boton-secundario"> boton <span class="icono-flecha-derecha"></span></button>
    <button class="boton-secundario boton-chico"> boton-chico <span class="icono-flecha-derecha"></span></button>
    <button class="boton-secundario boton-grande"> boton-grande <span class="icono-flecha-derecha"></span></button>
  </p>
  <!-- <p>
    <button class="boton-terciario"> boton <span class="icono-flecha-derecha"></span></button>
    <button class="boton-terciario boton-chico"> boton-chico <span class="icono-flecha-derecha"></span></button>
    <button class="boton-terciario boton-grande"> boton-grande <span class="icono-flecha-derecha"></span></button>
  </p> -->

  <h2 class="m-t-10">Iconos</h2>
  <p>boton icono + primario + secundario</p>
  <p>
    <button class="boton-icono boton-primario">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button>
    <button class="boton-icono boton-secundario">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button>
    <!-- <button class="boton-icono boton-terciario">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button> -->
  </p>
  <p>boton icono +  -  + chico + grande</p>
  <p>
    <button class="boton-icono boton-primario">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button>
    <button class="boton-icono boton-primario boton-chico">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button>
    <button class="boton-icono boton-primario boton-grande">
      <span class="icono-flecha-derecha"></span>
      <span class="a11y-solo-lectura">Siguiente.</span>
    </button>
  </p>

  <h2 class="m-t-10">Compuestos</h2>
  <div class="grid">
    <div class="columna-4 columna-8-esc">
      <h3>boton-descarga</h3>
      <button class="boton-descarga">
        <p class="titulo">Descarga de archivos</p>
        <div class="descripcion">
          <p class="texto">Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati. </p>
          <span class="icono-archivo-descargar"></span>
        </div>
      </button>
    </div> 
    <div class="columna-4 columna-8-esc">
      <h3>boton-info + boton-conahcyt</h3>
      <button class="boton-info">Mas Info</button>
      <a class="boton boton-conahcyt" href="https://conacyt.mx/" target="_blank">
        <img src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg" alt="Conahcyt" height="28px">
      </a>
    </div>
  </div>

</template>
