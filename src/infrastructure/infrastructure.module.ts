import { Module } from '@nestjs/common';
import { CatSchema, Cats } from './schemas/Cats.schema';
import { OrganizationSchema, Organizations } from './schemas/Organizations.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CatMongoRepository } from './services/CatMongo.repository';
import { OrganizationMongoRepository } from './services/OrganizationMongo.repository';

const mongooseSchemas = [{
    name: Cats.name,
    schema: CatSchema
}, {
    name: Organizations.name,
    schema: OrganizationSchema
}];

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://admin:password123@mongo-atlas:27017/accounts?authSource=admin&readPreference=primary&ssl=false&directConnection=true`),
        MongooseModule.forFeature(mongooseSchemas)
    ],
    controllers: [],
    providers: [
        OrganizationMongoRepository,
        CatMongoRepository
    ],
    exports: [
        OrganizationMongoRepository,
        CatMongoRepository,
    ]
})
export class InfrastructureModule { }
