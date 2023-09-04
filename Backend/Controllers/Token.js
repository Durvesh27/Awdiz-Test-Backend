import random from "random";
import TokenModal from "../Modals/TokenModal.js";

function generateToken(){
return random.int(100000,999999)
}


export const createToken=async(req,res)=>{

    try{
    const token=new TokenModal({token:
        setInterval(()=>{
            generateToken()
            },5000)})
    console.log(token,"Genreted")
    await token.save()
    return res.status(200).json({success:"true",token:token})
    }
    catch(error){
    return res.status(500).json({ success: false, message: error });  
    }
}