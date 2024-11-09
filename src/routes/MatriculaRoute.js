const { Router } = require("express");
const MatriculaController = require("../controllers/MatriculaController.js");

const matriculaController = new MatriculaController();
const router = Router();

router.get("/matriculas", (req, res) => {
    matriculaController.pegaTodos(req, res);
});

router.get("/matriculas/:id", (req, res) => {
    matriculaController.pegaUm(req, res);
});

router.post("/matriculas", (req, res) => {
    matriculaController.criaRegistro(req, res);
});

router.put("/matriculas", (req, res) => {
    matriculaController.atualizaRegistro(req, res);
});

module.exports = router;
