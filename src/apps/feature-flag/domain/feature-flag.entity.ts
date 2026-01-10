export class FeatureFlag {
    id!: number;
    key!: string;
    description?: string | null;
    isEnabled!: boolean;
    environment?: string | null;
    createdAt!: Date;
    updatedAt!: Date;
}