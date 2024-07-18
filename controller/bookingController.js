import User from "../model/UserSchema.js"
import tour from "../model/tourSchema.js"
import Booking from "../model/bookingSchema.js"

export const bookingtour = async(req,res)=>{
    const {username,phonenumber,time,persons}=req.body;
    const userid=req.userId;
    const tourid=req.params.id;
    let user=await User.findById(userid);
    if(!user){
        return res.status(404).json({success:false,message:"user not found"})
    }
    const Tour=await tour.findById(tourid)
    if(!Tour){
        return res.status(403).json({success:false,message:"tour not found"})
    }   
    try {
        
       const   booking = new Booking({
            username,
            phonenumber,
            time,
            persons,
           user:userid,
           tours:tourid
        })
        await booking.save();
       return res.status(200).json({success:true,message:"booking successfully"})
    } catch (error) {
        return res.status(404).json({success:false,message:"ur tour is not booking",error})
    }

}