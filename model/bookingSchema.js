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
        id:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"user",
           required:true
        },
        name:{
            type:String,
            required:true
        },
      tours:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'tours',
            required:true
        },
        location:{
            type:String,
            required:true,
        }
      }
    } 
})
export default mongoose.model("bookings",bookingSchema)