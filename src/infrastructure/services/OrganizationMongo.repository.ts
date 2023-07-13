import { InjectModel } from "@nestjs/mongoose";
import { IOrganizationRepository } from "src/domain/interfaces/IOrganizationService.repository";
import { OrganizationDocument, Organizations } from "../schemas/Organizations.schema";
import { Model, Types } from "mongoose";
import { OrganizationEntity } from "src/domain/Entities/Organization.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrganizationMongoRepository implements IOrganizationRepository {
    constructor(
        @InjectModel(Organizations.name)
        private organizationModel: Model<OrganizationDocument>
    ) { }

    async create(organization: OrganizationEntity): Promise<string> {
        const result = await this.organizationModel.create(organization);
        return result._id;
    }

    async findById(id: string): Promise<OrganizationEntity> {
        return await this.organizationModel.findById(id);
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.organizationModel.deleteOne({ _id: new Types.ObjectId(id) });
        return result.deletedCount > 0;
    }
}