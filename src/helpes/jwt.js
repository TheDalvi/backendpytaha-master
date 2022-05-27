const jwt = require("jsonwebtoken")

const generarJWT = async(payload) => {
    var token = jwt.sign(payload, '123456789', {
        expiresIn: "48h"
    });
    return token;

}



const decodificarToken = (token) => {
    let result = jwt.decode(token, '123456789')
    return result;
}

const validarToken = (token) => {
    try {
        jwt.verify(token, '123456789')
        return true
    } catch (error) {
        (error.message)
        return false;
    }


}
const validarAndGenerarToken = async(usuarioFromDb) => {
    try {
        jwt.verify(usuarioFromDb.usu_token, '123456789')
        return { token: usuarioFromDb.Token };
    } catch (error) {

        let payload = { "usu": usuarioFromDb.Id }
        let token = await generarJWT(payload)

        await updateToken(usuarioFromDb.Id, token);

        return { token: token }

    }
}


module.exports = {
    generarJWT,
    decodificarToken,
    validarToken,
    validarAndGenerarToken
};