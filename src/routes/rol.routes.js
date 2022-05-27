const controller = require('../controllers/rol/rol.controller')
module.exports = (app) => {
    app.get('/rol/:q/:p/:l', controller.getFilter);
    app.get('/rol/byid/:Id', controller.getById);
    app.put('/rol/update', controller.update);
    app.post('/rol/add', controller.add);
    app.delete('/rol/remove/:Id', controller.remove);
    app.get('/rol/getall', controller.getall);
}