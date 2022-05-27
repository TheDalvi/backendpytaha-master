const sequelize = require("../../dataService");
const { alquilerModel } = require("../models/alquiler.model")
const create = (alquiler) => {
    return alquilerModel.create(alquiler);
}

const getFilter = async(q, l = 100, p = 0) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "alquiler" 
        WHERE 
       CONCAT(UPPER("Descripcion"),' ',UPPER("Observacion"),' ',UPPER("Referencia")) 
        LIKE :q
        ORDER BY "Id"
        LIMIT :l OFFSET :p;
        `, {
            replacements: {
                q: (q ? '%' + q.toUpperCase() + '%' : '%'),
                l: l,
                p: p
            }
        });
    result = (result && result[0]) ? result[0] : [];
    return result;
}

const getById = async(id) => {
    let result = await alquilerModel.findByPk(id);
    return result;

}

const update = async(alquiler) => {
    const count = await alquilerModel.update(
        alquiler, {
            where: {
                Id: alquiler.Id
            }
        });
    if (count > 0) {
        const alquilerResult = await alquilerModel.findByPk(alquiler.Id)
        return alquilerResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await alquilerModel.destroy({
        where: {
            Id: Id
        },
    });
    return (count > 0)
}

const get = async() => {
    console.log("Hoasadad")
    let result = await sequelize.query(
        `SELECT * FROM 
        "alquiler";
        `, {
            replacements: {

            }
        });
    result = (result && result[0]) ? result[0] : [];
    return result;
}
module.exports = { update, remove, getFilter, getById, create, get };