const service = require("../../services/persona.service")

const getAll = async(req, res) => {
    try {

        let result = await service.getAll();

        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }
}


const getFilter = async(req, res) => {
    try {
        let q = req.params.q;
        let result = await service.getFilter(q);

        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }
}

const getById = async(req, res) => {
    try {
        let id = req.params.Id;
        let result = await service.getById(id);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}

const logout = async(req, res) => {
    try {
        let usuario = req.body;
        console.log(usuario)
        let result = await service.logout(usuario);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}

const update = async(req, res) => {
    try {
        let usuario = req.body;
        console.log(usuario)
        let result = await service.update(usuario);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}
const remove = async(req, res) => {
    try {
        let id = req.params.Id;
        let result = await service.remove(id);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }
}
const add = async(req, res) => {
    try {
        let persona = req.body;
        let result = await service.create(persona);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}

const login = async(req, res) => {
    try {
        let persona = req.body;
        let result = await service.login(persona);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}


module.exports = {
    getFilter,
    getById,
    add,
    remove,
    update,
    getAll,
    login,
    logout
};