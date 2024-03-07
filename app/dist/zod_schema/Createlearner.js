"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createlearner = void 0;
const zod_1 = require("zod");
exports.createlearner = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
