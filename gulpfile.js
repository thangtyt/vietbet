var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');


gulp.task('js', function(){
    gulp.src([
                'public/js/jquery.min.js',
                'public/js/bootstrap.min.js',
                'public/js/typed.min.js',
                'public/js/main.js'
            ])
        .pipe(concat('default.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js/'));
});


gulp.task('css', () => {
    return gulp.src('public/css/*.css')
        .pipe(concat('default.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/dist/css'));
});


// gulp.task('css', function(){
//     gulp.src('src/styles/*.css')
//         .pipe(concat('default.css'))
//         .pipe(minify())
//         .pipe(gulp.dest('build/styles/'));
// });

gulp.task('default',['js','css'],function(){
});