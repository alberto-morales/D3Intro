'use strict';
var gulp = require('gulp'),
connect = require('gulp-connect'),
webserver = require('gulp-webserver'),
historyApiFallback = require('connect-history-api-fallback');
// Servidor web de desarrollo
gulp.task('server', () => {
  return gulp.src('./app')
    	     .pipe(webserver({
      		livereload: true,
      		directoryListing: true,
      		open: true,
		host: '192.168.5.177',
      		port: 8000
    	     }));
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', () => {
  return gulp.src('./**/*.html')
	     .pipe(connect.reload());
});

//Busca en las carpetas de estilos y javascript los archivos que hayamos creado
//para inyectarlos en el index.html

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', () => {
	gulp.watch('./**/*.html', gulp.series('html'));
	gulp.watch(['./css/**/*.css'], gulp.series('html'));
	gulp.watch(['./js/**/*.js', './gulpfile.js'], gulp.series('html'));
});

gulp.task('default', gulp.parallel('server', 'watch'));
