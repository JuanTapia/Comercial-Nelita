var gulp =require('gulp');
var watch = require('gulp-watch');



gulp.task('default', function(){
   console.log("chevere!!- you created a gulp task.");
});

gulp.task('html', function(){
   console.log("Imagine something useful done to your html here.");
});

gulp.task('styles', function () {
    console.log("Imagine something useful done to your css here.");
});



gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/**/*.css', function () {
      gulp.start('styles');
  });


});
