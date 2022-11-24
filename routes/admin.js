const express = require('express');

const router = express.Router();

router.get('/add-products', (req, res, next) => {
    console.log('Creating products!!');
    res.send('<form action="/products" method=POST><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/products', (req, res, next) => {
    console.log('Get products!');
    console.log(req.body);
    res.redirect('/add-products');
});

module.exports = router;
