'use strict';
var argv = require('yargs').argv;

module.exports = function () {

  var basePaths = {
    src:     'src/',
    generatedsrc: 'src_generated/',
    content: 'content/',
    assets:  'assets/',
    dest:    'build/',
    tmp:     '.tmp/',
    bower:   'bower_components/'
  };

  var languages = ['en'];

  var paths = {
    scripts: {
      src:  basePaths.src + 'scripts/',
      dest: basePaths.dest + 'js/'
    },
    styles: {
      src:  basePaths.src + 'styles/',
      dest: basePaths.dest + 'css/',
      generated:  basePaths.generatedsrc + 'styles/'
    },
    content: {
      src:  basePaths.content + 'texts/',
      dest: basePaths.dest + 'content/texts/'
    },
    pages: {
      src:  basePaths.src + 'pages/',
      dest: basePaths.dest
    },
    images: {
      src:  basePaths.content + 'images/',
      dest: basePaths.dest + 'content/images/'
    },
    logos: {
      src:  basePaths.assets + 'logos/',
      dest: basePaths.dest + 'assets/logos/'
    },
    favicons: {
      src:  basePaths.assets + 'favicons/',
      dest: basePaths.dest
    },
    fonts: {
      src:  basePaths.assets + 'fonts/',
      dest: basePaths.dest + 'assets/fonts/'
    }
  };

  var icons = {
    scsstpl:  paths.styles.src + 'tpl/sprite-template.scss.tpl',
    src:  paths.images.src + 'icons/*.svg',
    dest: {
      svgFile: paths.images.dest + 'icons/icons.svg',
      svg: paths.images.dest + 'icons/',
      scss: paths.styles.generated + '_icons.scss'
    }
  };

  var appFiles = {
    scripts:  paths.scripts.src + '**/*.js',
    styles:   paths.styles.src + '**/*.scss',
    content:  paths.content.src + '**/*.yml',
    pages:    paths.pages.src + '**/*.jade',
    images:   paths.images.src + '**/*',
    logos:    paths.logos.src + '**/*',
    favicons: paths.favicons.src + '**/*',
    fonts:    paths.fonts.src + '**/*',
    icons:    icons.src + '**/*.svg'
  };

  var components = [
    basePaths.src + 'modules/',
    basePaths.src + 'elements/'
  ];

  var gulpFiles = [
    'gulp/**/*.js',
    'gulpfile.js'
  ];

  var environments = {
    testing: {
      host:        argv.host,
      username:    argv.username,
      projectPath: 'ginetta/website/',
      releasePath: argv.path,
      privateKey:  argv.privateKey
    }
  };



  return {
    basePaths:    basePaths,
    languages:    languages,
    paths:        paths,
    appFiles:     appFiles,
    components:   components,
    gulpFiles:    gulpFiles,
    environments: environments,
    icons:        icons
  };
};


