const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
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

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
