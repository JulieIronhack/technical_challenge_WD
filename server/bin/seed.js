const mongoose = require("mongoose");

const Phone = require("../models//Phone.model");

const data = require("../data/phones.json");

require("../db/index");

const insertData = async () => {
  try {
    let insertedPhones = await Phone.insertMany(data);
    console.log(insertedPhones);
  } catch (error) {
    mongoose.connection.close();
    console.log("ERROR", error);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
