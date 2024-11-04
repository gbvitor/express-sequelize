"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Curso extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Curso.init(
        {
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            data_inicio: DataTypes.DATE,
            categoria_id: {
                type: DataTypes.INTEGER,
                references: { model: "Categoria", key: "id" },
            },
            docente_id: {
                type: DataTypes.INTEGER,
                references: { model: "Pessoa", key: "id" },
            },
        },
        {
            sequelize,
            modelName: "Curso",
            tableName: "cursos",
        }
    );
    return Curso;
};
