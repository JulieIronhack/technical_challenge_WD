const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: String,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
