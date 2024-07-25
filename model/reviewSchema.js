import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  ratings: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  tours: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tours",
    required: true,
  },
});
export default mongoose.model("review", reviewsSchema);
