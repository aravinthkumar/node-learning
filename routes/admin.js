const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];


router.get('/admin/add-product', (req, res, next) => {
    console.log('Creating products!!');
    res.render('add-product', { pageTitle: 'Add Products', path: '/admin/add-product' });
});

router.post('/admin/add-product', (req, res, next) => {
    console.log('Get products!');
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
