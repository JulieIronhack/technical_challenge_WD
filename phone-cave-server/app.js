require("dotenv").config();

require("../DB");


const express = require("express");

const app = express();

require("./config")(app);

app.use("/api", require("./Routes/Phone.routes"));

require("./error-handling")(app);

module.exports = app;