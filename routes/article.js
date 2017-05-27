'use strict';

var router = require('express').Router();

router.get('/', function(req, res) {
    req.models.Article.find(function(err, article){
        if(err){
            res.send(err);
        }
        res.send(JSON.stringify(article));
    });
});
module.exports = router;