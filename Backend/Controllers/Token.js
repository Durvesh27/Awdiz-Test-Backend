import random from "random";
import TokenModal from "../Modals/TokenModal.js";

function generateToken(){
return random.int(10000,20000)
}

setInterval(()=>{
    generateToken()
    },5000)

export const createToken=async(req,res)=>{
    try{
    const token=new TokenModal({token:generateToken()})
    await token.save()
    return res.status(200).json({success:"true",token:token})
    }
    catch(error){
    return res.status(500).json({ success: false, message: error });  
    }
}