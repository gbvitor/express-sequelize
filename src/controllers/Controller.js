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
            const umRegistro = await this.entityService.pegaPorId(id);
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
}
module.exports = Controller;
