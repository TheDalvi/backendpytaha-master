var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./src/routes/categoria.routes')(app);
require('./src/routes/alquiler.routes')(app);
require('./src/routes/rol.routes')(app);
require('./src/routes/persona.routes')(app);
app.listen(3000);