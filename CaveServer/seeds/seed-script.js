// Buscar la data a agregar
const phonesArr = require("./phones.seed.json");

// Conectar a la Base de datos
require("../db");

const Phone = require("../models/Phone.model.js");

// Agregar la data a la Base de datos
Phone.insertMany(phonesArr)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
