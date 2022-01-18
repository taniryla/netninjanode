var express = require('express');
const Product = require('../models/product');
var router = express.Router();
const productsCtrl = require('../controllers/products');

// all files start with /products
// index GET /products
router.get('/', productsCtrl.index);

// show GET /products/:id
router.get('/:id', productsCtrl.show);

// new GET /products/new
router.get('/new', productsCtrl.new);

// create POSt /products

module.exports = router;
