require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const seed = require("./routes/seed.routes")
app.use("/api", seed);

const phone = require("./routes/phone.routes")
app.use("/api", phone);

require("./error-handling")(app);

module.exports = app;
