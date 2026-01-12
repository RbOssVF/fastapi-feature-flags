import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FeatureFlagDto {
    @IsString()
    @IsNotEmpty()
    key: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    isEnabled?: boolean;

    @IsString()
    @IsOptional()
    environment?: string;
}