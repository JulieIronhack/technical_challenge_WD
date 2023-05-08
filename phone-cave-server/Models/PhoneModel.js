const { Schema, model } = require("mongoose");
// Define car schema
const carSchema = new Schema(
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
    colour: {
      type: Number
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
    }
})

    module.exports = model("Phone", phoneSchema);