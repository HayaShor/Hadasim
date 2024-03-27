var mongoose=require('mongoose')
var clientModule=new mongoose.Schema(
{
    fNmae:String,
    lName:String,
    id:String,
    city:String,
    street:String,
    BirthDate:String, 
    Telephone:String,
    phone:String
})
var myUsers=mongoose.model("myUsers",clientModule,"Clients")
module.exports=myUsers
