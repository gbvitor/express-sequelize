const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController.js");

const router = Router();
const categoriaController = new CategoriaController();

router.get("/categorias", (req, res) =>
    categoriaController.pegaTodos(req, res)
);

router.get("/categorias/:id", (req, res) =>
    categoriaController.pegaUm(req, res)
);

router.post("/categorias", (req, res) =>
    categoriaController.criaRegistro(req, res)
);

router.put("/categorias/:id", (req, res) =>
    categoriaController.atualizaRegistro(req, res)
);

router.delete("/categorias/:id", (req, res) =>
    categoriaController.deletaRegistro(req, res)
);

module.exports = router;
