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
exports.comment = void 0;
const searchteacher_1 = require("../model/searchteacher");
const Leadcomment_1 = require("../zod_schema/Leadcomment");
const Leadupdate_1 = require("../model/Leadupdate");
const comment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (!body)
            return res.status(400).json({ message: "You can't sent emply request" });
        const parseddata = Leadcomment_1.leadcommentinput.safeParse(body);
        if (!parseddata.success)
            return res.status(400).json({ message: "Please send correct input" });
        const { teacheId } = body;
        const isteacher = yield (0, searchteacher_1.searchTeacher)(teacheId);
        if (!isteacher)
            return res.status(400).json({ message: "Instructor does not present" });
        const { email } = body;
        const { id } = body;
        const comment = {
            comment: body.comment
        };
        const commented = yield (0, Leadupdate_1.updatelead)(id, comment);
        if (!commented)
            return res.status(400).json({ message: "not commented" });
        return res.status(200).json({ message: "comment created successful", commented });
    }
    catch (e) {
        console.log("leadsearch controller error", e);
        return res.status(500).json({ message: "internal server error" });
    }
});
exports.comment = comment;
