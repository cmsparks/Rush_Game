'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

const pug = require('gulp-pug')

const coffee = require('gulp-coffee')
const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
const clean_css = require('gulp-clean-css')

const html = []
const styles = []
const scripts = []
const client_output = 'build/public'

const server = 'app.coffee'
const server_output = 'build'
const server_final = 'build/app.js'

gulp.task('html', function () {
  return gulp.src(html)
    .pipe(pug())
    .pipe(gulp.dest(client_output))
})

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(clean_css())
    .pipe(gulp.dest(client_output))
})

gulp.task('scripts', function () {
  return gulp.src(scripts)
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest(client_output))
})

gulp.task('server_script', function () {
  return gulp.src(server)
    .pipe(coffee())
    .pipe(gulp.dest(server_output))
})

gulp.task('nodemon', ['server_script'], function (cb) {
  nodemon({script: server_final})
})

gulp.task('watch', function () {
  gulp.watch(html, ['html'])
  gulp.watch(styles, ['styles'])
  gulp.watch(scripts, ['scripts'])
  gulp.watch(server, ['server_script'])
})

gulp.task('default', ['watch', 'html', 'scripts', 'styles', 'nodemon'])
