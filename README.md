# Webpack 4 Configuration

> A Webpack 4 starter configuration ready for production

Structure:

![structure](https://raw.githubusercontent.com/Drozerah/MyGitHubStorage/master/img/webpack-4-configuration/tree-structure.png)

The _Webpack 4 configuration_ provides:

- Dev Server with configuration options in development:
    - see the `webpack.dev.js` file
    - open the browser after server had been started
    - configurable delay (1200ms) before rebuilding once the first file changed
    - watch for changes in any of the webpack resolved files
    - watch ignored directory with regex ex: node_modules
    - full-screen overlay with errors or warnings
- SCSS source maps in development

<br>

- contentHash in bundle files names for cache busting in production
- export images in production
- export SCSS into own CSS file in production
- minified CSS in production
- Babel.js ES6 to ES5 transpillation with configuration options in production:
    - see the provided `.babelrc` file
- minified JS in production
- minified HTML in production
- CSS autoprefixer in production
    - __Note:__ CSS3 Grid Layout polyfill (IE 10-11) is available


## Usage:

Clone or download this repository
````bash
$ git clone https://github.com/Drozerah/webpack-4-configuration.git
````
Then
````bash
$ cd webpack-4-configuration
````
Then
````bash
$ npm install
````
<br>

> __Development mode__

![structure](https://raw.githubusercontent.com/Drozerah/MyGitHubStorage/master/img/webpack-4-configuration/app.png)

````bash
$ npm start
````
- Will run the `webpack-dev-server` then opening the application into the browser

`package.json` scripts:
````json
...
{

    "scripts": {

        "start": "webpack-dev-server --config webpack.dev.js --open",

    }

}
...
````
<br>

> __Production mode__

````bash
$ npm run build
````
- Will create a `./dist` directory with all your assets `images`, `index.html`, `main.css` and `main.js` bundles
    - __Note:__ the `clean-webpack-plugin` will clean the `./dist` directory before each execution of the build command

`package.json` scripts:
````json
...
{
    "scripts": {

        "build": "webpack --config webpack.prod.js"

    }
}
...
````
<br>

> __Tip__

To open the built app into the browser:

````bash
$ cd dist && start index.html
````
More about the [`start` command line](https://dwheeler.com/essays/open-files-urls.html)

<br>

> __Deployment__ 

[![Netlify Status](https://api.netlify.com/api/v1/badges/519f2b8c-31ff-44bc-8efe-deb72ca61e48/deploy-status)](https://app.netlify.com/sites/webpack-4-configuration/deploys)

This application is deployed using netlify, check it out bellow !

https://webpack-4-configuration.netlify.com/

#### Built with:

- [Webpack 4](https://webpack.js.org/)
- Node.js
- NPM
- HTML5
- CSS3
    - Grid Layout
- SCSS
- VScode
- JavaScript ES6

#### Author:

* **Thomas G. aka Drozerah** - [Github](https://github.com/Drozerah)

#### Acknowledgments:

- [Netlify](https://app.netlify.com)

#### License:

ISC





