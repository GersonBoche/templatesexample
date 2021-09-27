// gulp

// requerimos gulp principalmente en variable constante o normal
// requerid gulp beginner in variable cons or normal
const gulp = require('gulp'),
    // browsersync tambien
	browserSync = require('browser-sync').create();


// gulp 

// funcion principal
gulp.task('default', () => {
	browserSync.init({
		server: './'
	});


    // modulo de camibio en gulp
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./css/*.css').on('change',browserSync.reload);
	gulp.watch('./js/*.js').on('change',browserSync.reload);

})