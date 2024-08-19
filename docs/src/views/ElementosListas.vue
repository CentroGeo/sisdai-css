<script setup>
import EjemploCodigo from '../componetes/EjemploCodigo.vue'
</script>
<template>
  <div class="contenedor m-y-maximo">

    <div class="ancho-lectura">
      <h1>Listas</h1>
      <p>
        Se recomienda aplicar los estilos directamente a las etiquetas nativas 
        de listas <code>&lt;ol/></code> y <code>&lt;ul/></code>, cumpliendo con 
        los requerimientos del HTML semántico. Esto asegura una integración 
        coherente y accesible dentro de la estructura web. 
      </p>
      <p>
        Listas ordenadas y desordenadas <code>&lt;ul/></code> se pueden anidar con un 
        espacio de sangría que se incrementa con cada nivel, facilitando la distinción 
        visual entre diferentes niveles y subniveles.
      </p>
      <p>
        Listas descriptivas <code>&lt;dl/></code> requieren a cada término <code>dt</code>
        agregarle su correspondiente descripción <code>dd</code>. Estas listas no se anidan.
      </p>
    </div>
    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <ol>
          <li>Lista Nivel 1</li>
          <li>
            Lista Nivel 1
            <ol>
              <li>
                Lista Nivel 2
                <ol>
                  <li>ListaNivel 3</li>
                </ol>
              </li>
              <li>Lista Nivel 2</li>
            </ol>
          </li>
          <li>Lista Nivel 1</li>
        </ol>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <ul>
          <li>Lista Nivel 1</li>
          <li>
            Lista Nivel 1
            <ul>
              <li>
                Lista Nivel 2
                <ul>
                  <li>Lista Nivel 3</li>
                </ul>
              </li>
              <li>Lista Nivel 2</li>
            </ul>
          </li>
          <li>Lista Nivel 1</li>
        </ul>
        '
      />
      </div>
      <div class="columna-4">
      <EjemploCodigo
        tipo='HTML'
        codigo='
        <dl>
          <dt>Término</dt>
          <dd>Descripción del término</dd>
          <dt>Término</dt>
          <dd>Descripción del término</dd>
          <dt>Término</dt>
          <dd>Descripción del término</dd>
        </dl>
        '
      />
      </div>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol>
            <li>Lista Nivel 1</li>
            <li>
              Lista Nivel 1
              <ul>
                <li>
                  Lista Nivel 2
                  <ul>
                    <li>ListaNivel 3</li>
                  </ul>
                </li>
                <li>Lista Nivel 2</li>
              </ul>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ul>
            <li>Lista Nivel 1</li>
            <li>
              Lista Nivel 1
              <ol>
                <li>
                  Lista Nivel 2
                  <ol>
                    <li>Lista Nivel 3</li>
                  </ol>
                </li>
                <li>Lista Nivel 2</li>
              </ol>
            </li>
            <li>Lista Nivel 1</li>
          </ul>
          '
        />
      </div>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tipos de listas</h2>
      <p>
        Existen clases que se puede agregar a listas ordenadas y desordenadas para cambiar el tipo de estilo de la lista.
        Estas clases solo afectan a la lista en la que se agregue, en caso de tener listas anidadas se puede agregar cualquier otro tipo
        que sea requerido.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-latina">
            <li>.lista-latina</li>
            <li>
              Lista Nivel 1
              <ul>
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ul>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-latina-minuscula">
            <li>.lista-latina-minuscula</li>
            <li>
              Lista Nivel 1
              <ul>
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ul>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-romana">
            <li>.lista-romana</li>
            <li>
              Lista Nivel 1
              <ol class="lista-decimal">
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ol>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-romana-minuscula">
            <li>.lista-romana-minuscula</li>
            <li>
              Lista Nivel 1
              <ol class="lista-decimal">
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ol>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-decimal">
            <li>.lista-decimal</li>
            <li>
              Lista Nivel 1
              <ul>
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ul>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
      <div class="columna-4">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ol class="lista-sin-estilo">
            <li>.lista-sin-estilo</li>
            <li>
              Lista Nivel 1
              <ul>
                <li>
                  Lista Nivel 2
                </li>
                <li>Lista Nivel 2</li>
              </ul>
            </li>
            <li>Lista Nivel 1</li>
          </ol>
          '
        />
      </div>
    </div>

    <div class="ancho-lectura">
      <h2 class="m-t-10">Tipo especial de listas ordenadas</h2>
      <p>
        La lista <code>.lista-secuenciada</code> se pueden anidar, incrementando 
        la numeración de los subelementos en cada nivel. Esto ayuda a mantener una 
        jerarquía clara y entender la estructura de los elementos listados.
      </p>
      <p>
        Esta clase se puede utilizar en listas ordenadas y desordenadas 
        pero siempre mantiene el estilo que se demuestra en el ejemplo, incluso si se 
        agregara una clase a alguna lista anidada.
      </p>
    </div>

    <div class="flex flex-contenido-centrado">
      <div class="columna-8">
        <EjemploCodigo
          tipo='HTML'
          codigo='
          <ul class="lista-secuenciada">
            <li>lista-secuenciada</li>
            <li>
              Lista Nivel 1
              <ol>
                <li>
                  Lista Nivel 2
                  <ol>
                    <li>
                      Lista Nivel 3
                      <ol>
                        <li>
                          Lista Nivel 4
                        </li>
                        <li>Lista Nivel 4</li>
                      </ol>
                    </li>
                    <li>Lista Nivel 3</li>
                  </ol>
                </li>
                <li>Lista Nivel 2</li>
              </ol>
            </li>
            <li>Lista Nivel 1</li>
          </ul>
          '
        />
      </div>
     
    </div>


  </div>

</template>
