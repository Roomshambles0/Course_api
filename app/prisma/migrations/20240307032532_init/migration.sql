/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Leads` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leads" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Leads_email_key" ON "Leads"("email");
