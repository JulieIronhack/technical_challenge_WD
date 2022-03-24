const express = require('express');
const app = express();
const phones = require("./phones.json")

app.get('/telephones', (req, res) => {
    res.json(phones);
  });

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
