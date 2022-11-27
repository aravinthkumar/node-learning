
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('Creating products!!');
    res.render('add-product', { pageTitle: 'Add Products', path: '/admin/add-product' });
};

exports.postAddProducts = (req, res, next) => {
    console.log('Get products!');
    console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', { pageTitle: 'Shop', prods: products, path: '/' });
    })
};