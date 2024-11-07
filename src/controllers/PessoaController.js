const model = require("../models");

class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await model.Pessoa.findAll({
                where: { ativo: true },
            });
            return res.status(200).json(pessoasAtivas);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao buscar pessoas ativas" });
        }
    }
}

module.exports = PessoaController;
