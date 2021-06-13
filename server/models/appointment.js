const mongoose=require('mongoose')

const Schema=mongoose.Schema
const appointmentSchema=new Schema({
    name:
    {
        firstName:String,
        lastName:String
    },
    DateOfApp:Date,
    Specialist:String
});

module.exports = mongoose.model('Appointment', appointmentSchema);  