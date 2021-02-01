'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('mongodb+srv://crudseidor:crudseidor@crudseidor.zzlhq.mongodb.net/crudseidor?retryWrites=true&w=majority');

// Carrega os Models
const Automovel = require('./models/automovel');

// Carrega as Rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/automovel-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;