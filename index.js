 import express from "express"
import dotenv from "dotenv"
 import mongoose from "mongoose"
 import cookieParser from "cookie-parser"
import userRoute from "./Routes/userRouter.js"
import tourRoute from "./Routes/tourRoute.js"
import cors from "cors"
import BookingRoute from "./Routes/bookRoute.js"
import ReviewRoute from "./Routes/ReviewRoute.js"
 dotenv.config();
const  app = express();

const port =process.env.PORT || 5000;
mongoose.set("strictQuery",false)

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("DB connection success")

        
    } catch (error) {
        console.log("DB connection error")
    }
}
app.use(cors({
    origin:function(origin,callback){
        return callback(null,true);
    },
    optionsSuccessStatus:200,
   credentials:true
})
)
// const corsOptions = {
//     origin: 'http://localhost:3000', // The specific origin you want to allow
//     Credentials:true
//   };
  
//   app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users",userRoute)
app.use("/api/v1/tour",tourRoute)
app.use("/api/v1/slot",BookingRoute)
app.use("/api/v1/review",ReviewRoute)



connectDB().then(()=>{
    app.listen((port),()=>{
        console.log("server is listening in 5000")
    })
})
.catch((error)=>{console.log( "error",error)})
