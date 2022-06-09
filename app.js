const express = require("express");
const app = express();

app.use("/api", require("./routes/phones.routes"));

module.exports = app;