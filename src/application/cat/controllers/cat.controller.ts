import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CatService } from "../services/Cat.service";
import { CatCreateDto } from "../dtos/catCreate.dto";

@Controller("Cat")
export class CatController {
    constructor(
        private readonly catService: CatService
    ) { }

    @Get(":id")
    async get(@Param("id") id: string): Promise<any> {
        const result = await this.catService.findById(id);
        return result;
    }

    @Post()
    async create(@Body() data: CatCreateDto): Promise<string> {
        return await this.catService.create(data);
    }

    @Delete(":id")
    async delete(@Param("id") id: string): Promise<boolean> {
        return await this.catService.delete(id);
    }
}