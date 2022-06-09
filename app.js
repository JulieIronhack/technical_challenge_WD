require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);
app.use("/api", require("./routes/phone.routes"));

module.exports = app;