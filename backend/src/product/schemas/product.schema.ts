import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    arterial_sistolica: Number,
    arterial_diastolica: Number,
    pulso: Number,
    peso: Number,
    altura: Number,
    imc: Number,
    charterial: Number,
    createdAt: { type: Date, default: Date.now },
    imageURL: String
});

