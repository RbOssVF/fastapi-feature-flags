export class FeatureFlag {
    id!: number;
    key!: string;
    description?: string;
    isEnabled!: boolean;
    environment?: string;
    createdAt!: Date;
    updatedAt!: Date;
}