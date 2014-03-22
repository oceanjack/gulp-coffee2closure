# [gulp](http://gulpjs.com)-coffee2closure [![Build Status](https://secure.travis-ci.org/steida/gulp-coffee2closure.png?branch=master)](http://travis-ci.org/steida/gulp-coffee2closure) [![Dependency Status](https://david-dm.org/steida/gulp-coffee2closure.png)](https://david-dm.org/steida/gulp-coffee2closure) [![devDependency Status](https://david-dm.org/steida/gulp-coffee2closure/dev-status.png)](https://david-dm.org/steida/gulp-coffee2closure#info=devDependencies)

> gulp plugin fixing CoffeeScript compiled output for Google Closure Compiler


## Install

```
npm install --save-dev gulp-coffee2closure
```


## Example

```js
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffee2closure = require('gulp-coffee2closure');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(coffee2closure())
    .pipe(gulp.dest('build'))
});
```

## API

None! It's just a one command without params.

## License

MIT © [Daniel Steigerwald](https://github.com/steida)
