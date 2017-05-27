/**
 * Created by yin on 2017/5/25.
 */

var Task = require('shell-task')


new Task('ls')
    //.then('ssh -tt root@118.89.156.12')
    .then(function (next) {
        // you can mix JavaScript functions in between...
        console.log('正在上传文件...')
        setTimeout(next, 10)
    })
    .then('scp -r . root@118.89.156.12:/data/release/node-weapp-demo')
    .then(function (next) {
        // you can mix JavaScript functions in between...
        console.log('上传完成')
        setTimeout(next, 10)
    })
    .then(function (next) {
        // you can mix JavaScript functions in between...
        console.log('上传完成2')
        setTimeout(next, 10)
    })
    .run(function (err, next) {
        // this entire callback is optional.
        if (err) {
            // you can ignore the exception
            // and just call next(), which will
            // continue the flow
        } else {
            console.log('部署完成!')
        }
    })