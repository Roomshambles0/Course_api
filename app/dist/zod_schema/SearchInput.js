"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadsearchinput = void 0;
const zod_1 = require("zod");
exports.leadsearchinput = zod_1.z.object({
    email: zod_1.z.string().email()
});
