import express from "express"
import { CreateTour, getalltours, getsingletour } from "../controller/toursController.js";
import { authnticate, restrict } from "../controller/authnticatecontroller.js";


const router = express.Router();

router.post("/createtour",authnticate,restrict(["admin"]),CreateTour)
router.get("/gettours",getalltours)
router.get("/singletour/:id",getsingletour)
export default router