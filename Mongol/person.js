const mongoose = require('mongoose');
// .then(data => {
//     console.log("IT WORKED!")
//     console.log(data);
// })
// .catch(err => {
//     console.log("OH NO ERROR!")
//     console.log(err)
// })


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`; // this is not an instance method
})

//pre hooks middleware
personSchema.pre('save', async function() {
    this.first = "YO";
    this.last = "MAMA";
    console.log('About to save!');
})

//post hooks middleware
personSchema.post('save', async function() {
    console.log('Just saved!');
})

const Person = mongoose.model('Person', personSchema);