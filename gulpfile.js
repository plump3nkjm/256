const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const sync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');
const sassLint = require('gulp-sass-lint');
const htmlbeautify = require('gulp-html-beautify');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const srcDir = './src';
const distDir = './';


gulp.task('serve', () => {
  sync.init({
    server: './',
    port: 3333
  });
  gulp.watch('./*.html', [sync.reload]);
  gulp.watch('./src/css/**/*.scss', ['sass', sync.reload]);
  gulp.watch('./src/js/**/*.js', ['js', sync.reload]);
});

gulp.task('sass', () => {
  return gulp.src('./src/css/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.init())
		.pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 10', 'Android >= 4.4']
	}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', () => {
  return gulp.src(srcDir + '/js/page.js')
    .pipe(webpackStream({
      output: { filename: 'page.js' },
      mode: 'production',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { presets: ['es2015']}
          }
        ]
      }
    }, webpack))
    .pipe(gulp.dest(distDir + 'js'));
});





//-----------ここからは場合によって-----------//

//HTML整形用
gulp.task('beautify', () => {

  return gulp.src('./**/*.html')
    .pipe(htmlbeautify({
      options: {
        "indent_size": 2,
        "max_preserve_newlines": 1,
        "preserve_newlines": true
      }
    }))
    .pipe(gulp.dest('./'))

});

//サーバーアップロード
gulp.task('upload', function() {
  var server = ftp.create({
    "host": "creadorz.com",
    "user": "creadorz",
    "pass": "9Rea$2",
  });
  var globs = [
    './css/**',
    './js/**',
    './index.html'
  ];
  return gulp.src(globs, {
      base: '.',
      buffer: false
    })
    .pipe(server.newer('/subdomains/nakajima/httpdocs/gulpftp_sample'))
    .pipe(server.dest('/subdomains/nakajima/httpdocs/gulpftp_sample'));
});

//sassLint
gulp.task('scssCheck', function() {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sassLint({
      options: {
        configFile: '.sass-lint.yml',
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
});
