-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ingredients" TEXT,
    "steps" TEXT,
    "image" TEXT,
    "rating" INTEGER,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
