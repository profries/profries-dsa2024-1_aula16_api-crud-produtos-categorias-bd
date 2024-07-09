const express = require('express')
const router = express.Router();

const categoriaController = require('../controller/categoria_controller');

//router: /categorias
router.get("/", categoriaController.listar);
router.post("/", categoriaController.inserir);
router.get("/:id", categoriaController.buscarPorId);
router.put("/:id", categoriaController.atualizar);
router.delete("/:id", categoriaController.deletar);

module.exports = router;
