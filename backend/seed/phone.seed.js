const data = require("../data/phones.json");
const Phone = require("../models/Phone.model");
const mongoose = require("mongoose")
require("../db");

Phone.insertMany(data)
  .then((res) => {
    console.log("added");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {mongoose.connection.close()});
