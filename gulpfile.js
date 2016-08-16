var gulp = require('gulp');


// 引入组件
// var htmlmin = require('gulp-htmlmin'), //html压缩
// imagemin = require('gulp-imagemin'),//图片压缩
var 
    minifycss = require('gulp-minify-css'),//css压缩
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify'),//提示信息
    obfuscate = require('gulp-obfuscate'), //混淆js
    sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();  //自动同步
// var rev = require('gulp-rev'); //对文件名加md5后缀
// var revCollector = require('gulp-rev-collector');//路径替换


// gulp.task('concat', function () {
//     gulp.src(['./src/resume.css'])
//         .pipe(rev())      //md5命名
//         .pipe(gulp.dest('./dist'))
//         .pipe(rev.manifest())    //生成一个json文件
//         .pipe(gulp.dest('./rev'));
// });

// // 自动同步
gulp.task('browser-sync',function () {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
//代理模式（本地服务器）
    browserSync.init(files,{
        proxy: 'http://localhost:63342/nonghui/extend.html?_ijt=mbsim603vr9dpgk578va7ulkfm#/index',
    });
//本地静态文件
//     browserSync.init(files, {
//         server: {
//             baseDir: './src'   //该路径到html的文件夹目录
//         }
//     });
});

// 压缩html,清除html注释
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
        .pipe(gulp.dest('./dest'))
        .pipe(notify({ message: 'html task ok' }));
});

// 压缩图片
// gulp.task('img', function() {
//     return gulp.src('src/img/*/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//         }))
//         .pipe(gulp.dest('dest/img/'))
//         .pipe(notify({ message: 'img task ok' }));
// });

// 合并、压缩、重命名css
gulp.task('css', function() {
    return gulp.src('src/styles/css/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dest/css'))
        .pipe(notify({ message: 'css task ok' }));
});

// 混淆压缩js文件
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(obfuscate())
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify({ message: 'js task ok' }));
});

//编译scss
gulp.task('sass', function () {
    return sass('src/styles/sass/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('src/styles/css'))
        .pipe(notify({ message: 'scss task ok' }));
});

gulp.task('watch', function() {
    gulp.watch('src/styles/sass/**/*.scss', ['sass']);
    gulp.watch('src/styles/css/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);

});




// 默认任务
gulp.task('default', function(){
    gulp.run('sass','js','browser-sync','watch');

    // Watch .scss files

    // gulp.watch('src/scss/*.scss', ['sass']);

    //  Watch .css files
    // gulp.watch('src/css/*.css', ['css']);

    // Watch .js files
    // gulp.watch('src/js/*.js', ['js']);



    // 监听html文件变化
    // gulp.watch('src/*.html', function(){
    //     gulp.run('html');
    // });

    // Watch image files
    // gulp.watch('src/images/*', ['img']);
});



