const sequelize = require("../../dataService");
const { rolModel } = require("../models/rol.model")
const create = async(rol) => {
    return await sequelize.query(`INSERT INTO 
    "rol" ("Descripcion") VALUES (:d)`, {
        replacements: {
            d: rol.Descripcion
        }
    });
}


const getFilter = async(q, l = 100, p = 0) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "rol" 
        WHERE 
        UPPER("Descripcion")
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
    let result = await rolModel.findByPk(id);
    return result;

}

const update = async(rol) => {
    const count = await rolModel.update(
        rol, {
            where: {
                Id: rol.Id
            }
        });
    if (count > 0) {
        const rolResult = await rolModel.findByPk(rol.Id)
        return rolResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await rolModel.destroy({
        where: {
            Id: Id
        },
    });
    return (count > 0)
}
const getall = async() => {
    console.log("Hoasadad")
    let result = await sequelize.query(
        `SELECT * FROM 
        "rol";
        `, {
            replacements: {

            }
        });
    console.log(result)
    result = (result && result[0]) ? result[0] : [];
    return result;
}
module.exports = { update, remove, getFilter, getById, create, getall };