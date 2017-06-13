var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-jade');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Site
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});




/**
 * Launch server after jekyll-build
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        // notify: false
    });
});

/**
 * Compile files from _jadefiles into _include
 */
gulp.task('jade', function () {
  return gulp.src('_jadefiles/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('_includes'));
});


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    // return gulp.src('assets/css/main.sass')
    return gulp.src('assets/css/main.sass')
      .pipe(sass().on('error', function(err) {
          console.error(err.message);
          browserSync.notify(err.message, 3000); // Display error in the browser
          this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
        }))
        // .pipe(sass({
        //     includePaths: ['css'],
        //     onError: browserSync.notify
        // }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('js', function() {
  gulp.src('assets/js/functions.js')
    //   .pipe(sass({)
    // .pipe(concat('script.js'))
    // .pipe(browserify())
    // .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest('_site/assets/js'))
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch(['assets/css/**/*.sass', 'assets/css/**/*.scss'], ['sass']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
