const express = require("express");
const path = require("path");

const app = express();
const cors = require('cors');
app.use(cors());

//registro de rutas
const phones = require("./routes/phones.routes");
app.use("/phones", phones);

app.use(express.static(path.join(__dirname, "assets")));

app.listen(5005, ()=>{console.log("app on")})

module.exports = app;