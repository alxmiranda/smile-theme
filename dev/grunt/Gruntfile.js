module.exports = function(grunt) {
  
  'use strict';
  
  // configuração do projeto
  var smileConfig = {

    // carrega pacote
    pkg: grunt.file.readJSON( 'package.json' ),

    // configurando diretorios
    dirs: {
      dev: {
        css: '../assets/css',
        js: '../assets/js',
        fonts: '../assets/fonts',
        images: '../assets/images',
        sass: '../assets/sass',
      },

      dist: {
        css: '../../assets/css',
        js: '../../assets/js',
        fonts: '../../assets/fonts',
        images: '../../assets/images',
        sass: '../../assets/sass',
      },
    },

    // compilando .scss em .css
    sass: {
      dist: {
        options: {
          style: 'extended',
          sourcemap: 'none',
          noCache: true
        },
        files: {
          '<%= dirs.dev.css %>/style.css': '<%= dirs.dev.sass %>/style.scss'
        }
      }
    },

    // minifica o css que esta compilado de .scss em .css na pasta dev
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dev.css %>/',
          src: ['style.css'],
          dest: '<%= dirs.dist.css %>/',
          ext: '.min.css'
        }]
      }
    },

    // concatenando e minificando arquivos javascript
    uglify:{
      my_targets:{
        options: {
          mangle: false
        },
        files:{
          '<%= dirs.dist.js %>/scripts.min.js':
          [
          // componentes para serem minificados
          '<%= dirs.dev.js %>/componentes/menu/menu.js',
          '<%= dirs.dev.js %>/componentes/slider/slider.js',
          '<%= dirs.dev.js %>/componentes/carousel/carousel.js',
          '<%= dirs.dev.js %>/componentes/forms/form-ajax.js'
          ]
        }
      }
    },

    // otimizando imagens
    imagemin:{
      dynamic: {
        files:[{
          expand:true,
          cwd:'<%= dirs.dev.images %>/conteudo/',
          src:['*.{png,jpg,gif}'],
          dest:'<%= dirs.dist.images %>/conteudo/'
        }],
      },
    },


    autoprefixer: {
      file: {
        src: '<%= dirs.dev.css %>/style.css'
      },
    },
    // observar atividades e executar tarefas
    watch:{
      sass:{
        files:[
              '<%= dirs.dev.sass %>/configuracoes/*.scss',
              '<%= dirs.dev.sass %>/ferramentas/*.scss',
              '<%= dirs.dev.sass %>/estilos-genericos/*.scss',
              '<%= dirs.dev.sass %>/estilos-basicos/*.scss',
              '<%= dirs.dev.sass %>/objetos/*.scss',
              '<%= dirs.dev.sass %>/componentes/*/*.scss',
              '<%= dirs.dev.sass %>/style.scss'
              ],
        tasks:['sass', 'autoprefixer', 'cssmin']
      },
      js:{
        files:['<%= dirs.dev.js %>/componentes/*/*.js'],
        tasks:['uglify']
      }
    },
  }

  grunt.initConfig(smileConfig);

  // Carrega os pacotes para realizar tarefas
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  // Registrando as tarefas
  grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify', 'imagemin', 'cssmin', 'watch']);
  grunt.registerTask('img', ['newer:imagemin']);

};