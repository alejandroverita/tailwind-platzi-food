# CURSO DE TAILWINDS CSS

## INTRODUCCIÓN, INSTALACIÓN Y AMBIENTE DE DESARROLLO

### ¿QUÉ ES TAILWIND CSS?

Es un framework que permite la contrucción de diseños altamente personalizados y de bajo nivel.

**¿Por qué usar TailWind CSS?** 🤨
A diferencia de otros frameworks css, como lo es bootstrap, que otorgan componentes prediseñados, Tailwind provee clases a bajo nivel de css que nos permiten construir diseños completamente personalizados por nostros y sin tener que pelear con el framework en sí.

Nos externa una responsividad desde la misma sintaxis.

Trabaja de manera amigable en el crecimiento de nuestro proyecto al proveernos herramientas para extraer clases.

Pero sobre todo, nos abre su código para personalizarlo ya que esta escrito en PostCSS y configurado en JavaScript.

*Tailwind is more than a CSS framework, it’s an engine for creating design systems.*


------------

### INSTALACION Y AMBIENTE DE DESARROLLO

- Abrir la consola
- Ingresar en la carpeta del proyecto
- Escribir siguiente comando: `npm init -y`
- A partir de aqui ya podemos instalar las demas librerias
	- `npm install tailwindcss@latest postcss@latest autoprefixer@latest` Esto me sirvio a mi despues de que quise iniciar las dependencias y me diera un error 
Autoprefixer es una libreria que nos ayudara en nuestro codigo

`### Inicializar nuestras herramientas`

`npx tailwindcss init` Genera un archivo tailwind.config.js

<!-- Genera archivo configuracion completo -->
- `npx tailwindcss init tailwind.config.full.js --full`


- `touch postcss.config.js` Para MAC
- `fsutil file createnew postcss.config.js 0` para Windows


Plugin recomendado: TailwindCss Intellisense by Brad Cornes


Agregar la siguiente linea al archivo postcss.config.js

```
module.exports = { 
    plugins: [
        require('tailwindcss'), 
        require('autoprefixer')
]

}
```


Crear carpeta CSS con archivo tailwind.css y agregar



```
@tailwind base; 

@tailwind components; 

@tailwind utilities;
```

Crear directorio public con archivo index.html


Instalar live server para realizar las pruebas

Linkar el archivo HTML a una hoja de estilos

- Dirigirse a package.json en la seccion de scripts reemplazar por: ` "build": "postcss css/tailwind.css -o public/css/style.css" `

- Ir a la terminal y escribir `npm run build`




------------

### Directivas de Tailwind

Directiva es una instrucción que utiliza tailwind para insertar código en el archivo final de css que genera.

`@tailwind base`

Ayuda para inicializar elementos de html

`@tailwind utilities`

Genera código de utilerias

`@tailwind screens`

Esta directiva sirve para controlar donde Tailwind inyecta las variaciones responsivas de cada utilidad. Si se omite, Tailwind añadirá estas clases al final de tu css, por defecto.


------------

[========]

## CONCEPTOS BASICOS

### PERSONALIZACION Y CONFIGURACION

Para generar un archivo de configuración para Tailwind, podemos usar el Tailwind CLI:

`npx tailwind init`

Nota. Podemos utilizar esta herramienta cuando instalamos la dependencia via npm.
Donde como resultado tendremos tailwind.config.js:

    module.exports = {
      theme: {},
      variants: {},
      plugins: [],
    }

Cabe mencionar que cada sección, del archivo de configuración, es opcional.

**La sección Theme**
Esta sección es donde definimos los aspectos relacionados con el diseño visual de nuestro sitio.

    ...
      theme: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        fontFamily: {
          display: ['Gilroy', 'sans-serif'],
          body: ['Graphik', 'sans-serif'],
        },
        borderWidth: {
          default: '1px',
          '0': '0',
          '2': '2px',
          '4': '4px',
        },
        extend: {
          colors: {
            cyan: '#9cdbff',
          },
          spacing: {
            '96': '24rem',
            '128': '32rem',
          }
        }
      }
    ...

