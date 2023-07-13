import { Inject, Injectable } from "@nestjs/common";
import { OrganizationEntity } from "src/domain/Entities/Organization.entity";
import { IOrganizationRepository } from "src/domain/interfaces/IOrganizationService.repository";
import { OrganizationCreateDto } from "../dtos/OrganizationCreate.dto";

@Injectable()
export class OrganizationService {
    constructor(
        @Inject(IOrganizationRepository)
        private organizationRepository: IOrganizationRepository
    ) { }

    async findById(id: string): Promise<OrganizationEntity> {
        return await this.organizationRepository.findById(id);
    }

    async create(data: OrganizationCreateDto): Promise<string> {
        const organization = new OrganizationEntity();
        organization.name = data.name;
        organization.description = data.description;

        return await this.organizationRepository.create(organization);
    }

    async delete(id: string): Promise<boolean> {
        return await this.organizationRepository.delete(id);
    }
}