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
exports.createinstructer = void 0;
const CreateTeacher_1 = require("../model/CreateTeacher");
function createinstructer(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, name, password, } = data;
        const teacher = yield (0, CreateTeacher_1.createteacher)(name, email, password);
        if (teacher) {
            return teacher;
        }
    });
}
exports.createinstructer = createinstructer;
