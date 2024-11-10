const Controller = require("./Controller.js");
const PessoaService = require("../services/PessoaService.js");

const pessoaServices = new PessoaService();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
    async aulasMatriculadas(req, res) {
        try {
            const { estudanteId } = req.params;
            const listaAulas = await pessoaServices.pegaAulasMatriculadas(
                Number(estudanteId)
            );
            return res.status(200).json(listaAulas);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
module.exports = PessoaController;
