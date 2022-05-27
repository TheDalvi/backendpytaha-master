const sequelize = require("../../dataService");
const { personaModel: personaModel } = require("../models/persona.model")
const create = (persona) => {

    console.log(persona, "Este")

    return personaModel.create(persona);
}

const getAll = async() => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "usuario" 
        LIMIT 100 ;
        `, {
            replacements: {}
        });
    result = (result && result[0]) ? result[0] : [];
    return result;
}

const getFilter = async(q, l = 100, p = 0) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "usuario" 
        WHERE 
        CONCAT  (UPPER("Nombre"))
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
    let result = await personaModel.findByPk(id);
    return result;

}

const update = async(persona) => {

    console.log(persona)

    const count = await personaModel.update(
        persona, {
            where: {
                Id: persona.Id
            }
        });
    if (count > 0) {
        const personaResult = await personaModel.findByPk(persona.Id)
        return personaResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await personaModel.destroy({
        where: {
            Id: Id
        },
    });
    return (count > 0)
}

module.exports = { update, remove, getFilter, getById, create, getAll };