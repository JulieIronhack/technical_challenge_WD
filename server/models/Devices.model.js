const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const deviceSchema = new Schema(
    {

        id: {
            type: String
        },
        name: {
            type: String
        },
        manufacturer: {
            type: String
        },
        description: {
            type: String
        },
        color: {
            type: String
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
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Device = model("Device", deviceSchema);

module.exports = Device;
