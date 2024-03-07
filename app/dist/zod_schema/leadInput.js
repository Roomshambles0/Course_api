"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createleadinput = void 0;
const zod_1 = require("zod");
exports.createleadinput = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string(),
    courseId: zod_1.z.string(),
    userId: zod_1.z.string(),
    phoneno: zod_1.z.string(),
    LinkedIn: zod_1.z.string()
});
