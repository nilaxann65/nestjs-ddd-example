import { Inject, Injectable } from "@nestjs/common";
import { CatEntity, CatStatus } from "src/domain/Entities/Cat.entity";
import { ICatRepository } from "src/domain/interfaces/ICatService.repository";
import { CatCreateDto } from "../dtos/catCreate.dto";

@Injectable()
export class CatService {
    constructor(
        @Inject(ICatRepository)
        private catRepository: ICatRepository
    ) { }

    async create(data: CatCreateDto): Promise<string> {
        const cat = new CatEntity();
        cat.name = data.name;
        cat.age = data.age;
        cat.color = data.color;
        cat.status = CatStatus.AVAILABLE;

        return await this.catRepository.create(cat);
    }

    async findById(id: string): Promise<any> {
        const result = await this.catRepository.findById(id);
        return result;
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.catRepository.delete(id);
        return result;
    }
}