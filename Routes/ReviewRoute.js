import express from "express"
import { createReview, getallreviews } from "../controller/reviewsController.js";
import { authnticate } from "../controller/authnticatecontroller.js";

const router =express.Router();

router.post("/giverating/:id",authnticate,createReview)
router.get("/getallreviews",getallreviews)


export default router