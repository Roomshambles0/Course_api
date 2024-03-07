"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatecourseinput = void 0;
const zod_1 = require("zod");
exports.updatecourseinput = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    teacherId: zod_1.z.string(),
    maxseats: zod_1.z.number().optional(),
    startdate: zod_1.z.date().optional(),
    published: zod_1.z.boolean().optional()
});
