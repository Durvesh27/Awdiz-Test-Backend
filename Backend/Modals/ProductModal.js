import mongoose, { Mongoose, Schema, Types } from "mongoose"


const productSchema=new Schema({
name:{
    type:"String",
    required:true
},
image:{
    type:"String",
    required:true
},
category:{
    type:"String",
    required:true
},
price:{
    type:"Number",
    required:true
},
userId:{
    type:Types.ObjectId,
    ref:"User"
},


})
export default mongoose.model("Product",productSchema)