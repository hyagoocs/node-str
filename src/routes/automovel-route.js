'use strict';

const controller = require('../controllers/automovel-controllers')
const express = require('express');
const router = express.Router();

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

router.get('/:id', controller.getById);

router.get('/', controller.getAll);

module.exports = router;