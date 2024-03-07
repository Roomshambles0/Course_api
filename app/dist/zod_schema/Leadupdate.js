"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateleadinput = void 0;
const zod_1 = require("zod");
var Status;
(function (Status) {
    Status["applied"] = "applied";
    Status["accept"] = "accept";
    Status["reject"] = "reject";
    Status["waitlist"] = "waitlist";
})(Status || (Status = {}));
exports.updateleadinput = zod_1.z.object({
    id: zod_1.z.string(),
    status: zod_1.z.nativeEnum(Status),
});
