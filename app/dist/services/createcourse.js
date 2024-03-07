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
exports.createcourses = void 0;
const CreateCourse_1 = require("../model/CreateCourse");
function createcourses(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { teacherId, title, maxseats, startdate, published } = data;
        const course = yield (0, CreateCourse_1.createcourse)(teacherId, title, maxseats, startdate, published);
        if (course) {
            return course;
        }
    });
}
exports.createcourses = createcourses;
