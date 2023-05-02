-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "age" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "responsiblePhone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_cpf_key" ON "Aluno"("cpf");
