var http=require('http');
var url = require('url');
var fs = require('fs');
var cookieparser = require('cookie-parser');
var querystring = require('querystring');

var express = require('express');
var app = express();
app.use(cookieparser());


app.get('/',function(req,res){
     var isVisited = req.cookies.isVisisted;
    if(isVisited){
       res.send('wel')
    }else{
        res.cookie('isVisisted','1',{maxAge:20*1000});
        res.send('wel new')
    }
});


app.listen(6060);