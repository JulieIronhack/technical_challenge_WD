
const express = require("express");

const app = express();

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);


module.exports = app;