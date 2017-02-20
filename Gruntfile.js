module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
        engine: 'im',
        sizes: [{
          name: 'small',
          width: 320,
          quality: 30
        },{
          name: 'medium',
          width: 640,
          quality: 30
        },{
          name: 'large',
          width: 1024,
          suffix: '_1x',
          quality: 30
        },{
          name: "large",
          width: 1600,
          suffix: "_2x",
          quality: 30
        }]
       },

    files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images_dest/'
       }]
      }
    },

    clean: {
      dev: {
        src: ['images_dest']
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['images_dest']
        },
      },
    },

  });

      grunt.loadNpmTasks('grunt-responsive-images');
      grunt.loadNpmTasks('grunt-contrib-clean');
      grunt.loadNpmTasks('grunt-mkdir');
      grunt.registerTask('default', ['clean','mkdir','responsive_images']);

};
