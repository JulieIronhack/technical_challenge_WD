require("dotenv").config();
const mongoose = require("mongoose");

require("../config/db-config");
const phoneData = require("../../data/phones.json");
const Phone = require("../models/phone.model");

Phone.deleteMany({}).then(() => {
  console.log("Database deleted");
  Phone.create(phoneData)
    .then((phone) => {
      console.log(`${phone.length} phones created on DB.`);
    })
    .catch((error) => console.error(error));
});
