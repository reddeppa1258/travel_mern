import User from "../model/UserSchema.js"
import tour from "../model/tourSchema.js"
import Booking from "../model/bookingSchema.js"

export const bookingtour = async(req,res)=>{
   
    try {
        const {username,phonenumber,time,person}=req.body
       const   booking = new Booking({
            username,
            phonenumber,
            time,
            person,
           
        })
        await booking.save();
       return res.status(200).json({success:true,message:"booking successfully"})
    } catch (error) {
        return res.status(404).json({success:false,message:"ur tour is not booking",error})
    }

}