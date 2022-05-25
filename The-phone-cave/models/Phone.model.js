const { Schema, model } = require("mongoose");

const phoneSchema = new Schema({
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,
});

module.exports = model("Phone", phoneSchema);
