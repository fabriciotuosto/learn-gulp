'user strict';

var	gulp        = require('gulp');
var	uglify      = require('gulp-uglify');
var less        = require('gulp-less');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCSS   = require('gulp-minify-css');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var	browserify  = require('browserify');
var babelify    = require('babelify');
var del         = require('del');

// Build Configuration Object
var config;
var config_file = process.env.ENV === 'production' ? 'config/production' : './config/development';
var config = require(config_file);

/**
 * Clean generated source folders
 */
gulp.task('clean', function(callback){
	del([config.scripts.dest, config.styles.dest], callback);
});

/**
 * Using Babel and EC6
 */
gulp.task('scripts', function(){
	return browserify({ entries: config.scripts.app, debug: true })
		.transform(babelify)
		.bundle()
		.pipe(source(config.scripts.file))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: config.sourcemaps}))
  		.pipe(uglify({ mangle: config.scripts.mangle }))
  		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.scripts.dest));
});

/**
 *  Concatenate minify and transalte less to css
 */
gulp.task('styles', function(){
  return gulp.src(config.styles.app)
  			.pipe(sourcemaps.init())
    		.pipe(less({ sourceMap : config.sourcemaps}))
    		.pipe(minifyCSS())
    		.pipe(sourcemaps.write('.'))
    		.pipe(gulp.dest(config.styles.dest));
});

/**
 * Copy Bootstrap fonts to deploy directory
 */
gulp.task('bootstrap:fonts', function(){
	return gulp.src(config.fonts.src)  
  				.pipe(gulp.dest(config.fonts.dest));
});
/**
 * Using watch to recompile javascript and less
 */
gulp.task('watch', function(){
    gulp.watch('client/**/*.{js,less}', ['default'])
});

/*
 * Running Tasks
 */
gulp.task('default', ['clean','scripts', 'bootstrap:fonts', 'styles', 'watch'])
