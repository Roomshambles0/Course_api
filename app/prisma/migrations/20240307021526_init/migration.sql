/*
  Warnings:

  - Added the required column `LinkedIn` to the `Leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneno` to the `Leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leads" ADD COLUMN     "LinkedIn" TEXT NOT NULL,
ADD COLUMN     "phoneno" INTEGER NOT NULL;
