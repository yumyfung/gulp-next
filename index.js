// PLUGIN_NAME: gulp-next
// Vision: 1.0.7
// author: yumyfung
// date: 2016-10-27

var through = require('through-gulp');

function next(cb) {

  var files = [];
  var fileList = [];

  var stream = through(function(file, encoding, callback) {
      if (file.isNull()) {}
      if (file.isBuffer()) {}
      if(file.isStream()) {}
      fileList.push(file.path);
      files.push(file); // 临时保存数据
      callback(); // 声明该文件处理完毕
    }, function(callback){
      for(var i = 0, len = files.length; i < len; i++){
        this.push(files[i]);  // 传递处理后数据给下一个插件
      }
      cb && typeof cb == 'function' ? cb(fileList) : '';
      callback();
    });

  return stream;
      
}

module.exports = next;
