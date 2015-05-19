// PLUGIN_NAME: gulp-next
// Vision: 1.0.1
// author: yumyfung
// date: 2015-05-12
var through = require('through-gulp');

function next(cb) {

  var stream = through(function(file, encoding, callback) {
      if (file.isNull()) {}
      if (file.isBuffer()) {}
      if(file.isStream()) {}
      this.push(file);
      callback();
    }, function(callback){
        cb && typeof cb == 'function' ? cb() : '';
        callback();
    });

  return stream;
      
}

module.exports = next;