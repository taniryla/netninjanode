const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log('Connection open!')
})
.catch((err) => {
    console.log('oh no mongo error!')
    console.log(err)
})

const p = new Product({
    name: 'Grapefruit',
    price: 1.99,
    category: 'fruit'
})

p.save().then(p => {
    console.log(p);
})
.catch(err => {
    console.log(err);
})

