import express from "express"
import { bookingtour, getlocationbooking } from "../controller/bookingController.js";
import { authnticate } from "../controller/authnticatecontroller.js";

const router = express.Router();

router.post("/booking/:id",authnticate,bookingtour)
router.get("/getlocationbooking/:id",authnticate,getlocationbooking)
export default router