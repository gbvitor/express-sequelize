const Controller = require("./Controller.js");
const PessoaService = require("../services/PessoaService.js");

const pessoaServices = new PessoaService();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
}
module.exports = PessoaController;
