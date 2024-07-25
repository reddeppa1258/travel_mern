import User from "../model/UserSchema.js";
import Tour from "../model/tourSchema.js";
import Reviews from "../model/reviewSchema.js";

export const createReview = async (req, res, next) => {
  const { ratings, comment } = req.body;
  const userid = req.userId;
  const tourid = req.params.id;
console.log(userid)
  try {
    const review = new Reviews({
      ratings,
      comment,
      user: userid,
      tours: tourid,
    });
    await review.save();
    return res
      .status(200)
      .json({ success: true, message: "ur review sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "ur review no sent",
        error: error.message,
      });
  }
};

export const getallreviews = async(req,res,next)=>{

  try {
       
     const review = await Reviews.find();
     res.status(200).json({success:true,message:"review found",review
     })
  } catch (error) {
      return res.status(401).json({success:false,messsage:"internal server error"})
      
  }
}

export const getlocationreview = async(req,res,next)=>{
   let tourid = req.params.id;
   tourid =tourid.trim();
   console.log(tourid);
  
   
   try {
    const review =await Reviews.find({tours:tourid}).populate('user')
    return res.status(200).json({success:true,message:"reviews found",review})
   } catch (error) {
    return res.status(500).json({success:false,message:"internal server error",error:error.message})
    
   }
 

}