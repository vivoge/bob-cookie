var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/vivoge');

db.connection.on('error',function(err){
    console.log(err)
});

db.connection.on('open',function(){
   console.log('database ON');
});