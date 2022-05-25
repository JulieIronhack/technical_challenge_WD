const { Schema, model } = require("mongoose")

const phoneSchema = new Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
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
            default: "https://fotografias.lasexta.com/clipping/cmsimages02/2016/09/20/10E8D640-139A-4D77-83F8-CE0A81CD3B2D/98.jpg?crop=1393,784,x0,y14&width=1900&height=1069&optimize=high&format=webply"
        },
        screen: {
            type: String,
        },
        processor: {
            type: String,
        },
        ram: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = model("Phone", phoneSchema)