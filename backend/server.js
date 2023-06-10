const express = require("express");
const app = express();
const port = 5000;
// const axios = require("axios");
const router = express.Router();
const data = require("./data/phones.json");
const Phone = require("./models/Phone.model");

app.get("/phones", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// router.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("http://localhost:5173/phones");
//     const phones = response.data;
//     res.json(phones);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching the data" });
//   }
// });

module.exports = router;
