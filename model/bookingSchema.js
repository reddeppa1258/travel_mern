import mongoose from "mongoose"

export const bookingSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,

    },
    time:{
        type:Date,
        required:true,
    },
    persons:{
        type:Number,
        required:true

    },
    user:{
        
           type:mongoose.Schema.Types.ObjectId,
           ref:"user",
           required:true
        
       
      
    } ,
    tours:{
        
            type:mongoose.Schema.Types.ObjectId,
            ref:'tours',
            required:true
    
        
      }
})
export default mongoose.model("bookings",bookingSchema)