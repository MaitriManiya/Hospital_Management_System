const mongoose=require('mongoose')

const Schema=mongoose.Schema
const userSchema=new Schema({
    name:
    {
        firstName:String,
        lastName:String
    },
    gender:String,
    age:Number,
    email:String,
    contactNo:Number,
    address:String,
    username: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', userSchema);