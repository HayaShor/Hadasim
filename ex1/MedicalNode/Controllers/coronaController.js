
var express=require('express')
var myRouter=express.Router()
var coronaModel=require('../models/coronaModel')
var userModel=require('../models/userModel')
const myUsers = require('../models/userModel')


myRouter.get('/getAll',(req,res)=>
{
    res.status(200,{'Content-Type':'application/json'})
    coronaModel.find({})
    .then((data)=>{res.json(data);})
    .catch((err)=>{console.log(err)});
});

myRouter.get('/getDet/:id', (req,res)=>
{
    let myId=req.params.id
    coronaModel.find({userId:myId})
    .then((data)=>{res.json(data) })
    .catch((err)=>console.log(err))
   
})


myRouter.put('/add',(req,res)=>
{
    let ToAdd=req.body
    coronaModel.create(ToAdd)
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err)});
})

myRouter.post('/edit/:Id',(req,res)=>{
    let idFromUser=req.params.Id;
    console.log(idFromUser)
    //let Id=new ObjectId(idFromUser);
    let updateData=req.body;
    coronaModel.findByIdAndUpdate(idFromUser,updateData)
    .then((data)=>{res.json(data);})
    .catch((err)=>{console.log(err)});
})

myRouter.delete('/del/:id',(req,res)=>{
    let idFromUser=req.params.id
    res.status(200,{'Content-Type':'application/json'})
    coronaModel.deleteOne({ userId:idFromUser})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});
})




//router-יצוא ה
module.exports=myRouter

