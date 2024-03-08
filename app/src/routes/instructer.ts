
import express from "express";
import { createcourse } from "../controller/createcourse";
import { instructer } from "../controller/createinstructer";
import { updatecourse } from "../controller/updatecourse";
import { leadupdate } from "../controller/updatelead";
import { leadsearch } from "../controller/searchlead";
import { comment } from "../controller/commentcontroller";

export const router = express.Router();



router.post("/createteacher",instructer)

router.post("/createCourse",createcourse)

router.put("/updatecourse",updatecourse)

router.patch("/updatelead",leadupdate)

router.post("/comment",comment)

router.get("/lead",leadsearch) 

