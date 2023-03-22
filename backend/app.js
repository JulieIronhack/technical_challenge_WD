require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const phonesRoutes = require("./routes/phones.routes");
app.use("/phones", phonesRoutes);

require("./error-handling")(app);

module.exports = app;
