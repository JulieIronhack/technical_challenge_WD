const express = require('express');
const cors = require('cors');
const phones = require('../data/phones.json');

const app = express();
const port = 3001;

app.use(cors());

app.get('/phones', (req, res) => {
  res.json(phones);
});

app.get('/phones/:id', (req, res) => {
  const { id } = req.params;
  const phone = phones.find((phone) => phone.id === parseInt(id));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});