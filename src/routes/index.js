const express = require("express");

const pessoas = require("./PessoasRoute.js");
const cursos = require("./CursoRoute.js");
const matriculas = require("./MatriculaRoute.js");

module.exports = (app) => {
    app.use(express.json(), pessoas, cursos, matriculas);
};
