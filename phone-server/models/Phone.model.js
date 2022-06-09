const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    name: {
      type: String
    },
    manufacturer: {
      type: String
    },
    description: {
      type: String
    },
    color: {
      type: String
    },
    price: {
      type: Number
    },
    imageFileName: {
      type: String
    },
    screen: {
      type: String
    },
    processor: {
      type: String
    },
    ram: {
      type: Number
    },

  },
  {

    timestamps: true,
  }
);

const Phone = model("Phone", userSchema);

module.exports = Phone;