import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

export default router
  .get("/autor", AutorController.listarAutores)
  .get("/autor/:id", AutorController.listarAutorPorId)
  .post("/autor", AutorController.cadastrarAutor)
  .put("/autor/:id", AutorController.atualizarAutor)
  .delete("/autor/:id", AutorController.excluirAutor)