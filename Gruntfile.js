'use strict';

module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        uglify: {
            options: {
                mangle: true,
                beautify: false
            },
            rc_uglify: {
                files: {
                    'public/viking.min.js': [
                        'public/core.js',
                        'public/js/skel.min.js',
                        'public/js/skel-init.js',
                    ]
                }
            }
        }
    } );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // Default task(s).
    grunt.registerTask( 'default', ['uglify'] );
};