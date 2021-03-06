const { src, series, dest, parallel, watch } = require('gulp');
const index_path = require('./indexpath.js');

const concat = require('gulp-concat');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass');
const sourceMap = require('source-map');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload; //browser的方法 更新後~
// -----------------
function movePhp() {
    return src('dev/php/*.php').pipe(dest('dist/php/'));
}

function movePagePhp5() {
    return src('dev/php/5/*.php').pipe(dest('dist/php/5/'));
}

function movePagePhpMall() {
    return src('dev/php/mall/*.php').pipe(dest('dist/php/mall/'));
}

function movePagePhp15() {
    return src('dev/php/15/*.php').pipe(dest('dist/php/15/'));
}

function movePagePhp7() {
    return src('dev/php/7/*.php').pipe(dest('dist/php/7/'));
}

function movePagePhp8() {
    return src('dev/php/8/*.php').pipe(dest('dist/php/8/'));
}

function movePagePhp2() {
    return src('dev/php/2/*.php').pipe(dest('dist/php/2/'));
}

function movePhpconnect() {
    return src('dev/*.php').pipe(dest('dist/'));
}
// -----------------


function moveImg() {
    return src('dev/img/**').pipe(dest('dist/img/'));
}

function concatJSAndMove() {
    return src('dev/js/*.js').pipe(concat('all.js')).pipe(dest('dist/js/'));
}

function moveJS() {
    return src('dev/js/*.js').pipe(dest('dist/js/'));
}

function commonStyle() {
    return src('./dev/sass/all.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'expanded', // nested巢狀  // compressed壓縮  //expanded 原本
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css/'));
}

function pageStyle() {
    return src('dev/sass/pages/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'nested',
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css/pages/'));
}

function plugIn() {
    return src('dev/plugin/**')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'nested',
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/plugin/'));
}

function includeHTML() {
    return src('dev/*.html')
        .pipe(
            fileInclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(dest('dist/'));
}

function killDist() {
    return src('dist', { read: false, allowEmpty: true }).pipe(
        clean({
            force: true,
        })
    );
}

exports.kill = killDist;
exports.u = series(killDist, parallel(movePhpconnect, movePagePhp5, movePagePhpMall, movePagePhp7, movePagePhp2, movePagePhp8, movePagePhp15, movePhp, moveImg, moveJS, commonStyle, pageStyle, includeHTML, plugIn));

exports.browser = function browsersync() {
    browserSync.init({
        // files: "**",
        // port: 3001,
        // notify: false, //禁用瀏覽器的通知元素
        // browser: "chrome",
        server: {
            baseDir: './dist', //跟目錄設定
            index: index_path,
            injectChanges: false,
        },
    });
    //與browser同步
    watch(['./dev/sass/**/*.scss', '!dev/sass/pages/*.scss'], commonStyle).on('change', reload);
    watch('./dev/sass/pages/*.scss', pageStyle).on('change', reload);
    watch('./dev/**/*.html', includeHTML).on('change', reload);
    watch('./dev/img/*', moveImg).on('change', reload);
    watch('./dev/js/*.js', moveJS).on('change', reload);
};

exports.w = function watchFiles() {
    watch(['./dev/sass/**/*.scss', '!dev/sass/pages/*.scss'], commonStyle);
    watch('./dev/sass/pages/*.scss', pageStyle);
    watch('./dev/**/*.html', includeHTML);
    watch('./dev/img/*', moveImg);
    watch('./dev/js/*.js', moveJS);
};



//----package
// const cleanCSS = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin');

// exports.img = function compressImg() {
//     return src('dev/img/**/*')
//         .pipe(imagemin())
//         .pipe(rename(function (path) {
//             path.basename += "-mini"
//         }))
//         .pipe(dest('images'))
// }