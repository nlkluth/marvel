'use strict';

module.exports = function(grunt) {

  if (process.env.NODE_ENV !== 'production') {
    require('time-grunt')(grunt);
  }

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'public',
      mainDist: 'dist',
      dist: 'dist/public',
      webPort: 9000,
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      }
    },

    watch: {
      js: {
        files: ['<%= yeoman.app %>/**/*.js'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/*/assets/*.less'],
        tasks: ['less', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= yeoman.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.mainDist %>/*',
            '!<%= yeoman.mainDist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      target: {
        src: ['server/views/includes/*.jade'],
        devDependencies: false,
        ignorePath: '<%= yeoman.app %>/'
      },
      dev: {
        src: ['server/views/includes/*.jade'],
        devDependencies: true,
        ignorePath: '<%= yeoman.app %>/'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/scripts/{,*/}/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    jadeUsemin: {
      main: {
        options: {
          tasks: {
            js: ['concat'],
            css: ['concat']
          }
        },
        files: [{
          dest: '<%= yeoman.dist %>/../server/views/includes/foot.jade',
          src: 'server/views/includes/foot.jade'
        }, {
          dest: '<%= yeoman.dist %>/../server/views/includes/head.jade',
          src: 'server/views/includes/head.jade'
        }]
      }
    },

    jadeFilerevUsemin: {
      main: {
        options: {
          prefix: '', //optional - add prefix to the path [default='']
          deprefix_dest: '', //optional - add prefix to the path [default='']
        },
        files: [{
          dest: '<%= yeoman.dist %>/../server/views/includes/foot.jade',
          src: 'server/views/includes/foot.jade'
        }, {
          dest: '<%= yeoman.dist %>/../server/views/includes/head.jade',
          src: 'server/views/includes/head.jade'
        }]
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', '**/*.html', 'views/{,*/}/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            '{,*/}/views/{,*/}*.html',
            '{,*/}/views/{,*/}/{,*/}*.html',
            '**/images/{,*/}*.{webp}'
          ]
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/fonts',
          flatten: true,
          src: ['bower_components/font-awesome/fonts/*',]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: './',
          dest: './dist',
          src: [
            'package.json',
            'bower.json',
            'app.js',
            'server/*',
            'server/config/**',
            'server/controllers/**',
            'server/views/*',
            'server/views/layouts/*',
            'helpers.js',
            'config/*',
            'models/*',
            'routes/**'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/**/assets/{,*/}*.css',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    nodemon: {
      dev: {
        script: 'dist/app.js',
        options: {
          args: [],
          ignore: ['public/**', 'node_modules/**'],
          ext: 'js,html',
          delayTime: 1,
          env: {
            PORT: require('./server/config/config').port
          },
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    less: {
      development: {
        // options: {
        //   paths: ['assets/css']
        // },
        files: {
          '<%= yeoman.app %>/styles/site.css' : '<%= yeoman.app %>/main.less'
        }
      }
    },
    mochaTest: {
      options: {
        reporter: 'spec',
        require: 'app.js'
      },
      src: ['test/mocha/**/*.js']
    },
    env: {
      test: {
        NODE_ENV: 'test'
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma/karma.conf.js'
      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('heroku:production', function() {
    return grunt.task.run(['build']);
  });

  //Default task(s).
  grunt.registerTask('build', [
    'clean:dist',
    'ngmin',
    'jadeUsemin',
    'rev',
    'jadeFilerevUsemin',
    'less',
    'autoprefixer',
    'copy:dist',
    'htmlmin'
  ]);
  grunt.registerTask('default', [
    'clean:server',
    'bowerInstall:dev',
    'less',
    'autoprefixer',
    'concurrent',
    'watch'
  ]);

  //Test task.
  grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};
