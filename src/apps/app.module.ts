import { FeatureFlagModule } from "./feature-flag/feature-flag.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [FeatureFlagModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppsModule { }
