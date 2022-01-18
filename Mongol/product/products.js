// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopApp')
// .then(() => {
//     console.log('Connection open!')
// })
// .catch((err) => {
//     console.log('oh no error!')
//     console.log(err)
// })

// const productSchema = new mongoose.Schema({
//     name: {
//        type: String,
//        required: true,
//        maxlength: 20
//     },
//     price: {
//        type: Number,
//        required: true,
//        min: 0
//     },
//     onSale: {
//         type: Boolean,
//         default: false
//     },
//     categories: [String],
//     qty: {
//         online: {
//             type: Number,
//             default: 0
//         },
//         inStore: {
//             type: Number,
//             default: 0
//         }
//     },
//     size: {
//         type: String,
//         enum: ['S', 'M', 'L']
//     }
// });

// // productSchema.methods.greet = function() {
// //     console.log("Hello! Hi! How are you?");
// //     console.log(`- from ${this.name}`) // this refers to the individual instance
// // }

// productSchema.methods.toggleOnSale = function() {
//     this.onSale = !this.onSale;
//     return this.save();
// }

// productSchema.methods.addCategory = function(newCat) {
//     this.categories.push(newCat);
//     return this.save();
// }

// productSchema.statics.fireSale = function() {
//    return this.updateMany( {}, { onSale: true, price: 0 } ) // this in a static refers to the class object Product
// }

// const Product = mongoose.model('Product', productSchema);

// const findProduct = async () => {
//     const foundProduct = Product.findOne( { name: 'Mountain Bike' })
//     console.log(foundProduct);
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct);
//     await foundProduct.addCategory('Outdoors');
//     console.log(foundProduct);
// }

// // findProduct();

// Product.fireSale().then(res => console.log(res));

// // const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling', 'safety'], size: 'XS' })
// // bike.save()
// //     .then(data => {
// //         console.log("IT WORKED!")
// //         console.log(data);
// //     })
// //     .catch(err => {
// //         console.log("OH NO ERROR!")
// //         console.log(err)
// //     })


// Product.findOneAndUpdate( { name: 'Tire Pump' }, 
// { price: 100 }, { new: true, runValidators: true })
 

