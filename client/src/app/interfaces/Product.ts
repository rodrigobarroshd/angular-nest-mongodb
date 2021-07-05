export interface Product {
    _id?: string;
    arterial_sistolica: number;
    arterial_diastolica: number;
    pulso: number;
    peso: number;
    altura: number;
    imc: number;
    charterial: number;
    imageURL: string;

    createdAt?: Date;
}