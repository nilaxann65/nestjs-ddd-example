import { CatEntity } from "../Entities/Cat.entity";

export interface ICatRepository {
    findById(id: string): Promise<CatEntity>;
    create(cat: CatEntity): Promise<string>;
    delete(id: string): Promise<boolean>;
}

export const ICatRepository = Symbol('ICatRepository');