-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paises" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "continente" TEXT NOT NULL,
    "populacao" TEXT NOT NULL,
    "idh" REAL NOT NULL
);
INSERT INTO "new_Paises" ("continente", "id", "idh", "nome", "populacao") SELECT "continente", "id", "idh", "nome", "populacao" FROM "Paises";
DROP TABLE "Paises";
ALTER TABLE "new_Paises" RENAME TO "Paises";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
