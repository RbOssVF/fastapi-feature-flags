import { FeatureFlagRepository } from "../domain/feature-flag.repository";
import { FeatureFlag } from "../domain/feature-flag.entity";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class FeatureFlagRepositoryImpl implements FeatureFlagRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findById(id: number): Promise<FeatureFlag | null> {
    return await this.prisma.featureFlag.findUnique({
      where: { id },
    });
  }

  async findByKey(key: string): Promise<FeatureFlag | null> {
    return await this.prisma.featureFlag.findUnique({
      where: { key },
    });
  }

  async findAll(): Promise<FeatureFlag[] | null> {
    return await this.prisma.featureFlag.findMany();
  }

  async findByKeyExcludingId(key: string, id: number): Promise<FeatureFlag | null> {
    return await this.prisma.featureFlag.findFirst({
      where: { key, id: { not: id } },
    });
  }

  async create(featureFlag: FeatureFlag): Promise<FeatureFlag> {
    return await this.prisma.featureFlag.create({
      data: featureFlag,
    });
  }

  async update(id: number, featureFlag: FeatureFlag): Promise<FeatureFlag> {
    return await this.prisma.featureFlag.update({
      where: { id },
      data: featureFlag,
    });
  }
}
