const express = require("express");
const pessoas = require("./PessoasRoute.js");
const cursos = require("./CursoRoute.js");

module.exports = (app) => {
    app.use(express.json(), pessoas, cursos);
};
