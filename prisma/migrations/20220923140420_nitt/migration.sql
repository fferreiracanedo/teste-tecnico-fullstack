-- DropForeignKey
ALTER TABLE "contact" DROP CONSTRAINT "contact_owner_id_fkey";

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
