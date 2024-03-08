
import express from "express";
import { learnercontroller } from "../controller/createlearner";
import { createlead } from "../controller/createlead";

export const learner = express.Router();

learner.post("/createlearner", learnercontroller);
learner.post("/register", createlead);



