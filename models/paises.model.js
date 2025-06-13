import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPais = (data) => prisma.paises.create({ data });

export const updatePais = (id, data) =>
  prisma.paises.update({ where: { id }, data });

export const deletePais = (id) => prisma.paises.delete({ where: { id } });

export const getAllPaises = () => prisma.paises.findMany();

export const getPaisesByContinente = (nomeContinente) =>
  prisma.paises.findMany({
    where: {
      continente: {
        equals: nomeContinente
      },
    },
  });
