const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;

        return ret;
      },
    },
  }
);

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
