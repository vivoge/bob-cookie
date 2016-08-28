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
    age:{type:Number}
});

var PersonModel = mongoose.model('vivoge',PS);

PersonModel.create([
    { name:"zfpx1", age:1 },
    { name:"zfpx2", age:2 },
    { name:"zfpx3", age:3 },
    { name:"zfpx4", age:4 },
    { name:"zfpx5", age:5 },
    { name:"zfpx6", age:6},
    { name:"zfpx7", age:7 },
    { name:"zfpx8", age:8 },
    { name:"zfpx9", age:9},
    { name:"zfpx10",age:10 }
], function(error,docs) {
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});