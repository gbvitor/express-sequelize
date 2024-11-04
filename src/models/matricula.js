"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Matricula extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Matricula.init(
        {
            estudante_id: {
                type: DataTypes.INTEGER,
                references: { model: "Pessoa", key: "id" },
            },
            curso_id: {
                type: DataTypes.INTEGER,
                references: { model: "Curso", key: "id" },
            },
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Matricula",
            tableName: "matriculas",
        }
    );
    return Matricula;
};
