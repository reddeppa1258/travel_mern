import User from "../model/UserSchema.js"
import bcrypt from "bcrypt"

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

