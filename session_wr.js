var http=require('http');
var url = require('url');
var fs = require('fs');
var querystring =require('querystring');
var SESSION_KEY = 'SESSION_KEY';
var sessions = {};

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if(pathname == '/'){
        var cookieObj = querystring.parse(req.headers.cookie,'; ');
        var sessionId = cookieObj[SESSION_KEY];

        if(sessionId){
            var sessionObj = sessions[sessionId];
            if(sessionObj){
                sessionObj.balance = sessionObj.balance-10;
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end('余额被扣'+sessionObj.balance)
            }else{
                res.end('guoqi')
            }

        }else{
            var sid = Date.now()+''+Math.random();
            sessions[sid] = {balance:100};
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.setHeader('Set-Cookie',SESSION_KEY+'='+sid);
            res.end('新卡获赠'+sessions[sid].balance);
        }


    }



    else if(pathname == '/favicon.ico'){
        fs.createReadStream('./favicon.ico').pipe(res);
    }




}).listen(5050);

