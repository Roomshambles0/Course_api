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
exports.createcourse = void 0;
const CourseInput_1 = require("../zod_schema/CourseInput");
const createcourse_1 = require("../services/createcourse");
const createcourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(400).json({ message: "You can't sent emply request" });
    console.log(body);
    const parseddata = CourseInput_1.createcourseinput.safeParse(body);
    if (!parseddata.success)
        return res.status(400).json({ message: "Please send correct input" });
    const createcourse = yield (0, createcourse_1.createcourses)(body);
    if (!createcourse)
        return res.status(500).json({ message: "internal server error" });
    return res.status(200).json({ message: "Course created successful", createcourse: createcourse });
});
exports.createcourse = createcourse;
