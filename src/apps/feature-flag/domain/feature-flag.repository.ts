import { FeatureFlag } from "./feature-flag.entity";

export interface FeatureFlagRepository {
    findById(id: number): Promise<FeatureFlag | null>;
    findByKey(key: string): Promise<FeatureFlag | null>;
    findByKeyExcludingId(key: string, id: number): Promise<FeatureFlag | null>;
    create(featureFlag: FeatureFlag): Promise<FeatureFlag>;
    update(id: number, featureFlag: FeatureFlag): Promise<FeatureFlag>;
}
