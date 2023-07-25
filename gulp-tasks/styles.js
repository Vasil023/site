"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import dartsass from "sass";
import gulpsass from "gulp-sass";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";
import replace from "gulp-replace";

const sass = gulpsass(dartsass);
const argv = yargs.argv,
  production = !!argv.production;

gulp.task("styles", () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(production, sourcemaps.init()))
    .pipe(sass())
    .pipe(groupmedia())
    .pipe(
      autoprefixer({
        grid: true,
        flexbox: true,
        overrideBrowserslist: ["> 1%"],
        browsers: 'last 5 versions, > 1%',
        cascade: true,
      })
    )
    .pipe(
      mincss({
        compatibility: "ie8",
        level: {
          1: {
            specialComments: 0,
            removeEmpty: true,
            removeWhitespace: true,
          },
          2: {
            mergeMedia: true,
            removeEmpty: true,
            removeDuplicateFontRules: true,
            removeDuplicateMediaBlocks: true,
            removeDuplicateRules: true,
            removeUnusedAtRules: false,
          },
        },
      })
    )
    .pipe(
      gulpif(
        production,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe(replace("../../img", "../img"))
    .pipe(gulpif(production, sourcemaps.write("./maps/")))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(
      debug({
        title: "CSS files",
      })
    )
    .on("end", browsersync.reload);
});
