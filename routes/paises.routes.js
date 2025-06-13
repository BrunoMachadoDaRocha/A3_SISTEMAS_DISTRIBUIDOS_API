import { Router } from 'express'
import {
  criarPais,
  editarPais,
  excluirPais,
  listarPaises,
  buscarPorContinente
} from '../controllers/paises.controller.js'

const router = Router()

router.post('/', criarPais)
router.put('/:id', editarPais)
router.delete('/:id', excluirPais)
router.get('/', listarPaises)
router.get('/continente/:nomeContinente', buscarPorContinente)

export default router