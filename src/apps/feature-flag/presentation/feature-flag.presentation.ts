import { Controller, HttpStatus, ParseIntPipe } from "@nestjs/common";
import { FeatureFlagService } from "../application/feature-flag.service";
// importar inject post get put delete request
import { Post, Get, Put, Delete, Request, Param, Body } from "@nestjs/common";
import { FeatureFlagDto } from "./feature-flag.dto";
import { responseUtil } from "src/shared/utils/response.util";

@Controller('feature-flag')
export class FeatureFlagPresentation {
    constructor(private readonly featureFlagService: FeatureFlagService) { }

    @Get()
    async getAllFeatureFlags() {
        const flags = await this.featureFlagService.getAllFeatureFlags();

        const dataFlags = flags ? flags.map(this.mapFeatureFlag) : [];

        return responseUtil({
            message: 'Feature flags encontrados',
            data: dataFlags,
            estado: true,
            statusCode: HttpStatus.OK,
        });
    }

    @Get(':id')
    async getFeatureFlagById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        const flag = await this.featureFlagService.getFeatureFlagById(id);

        if (!flag) {
            return responseUtil({
                message: 'Feature flag no encontrado',
                estado: false,
                statusCode: HttpStatus.NOT_FOUND,
            });
        }

        const dataFlag = this.mapFeatureFlag(flag);

        return responseUtil({
            message: 'Feature flag encontrado',
            data: dataFlag,
            estado: true,
            statusCode: HttpStatus.OK,
        });
    }

    private mapFeatureFlag(flag: any) {
        return {
            id: flag.id,
            key: flag.key,
            description: flag.description,
            status: flag.isEnabled ? 'Enabled' : 'Disabled',
            isEnabled: flag.isEnabled,
            environment: flag.environment,
        };
    }

    @Post()
    async createFeatureFlag(@Body() featureFlagDto: FeatureFlagDto) {
        try {
            const flag = await this.featureFlagService.createFeatureFlag(featureFlagDto);
            return responseUtil({
                statusCode: HttpStatus.CREATED,
                message: "Feature flag creado",
                data: flag,
                estado: true,
            });
        } catch (error) {
            return responseUtil({
                message: error.message || 'Error al crear feature flag',
                estado: false,
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            });
        }
    }

    @Put(':id')
    async updateFeatureFlag(@Param('id', ParseIntPipe) id: number, @Body() featureFlagDto: FeatureFlagDto) {
        try {
            const flag = await this.featureFlagService.updateFeatureFlag(id, featureFlagDto);
            return responseUtil({
                statusCode: HttpStatus.OK,
                message: "Feature flag actualizado",
                data: flag,
                estado: true,
            });
        } catch (error) {
            return responseUtil({
                message: error.message || 'Error al actualizar feature flag',
                estado: false,
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            });
        }
    }
}