**La sección Variants**
Esta sección nos permite controlar el comportamiento de las utilidades core, como responsive variants y pseudo-class variants.

    ...
      variants: {
        appearance: ['responsive'],
        // ...
        borderColor: ['responsive', 'hover', 'focus'],
        // ...
        outline: ['responsive', 'focus'],
        // ...
        zIndex: ['responsive'],
      },
    ...

**La sección Plugins**
Esta sección nos permite registrar plugins de terceros con el objetivo de extender utilidades, componentes, estilos, etc.

    ...
      plugins: [
        require('tailwindcss-transforms'),
        require('tailwindcss-transitions'),
        require('tailwindcss-border-gradients'),
      ],
    ...


------------

### RESPONSIVE DESIGN, MOBILE FIRST Y UTILITY FIRST

**Responsive Web Design**
La web como la conocemos, hoy en día, no es una tecnología pensando en un UX o User Experience generando, desafortunadamente, que muchos de los sitio web no estén optimizados para los dispotivos móviles.

Definido por Ethan Marcotte, es una filosofía que responde a las necediades de los usuarios y a los dispositivos que estamos usando.

**Mobile First**
Como su nombre sugiere, significa que iniciaremos con el diseño de móviles y expandiendo éstas características para crear una verión en tableta o escritorio/web tradicional.

Cabe mencionar que esta filosofía no es sinónimo de limitación, por lo que tenemos que tener el mismo contenido tanto en escritorio como en móvil. Google describe las best practices en su sitio.

**Utility first**
CSS posee diferentes tipos de paradigmas para abstraer un diseño, como BEM descrito por Tailwind en ésta sección:

	<div class="chat-notification">
	  <div class="chat-notification-logo-wrapper">
		<img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
	  </div>
	  <div class="chat-notification-content">
		<h4 class="chat-notification-title">ChitChat</h4>
		<p class="chat-notification-message">You have a new message!</p>
	  </div>
	</div>

Sin embargo, llega a ser muy complicado establecer un armonía entre desarrolladores-diseñadores si no hay una concesión de sintaxis o linter. Por ello, Tailwind establece su propio orden con el objetivo:

- No invertir tiempo en inventar nombres para las clases
- Detener el crecimiento, sin fin, de CSS
- Simplificando y asegurando los cambios al CSS

**Herramienta para desarrollo 🚀**
Como desarrolladores necesitamos herramientas que nos permita exlotar nuestra creatividad al máximo por ellos exiten algunas DevTools:

- Safari for Developers
- Chrome o Chrome for Developers


------------


[========]


## UTILERIAS

### COLORES

Los elementos que pueden ser afectados por los colores son:

Fondo.
Texto.
Bordes.
Placeholder.

Taildwind por default tiene valores ya predefinidos, para conocerlos tenemos que generar un archivo de configuración con todos los valores completos:

`npx tailwindcss init tailwind.config.full.js --full`

Se puede ver la paleta de colores por defecto aquí:

[Color palette](https://tailwindcss.com/docs/customizing-colors/#default-color-palette "Color palette")

Para iniciar live-server en la consola

`live-server public`


    <h1 class="bg-red-500 text-white">Hello </h1>
    <input type="text" class="border-2 border-blue-500 placeholder-green-500" placeholder="texto-prueb">

------------


[========]

### DIMENSIONES Y ESPACIOS

Conociendo ya las propiedades del sistema de espacios vamos a ir a nuestro index.html empezaremos con la altura y el ancho

h-8 - modifica altura
w-16 - modifica el ancho
Otra forma de cambiar el ancho de nuestros elementos por porcentajes, si vamos los a la documentación veremos que el porcentaje lo maneja en fracciones entonces tenemos

	w-1/2 - 50% - toma el 50% del ancho
	w-1/3 - 33.33333%

Se maneja internamente utilizando rem. Se puede visualizar desde el archivo tailwind.config.full.js.

Se puede utilizar en:

- Height.
- Width.
- Margin.
- Padding

En las clases de los elementos se añaden cosas como:
`h-32 w-1/2 pt-2 mx-auto`

------------


[========]
