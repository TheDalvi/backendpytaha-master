const res = require('express/lib/response');
const { getEventListeners } = require('pg/lib/query');
const jwt = require('../helpes/jwt')
const usuarioService = require("../services/persona.service")

const validarJWTUsuario = async(req, res, next) => {
    const token = req.headers["x-token"]
    try {

        console.log(token)

        let response = await verifivarTokenUsuarioDb(token)
        console.log(token,response)

        if (jwt.validarToken(token)) {
            next();

        } else
            res.status(401).send({ ok: false, result: "usuario no autorizado" });
    } catch (error) {
        res.status(401).send({ ok: false, result: "usuario no autorizado" });
    }

}

const verifivarTokenUsuarioDb = async(token) => {
    console.log(token,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const result = await usuarioService.getByToken(token);


    if (result)
        return true;
    return false;
}



module.exports = {
    validarJWT: validarJWTUsuario,
}