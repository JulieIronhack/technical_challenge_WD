const mongoose = require("mongoose");

const phoneSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },

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

module.exports = Phone;
