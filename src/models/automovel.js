'use-strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    placa: {
        type: String,
        required: true,
        trim: true
    },
    cor: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Automovel', schema);