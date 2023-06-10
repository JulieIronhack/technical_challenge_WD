const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
