var through = require('through2');
var coffee2closure = require('coffee2closure');
var gutil = require('gulp-util');

const PLUGIN_NAME = 'gulp-coffee2closure';

module.exports = function() {

  return through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isBuffer()) {
      try {
        file.contents = new Buffer(coffee2closure.fix(file.contents), 'utf8');
        this.push(file);
      }
      catch (e) {
        this.emit('error', new gutil.PluginError(PLUGIN_NAME,
          e.message + '. File: ' + file.path));
        gutil.log(e.stack);
      }
      return callback();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME,
        'Streams are not supported!'));
      return callback();
    }

  });
};
