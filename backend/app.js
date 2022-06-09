require("dotenv").config();
const cors = require("cors");
const express = require("express");

const phoneRouter = require("./routes/phoneRoutes");

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP_URL }));

app.use("/phones", phoneRouter);

module.exports = app;
