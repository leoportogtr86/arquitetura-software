const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController");

router.get("/", tarefaController.listarTarefas);
router.post("/adicionar", tarefaController.adicionarTarefa);

module.exports = router;
