import gulp from "gulp";
import ghPages from "gulp-gh-pages";

gulp.task("deploy", function () {
  return gulp.src("./build/**/*").pipe(ghPages());
});
