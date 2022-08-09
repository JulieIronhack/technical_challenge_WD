const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
    name: String,
    // id: {
    //     type: Number,
    //     unique: true
    // },
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
});

const Phone = model('Phone', phoneSchema);

module.exports = Phone;