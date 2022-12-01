const phonesArr = require("./phones.seed.json");

require("../db");

const Phone = require("../models/Phone.model.js");

Phone.insertMany(phonesArr)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
