const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const phones = require("../data/phones.json");

const phoneSchema = new Schema({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number
});

const Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;