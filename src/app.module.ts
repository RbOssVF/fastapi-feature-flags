import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppsModule } from './apps/app.module';

@Module({
    imports: [SharedModule, AppsModule],
})
export class AppModule { }
