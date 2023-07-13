import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatDocument, Cats } from '../schemas/Cats.schema';
import { Model, Types } from 'mongoose';
import { ICatRepository } from 'src/domain/interfaces/ICatService.repository';
import { CatEntity } from 'src/domain/Entities/Cat.entity';

@Injectable()
export class CatMongoRepository implements ICatRepository {
    constructor(
        @InjectModel(Cats.name)
        private catModel: Model<CatDocument>
    ) { }

    async create(cat: CatEntity): Promise<string> {
        const result = await this.catModel.create(cat);
        return result._id;
    }

    async findById(id: string): Promise<CatEntity> {
        const cat = await this.catModel.findById(id);
        return cat;
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.catModel.deleteOne({ _id: new Types.ObjectId(id) });
        return result.deletedCount > 0;
    }

}
