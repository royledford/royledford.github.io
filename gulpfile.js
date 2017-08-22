/**
 * Overview of process
 * ---------------------------------------------
 * - Run Gulp to build and start the browser.
 * - Gulp calls:
 *      browsersync -> 
 *          sass,
 *          jekyll-rebuild ->
 *              jekyll-build ->
 *      watch
 * -        
 */


var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var jade = require('gulp-jade');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build Site
 */
gulp.task('jekyll-build', function(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
        .on('close', done);
});

/**
 * Rebuild Site
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

/**
 * Launch server after jekyll-build
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});



/**
 * _jadefiles into _include
 */
gulp.task('jade', function() {
    return gulp.src('_jadefiles/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('_includes'));
});

/**
 * .html files from _jadefiles into _include
 */
gulp.task('jade-html', function() {
    return gulp.src('_jadefiles/*.html')
        .pipe(gulp.dest('_includes'));
});

/**
 * Assets / Documents
 */
gulp.task('documents', function() {
    return gulp.src('dev-assets/documents/*')
        .pipe(gulp.dest('assets/documents'));
});


/**
 * Compile files from dev-css into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {
    return gulp.src('dev-assets/css/main.sass')
        .pipe(sass().on('error', function(err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000); // Display error in the browser
            this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dev-assets/css'))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css'));
});


gulp.task('js', function(cb) {
    gulp.src('dev-assets/js/functions.js')
        .pipe(gulp.dest('_site/assets/js'))
    pump([
            gulp.src('dev-assets/js/functions.js'),
            uglify(),
            gulp.dest('assets/js')
        ],
        cb
    );
});

gulp.task('image', function() {
    gulp.src('dev-assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
        .pipe(gulp.dest('_site/assets/img'))
});

/**
 * Watch files for changes & recompile
 */
gulp.task('watch', function() {
    gulp.watch('dev-assets/js/*.js', ['js']);
    gulp.watch(['dev-assets/css/**/*.sass', 'dev-assets/css/**/*.scss'], ['sass']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
    gulp.watch('_jadefiles/*.html', ['jade-html']);
    gulp.watch('dev-assets/img/**/*', ['image']);
    gulp.watch('_tags/*.html', ['jekyll-rebuild']);
    gulp.watch('project-pages/*.html', ['jekyll-rebuild']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*', 'dev-assets/js/*.js'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
// gulp.task('default', ['sass', 'js', 'jade', 'jade-html', 'image', 'browser-sync', 'watch']);
gulp.task('default', ['sass', 'browser-sync', 'watch']);