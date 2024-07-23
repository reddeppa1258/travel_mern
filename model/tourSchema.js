import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
img:{
    type:String,
    required:true,
},
location:{
    type:String,
    required:true,

},
heading:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true
},
distance:{
    type:String,
    required:true,
},
user : {
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    name : {
        type:String,
        required:true,
    },
}
})
export default mongoose.model("tours",tourSchema)