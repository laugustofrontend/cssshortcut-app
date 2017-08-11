const gulp = require('gulp')
const connect = require('gulp-connect')
const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const imagemin = require('gulp-imagemin')

gulp.task('connect', () => {
    connect.server({
        root: './out',
        livereload: true
    })
})

gulp.task('pug', () => {
  gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out'))
    .pipe(connect.reload())
})
gulp.task('stylus', () => {
  gulp.src('./src/assets/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./out/assets/styles'))
    .pipe(connect.reload())
})
gulp.task('imagemin', () => {
    gulp.src('./src/assets/imgs/**/*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo({plugin: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('./out/assets/imgs'))
})

gulp.task('watch', () => {
  gulp.watch([
      './src/*.pug',
      './src/include/*.pug',
      './src/layouts/*.pug',
      './src/partials/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/**/*.styl'], ['stylus'])
})

gulp.task('build', ['pug', 'stylus', 'imagemin'])
gulp.task('server', ['connect', 'watch'])

gulp.task('default', ['server'] ,() => {})
