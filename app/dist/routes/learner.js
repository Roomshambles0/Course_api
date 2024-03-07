"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.learner = void 0;
const express_1 = __importDefault(require("express"));
const createlearner_1 = require("../controller/createlearner");
const createleadcontroller_1 = require("../controller/createleadcontroller");
exports.learner = express_1.default.Router();
exports.learner.post("/createlearner", createlearner_1.learnercontroller);
exports.learner.post("/register", createleadcontroller_1.createlead);
