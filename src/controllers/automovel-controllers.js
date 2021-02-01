'use-strict'

const mongoose = require('mongoose');
const Automovel = mongoose.model('Automovel');


exports.post = (req, res, next) => {
    var automovel = new Automovel(req.body);
    automovel
        .save()
        .then( x => {
            res.status(201).send({ 
                message: 'Automóvel cadastrado com sucesso!' });
        }).catch( e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar automóvel!', data: e});
        });
    
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}