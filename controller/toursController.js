import tours from "../model/tourSchema.js"
import User from "../model/UserSchema.js"

export const CreateTour = async (req, res) => {
    const { img, location, heading, price } = req.body;
    console.log(img, location, heading, price)

    const userid = req.userId;
    console.log(userid)
    const user = await User.findById(userid)
    if (!user) {

        return res.status(404).json({ success: false, message: "user not found" })
    }


    try {
        const Tour = new tours({
            img,
            location,
            heading,
            price,
            user: {
                id: user._id,
                name: user.username
            }
        })

        await Tour.save();

        return res.status(200).json({ success: true, message: "Tour created successfully" })

    } catch (error) {

        return res.status(500).json({ success: false, message: "tour not created ", error })
    }
}

export const getalltours = async(req,res,next)=>{

    try {
         
       const Tour = await tours.find();
       res.status(200).json({success:true,message:"tours found",Tour
       })
    } catch (error) {
        return res.status(401).json({success:false,messsage:"internal server error"})
        
    }
}

export const getsingletour = async(req,res,next)=>{

    const tourid = req.params.id;
    try {
        const tour = await tours.findById(tourid)
        if(!tour){
            return res.status(404).json({sucess:false,message:"tour not found"})
        }
        return res.status(200).json({success:true,message:"tour found",tour})
    } catch (error) {
        return res.status(500).json({success:false,message:"invalid error"})
        
    }

}
