const express = require("express");

const pessoas = require("./PessoasRoute.js");
const cursos = require("./CursoRoute.js");
const categorias = require("./CategoriaRoute.js");

module.exports = (app) => {
    app.use(express.json(), pessoas, cursos, categorias);
};
