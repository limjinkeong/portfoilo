module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //서버
        serve: {
            options: {
                port: 9000
            }
        },

        //eco less

        less: {
            product: {
                options: {
                    paths: ['assets/css'],
                    compress:true
                },
                files: {
                    'assets/css/style.min.css': 'assets/less/import.less'
                }
            },


            dev: {
                options: {
                    paths: ['assets/css'],
                    dumpLineNumbers:"comments"
                },
                files: {
                    'assets/css/style.dev.css': 'assets/less/import.less'
                }
            }
        },

        //daebo less

        // less: {
        //     product: {
        //         options: {
        //             paths: ['daeboassets/css'],
        //             compress:true
        //         },
        //         files: {
        //             'daeboassets/css/daebostyle.min.css': 'daeboassets/less/daeboimport.less'
        //         }
        //     },
        //
        //     dev: {
        //         options: {
        //             paths: ['daeboassets/css'],
        //             dumpLineNumbers:"comments"
        //         },
        //         files: {
        //             'daeboassets/css/daebostyle.dev.css': 'daeboassets/less/daeboimport.less'
        //         }
        //     }
        // },

        //eco watch

        watch: {
            scripts: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            }
        },

        //daebo watch

        // watch: {
        //     scripts: {
        //         files: ['daeboassets/less/*.less'],
        //         tasks: ['less'],
        //         options: {
        //             spawn: false,
        //         }
        //     }
        // },

        //eco includes

        includes: {
            files: ['assets/less/*.less'],
            tasks: ['includes'],
            options: {
                spawn: false,
            }
        },
        includes: {
            dist:{
                cwd:'html',
                src:['*.html'],
                dest:'eco_dist',
                options: {
                    flatten:true,
                    includePath:'html'
                }
            }
        },
        //daebo includes

        // includes: {
        //     files: ['daeboassets/less/*.less'],
        //     tasks: ['includes'],
        //     options: {
        //         spawn: false,
        //     }
        // },
        // includes: {
        //     dist: {
        //         cwd:'daebohtml',
        //         src:['*.html'],
        //         dest:'daebo_dist',
        //         options: {
        //             flatten:true,
        //             includePath:'html'
        //         }
        //     }
        // }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-includes');
    // Default task(s).
    grunt.registerTask('default', ['serve']);

};
