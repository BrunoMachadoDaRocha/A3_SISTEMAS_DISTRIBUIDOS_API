import {
  createPais,
  updatePais,
  deletePais,
  getAllPaises,
  getPaisesByContinente,
} from "../models/paises.model.js";

export const criarPais = async (req, res) => {
  const novoPais = await createPais(req.body);
  res.status(201).json(novoPais);
};

export const editarPais = async (req, res) => {
  const paisAtualizado = await updatePais(req.params.id, req.body);
  res.status(200).json(paisAtualizado);
};

export const excluirPais = async (req, res) => {
  await deletePais(req.params.id);
  res.status(200).json({ message: "País deletado com sucesso" });
};

export const listarPaises = async (req, res) => {
  const paises = await getAllPaises();
  res.status(200).json(paises);
};

export const buscarPorContinente = async (req, res) => {
  try {
    const paises = await getPaisesByContinente(req.params.nomeContinente);
    if (paises.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum país encontrado" });
    }
    res.status(200).json(paises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar países" });
  }
};
