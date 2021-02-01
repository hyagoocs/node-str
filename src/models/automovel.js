'use-strict'

const { mongoose } = require('../../config');
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
    marca: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Automovel', schema);