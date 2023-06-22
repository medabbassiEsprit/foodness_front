export class Plat {
    _id?: string;
    nomduPlat!: string;
    composition!: string;
    details!: string;
    created_at?: Date;
    updated_at?: Date;
    userId?: string;
    available!: boolean;
    nombreDePlat!: number ;
    address: any; // Use the 'any' type for unstructured address data
  }