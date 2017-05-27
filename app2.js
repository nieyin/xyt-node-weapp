'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

var orm = require("orm");


const app = express();

app.set('query parser', 'simple');
app.set('case sensitive routing', true);
app.set('jsonp callback name', 'callback');
app.set('strict routing', true);
app.set('trust proxy', true);

app.disable('x-powered-by');

// 记录请求日志
app.use(morgan('tiny'));

// parse `application/x-www-form-urlencoded`
app.use(bodyParser.urlencoded({ extended: true }));

// parse `application/json`
app.use(bodyParser.json());
var testgit

//连接数据库，创建模型对象
app.use(orm.express("mysql://root:123@localhost:3306/myblog", {
    define: function (db, models, next) {
        //文章模型
        models.Article = db.define("blog_article2", require('./apps/model/article'));

        //同步 model 到数据库
        // models.Article.sync(function (err) {
        //     console.log("create Person table successfully!")
        // });

        next();
    }
}));

app.use('/orm', require('./routes/article'));

//app.use('/', require('./routes'));

// 打印异常日志
process.on('uncaughtException', error => {
    console.log(error);
});

// 启动server
http.createServer(app).listen(config.port, () => {
    console.log('Express server listening on port: %s', config.port);
});
