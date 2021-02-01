'use-strict'

const repository = require('../repositories/automovel-repository')


exports.post = async (req, res, next) => {
    try {
        const { body } = req;
        await repository.create({
            placa: body.placa,
            cor: body.cor,            
            marca: body.marca
        });
        res.status(200).send({
            message: 'Automóvel criado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao criar automóvel'
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Automóvel atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar automóvel'
        });
    };
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Automóvel excluído com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao excluir automóvel'
        });
    };
}

exports.getById = async (req, res, next) => {
    try {
        const response =  await repository.getById(req.params.id);
        res.status(200).send(response);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao listar o automóvel'
        });
    };
}

exports.getAll = async (req, res, next) => {
    try {
        const response =  await repository.getAll();
        res.status(200).send(response);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao listar todos os automóveis'
        });
    };
}