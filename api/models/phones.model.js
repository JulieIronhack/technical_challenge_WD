const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  id: {
    type: Number,
    required: 'id is required',
  },
  name: {
    type: String,
    required: 'name is required'
  },
  manufacturer: {
    type: String,
    required: 'manufacturer is required'
  },
  description: {
    type: String,
    required: 'description is required'
  },
  color: {
    type: String,
    required: 'color is required'
  },
  price: {
    type: Number,
    required: 'price is required'
  },
  imageFileName: {
    type: String,
    required: 'imageFileName is required'
  },
  screen: {
    type: String,
    required: 'screen is required'
  },
  processor: {
    type: String,
    required: 'processor is required'
  },
  ram: {
    type: Number,
    required: 'ram is required'
  } 
})

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone; 