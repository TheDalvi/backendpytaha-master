const controller = require('../controllers/alquiler/alquiler.controller')
module.exports = (app) => {
    app.get('/alquiler-filter/:q', controller.getFilter);
    app.get('/alquiler/byid/:Id', controller.getById);
    app.put('/alquiler/update', controller.update);
    app.post('/alquiler/add', controller.add);
    app.delete('/alquiler/remove/:Id', controller.remove);

    app.get('/alquiler/getall', controller.getAll);
}