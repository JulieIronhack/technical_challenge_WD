const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Password is required."],
    },
    manufacturer: {
      type: String,
    },
    description: {
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
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Phone", phoneSchema);
