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
}
module.exports = Service;
