const Product = require('../models/product');

module.exports = {
    index,
    show,
    new: newProduct
}

async function index (req, res) {
    const products = await Product.find({});
    res.render('products/index', { products });
  };

async function show (req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
}

function newProduct (req, res) {
    res.render('products/new');
}