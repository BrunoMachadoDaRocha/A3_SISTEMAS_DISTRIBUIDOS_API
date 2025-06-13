import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { criarUsuario, encontrarUsuarioPorEmail } from '../models/usuarios.model.js'

const SECRET = process.env.JWT_SECRET

export const registrar = async (req, res) => {
  const { email, senha } = req.body

  const usuarioExistente = await encontrarUsuarioPorEmail(email)
  if (usuarioExistente) {
    return res.status(400).json({ erro: 'Usuário já existe' })
  }

  const senhaHash = await bcrypt.hash(senha, 10)
  const usuario = await criarUsuario({ email, senha: senhaHash })

  res.status(201).json({ id: usuario.id, email: usuario.email })
}

export const login = async (req, res) => {
  const { email, senha } = req.body

  const usuario = await encontrarUsuarioPorEmail(email)
  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' })

  const senhaValida = await bcrypt.compare(senha, usuario.senha)
  if (!senhaValida) return res.status(401).json({ erro: 'Senha inválida' })

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, { expiresIn: '1h' })
  res.json({ token })
}