'use-strict'

const mongoose = require('mongoose');
const Motorista = mongoose.model('Motorista');


exports.create = async(data) => {
    var Motorista = new Motorista(data);
    await Motorista.save();
}

exports.update = async(data) => {
    await Motorista
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome
            }
        });
}

exports.delete = async(id) => {
    await Motorista.findOneAndRemove(id);
}

exports.getById = async(id) => {
    const res = await Motorista.findById(id);
    return res;
}

exports.getAll = async() => {
    const res = await Motorista.find();
    return res;
}