const gulp = require('gulp')
const bs = require('browser-sync').create()
const connect = require('gulp-connect')
const pug = require('gulp-pug')
const stylus = require('gulp-stylus')

gulp.task('connect', () => {
    connect.server({
        root: './out',
        livereload: true
    })
})

gulp.task('pug', () => {
  gulp.src('./src/**/*.pug')
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

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/*.styl'], ['stylus'])
})

gulp.task('build', ['pug', 'stylus'])
gulp.task('server', ['connect', 'watch'])

gulp.task('default', () => {})
