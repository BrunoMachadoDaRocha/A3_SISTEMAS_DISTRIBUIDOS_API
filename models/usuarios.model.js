import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const criarUsuario = (data) => prisma.usuarios.create({ data })

export const encontrarUsuarioPorEmail = (email) =>
  prisma.usuarios.findUnique({ where: { email } })