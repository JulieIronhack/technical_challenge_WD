const express = require("express");
const app = express();
const phones = require("./data/phones.json");

app.get("/", (req, res) => {
  res.send("Welcome to our phone store");
});

app.get("/phones", (req, res) => {
  res.json(phones);
});

app.get("/phones/:id", (req, res) => {
  res.json(phones[parseInt(req.params.id)]);
});

app.listen(5000, () => console.log("App listening on port 5000!"));
