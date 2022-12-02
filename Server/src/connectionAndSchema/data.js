const mongoose = require('mongoose');
const dataSchema =  mongoose.Schema({
    userid:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})
const Data = mongoose.model('info',dataSchema);
module.exports = Data;