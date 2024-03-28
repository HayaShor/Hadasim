var express=require('express')
var myRouter=express.Router()

var userModel=require('../models/userModel')


myRouter.get('/getAll',(req,res)=>{
    res.status(200,{'Content-Type':'application/json'})
    userModel.find({})
    .then((data)=>{res.json(data);})
    .catch((err)=>{console.log(err)});
});


myRouter.put('/add',(req,res)=>{
    let newUser=req.body
    userModel.create(newUser)
        .then((data)=>{res.json(data);})
        .catch((err)=>{console.log(err)});
})



//עדכון משתמש (ללא פרטי קורונה)
// myRouter.post('/edit/:id',(req,res)=>{
//     let idFromUser=req.params.id;
//     let id=new ObjectId(idFromUser);
//     let newUser=req.body;
//     userModel.findByIdAndUpdate(id,newUser)
//     .then((data)=>{res.json(data);})
//     .catch((err)=>{console.log(err)});
// })


myRouter.post('/edit/:id', (req,res)=>
{
    let idFromUser=req.params.id;
    let user=req.body;
    console.log(111, idFromUser)
    //let id=new ObjectId(idFromUser);
    userModel.findByIdAndUpdate(idFromUser,user)
   .then((data)=>{res.json(data);})
   .catch((err)=>{console.log(err)});
})






myRouter.delete('/del/:id',(req,res)=>{
    let idFromUser=req.params.id
    res.status(200,{'Content-Type':'application/json'})
    userModel.deleteOne({_id:idFromUser})
    .then((data)=>{res.json(data);})
    .catch((err)=>{console.log(err)});
})

module.exports=myRouter