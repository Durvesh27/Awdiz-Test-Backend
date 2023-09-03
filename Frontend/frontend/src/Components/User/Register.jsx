import React, { useState } from 'react'
import axios from "axios"
const Register = () => {
const[userData,setUserData]=useState()

function handleChange(e){
setUserData({...userData,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()
try{
const response=axios.post("http://localhost:8000/register",{userData})
if(response.data.success){
alert("User Registered Successfully")
}
}
catch(error){
console.log(error)
}
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
     <h2>Login</h2>
     <input type="text" name="name" onChange={handleChange} placeholder='Enter Name'/><br/>
     <input type="email" name="email" onChange={handleChange} placeholder='Enter Email'/><br/>
     <input type="number" name="Number" onChange={handleChange} placeholder='Enter Number'/><br/>
     <input type="number" name="pin" onChange={handleChange} placeholder='Enter Pin'/><br/>
     <span>Select role:</span>
     <select name="role" onChange={handleChange}>
        <option>Buyer</option>
        <option>Seller</option>
        <option>Admin</option> 
     </select><br/>
     <input type="password" name="password" onChange={handleChange} placeholder='Enter Password'/><br/>
     <input type="submit" value="Register"/>
      </form>
    </div>
  )
}

export default Register
