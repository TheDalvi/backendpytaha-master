const controller = require('../controllers/persona/persona.controller')
module.exports = (app) => {
    app.get('/usuario/filter/:q', controller.getFilter);
    app.get('/usuario/getAll', controller.getAll);
    app.get('/usuario/byid/:Id', controller.getById);
    app.put('/usuario/update', controller.update);
    app.post('/usuario/add', controller.add);
    app.delete('/usuario/remove/:Id', controller.remove);
}