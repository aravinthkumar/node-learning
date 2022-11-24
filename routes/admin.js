const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin/add-product', (req, res, next) => {
    console.log('Creating products!!');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/admin/add-product', (req, res, next) => {
    console.log('Get products!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
