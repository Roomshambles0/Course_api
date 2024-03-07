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
exports.instructercontroller = void 0;
const CreateInstructer_1 = require("../zod_schema/CreateInstructer");
const createinstructer_1 = require("../services/createinstructer");
const instructercontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(400).json({ message: "You can't sent emply request" });
    const parseddata = CreateInstructer_1.createinstructerinput.safeParse(body);
    if (!parseddata.success)
        return res.status(400).json({ message: "Please send correct input" });
    const instructer = yield (0, createinstructer_1.createinstructer)(body);
    if (!instructer)
        return res.status(500).json({ message: "internal server error" });
    return res.status(200).json({ message: "instructor created successful", instructer: instructer });
});
exports.instructercontroller = instructercontroller;
