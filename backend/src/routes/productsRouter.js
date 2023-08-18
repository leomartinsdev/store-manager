const express = require('express');
const { productsController } = require('../controllers');
const validateProduct = require('../middlewares/validateProduct');

// router middleware
const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

router.post('/', validateProduct, productsController.registerProduct);

module.exports = router;
