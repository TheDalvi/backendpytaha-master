const { DataTypes } = require("sequelize");
const sequelize = require('../../dataService')
var categoriaModel = sequelize.define("categoria", {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: "categoria",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
module.exports = { categoriaModel }