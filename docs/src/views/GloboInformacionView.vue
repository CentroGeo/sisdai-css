<template>
    <h1>Tooltips</h1>
    <div class="contenedor ancho-lectura contenedor-izq">
        <p>Globo de información extendido</p>
        <div class="contenedor-globo-info-ext">
            <button class="boton-icono boton-secundario boton-chico">
                <span class="icono-cerrar" />
            </button>
            <div class="cuerpo-globo-info">
                <b> Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Odio omnis, quas sequi mollitia dolorem enim molestiae tempore temporibus fugiat esse sed, voluptatem expedita porro cupiditate minima unde quaerat corporis. Nihil.
            </div>
        </div>

        <p>Globo de información normal</p>
        <div class="contenedor-globo-info">
            <div class="cuerpo-globo-info">
                Lorem ipsum, dolor sit amet consectetur
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contenedor-globo-info-ext > button {
    float: right;
}
</style>