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
exports.createlead = void 0;
const leadInput_1 = require("../zod_schema/leadInput");
const client_1 = require("../model/client");
const createleadservice_1 = require("../services/createleadservice");
const createlead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(400).json({ message: "You can't sent emply request" });
    const parseddata = leadInput_1.createleadinput.safeParse(body);
    if (!parseddata.success)
        return res.status(400).json({ message: "Please send correct input" });
    const { email } = body;
    const { courseId } = body;
    const { userId } = body;
    const islearner = yield client_1.db.learner.findUnique({
        where: {
            email,
            name: body.name
        }
    });
    if (!islearner)
        return res.status(400).json({ message: "learner does not present" });
    const isleadpresent = yield client_1.db.leads.findMany({
        where: {
            userId,
            courseId,
            email
        }
    });
    console.log(isleadpresent);
    if (isleadpresent[0])
        return res.json({ message: "already applied for course" });
    const createlead = yield (0, createleadservice_1.createLead)(body);
    if (!createlead)
        return res.status(500).json({ message: "internal server error" });
    return res.status(200).json({ message: "Course created successful", createlead });
});
exports.createlead = createlead;
