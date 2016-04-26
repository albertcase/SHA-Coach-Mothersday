var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create();

//Define the app path
var path = {
    all:['template/home.html','template/gallery.html','template/photo.html','./app/css/*.css','./app/js/*.js'],
    template:['./template/home.html'],
    css:['./app/css/*.css'],
    js:['./app/js/*.js','!app/js/widget.js'],
    index_incluede_js:['./app/js/lib/zepto.min.js','./app/js/lib/pre-loader.js','./app/js/rem.js','./app/js/weixinshare.js','./app/js/api.js','./app/js/common.js','./app/js/index.js'],
    home_incluede_js:['./app/js/lib/zepto.min.js','./app/js/lib/lrz.all.bundle.js','./app/js/lib/fabric2.js','./app/js/rem.js','./app/js/weixinshare.js','./app/js/api.js','./app/js/common.js','./app/js/controller.js'],
    photo_incluede_js:['./app/js/lib/zepto.min.js','./app/js/rem.js','./app/js/weixinshare.js','./app/js/api.js','./app/js/common.js','./app/js/photopage.js'],
    gallery_incluede_js:['./app/js/lib/zepto.min.js','./app/js/rem.js','./app/js/weixinshare.js','./app/js/api.js','./app/js/common.js','./app/js/gallery.js'],
    images:['./app/images/*.*']
};

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(path.all,{
        server: {
            baseDir: "./",
            startPath: ''
        }
    });
});

//压缩css
gulp.task('css',function () {
    // 1. 找到文件
    gulp.src(path.css)
        //.pipe(concat('style.css'))
        // 2. 压缩文件
        .pipe(minify())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/css'));
});

//压缩js
gulp.task('js', function () {
    // 1. 找到文件
    gulp.src(path.js)
        .pipe(concat('widget.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js'));
});

//concat and uglify indexjs
gulp.task('indexjs', function () {
    // 1. 找到文件
    gulp.src(path.index_incluede_js)
        .pipe(concat('widget_index.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget_index.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js/widget'));
});

//concat and uglify homejs
gulp.task('homejs', function () {
    // 1. 找到文件
    gulp.src(path.home_incluede_js)
        .pipe(concat('widget_home.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget_home.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js/widget'));
});
//photo_incluede_js
gulp.task('photojs', function () {
    // 1. 找到文件
    gulp.src(path.photo_incluede_js)
        .pipe(concat('widget_photo.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget_photo.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js/widget'));
});
//gallery_incluede_js
gulp.task('galleryjs', function () {
    // 1. 找到文件
    gulp.src(path.gallery_incluede_js)
        .pipe(concat('widget_gallery.js'))
        // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename('widget_gallery.js'))
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./app/js/widget'));
});


//generate index.tpl.php
gulp.task('generate_index',['css','indexjs'], function () {
    var target = gulp.src('./template/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/widget/widget_index.js', './app/css/style.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('index.tpl.php'))
        .pipe(gulp.dest('./template'));
});

//generate home.tpl.php
gulp.task('generate_home',['css','homejs'], function () {
    var target = gulp.src('./template/home.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/widget/widget_home.js', './app/css/style.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('home.tpl.php'))
        .pipe(gulp.dest('./template'));
});

//generate photo.tpl.php
gulp.task('generate_photo',['css','photojs'], function () {
    var target = gulp.src('./template/photo.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/widget/widget_photo.js', './app/css/style.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('photo.tpl.php'))
        .pipe(gulp.dest('./template'));
});

//generate gallery.tpl.php
gulp.task('generate_gallery',['css','galleryjs'], function () {
    var target = gulp.src('./template/gallery.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/widget/widget_gallery.js', './app/css/style.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('gallery.tpl.php'))
        .pipe(gulp.dest('./template'));
});

gulp.task('template',['generate_index','generate_home','generate_photo','generate_gallery']);

gulp.task('default',['browser-sync']);


