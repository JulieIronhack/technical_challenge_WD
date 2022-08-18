const Phone = require ("../models/Phone.model");
const mongoose = require("mongoose");
const phones = require("../data/phones.json");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/phone-cave";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return Phone.deleteMany({});
  })
  .then(() => {
    return Phone.insertMany(phones);
  })
  .then((response) => {
    console.log("inserted seed data:", response)
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
