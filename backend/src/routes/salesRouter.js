const express = require('express');
const { salesController } = require('../controllers');

// router middleware
const router = express.Router();

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

router.post('/', salesController.registerSale);

module.exports = router;