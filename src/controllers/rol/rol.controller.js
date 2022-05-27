const service = require("../../services/rol.service");
// const { getall } = require("../rol/rol.constroller");

const getFilter = async(req, res) => {
    try {
        let q = req.params.q;
        let p = req.params.p;
        let l = req.params.l;
        let result = await service.getFilter(q, l, p);

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

const getall = async(req, res) =>{
    try {

        let result = await service.getall();
        console.log("teste", await result);
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
        let rol = req.body;
        let result = await service.update(rol);
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
        let rol = req.body;

        let result = await service.create(rol);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
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