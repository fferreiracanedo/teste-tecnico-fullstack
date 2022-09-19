/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_ownerID_fkey";

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "tel" VARCHAR NOT NULL,
    "account_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "emails" VARCHAR NOT NULL,
    "tel" VARCHAR NOT NULL,
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
