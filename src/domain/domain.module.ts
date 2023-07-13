import { Module } from '@nestjs/common';
import { ICatRepository } from './interfaces/ICatService.repository';
import { CatMongoRepository } from 'src/infrastructure/services/CatMongo.repository';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { IOrganizationRepository } from './interfaces/IOrganizationService.repository';
import { OrganizationMongoRepository } from 'src/infrastructure/services/OrganizationMongo.repository';

@Module({
    imports: [InfrastructureModule],
    controllers: [],
    providers: [{
        provide: ICatRepository,
        useClass: CatMongoRepository
    }, {
        provide: IOrganizationRepository,
        useClass: OrganizationMongoRepository
    }],
    exports: [{
        provide: ICatRepository,
        useClass: CatMongoRepository
    }, {
        provide: IOrganizationRepository,
        useClass: OrganizationMongoRepository
    }]
})
export class DomainModule { }
