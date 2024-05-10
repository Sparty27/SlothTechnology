const {src, dest, watch} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function styles() {
    return src('app/scss/main.scss')
        .pipe(concat('main.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
}

function watching() {
    watch(['app/scss/main.scss'], styles)
}

exports.styles = styles;
exports.watching = watching;