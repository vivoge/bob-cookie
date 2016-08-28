var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/vivoge');

db.connection.on('error',function(err){
   console.log(err);
});
db.connection.on('open',function(){
    console.log('db ON');
});

var PS = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String}
});

var PerS = mongoose.model('vivoge',PS);
var perE = new PerS({
    name:'asdf',
    age:34,
    email:'vivoge@163.com'
});
/*perE.save(function(err,doc){
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});*/

PerS.find({age:34},function(err,docs){
    if(err){
        console.log(err)
    }else{
        console.log(docs)
    }
});