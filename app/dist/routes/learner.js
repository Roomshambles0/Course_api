"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createlearner_1 = require("../controller/createlearner");
const createleadserviece_1 = require("../controller/createleadserviece");
const router = express_1.default.Router();
router.post("/createlearner", createlearner_1.learnercontroller);
router.post("/register", createleadserviece_1.createlead);
