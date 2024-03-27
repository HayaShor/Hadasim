//טעינת המודול המאפשר חיבור למסד הנתונים
var mongoose=require('mongoose')

var coronaModule=new mongoose.Schema(
    { userId:String, vaccine:Array, positiveTime:String, recoveringTime:String}
    )
var myCorona=mongoose.model("myCorona",coronaModule,"CoronaData")
//יצוא המודול
module.exports=myCorona
