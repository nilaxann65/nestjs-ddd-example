import { OrganizationEntity } from "../Entities/Organization.entity";

export interface IOrganizationRepository {
    findById(id: string): Promise<OrganizationEntity>;
    create(organization: OrganizationEntity): Promise<string>;
    delete(id: string): Promise<boolean>;
}

export const IOrganizationRepository = Symbol('IOrganizationRepository');