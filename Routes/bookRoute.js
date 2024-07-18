import express from "express"
import { bookingtour } from "../controller/bookingController.js";

const router = express.Router();

router.post("/booking",bookingtour)
export default router