'use-strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    dataInicio: {
        type: Date,
        required: true,
        trim: true
    },
    dataFim: {
        type: Date,
        required: true
    },
    motivoUtilizacao: {
        type: String,
        require: true
    },
    motorista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Motorista'
    },
    automovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Automovel'
    },
});

module.exports = mongoose.model('Utilizacao', schema);