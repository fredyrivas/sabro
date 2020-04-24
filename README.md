# Sabro Front End



## Getting Started

These template uses pre processor pug to handle html files and sass for css. You can use modern JavaScript, arrow functions, classes, etc, since deployment will use Babel to ensure everything works in old browsers. Also deployment will inline javascript, html and css files. 

Bootsrap is included so you can use grid system.

Greensock to handle all animations.

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

* **Fredy Rivas** - *Initial work* - [fredyrivas](http://fredyrivas.com/developer)


## License

All rights reserved.

## Acknowledgments

* God & family.
