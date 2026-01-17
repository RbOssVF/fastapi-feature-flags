import { Injectable, Inject } from "@nestjs/common";
import type { FeatureFlagRepository } from "../domain/feature-flag.repository";
import { FeatureFlag } from "../domain/feature-flag.entity";
import { FEATURE_FLAG_REPOSITORY } from "../domain/feature-flag.tokens";
import { FeatureFlagDto, FeatureFlagDtoEnabled } from "../presentation/feature-flag.dto";
import { FeatureFlagDomainService } from "../domain/feature-flag.service";

@Injectable()
export class FeatureFlagService {
    private readonly domainService: FeatureFlagDomainService;
    constructor(
        @Inject(FEATURE_FLAG_REPOSITORY)
        private readonly repository: FeatureFlagRepository,
    ) {
        this.domainService = new FeatureFlagDomainService(this.repository);
    }

    async getAllFeatureFlags(): Promise<FeatureFlag[] | null> {
        const featureFlags = await this.repository.findAll();
        return featureFlags;
    }

    async getFeatureFlagById(id: number): Promise<FeatureFlag | null> {
        const featureFlag = await this.repository.findById(id);
        return featureFlag;
    }

    async createFeatureFlag(dto: FeatureFlagDto): Promise<FeatureFlag | null> {
        const featureFlag = await this.domainService.create(dto as FeatureFlag);
        return featureFlag;
    }

    async updateFeatureFlag(id: number, dto: FeatureFlagDto): Promise<FeatureFlag | null> {
        const featureFlag = await this.domainService.update(id, dto as FeatureFlag);
        return featureFlag;
    }

    async updateFeatureFlagEnabled(id: number, dto: FeatureFlagDtoEnabled): Promise<FeatureFlag | null> {
        const flag = await this.repository.findById(id);
        if (!flag) {
            return null;
        }
        flag.isEnabled = dto.isEnabled;
        console.log(flag);
        const featureFlag = await this.domainService.update(id, flag);
        return featureFlag;
    }
}