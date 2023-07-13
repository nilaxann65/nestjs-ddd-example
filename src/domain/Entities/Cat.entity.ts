export enum CatStatus {
    AVAILABLE = 'available',
    PENDING = 'pending',
    ADOPTED = 'Adopted',
}

export class CatEntity {
    id?: string;
    name: string;
    age: number;
    color: string;
    status: CatStatus;
}