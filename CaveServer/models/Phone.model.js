const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Phone model to whatever makes sense in this case
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
  ram: Number,
});

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
