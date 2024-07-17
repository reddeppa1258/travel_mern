import mongoose from "mongoose";

const Userschema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"admin"
    }
})

export default mongoose.model("user",Userschema)