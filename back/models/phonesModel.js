//Creating the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonesSchema = new Schema({
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

const Phone = mongoose.model("Phone", phonesSchema);

module.exports = Phone;
