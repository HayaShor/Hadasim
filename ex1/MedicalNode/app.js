var express=require('express')
var app=express()

let cors=require('cors')
app.use(cors())

var bodyParser=require('body-parser')
app.use(bodyParser.json())

var userController=require('./Controllers/userController')
app.use('/user',userController)

var coronaController=require('./Controllers/coronaController')
app.use('/corona',coronaController)

var mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/MedicalDB", { useNewUrlParser: true, useUnifiedTopology: true })
var db=mongoose.connection

db.on('open',()=>{
    console.log("db opened")
})

app.listen(1234,()=>{
    console.log("running")
})