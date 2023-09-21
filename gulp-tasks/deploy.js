import gulp from "gulp";
import deploy from "gh-pages";

gulp.task("deploy", function () {
  return gulp.src("../dist/**/**/*").pipe(deploy());
});
