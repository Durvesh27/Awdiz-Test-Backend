import UserModal from "../Modals/UserModal.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
export const Register = async (req, res) => {
  try {
    const { name, email, password, role, pin, number } = req.body.userData;
    if (!name || !email || !password || !role || !pin || !number) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields Mandatory" });
    }
    const isEmailExist = await UserModal.find({ email: email });
    if (isEmailExist?.length) {
      return res
        .status(404)
        .json({ success: false, message: "Email already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModal({
      name,
      email,
      password: hashedPassword,
      role,
      pin,
      number,
    });
    console.log("Working");
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User Registered Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields Mandatory" });
    }
    
    const user = await UserModal.findOne({ email: email });
    const JWTtoken=jwt.sign({userId:user._id},process.env.JWT_SECRET)
      const passwordCheck = bcrypt.compare(password,user?.password);
      if (passwordCheck) {
        return res
          .status(200)
          .json({ success: true, message: "Logged in Successfully" ,JWTtoken:JWTtoken});
      }
    
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
