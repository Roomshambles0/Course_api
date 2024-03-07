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
exports.leadupdate = void 0;
const Leadupdate_1 = require("../zod_schema/Leadupdate");
const searchteacher_1 = require("../model/searchteacher");
const updateleadservice_1 = require("../services/updateleadservice");
const leadupdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(400).json({ message: "You can't sent emply request" });
    const parseddata = Leadupdate_1.updateleadinput.safeParse(body);
    if (!parseddata.success)
        return res.status(400).json({ message: "Please send correct input" });
    const { id } = body;
    const { teacheId } = body;
    const isteacher = yield (0, searchteacher_1.searchTeacher)(teacheId);
    if (!isteacher)
        return res.status(400).json({ message: "Instructor does not present" });
    const updatedlead = yield (0, updateleadservice_1.updateLead)(body);
    if (!updatedlead)
        return res.status(400).json({ message: "something went wrong" });
    return res.status(200).json({ message: "instructor created successful", updatedlead });
});
exports.leadupdate = leadupdate;
