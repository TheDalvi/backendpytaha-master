const sequelize = require("../../dataService");
const { personaModel: personaModel } = require("../models/persona.model")
const jwt = require("../helpes/jwt");
const create = (persona) => {

    console.log(persona, "Este")

    return personaModel.create(persona);
}


const getByToken = async(token) => {
    let usuarioResult = await sequelize.query(
        `SELECT * FROM usuario
        WHERE  "Token"=:token
                              `, {
            replacements: {
                token: token
            },
        }
    );

    console.log(usuarioResult,"aaaaaaaa3333")

    return (usuarioResult && usuarioResult[0][0]) ? usuarioResult[0][0] : null;


}


const logout = async(data) => {
    console.log(data,"dataaaa")
    let usuarioResult = await sequelize.query(
        `update usuario set "Token"=:token
        WHERE  "Id"=:id
                              `, {
            replacements: {
                token: data.Token,
                id: data.Id,
            },
        }
    );



    return (usuarioResult && usuarioResult[0][0]) ? usuarioResult[0][0] : null;


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


const login = async(data) => {



    //Validar contraseña y login 
    let usuarioFromDb = await getByLoginContrasena(data.Email, data.Password);

    if (usuarioFromDb && usuarioFromDb.Id) {
        console.log("entra")
        let payload = { "usu": usuarioFromDb.Id }
        let token = await jwt.generarJWT(payload)

        a = await updateToken(usuarioFromDb.Id, token);
        return { usuario: a, token }
    }
    throw ("Credenciales invalidas");
}

const getByLoginContrasena = async(email, pass) => {

    let usuarioResult = await sequelize.query(
        `SELECT * FROM usuario
        WHERE 
        "Password"=:pass
        and
        Upper("Email")=:email`, {
            replacements: {
                pass: pass,
                email: email.toUpperCase()
            },
        }
    );


    return usuarioResult[0][0];
};



const updateToken = async(id, token) => {
    try {
        let result = await sequelize.query(
            `UPDATE usuario SET "Token"=:token
            WHERE "Id"=:id returning "Id", "Token","Nombre", "Rol","Email"`, {
                replacements: {
                    id: id,
                    token: token
                },
            }
        );
        return result[0][0];
    } catch (error) {
        return error
    }

}



module.exports = { update, remove,logout, getFilter, getById, create, getAll,login,getByToken,getByLoginContrasena,updateToken };