var http=require('http');
var url = require('url');
var fs = require('fs');
var SESSION_KEY = 'SESSION_KEY';
var sessions = {};

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if(pathname == '/'){
        var sessionId = req.headers.sessionId;
        if(sessionId){

        }else{
            var sid = Date.now()+''+Math.random();
            sessions[sid] = {balance:100};
            res.setHeader(SESSION_KEY,sid);
        }


    }



    else if(pathname == '/read'){

    }





    else if(pathname == '/favicon.ico'){
        fs.createReadStream('./favicon.ico').pipe(res);
    }




}).listen(5050);

