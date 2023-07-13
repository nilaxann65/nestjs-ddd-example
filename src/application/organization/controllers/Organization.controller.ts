import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrganizationService } from "../services/Organization.service";
import { OrganizationCreateDto } from "../dtos/OrganizationCreate.dto";

@Controller("Organization")
export class OrganizationController {
    constructor(
        private readonly organizationService: OrganizationService
    ) { }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<any> {
        return await this.organizationService.findById(id);
    }

    @Post()
    async create(@Body() data: OrganizationCreateDto): Promise<string> {
        return await this.organizationService.create(data);
    }

    @Delete(":id")
    async delete(@Param("id") id: string): Promise<boolean> {
        return await this.organizationService.delete(id);
    }
}