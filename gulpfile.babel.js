import gulp from "gulp";
import { spawn } from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

// Asset Paths
const stylePath = ["./src/scss/*.scss", "./src/scss/**/*.scss"],
  fontsPath = "./src/fonts/**/*";
// imgPath = ['./site/static/img/*', './site/static/img/**/*'];

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", cb => buildSite(cb));
gulp.task("hugo-preview", cb => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["sass", "js", "fonts"], cb => buildSite(cb, [], "production"));
gulp.task("build-preview", ["sass", "js"], cb =>
  buildSite(cb, hugoArgsPreview, "production")
);

// Compile CSS with Sass
gulp.task("sass", () =>
  gulp
    .src(stylePath)
    .pipe(
      sass({
        sourcemaps: true
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

// Move fonts
gulp.task("fonts", () => {
  return gulp
    .src(fontsPath)
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream());
});

// Compile Javascript
gulp.task("js", cb => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    browserSync.reload();
    cb();
  });
});

// Development server with browsersync
gulp.task("server", ["hugo", "sass", "js"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch("./src/js/**/*.js", () => {
    gulp.start(["js"]);
  });
  watch(stylePath, () => {
    gulp.start(["sass"]);
  });
  watch("./site/**/*", () => {
    gulp.start(["hugo"]);
  });
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, { stdio: "inherit" }).on("close", code => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
