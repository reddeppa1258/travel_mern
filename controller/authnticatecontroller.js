import jwt from "jsonwebtoken"
import User from "../model/UserSchema.js"
export const authnticate = (req,res,next)=>{
    const authToken = req.headers
    console.log(authToken)

    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(404).json({success:false,message:"no token , authntication denied"})
    }
    try {
        const token =authToken.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.userId = decoded.userId
        req.role = decoded.role;
        next()
    } catch (error) {
        if(error.name === "token Expired Error"){
            return res.status(403).json({success:false,message:"token expired"})
        
        }
        return res.status(500).json({success:false,message:"internal server error"})
    }
}