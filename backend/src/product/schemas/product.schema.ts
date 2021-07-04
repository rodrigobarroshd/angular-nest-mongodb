import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name1: Number,
    name2: Number,
    name3: Number,
    name4: Number,
    name5: Number,
    name6: Number,
    name7: Number,
    createdAt: { type: Date, default: Date.now }
});

