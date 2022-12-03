require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

// handling routes
const phoneRoutes = require("./routes/phone.routes");
app.use("/", phoneRoutes);

module.exports = app;
