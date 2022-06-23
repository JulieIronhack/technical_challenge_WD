const { model, Schema } = require("mongoose");
const phoneSchema = new Schema({
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
})

const PhoneModel = model("Phone", phoneSchema);

module.exports = PhoneModel;