class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await Pessoa.findAll({
                where: { isAtivo: true },
            });
            res.status(200).json(pessoasAtivas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar pessoas ativas" });
        }
    }
}

module.exports = PessoaController;
