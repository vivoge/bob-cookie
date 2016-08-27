var http=require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var express = require('express');
var app = express();

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if(pathname == '/'){
         fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/buy'){
        var ts = new Date(Date.now()+10*1000).toGMTString();
        res.setHeader('Set-Cookie',"name"+Math.random()+"=phone; Max-Age=10");
        res.end('write');
    }else if(pathname == '/look'){
       var cookieObj = querystring.parse(req.headers['cookie'],'; ');
        res.end(JSON.stringify(cookieObj));
    }else if(pathname == '/favicon.ico'){
        fs.createReadStream('./favicon.ico').pipe(res);
    }








}).listen(5050);


