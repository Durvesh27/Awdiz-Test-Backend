import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import { Login, Register } from "./Controllers/UserController.js"
import { createToken } from "./Controllers/Token.js"
import { checkAdmin, checkSeller } from "./Middlewares/AllMiddlewares.js"
import { addProduct, deleteProduct, getProducts } from "./Controllers/productController.js"

const app= express()
app.use(express.json())
// app.use(cors())
dotenv.config()
app.get("/",(req,res)=>{
console.log("Working")
})
app.post("/register",Register)
app.post("/login",Login)
app.get("/create-token",createToken)

app.post("/add-product",checkSeller,addProduct)
app.post("/get-products",checkSeller,getProducts)
app.post("/delete-product",checkAdmin,deleteProduct)
mongoose.connect(process.env.MONGO_URL).then(()=>{
console.log("Connected to DB")
})

app.listen(8000,()=>{
console.log("Server running on Port 8000")
})