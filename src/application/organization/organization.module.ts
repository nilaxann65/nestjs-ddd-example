import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { OrganizationService } from './services/Organization.service';
import { OrganizationController } from './controllers/Organization.controller';

@Module({
    imports: [DomainModule],
    controllers: [OrganizationController],
    providers: [OrganizationService],
})
export class OrganizationModule { }
