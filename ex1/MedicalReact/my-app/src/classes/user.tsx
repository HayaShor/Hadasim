import { ObjectId } from "mongoose";

class user{
    constructor(
        public _id:String,
        public fNmae:String,
        public lName:String,
        public id:String,
        public city:String,
        public street:String,
        public BirthDate:String, 
        public Telephone:String,
        public phone:String,
       )
    {

    }
}
export default user