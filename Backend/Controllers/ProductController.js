import ProductModal from "../Modals/ProductModal.js";
import TokenModal from "../Modals/TokenModal.js";
import jwt from 'jsonwebtoken'

export const addProduct =async(req, res) => {
  try {
    const { name, image, category, price, token } = req.body;
    if (!name || !image || !price || !category || !token) {
      return res
        .status(404)
        .json({ success: false, message: "Fill all Fields" });
    }
    // const myToken=await TokenModal.findById(myTokenId)
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res
        .status(404)
        .json({ success: false, message: "Not a valid token" });
    }
    const userId = decodedData?.userId;
    const product =new ProductModal(
        {
        name,
        image,
        category,
        price,
        userId,
        // myToken:myToken
      }

    );
    await product.save()
    return res.status(200).json({success:true,message:"Product added Success"})
  }
   catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const getProducts=async(req,res)=>{
try{
const{token,productId}=req.body;
const decodedData = jwt.verify(token, process.env.JWT_SECRET);
if (!decodedData) {
  return res
    .status(404)
    .json({ success: false, message: "Not a valid token" });
}
const userId = decodedData?.userId;

const products=await ProductModal.findById({userId:userId,_id:productId})
if(products){
return res.status(200).json({success:true,Myproducts:products})
}
return res.status(404).json({ success: false, message:"No Products found" });
}
catch(error){
return res.status(500).json({ success: false, message: error });    
}
}

export const deleteProduct=async(req,res)=>{
try{
const{token,productId}=req.body;
const decodedData = jwt.verify(token, process.env.JWT_SECRET);
if (!decodedData) {
  return res
    .status(404)
    .json({ success: false, message: "Not a valid token" });
}
const userId = decodedData?.userId;

const product=await ProductModal.findByIdAndDelete({userId:userId,_id:productId})
if(product){
return res.status(200).json({success:true,message:"Product Deleted"})
}
return res.status(404).json({ success: false, message:"No Products found" });
}
catch(error){
return res.status(500).json({ success: false, message: error });    
}
}

