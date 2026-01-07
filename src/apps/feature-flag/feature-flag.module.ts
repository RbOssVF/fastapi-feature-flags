import { Module } from "@nestjs/common";
import { FeatureFlagPresentation } from "./presentation/feature-flag.presentation";
import { FeatureFlagService } from "./application/feature-flag.service";
import { FeatureFlagRepositoryImpl } from "./infrastructure/feature-flag.repository";
import { FEATURE_FLAG_REPOSITORY } from "./domain/feature-flag.tokens";
import { FeatureFlagDomainService } from "./domain/feature-flag.service";

@Module({
    imports: [],
    controllers: [FeatureFlagPresentation],
    providers: [FeatureFlagService, FeatureFlagDomainService, {
        provide: FEATURE_FLAG_REPOSITORY,
        useClass: FeatureFlagRepositoryImpl
    }],
    exports: [FeatureFlagService]
})
export class FeatureFlagModule { }

