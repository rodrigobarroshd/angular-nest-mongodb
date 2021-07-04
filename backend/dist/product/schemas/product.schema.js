"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    name1: Number,
    name2: Number,
    name3: Number,
    name4: Number,
    name5: Number,
    name6: Number,
    name7: Number,   
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=product.schema.js.map