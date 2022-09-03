const Phone = require("../models/Phone.model");
const mongoose = require("mongoose");
require("../db");

const jsonData = require('./phones.json')
const dataSeed = async () => {
    try {
        await Phone.deleteMany();
        const createPhones = await Phone.create(jsonData);
        console.log(`phones created:${createPhones.length}`);
        await mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
}
dataSeed();