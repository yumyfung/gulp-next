#  gulp-next
## 安装
```
npm install --save-dev gulp-next
```
## 参数
callback: 接受一个回调函数作为参数
## 例子
```Javascript
var gulp = require('gulp');
var next= require('gulp-next');

gulp.task('test', function () {
  gulp.src('images/*.png')
      .pipe(gulp.dest('path/output/'))
      .pipe(next(function(){
          console.log('success...');
      }));
});
```
