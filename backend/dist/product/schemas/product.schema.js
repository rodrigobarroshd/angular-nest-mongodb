"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    arterial_sistolica: Number,
    arterial_diastolica: Number,
    pulso: Number,
    peso: Number,
    altura: Number,
    imc: Number,
    charterial: Number,   
    createdAt: { type: Date, default: Date.now },
    imageURL : string
});
//# sourceMappingURL=product.schema.js.map