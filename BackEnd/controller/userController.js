import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../JWT/generateToken.js";

export const signUp = async (req, res) => {
  
  try {
    const { fullName, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Does Not Match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User Already Registered" });
    }

    //Hashing the password
    const hashPassword =await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullName,
      email,
      password: hashPassword,
    });
    await newUser.save();

    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);

      return res
        .status(201)
        .json({Message: "User Registered Successfully", user:{
          _id:newUser._id,
          fullName:newUser.fullName,
          email:newUser.email
  
      } });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
    
    try {
      const {email,password}=req.body
    
    const user = await User.findOne({email})
    
    if(!user)
    {
        return res.status(400).json({error:"Invalid User Id"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
        return res.status(400).json({error:"Invalid User Password"})
    }
    createTokenAndSaveCookie(user._id,res)
    res.status(200).json({message : "User logged in Successfully",user:{
        _id:user._id,
        fullName:user.fullName,
        email:user.email

    }})
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const logout=async(req,res)=>{
    try{

        res.clearCookie("jwt")
        res.status(200).json({message : "User logged Out Successfully"})
    }
    catch(error)
    {
        console.log(error);
    return res.status(500).json({ error: "Internal server error" });
        
    }
}

export const allUsers=async(req,res)=>
{
try{
  const loggedInUser=req.user._id
const filteredUsers=await User.find({_id:{$ne: loggedInUser}}).select("-password")
res.status(201).json(filteredUsers)
}
catch(error)
{
console.log("Error in allUser:" + error);

}
}