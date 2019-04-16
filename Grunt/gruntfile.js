module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            myFiles: ['js/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

};