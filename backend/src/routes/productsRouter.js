const express = require('express');
const { productsController } = require('../controllers');
const validateProduct = require('../middlewares/validateProduct');

// router middleware
const router = express.Router();

router.get('/', productsController.findAll);

router.post('/', validateProduct, productsController.registerProduct);

router.get('/:id', productsController.findById);

router.put('/:id', validateProduct, productsController.updateProduct);

module.exports = router;
