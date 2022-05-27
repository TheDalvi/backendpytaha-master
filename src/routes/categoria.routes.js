const controller = require('../../src/controllers/categoria/categoria.constroller')
module.exports = (app) => {
    app.get('/categoria/filter/:q', controller.getFilter);
    app.get('/categoria/byId/:Id', controller.getById);
    app.put('/categoria/update', controller.update);
    app.post('/categoria/add', controller.add);
    app.delete('/categoria/remove/:Id', controller.remove);
    app.get('/categoria/getall', controller.getall);
}