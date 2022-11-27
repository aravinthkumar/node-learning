const express = require('express');
const router = express.Router();
const productsController = require('../controller/products');

router.get('/admin/add-product', productsController.getAddProduct);
router.post('/admin/add-product', productsController.postAddProducts);

module.exports = router;

