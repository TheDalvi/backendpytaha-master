const { DataTypes } = require("sequelize");
const sequelize = require('../../dataService')
var rolModel = sequelize.define("rol", {
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
    tableName: "rol",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
module.exports = { rolModel }