module.exports = function(grunt) {
  
  'use strict';
  
  // configuração do projeto
  var smileConfig = {

    // carrega pacote
    pkg: grunt.file.readJSON( 'package.json' ),

    // configurando diretorios
    dirs: {
      css: '../assets/css',
      js: '../assets/js',
      fonts: '../assets/fonts',
      images: '../assets/images',
      sass: '../assets/sass',
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
          '<%= dirs.css %>/style.css': '<%= dirs.sass %>/style.scss'
        }
      }
    },

    // minifica o css
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= dirs.css %>/',
          src: ['style.css'],
          dest: '<%= dirs.css %>/',
          ext: '.min.css'
        }]
      }
    },

    // concatenando e minificando arquivos javascript
    uglify:{
      my_targets:{
        files:{
          '<%= dirs.js %>/scripts.js':
          [
          // Exemplo para ordenar os arquivos
          '<%= dirs.js %>/modulos/js-1.js',
          '<%= dirs.js %>/modulos/js-2.js',
          '<%= dirs.js %>/modulos/js-3.js',
          '<%= dirs.js %>/modulos/js-4.js'
          ]
        }
      }
    },

    // otimizando imagens
    imagemin:{
      dynamic: {
        files:[{
          expand:true,
          cwd:'<%= dirs.images %>/originais/',
          src:['*.{png,jpg,gif}'],
          dest:'<%= dirs.images %>/producao/'
        }],
      },
    },

    // observar atividades e executar tarefas
    watch:{
      sass:{
        files:['<%= dirs.sass %>/style.scss'],
        tasks:['sass', 'cssmin']
      },
      js:{
        files:['<%= dirs.js %>/modulos/*'],
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  // Registrando as tarefas
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
  grunt.registerTask('img', ['newer:imagemin']);

};