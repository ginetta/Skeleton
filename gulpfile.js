const gulp = require('gulp');
const config = require('./gulp/config')();
const t = require('./gulp/utils/tasksHelpers')(gulp, config);

// ----------//
//   Build   //
// ----------//

// Cleans the build folder
gulp.task('clean', t.getTask('clean'));

// Moves all the assets to the build. While on production, also revs the assets.
gulp.task('build:assets', t.getTask('assets'));
//
// Moves all the meta files to the build
gulp.task('build:meta', t.getTask('meta'));

// Concatenates all the content files
gulp.task('build:content', t.getTask('content'));

// Generate all pages from the pug files
gulp.task('build:pages', t.getTask('pages'));

// Generate all stylesheets from the sass files
gulp.task('build:styles', t.getTask('styles'));

// Move all javscript files to the build
gulp.task('build:scripts', t.getTask('scripts'));

gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel(
      'build:assets',
      'build:meta'
    ),
    gulp.parallel(
      'build:styles',
      'build:scripts'
    ),
    gulp.series(
      'build:content',
      'build:pages'
    )
  )
);

// ----------//
//   Tests   //
// ----------//
gulp.task('test:unit', t.getTask('unit'));
gulp.task('test', gulp.parallel('test:unit'));

// ------- -//
//  Others  //
// ------ --//

// Serve the build folder
gulp.task('serve', t.getTask('serve'));

// Lints the tooling files.
gulp.task('tooling', t.getTask('tooling'));

// What happens when just running 'gulp'
gulp.task(
  'default',
  gulp.series(
    'build',
    'serve'
  )
);
