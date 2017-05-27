/**
 * Created by yin on 2017/5/25.
 */


const exec = require('child_process').exec

const build = exec('scp -r . root@118.89.156.12:/data/test2')
build.stdout.on('data', data => console.log('stdout: ', data))