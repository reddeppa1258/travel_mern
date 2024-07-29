import User from "../model/UserSchema.js"
import tour from "../model/tourSchema.js"
import Booking from "../model/bookingSchema.js"

export const bookingtour = async(req,res)=>{
    const {username,phonenumber,date,persons}=req.body;
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
            date,
            persons,
           user:userid,
           tours:tourid
        })
        await booking.save();
       return res.status(200).json({success:true,message:"booking successfully"})
    } catch (error) {
        return res.status(404).json({success:false,message:"ur tour is not booking",error:error.message})
    }

}

export const getlocationbooking = async(req,res,next)=>{
    let tourid = req.params.id;
    tourid =tourid.trim();
    
    const userid = req.userId;

   
    if(!userid ||  tourid){
        return res.status(404).json({success:"userid and tourid not found"})

    }
   
    
    try {
    let bookings =await Booking.find({tours:tourid,tours:userid}).populate('user').populate("tours")
    bookings =await Booking.find({tours:userid})
     return res.status(200).json({success:true,message:"bookings found",bookings})
    } catch (error) {
     return res.status(500).json({success:false,message:"internal server error",error:error.message})
     
    }
  
 
 }