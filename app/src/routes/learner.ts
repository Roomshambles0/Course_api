
import express from "express";
import { Createlearner } from "../controller/createlearner";
import { Createlead } from "../controller/createlead";

export const learner = express.Router();

learner.post("/createlearner", Createlearner);
learner.post("/registerLead", Createlead);



