const mongoose = require("mongoose");

const { Schema , model } = mongoose;

const phoneSchema = new Schema( {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    imageFileName:{
        type: String
    },
    screen: {
        type:String
    },
    processor: {
        type:String
    },
    ram:{
        type: Number
    }
})

module.exports = model("Phone", phoneSchema)