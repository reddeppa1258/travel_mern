import express from "express"
import { bookingtour } from "../controller/bookingController.js";
import { authnticate } from "../controller/authnticatecontroller.js";

const router = express.Router();

router.post("/booking/:id",authnticate,bookingtour)
export default router