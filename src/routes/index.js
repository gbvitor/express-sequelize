const express = require("express");
const pessoas = require("./PessoasRoute");

module.exports = (app) => {
    app.use(express.json(), pessoas);
};
