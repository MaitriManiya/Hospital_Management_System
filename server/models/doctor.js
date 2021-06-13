const mongoose=require('mongoose')
autoIncrement = require('mongoose-auto-increment');

const Schema=mongoose.Schema
const doctorSchema=new Schema({
    dId:Number,
    name:{
        firstName:String,
        lastName:String
    },
    email:String,
    contactNo:Number,
    gender:String,
    address:String,
    age:Number,
    specialist:String
    
});

autoIncrement.initialize(mongoose.connection);

doctorSchema.plugin(autoIncrement.plugin, {
    model: 'Doctor',
    field: 'dId',
    startAt: 0,
    incrementBy: 1
});
module.exports = mongoose.model("Doctor", doctorSchema);