import { Timestamp } from "@angular/fire/firestore";

// Alias de tipo para un array de claves de tipo T
export type ColumnKeys<T> = Array<keyof T>;

// Interfaz que representa un Contacto
export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: number;
    action: string;
    created: Timestamp;
    updated: Timestamp;
}