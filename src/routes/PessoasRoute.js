const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const matriculaController = new MatriculaController();

const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => {
    pessoaController.pegaTodos(req, res);
});

router.get("/pessoas/:id", (req, res) => {
    pessoaController.pegaUm(req, res);
});

router.post("/pessoas", (req, res) => {
    pessoaController.criaRegistro(req, res);
});

router.put("/pessoas/:id", (req, res) => {
    pessoaController.atualizaRegistro(req, res);
});

router.delete("/pessoas/:id", (req, res) => {
    pessoaController.deletaRegistro(req, res);
});

// Cria uma matricula a partir de um estudante
router.post("/pessoas/:estudanteId/matriculas", (req, res) => {
    matriculaController.criaRegistro(req, res);
});

router.get("/pessoas/:estudanteId/matriculas", (req, res) => {
    pessoaController.aulasMatriculadas(req, res);
});

module.exports = router;
