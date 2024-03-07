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
exports.updateLead = void 0;
const Leadupdate_1 = require("../model/Leadupdate");
const client_1 = require("@prisma/client");
function updateLead(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, status } = data;
        let status1;
        if (status == 'accept') {
            status1 = client_1.Status.ACCEPT;
        }
        else if (status == 'reject') {
            status1 = client_1.Status.REJECT;
        }
        else if (status == 'waitlist') {
            status1 = client_1.Status.WAITLIST;
        }
        const senddata = {
            status: status1
        };
        const updatedlead = yield (0, Leadupdate_1.updatelead)(id, senddata);
        if (updatedlead) {
            return updatedlead;
        }
        else {
            return null;
        }
    });
}
exports.updateLead = updateLead;
