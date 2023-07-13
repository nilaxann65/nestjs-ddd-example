import { Module } from '@nestjs/common';
import { CatService } from './services/Cat.service';
import { DomainModule } from 'src/domain/domain.module';
import { CatController } from './controllers/cat.controller';

@Module({
    imports: [DomainModule],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule { }
