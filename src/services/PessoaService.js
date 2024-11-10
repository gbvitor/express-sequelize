const Service = require("./Service.js");

class PessoaService extends Service {
    constructor() {
        super("Pessoa");
    }

    // Pega as aulas matriculadas de um estudante, ultilizando o recurso de associação do sequelize chamado mixin
    async pegaAulasMatriculadas(estudanteId) {
        const estudante = await super.pegaPorId(estudanteId);
        const aulasMatriculadas = await estudante.getAulasMatriculadas();
        return aulasMatriculadas;
    }
}

module.exports = PessoaService;
