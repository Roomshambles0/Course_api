"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createcourse_1 = require("../controller/createcourse");
const createinstructer_1 = require("../controller/createinstructer");
const updatecourse_1 = require("../controller/updatecourse");
const leadupdate_1 = require("../controller/leadupdate");
const leadsearch_1 = require("../controller/leadsearch");
const commentcontroller_1 = require("../controller/commentcontroller");
const router = express_1.default.Router();
router.post("/createteacher", createinstructer_1.instructercontroller);
router.post("/createCourse", createcourse_1.createcourse);
router.put("/updatecourse", updatecourse_1.updatecourse);
router.patch("/leadupdate", leadupdate_1.leadupdate);
router.post("/comment", commentcontroller_1.comment);
router.get("/lead", leadsearch_1.leadsearch);
