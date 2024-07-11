import User from "../model/UserSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const generateToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role},
    process.env.JWT_SECRET_KEY,{
      expiresIn:"2d"
    }


    
  )
}
export const register = async(req,res,next)=>{

    const{username,email,password,role} = req.body;
    console.log(username,email,password,role)
try {
    let user = await User.findOne({email:email})
    if(user){
        return res.status(404).json({success:false,message:"user already exist"})

    }
    const salt = await bcrypt.genSalt(10)
    const passwordhashing  = await bcrypt.hash(password,salt)

    user = new User({
        username,
        email,
        password:passwordhashing
    })
    await user.save();
    return res.status(200).json({success:true,message:"user saved successfully"})

    
} catch (error) {
    return res.status(500).json({success:false,message:"internal server error"})
}

}

export const login = async(req,res)=>{
const {email}=req.body
console.log(email)
try {
  let user = await User.findOne({email:email})
  if(!user){
    return res.status(404).json({success:false,message:"user not found"})

  }
  const ispasswordmatch = await bcrypt.compare(req.body.password,user.password)
  if(!ispasswordmatch){
    return res.status(401).json({success:false,message:"password not matching"})
  }
  const token = generateToken(user)
  const {password,role,...rest} =user
  return res.status(200).json({success:true,message:"login successfully",token,data:{...rest},role})
} catch (error) {
  return res.status(500).json({success:false,message:"invalid error"})
}
}

