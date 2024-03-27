import vaccine from "./vaccine";

class corona{

    constructor(
        public _id:String,
        public userId:String,
        public vaccine:Array<vaccine>,
        public positiveTime:String,
        public recoveringTime:String
    )
    {}

}
export default corona