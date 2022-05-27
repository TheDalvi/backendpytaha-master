const sequelize = require("../../dataService");
const { categoriaModel } = require("../models/categoria.model")
const create = async(categoria) => {
    return await sequelize.query(`INSERT INTO 
    "categoria" ("Descripcion") VALUES (:d)`, {
        replacements: {
            d: categoria.Descripcion
        }
    });
}

const getFilter = async(q, l = 100, p = 0) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "categoria" 
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
    let result = await categoriaModel.findByPk(id);
    return result;

}

const update = async(categoria) => {
    console.log(categoria, "dsjfkhnsdjklgndlgjmsdflgk");
    const count = await categoriaModel.update(
        categoria, {
            where: {
                Id: categoria.Id
            }
        });
    if (count > 0) {
        const categoriaResult = await categoriaModel.findByPk(categoria.Id)
        return categoriaResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await categoriaModel.destroy({
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
        "categoria";
        `, {
            replacements: {

            }
        });
    console.log(result)
    result = (result && result[0]) ? result[0] : [];
    return result;
}

module.exports = { update, remove, getFilter, getById, create, getall };