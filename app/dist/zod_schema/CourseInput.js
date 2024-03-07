"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createcourseinput = void 0;
const zod_1 = require("zod");
exports.createcourseinput = zod_1.z.object({
    title: zod_1.z.string(),
    teacherId: zod_1.z.string(),
    maxseats: zod_1.z.number(),
    startdate: zod_1.z.string(),
    published: zod_1.z.boolean()
});
