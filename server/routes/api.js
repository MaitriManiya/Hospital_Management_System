const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const mongoose=require('mongoose')
const Doctor=require('../models/doctor.js')
const User=require('../models/user.js')
const Appointment=require('../models/appointment.js')
const db="mongodb+srv://Maitri:Maitri8839@cluster0.8d214.mongodb.net/Hospital"
mongoose.connect(db,{ useNewUrlParser: true },err=>{
    if(err)
    {
        console.log("Error!! "+err)
    }
    else{
        console.log("Connected to the db")
    }

})
router.get('/',(req,res)=>{
    res.send('From API route')
})

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')

    }
    let token=req.headers.authorization.split(' ')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey')
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }
    req.userId=payload.subject
    next()
}

router.post('/addDoctor',(req,res)=>{
    let doctorData=req.body
    let doctor=new Doctor(doctorData)
    doctor.save((error,addedDoctor)=>{
        if(error)
        {
            console.log("Error! "+error)
        }
        else
        {
            
            res.status(200).send(addedDoctor)
        }
    })
})

router.get('/viewAllDoctors',(req,res)=>{
    console.log('Get requst for all doctors');
    Doctor.find({})
    .exec(function(err,doctors){
        if(err)
        {
            console.log("Error Retriving data");
        }
        else
        {
            res.json(doctors);
        }
    })
})

router.get('/getDoctorById/:dId',(req,res)=>{
   // var id=req.params.dId;
 //   console.log(dId);
    console.log('Get requst for doctor by dId');

   Doctor.find({dId:req.params.dId})
    .exec(function(err,doctor){
        if(err)
        {
            console.log("Error Retriving data");
        }
        else
        {
            console.log(doctor);
            res.json(doctor);
        }
    })
})

router.post('/updateDoctor',(req,res)=>{


    console.log(req.body);
 Doctor.findOneAndUpdate({dId:req.body.dId},req.body,function(err,doctor){
        if(err)
        {
           
            console.log(err);
            console.log("Error updating data");
        }
        else
        {
            
            console.log(doctor);
            //res.send('Suceessfully! doctor updated: '+doctor.email);
            res.json(doctor);
        }
    })
})

router.delete('/deleteDoctor/:dId',(req,res)=>{
    Doctor.remove({dId:req.params.dId},function(err,docs){
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else{
            res.send("success");
        }
    })
})


router.post('/register',(req,res)=>{
    let userData=req.body
    let user=new User(userData)
    user.save((error,registeredUser)=>{
        if(error)
        {
            console.log(error)
        }
        else
        {
            let payload={subject:registeredUser._id}
            let token=jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({email:userData.email},(error,user)=>{
        if(error)
        {
            console.log(error)
        }
        else
        {
            if(!user)
            {
                res.status(401).send('Invalid email')

            }
            else
            {
                if(user.password!=userData.password){
                    res.status(401).send('Invalid password')
                }
                else
                {
                    let payload={subject:user._id}
                    let token=jwt.sign(payload,'secretkey')
                    res.status(200).send({token})
                }
            }
        }

    })
})

router.post('/createApp',(req,res)=>{
    let appData=req.body
    let app=new Appointment(appData)
    app.save((error,createdApp)=>{
        if(error)
        {
            console.log("Error! "+error)
        }
        else
        {
            
            res.status(200).send(createdApp)
        }
    })
})


router.get('/getAllApp',(req,res)=>{
    console.log('Get requst for all appointments');
    Appointment.find({})
    .exec(function(err,apps){
        if(err)
        {
            console.log("Error Retriving data");
        }
        else
        {
            res.json(apps);
        }
    })
})


router.get('/getAllPatients',(req,res)=>{
    console.log('Get requst for all Patients');
    User.find({})
    .exec(function(err,patients)
    {
        if(err)
        {
            console.log("Error Retriving data");
        }
        else
        {
            res.json(patients);
        }
        console.log(patients)
    })
})

module.exports=router