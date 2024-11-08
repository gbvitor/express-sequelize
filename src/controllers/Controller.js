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
}
module.exports = Controller;
