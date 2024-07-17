import jwt from "jsonwebtoken"
import User from "../model/UserSchema.js"
export const authnticate = (req,res,next)=>{
    const authToken = req.headers.authorization;
    console.log(authToken)

    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(404).json({success:false,message:"no token , authntication denied"})
    }
    try {
        const token =authToken.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.userId = decoded.id
        console.log("userid",req.userId)
        req.role = decoded.role;
        next()
    } catch (error) {
        if(error.name === "token Expired Error"){
            return res.status(403).json({success:false,message:"token expired"})
        
        }
        return res.status(500).json({success:false,message:"internal server error"})
    }
}
 
export const restrict = (roles)=>async(req,res,next)=>{
    try {
        const userId =req.userId;
        const user =await User.findById(userId)
        if(!user){
            return res.status(404).json({success:false,message:"user not found"})
        }
        const userrole =user.role
        if(userrole === "user" || roles.includes("user")){
            next()
        }else if(userrole === "admin" || roles.includes("admin")){
            next();
        }else{
            return res.status(404).json({success:false,message:"user not found"})
        }
        

    } catch (error) {
       return res.status(500).json({success:false,message:"invalid error"}) 
    }

}