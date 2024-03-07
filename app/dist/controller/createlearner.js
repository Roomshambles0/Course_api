"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.learnercontroller = void 0;
const Createlearner_1 = require("../zod_schema/Createlearner");
const createlearnerservice_1 = require("../services/createlearnerservice");
const learnercontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(400).json({ message: "You can't sent emply request" });
    const parseddata = Createlearner_1.createlearner.safeParse(body);
    if (!parseddata.success)
        return res.status(400).json({ message: "Please send correct input" });
    const learner = yield (0, createlearnerservice_1.createLearner)(body);
    if (!learner)
        return res.status(500).json({ message: "internal server error" });
    return res.status(200).json({ message: "learner created successful", learner: learner });
});
exports.learnercontroller = learnercontroller;
