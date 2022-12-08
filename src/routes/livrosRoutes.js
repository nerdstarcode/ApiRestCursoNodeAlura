import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

export default router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)