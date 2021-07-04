import { Document } from "mongoose";

export interface Product extends Document {
    readonly name1: number;
    readonly name2: number;
    readonly name3: number;
    readonly name4: number;
    readonly name5: number;
    readonly name6: number;
    readonly name7: number;

    readonly createdAt: Date;
}