module.exports = function(grunt){

    grunt.initConfig({
        jshint: {
            jsFiles: ['js/**/*.js']
        }
    });
    grunt.loadNpmTask('grunt-contrib-jshint');

};