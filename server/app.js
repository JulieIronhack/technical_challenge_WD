const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const allRoutes = require("./routes/phone.routes");
app.use("/phones", allRoutes);

module.exports = app;
