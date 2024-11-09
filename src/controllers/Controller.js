class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros =
                await this.entityService.pegaTodosRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao buscar todos os registros" });
        }
    }

    async pegaUm(req, res) {
        try {
            const { id } = req.params;
            const umRegistro = await this.entityService.pegaPorId(Number(id));
            if (!umRegistro) {
                return res
                    .status(404)
                    .json({ message: "Registro não encontrado" });
            }
            return res.status(200).json(umRegistro);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao buscar um registro" });
        }
    }
    async criaRegistro(req, res) {
        try {
            const novoRegistro = await this.entityService.cria(req.body);
            return res.status(201).json(novoRegistro);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao cadastrar um novo registro" });
        }
    }
    async atualizaRegistro(req, res) {
        try {
            const { id } = req.params;
            const registroAtualizado = await this.entityService.atualiza(
                Number(id),
                req.body
            );
            if (!registroAtualizado) {
                return res
                    .status(404)
                    .json({ message: "Registro não encontrado" });
            } else {
                return res
                    .status(200)
                    .json({ message: "Registro atualizado com sucesso" });
            }
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao atualizar um registro" });
        }
    }
    async deletaRegistro(req, res) {
        try {
            const { id } = req.params;
            await this.entityService.exclui(Number(id));
            return res
                .status(200)
                .json({ message: "Registro deletado com sucesso" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao deletar um registro" });
        }
    }
}
module.exports = Controller;
