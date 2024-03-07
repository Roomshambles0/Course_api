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
exports.createLead = void 0;
const CreateLead_1 = require("../model/CreateLead");
function createLead(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { courseId, userId, email, name, phoneno, LinkedIn } = data;
        const lead = yield (0, CreateLead_1.createlead)(courseId, userId, phoneno, LinkedIn, email, name);
        if (lead) {
            return lead;
        }
    });
}
exports.createLead = createLead;
