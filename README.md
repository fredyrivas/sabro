# Sabro Front End



## Getting Started

El front end del sitio esta construido con webpack, babel y scss. 

Los ajustes al HTML se pueden hacer directamente en el backend. Pero para ajustar Javascript y CSS es necesario levantar el proyecto del front end con webpack dev server. (npm run start).

Los ajustes del js se hacen en src/assets/js/...
Los ajustes del css se hacen en src/assets/sass/...

Para compilarlo solo hace falta correr (npm run build)


La estructura de cada sub sitio esta dividida en src/views/... aliamsa, interpec, sabrohuevo, y sabropollo

El css y js se comparte para todos. 


DEVELOPMENT NOTES:
These template uses pre processor pug to handle html files and sass for css. You can use modern JavaScript, arrow functions, classes, etc, since deployment will use Babel to ensure everything works in old browsers. Also deployment will inline javascript, html and css files. 

*Bootsrap is included so you can use grid system.

*Greensock to handle all animations.

To handle favicon you'll only need to include jpg or png file to src/assets/favicon/ and adjust name in "webpack.common" file

You can also use facebook sdk included in javascript module directory.

All the images you need to use will be copied from src/assets/img/ to dist folder, so to include in pug file use: "img(src="assets/img/logo.png")" and in scss: "background-image: url("assets/img/background.jpg");"

### Prerequisites


```
You'll need node 10 and npm installed.

```

### Installing

Clone the project and cd to your directory. Install dev dependencies with your terminal typing:

```
npm i
```

Then run the project as follows:

```
npm run start
```

Finally to deploy type:

```
npm run build
```




## Deployment

Run "npm run build" and everything will be distributed to dist directory. 

## Built With

Babel 
Bootstrap 
Greensock
jQuery
Pug
Sass
Webpack 4

## Contributing

Not allowed 


## Authors

* **Sabro** 


## License

All rights reserved.

## Acknowledgments


