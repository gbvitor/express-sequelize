const { Router } = require("express");
const CursoControler = require("../controllers/CursoController.js");

const cursoController = new CursoControler();
const router = Router();

router.get("/cursos", (req, res) => {
    cursoController.pegaTodos(req, res);
});

router.get("/cursos/:id", (req, res) => {
    cursoController.pegaUm(req, res);
});

router.post("/post", (req, res) => {
    cursoController.criaRegistro(req, res);
});

router.put("/cursos/:id", (req, res) => {
    cursoController.atualizaRegistro(req, res);
});

router.delete("/cursos/:id", (req, res) => {
    cursoController.deletaRegistro(req, res);
});

module.exports = router;
