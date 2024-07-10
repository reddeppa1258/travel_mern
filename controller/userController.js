import User from "../model/UserSchema.js"

export const register = async(req,res,next)=>{

    const{username,email,password,role} = req.body;
    console.log(username,email,password,role)
try {
    let user;

    user = new User({
        username,
        email,
        password
    })
    await user.save();
    return res.status(200).json({success:true,message:"user saved successfully"})

    
} catch (error) {
    return res.status(500).json({success:false,message:"internal server error"})
}

}