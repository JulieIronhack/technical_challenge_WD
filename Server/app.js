
require("dotenv/config");

require("./db");


const express = require("express");

const app = express();


require("./config")(app);


const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

app.use("/api", require('./routes/phones.routes'))


require("./error-handling")(app);

module.exports = app;
