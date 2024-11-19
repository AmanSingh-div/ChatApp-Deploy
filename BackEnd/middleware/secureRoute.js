import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const secureRoute=async(req,res,next)=>{
    try{

        const token=req.cookies.jwt
        if(!token){
            res.status(401).json({error : "No token , authorization denied"})
        }
        const decoded=jwt.verify(token,process.env.JWT_TOKEN)
        if(!decoded)
        {
            res.status(401).json({error : "Token Varification Failed"})
        }
        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(401).json({error : "No user found"})
        }
        req.user=user
        next()
    }
    catch(error)
    {
        console.log("Error :" ,error);
        res.status(500).json({error : "Internal Server Error"})
        
    }
}
export default secureRoute