import { Controller, HttpStatus } from "@nestjs/common";
import { FeatureFlagService } from "../application/feature-flag.service";
// importar inject post get put delete request
import { Post, Get, Put, Delete, Request, Param, Body } from "@nestjs/common";
import { FeatureFlagDto } from "./feature-flag.dto";
import { responseUtil } from "src/shared/utils/response.util";

@Controller('feature-flag')
export class FeatureFlagPresentation {
    constructor(private readonly featureFlagService: FeatureFlagService) {}

    @Get(':id')
    async getFeatureFlagById(@Param('id') id: number) {
        const flag = await this.featureFlagService.getFeatureFlagById(id);
        if (!flag) {
            return responseUtil({
                message: 'Feature flag no encontrado',
                data: null,
                estado: false,
                statusCode: HttpStatus.NOT_FOUND,
            });
        }
        return responseUtil({
            message: 'Feature flag encontrado',
            data: flag,
            estado: true,
            statusCode: HttpStatus.OK,
        });
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
}


