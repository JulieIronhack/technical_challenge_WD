const express = require('express');
const app = express();

require("./config")(app);

const phoneRoutes = require('./routes/phones')
app.use('/', phoneRoutes)


module.exports = app;