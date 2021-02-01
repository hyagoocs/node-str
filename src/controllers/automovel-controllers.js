'use-strict'

const repository = require('../repositories/automovel-repository')


exports.post = (req, res, next) => {
    try {
        var data = await repository.create(req.body);
        res.status(200).send({
            message: 'Automóvel criado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao criar automóvel'
        });
    }
};

exports.put = (req, res, next) => {
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

exports.delete = (req, res, next) => {
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