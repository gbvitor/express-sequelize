const Controller = require("./Controller.js");
const PessoaService = require("../services/PessoaService.js");

const pessoasServices = new PessoaService();

class PessoaController extends Controller {
    constructor() {
        super(pessoasServices);
    }
}
module.exports = PessoaController;
