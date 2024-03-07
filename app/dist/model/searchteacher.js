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
exports.searchTeacher = void 0;
const client_1 = require("./client");
function searchTeacher(teacheId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchedlead = yield client_1.db.teacher.findUnique({
                where: {
                    id: teacheId
                }
            });
            if (searchedlead) {
                return searchedlead;
            }
            return null;
        }
        catch (e) {
            console.log("search lead error", e);
        }
    });
}
exports.searchTeacher = searchTeacher;