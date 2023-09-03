import UserModal from "../Modals/UserModal.js";
import jwt from 'jsonwebtoken'
export const checkSeller=async (req,res,next)=>{
try{
const{token}=req.body
const decodedData=jwt.verify(token,process.env.JWT_SECRET)
if(!decodedData){
return res.status(404).json({ success: false, message:"Not a valid token"});
}
const userId=decodedData?.userId;
const user=await UserModal.findById(userId)
if(!user || user?.role!="Seller"){
return res.status(404).json({ success: false,message:"User Not allowed to add Product from Middleware"});
}
next()
}
catch(error){
    return res.status(500).json({ success: false, message: error });
    }
}

export const checkAdmin=async (req,res,next)=>{
try{
const{token}=req.body
const decodedData=jwt.verify(token,process.env.JWT_SECRET)
if(!decodedData){
return res.status(404).json({ success: false, message:"Not a valid token"});
}
const userId=decodedData?.userId;
const user=await UserModal.findById(userId)
if(user?.role=="Buyer" || user?.role=="Seller"){
return res.status(404).json({ success: false,message:"Only Admin can access this page"});
}
next()
}
catch(error){
    return res.status(500).json({ success: false, message: error });
    }
}