const { Schema, model } = require("mongoose");

const TelephonesSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageFileName: {
    type: String,
  },
  screen: {
    type: String,
  },
  processor: {
    type: String,
  },
  ram: {
    type: Number,
  },
});

const Phones = model("telephonesData", TelephonesSchema);

module.exports = Phones;
