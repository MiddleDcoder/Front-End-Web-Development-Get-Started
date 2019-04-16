module.exports = function(grunt){

    grunt.initConfig({
        jshint: {
            jsFiles: ['js/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

};