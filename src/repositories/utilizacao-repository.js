'use-strict'

const mongoose = require('mongoose');
const Utilizacao = mongoose.model('Utilizacao');


exports.create = async(data) => {
    data['dataInicio'] = Date.now();

    var Utilizacao = new Utilizacao(data);
    await Utilizacao.save();
}

exports.finish = async(id) => {
    const dataFim = Date.now();
    await Utilizacao
        .findByIdAndUpdate(id, {
            $set: {
                dataFim: dataFim
            }
        });
}

exports.getAll = async() => {
    const res = await Utilizacao.find();
    return res;
}