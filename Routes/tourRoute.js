import express from "express"
import { CreateTour, getalltours } from "../controller/toursController.js";
import { authnticate, restrict } from "../controller/authnticatecontroller.js";


const router = express.Router();

router.post("/createtour",authnticate,restrict(["admin"]),CreateTour)
router.get("/gettours",getalltours)
export default router