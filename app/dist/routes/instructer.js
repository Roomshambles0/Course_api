"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const createcourse_1 = require("../controller/createcourse");
const createinstructer_1 = require("../controller/createinstructer");
const updatecourse_1 = require("../controller/updatecourse");
const leadupdate_1 = require("../controller/leadupdate");
const leadsearch_1 = require("../controller/leadsearch");
const commentcontroller_1 = require("../controller/commentcontroller");
exports.router = express_1.default.Router();
exports.router.post("/createteacher", createinstructer_1.instructercontroller);
exports.router.post("/createCourse", createcourse_1.createcourse);
exports.router.put("/updatecourse", updatecourse_1.updatecourse);
exports.router.patch("/leadupdate", leadupdate_1.leadupdate);
exports.router.post("/comment", commentcontroller_1.comment);
exports.router.get("/lead", leadsearch_1.leadsearch);
