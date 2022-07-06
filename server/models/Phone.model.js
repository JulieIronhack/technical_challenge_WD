const { model, Schema } = require("mongoose");

module.exports = model("Phone", new Schema({
    name: { type: String, required: true, trim: true },
    manufacturer: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    screen: { type: String, required: true, trim: true },
    processor: { type: String, required: true, trim: true },
    ram: { type: Number, required: true }
}));