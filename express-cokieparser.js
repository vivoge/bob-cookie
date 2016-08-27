var express = require('express');
var expresssession = require('express-session');
var app = express();

app.use(expresssession({
    resave:true,
    saveUninitialized:true,
    secret:'zf'  //秘钥
}));//req.session

app.get('/',function(req,res){
     var islogin = req.session.islogin;
    if(islogin){
        res.send('old friend');
    }else{
        req.session.islogin = 'true';
        res.send('new friend');
    }
});







app.listen(7070);