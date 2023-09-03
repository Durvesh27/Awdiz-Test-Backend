import React from "react";

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"black",color:"white",padding:"0 20px"}}>
      <h2>LOGO</h2>
      <div style={{width:"40%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p>Cart</p>
        <p>Login/Register</p>
      </div>
    </div>
  );
};

export default Navbar;
