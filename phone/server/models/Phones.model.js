const { Schema, model } = require("mongoose");
const phonesSchema = new Schema(

    {
        name: String,
        manufacter: String,
        description: String,
        color: String,
        price: Number,
        imageFileName: String,
        screen: String,
        processor: String,
        ram: Number,
    }



)


const Phones = model("Phones", phonesSchema);

module.exports = Phones;