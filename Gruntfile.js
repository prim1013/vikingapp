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
                        'public/js/controllers/ListController.js'
                    ]
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['public/css/lib/ratchet']
                },
                files: {
                    "public/css/lib/ratchet/docs.less": "public/css/lib/ratchet/docs.less",
                    "public/css/lib/ratchet/ratchet.less": "public/css/lib/ratchet/ratchet.less",
                    "public/css/lib/ratchet/ratchet-theme-ios.less": "public/css/lib/ratchet/ratchet-theme-ios.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true,
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            }
        }
    } );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );

    // Default task(s).
    grunt.registerTask( 'default', ['uglify', 'less'] );
};