'use-strict'

const mongoose = require('mongoose');
const Automovel = mongoose.model('Automovel');


exports.create = async(data) => {
    console.log(data)
    var automovel = new Automovel(data);
    await automovel.save();
}

exports.update = async(id, data) => {
    await Automovel
        .findByIdAndUpdate(id, {
            $set: {
                placa: data.placa,
                cor: data.cor,
                marca: data.marca
            }
        });
}

exports.delete = async(id) => {
    await Automovel.findOneAndRemove(id);
}

exports.getById = async(id) => {
    const res = await Automovel.findById(id);
    return res;
}

exports.getAll = async() => {
    const res = await Automovel.find();
    return res;
}