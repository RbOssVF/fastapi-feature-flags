import type { FeatureFlagRepository } from "./feature-flag.repository";
import { FeatureFlag } from "./feature-flag.entity";
export class FeatureFlagDomainService {
  constructor(
    private readonly repository: FeatureFlagRepository
  ) {}

  async create(featureFlag: FeatureFlag): Promise<FeatureFlag> {
    const exists = await this.repository.findByKey(featureFlag.key);

    if (exists) {
      throw new Error(`Ya existe un feature flag con la key ${featureFlag.key}`);
    }

    return this.repository.create(featureFlag);
  }

  async update(id: number, featureFlag: FeatureFlag): Promise<FeatureFlag> {
    const exists = await this.repository.findByKeyExcludingId(featureFlag.key, id);
    if (exists) {
      throw new Error(`Ya existe un feature flag con la key ${featureFlag.key}`);
    }
    return this.repository.update(id, featureFlag);
  }
}