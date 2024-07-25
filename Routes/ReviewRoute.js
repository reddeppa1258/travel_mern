import express from "express"
import { createReview, getallreviews, getlocationreview } from "../controller/reviewsController.js";
import { authnticate } from "../controller/authnticatecontroller.js";

const router =express.Router();

router.post("/giverating/:id",authnticate,createReview)
router.get("/getallreviews",getallreviews)
router.get("/locationreview/:id",getlocationreview)


export default router