const service = require("../../services/categoria.service");

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
const getall = async(req, res) => {
    try {

        let result = await service.getall();
        console.log("teste", await result)
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
const update = async(req, res) => {
    try {
        let usuario = req.body;
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
        let usuario = req.body;
        console.log(req.body)
        let result = await service.create(usuario);
        console.log(result)
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
    getall
};