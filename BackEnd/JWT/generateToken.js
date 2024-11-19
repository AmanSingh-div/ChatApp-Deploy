import jwt from "jsonwebtoken"


const createTokenAndSaveCookie=(userId,res)=>{


    const token=jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"10d"
    })
    res.cookie("jwt",token,{
        httpOnly:true,   //access attack
        secure:true,
        sameSite:"none"  //csrf attack
    }

    )

}
export default createTokenAndSaveCookie