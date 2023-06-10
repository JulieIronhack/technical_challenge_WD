const express = require("express");
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
