
import express from "express";
import { createcourse } from "../controller/createcourse";
import { instructercontroller } from "../controller/createinstructer";
import { updatecourse } from "../controller/updatecourse";
import { leadupdate } from "../controller/leadupdate";
import { leadsearch } from "../controller/leadsearch";
import { comment } from "../controller/commentcontroller";

export const router = express.Router();



router.post("/createteacher",instructercontroller)

router.post("/createCourse",createcourse)

router.put("/updatecourse",updatecourse)

router.patch("/leadupdate",leadupdate)

router.post("/comment",comment)

router.get("/lead",leadsearch) 

