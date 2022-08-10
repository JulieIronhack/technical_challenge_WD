const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PhonesSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    img: {
        type: String,
        minLength: 5
    }
}, { timestamps: true })

module.exports = mongoose.model("Books", PhonesSchema)