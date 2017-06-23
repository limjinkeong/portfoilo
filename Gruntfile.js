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
        //레스
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
        //와치
        watch: {
            scripts: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            }
        },
        includes: {
            files: ['assets/less/*.less'],
            tasks: ['includes'],
            options: {
                spawn: false,
            }
        },
        //인클루드
        includes:{
            dist:{
                cwd:'html',
                src:['*.html'],
                dest:'eco_dist',
                options:{
                    flatten:true,
                    includePath:'html'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-includes');
    // Default task(s).
    grunt.registerTask('default', ['serve']);

};
