import mongoose, { Schema } from "mongoose"


const AwdizToken=new Schema(
{
token:{
type:Number
}
}
    )

export default mongoose.model("Token",AwdizToken)