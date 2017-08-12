[![Build Status](https://travis-ci.org/lucasaugustofrontend/cssshortcut-app.svg?branch=master)](https://travis-ci.org/lucasaugustofrontend/cssshortcut-app)
[![dependencies Status](https://david-dm.org/lucasaugustofrontend/cssshortcut-app/status.svg)](https://david-dm.org/lucasaugustofrontend/cssshortcut-app)
[![devDependencies Status](https://david-dm.org/lucasaugustofrontend/cssshortcut-app/dev-status.svg)](https://david-dm.org/lucasaugustofrontend/cssshortcut-app?type=dev)

# CSShortcurt APP

> Projeto descolado <3

## Stack Project

- Task Runner [Gulp](https://gulpjs.com "GulpJS")
- HTMl Template Engine [PUG](https://github.com/pugjs/pug "Template Engine Pug")
- CSS Preprocessor [Stylus](http://stylus-lang.com/ "Stylus")

## Folders Structure

    .
    |__ README.md
    |__ LICENSE.md
    |__ CONTRIBUTING.md
    |__ out/
    |__ src/
    |   |__ assets/
    |   |   |__ icons/
    |   |   |__ img/
    |   |   |__ srcripts/
    |   |   |   |__ scripts.js
    |   |   |__ styles/
    |   |   |   |__ modules/
    |   |   |   |__ style.styl
    |   |__ partials/
    |   |   |__ footer.pug
    |   |   |__ header.pug
    |   |__ layouts/
    |   |   |__ default.pug
    |   |__ projects.pug
    |   |__ index.pug
    |__ gulpfile.js
    |__ package.json
    |__ projects.json
    |__ .editorconfig
    |__ .gitignore

## Run the project locally
**1 -** Prepare the enviroment
```sh
$ yarn dev --dev gulp-cli
```
**2 -** Clone the project and install the dependencies:
```sh
$ git clone https://github.com/lucasaugustofrontend/cssshortcut-app.git
$ cd cssshortcut-app
$ yarn
```
**3 -** Run static server and livereload
```sh
$ gulp server
```

## Automatic Tasks
 - `$ gulp build`: Compile, concat and minify all files.
 - `$ gulp server`: Watch the files and build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/csshortcut/csshortcut-app/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/csshortcut/csshortcut-app/blob/master/CONTRIBUTING.md).

## License
[MIT License](https://github.com/csshortcut/csshortcut-app/blob/master/LICENSE.md) © [Lucas Augusto](http://lucasaugustodesigner.com.br/)
