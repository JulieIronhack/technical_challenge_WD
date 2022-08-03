
const express = require("express");
const cors = require("cors")


const app = express();
require("./config")(app);

app.use(cors())

const allRoutes = require("./routes");
app.use("/", allRoutes);

const phonesRoutes = require("./routes/phones.routes");
app.use("/phones", phonesRoutes);

module.exports = app;
