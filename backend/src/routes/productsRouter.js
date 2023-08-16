const express = require('express');
const { productsController } = require('../controllers');

// router middleware
const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

module.exports = router;
