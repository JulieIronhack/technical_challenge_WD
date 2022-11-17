const { Schema, model, default: mongoose } = require('mongoose');
 
const phoneSchema = new Schema(
  {
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,
  },
  
  {
    timestamps: true
  }
);
 
module.exports = model('Phone', phoneSchema);