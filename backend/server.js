const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
// const axios = require("axios");
const router = express.Router();
const data = require("./data/phones.json");
const Phone = require("./models/Phone.model");

app.use(cors());

app.get("/phones", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = router;
