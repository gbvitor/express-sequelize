const dataSource = require("../models");

class Service {
    constructor(modelName) {
        this.model = modelName;
    }

    async pegaTodosRegistros() {
        return await dataSource[this.model].findAll();
    }

    async pegaPorId(id) {
        return await dataSource[this.model].findByPk(id);
    }

    async cria(item) {
        return await dataSource[this.model].create(item);
    }

    async atualiza(id, item) {
        return await dataSource[this.model].update(item, { where: { id } });
    }
    async exclui(id) {
        return await dataSource[this.model].destroy({ where: { id } });
    }
}
module.exports = Service;
