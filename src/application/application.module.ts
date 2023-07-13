import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    CatModule,
    OrganizationModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class ApplicationModule { }
