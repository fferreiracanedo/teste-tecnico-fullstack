-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "account_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emails" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "ownerID" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
