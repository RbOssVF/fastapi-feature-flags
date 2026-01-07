/*
  Warnings:

  - The primary key for the `feature_flags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `feature_flags` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "feature_flags" DROP CONSTRAINT "feature_flags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "feature_flags_pkey" PRIMARY KEY ("id");
