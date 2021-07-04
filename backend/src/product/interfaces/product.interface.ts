import { Document } from "mongoose";

export interface Product extends Document {
    readonly arterial_sistolica: number;
    readonly arterial_diastolica: number;
    readonly pulso: number;
    readonly peso: number;
    readonly altura: number;
    readonly imc: number;
    readonly charterial: number;

    readonly createdAt: Date;
}