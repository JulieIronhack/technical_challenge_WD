const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Load environment variables from .env file
require("dotenv").config();

// Set up middleware
app.use(cors({
  origin: ["http://localhost:3000", process.env.ORIGIN]
}));
app.use(bodyParser.json());

// Set up routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// Serve static files from the assets folder
app.use(express.static(path.join(__dirname, "assets")));

module.exports = app;

